'use client';

import type { CSSProperties } from 'react';
import Image from 'next/image';
import { ABOUT_PORTRAIT, PORTRAIT, type Picture } from '@/lib/suresh';

const RESERVED = new Set([PORTRAIT.src, ABOUT_PORTRAIT.src]);

type Props = {
  portraits: readonly Picture[];
};

function slideStyle(portrait: Picture): CSSProperties | undefined {
  if (!portrait.objectPosition && !portrait.objectFit) return undefined;
  return {
    ...(portrait.objectPosition ? { '--slide-focus': portrait.objectPosition } : {}),
    ...(portrait.objectFit ? { '--slide-fit': portrait.objectFit } : {}),
  };
}

export function PortraitSlideshow({ portraits }: Props) {
  const seen = new Set<string>();
  const unique = portraits.filter((portrait) => {
    if (RESERVED.has(portrait.src) || seen.has(portrait.src)) return false;
    seen.add(portrait.src);
    return true;
  });

  const loop = [...unique, ...unique];

  return (
    <section className="portrait-slideshow" aria-label="Portraits of O.P. Suresh">
      <div className="portrait-slideshow-track">
        {loop.map((portrait, index) => {
          const isClone = index >= unique.length;
          return (
            <figure
              className="portrait-slide"
              key={`${portrait.src}-${index}`}
              aria-hidden={isClone ? true : undefined}
              style={slideStyle(portrait)}
            >
              <Image
                src={portrait.src}
                alt={isClone ? '' : portrait.alt}
                width={portrait.width}
                height={portrait.height}
                sizes="11rem"
              />
            </figure>
          );
        })}
      </div>
    </section>
  );
}
