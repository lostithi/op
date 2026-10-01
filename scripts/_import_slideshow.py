from pathlib import Path
from PIL import Image, ImageOps

assets = Path(
    r"C:\Users\mhdih\.cursor\projects\c-Users-mhdih-OneDrive-Desktop-spine-op-website-op\assets"
)
out = Path("public/images")

pairs = [
    ("op2-92bd5610", "slideshow-wlf-mic.jpg"),
    ("17.45.48__2_-c0975074", "slideshow-three-indoor.jpg"),
    ("op3-96ac6dfb", "slideshow-two-talking.jpg"),
    ("17.41.00__2_-e651cc8f", "slideshow-stage-ribbon.jpg"),
    ("17.40.50-67024722", "slideshow-table-talk.jpg"),
    ("17.45.48__1_-f613acff", "slideshow-iffk-group.jpg"),
    ("17.44.14-e1a6adc3", "slideshow-with-elder-kurta.jpg"),
    ("OVS7069.JPG-57a36293", "slideshow-chin-portrait.jpg"),
    ("OVS4610.JPG-31e2b401", "slideshow-bookstore.jpg"),
    ("OVS7172.JPG-979f9ac2", "slideshow-reading-mic.jpg"),
    ("OVS4717.JPG-2251a089", "slideshow-bookstore-portrait.jpg"),
]

exclude = "17.34.55-96876f93"  # photographed print with glare

files = list(assets.iterdir())
for key, name in pairs:
    match = next(p for p in files if key in p.name)
    im = ImageOps.exif_transpose(Image.open(match)).convert("RGB")
    im.thumbnail((1200, 1600))
    dest = out / name
    im.save(dest, quality=88, optimize=True)
    print(name, im.size)
