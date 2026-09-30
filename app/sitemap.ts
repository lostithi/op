import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/suresh';

const site = process.env.NEXT_PUBLIC_SITE_URL ?? SITE;

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/works', '/awards', '/about', '/contact'].map((path) => ({
    url: `${site}${path}`,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}
