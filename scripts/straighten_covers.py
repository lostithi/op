"""Crop photographed book covers so the cover sits as a straight rectangle."""

from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image

SRC = Path(__file__).resolve().parents[1] / "public" / "images"
OUT = SRC / "straight"


def background_mask(rgb: np.ndarray, tol: float = 34) -> np.ndarray:
    height, width, _ = rgb.shape
    scale = 4
    small = rgb[::scale, ::scale]
    sh, sw, _ = small.shape
    center = small[sh // 3 : 2 * sh // 3, sw // 3 : 2 * sw // 3]
    median = np.median(center.reshape(-1, 3), axis=0)
    diff = np.abs(small.astype(np.float32) - median).mean(axis=2)
    candidate = diff > tol
    band = max(4, int(0.14 * min(sh, sw)))
    edge = np.zeros((sh, sw), dtype=bool)
    edge[:band, :] = True
    edge[-band:, :] = True
    edge[:, :band] = True
    edge[:, -band:] = True
    candidate &= edge
    background = np.zeros((sh, sw), dtype=bool)
    queue: deque[tuple[int, int]] = deque()

    def seed(y: int, x: int) -> None:
        if candidate[y, x] and not background[y, x]:
            background[y, x] = True
            queue.append((y, x))

    for x in range(sw):
        seed(0, x)
        seed(sh - 1, x)
    for y in range(sh):
        seed(y, 0)
        seed(y, sw - 1)

    while queue:
        y, x = queue.popleft()
        for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            ny, nx = y + dy, x + dx
            if 0 <= ny < sh and 0 <= nx < sw and candidate[ny, nx] and not background[ny, nx]:
                background[ny, nx] = True
                queue.append((ny, nx))

    full = np.repeat(np.repeat(background, scale, axis=0), scale, axis=1)
    return full[:height, :width]


def bbox(mask: np.ndarray) -> tuple[int, int, int, int] | None:
    ys, xs = np.where(mask)
    if len(xs) == 0:
        return None
    return int(xs.min()), int(ys.min()), int(xs.max()), int(ys.max())


def find_coeffs(rectangle: list[tuple[float, float]], quad: list[tuple[float, float]]) -> np.ndarray:
    matrix = []
    for rect, src in zip(rectangle, quad):
        matrix.append([rect[0], rect[1], 1, 0, 0, 0, -src[0] * rect[0], -src[0] * rect[1]])
        matrix.append([0, 0, 0, rect[0], rect[1], 1, -src[1] * rect[0], -src[1] * rect[1]])
    system = np.array(matrix, dtype=np.float64)
    target = np.array(quad, dtype=np.float64).reshape(8)
    solved, _, _, _ = np.linalg.lstsq(system, target, rcond=None)
    return solved


def cover_corners(cover: np.ndarray) -> list[tuple[float, float]]:
    height, width = cover.shape
    ys, xs = np.where(cover)
    points = np.stack([xs, ys], axis=1).astype(np.float64)
    # The cover corner nearest each image corner.
    scores = [
        points[:, 0] + points[:, 1],
        (width - points[:, 0]) + points[:, 1],
        (width - points[:, 0]) + (height - points[:, 1]),
        points[:, 0] + (height - points[:, 1]),
    ]
    return [tuple(points[int(np.argmin(score))]) for score in scores]


def straighten(path: Path) -> None:
    image = Image.open(path).convert("RGB")
    rgb = np.asarray(image)
    background = background_mask(rgb, tol=28)
    cover = ~background
    # Drop isolated cover specks on the border by requiring a solid interior.
    corners = cover_corners(cover)
    width = int(np.hypot(corners[0][0] - corners[1][0], corners[0][1] - corners[1][1]))
    height = int(np.hypot(corners[0][0] - corners[3][0], corners[0][1] - corners[3][1]))
    width = max(width, 400)
    height = max(height, int(width * 1.45))
    rectangle = [(0, 0), (width, 0), (width, height), (0, height)]
    coeffs = find_coeffs(rectangle, corners)
    flat = image.transform((width, height), Image.PERSPECTIVE, coeffs, Image.BICUBIC)
    flat.save(OUT / path.name, quality=86, optimize=True)
    bg = float(background.mean())
    print(f"{path.name:28} bg={bg:.2f} corners={[(int(x), int(y)) for x, y in corners]} size={flat.size}")


def main() -> None:
    OUT.mkdir(exist_ok=True)
    for path in sorted(SRC.glob("cover-*.jpg")):
        straighten(path)


if __name__ == "__main__":
    main()
