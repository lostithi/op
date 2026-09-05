import type { MetadataRoute } from 'next';

const site = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://127.0.0.1:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/works', '/awards', '/about', '/contact'].map((path) => ({
    url: `${site}${path}`,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}
