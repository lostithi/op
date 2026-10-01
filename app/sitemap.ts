import type { MetadataRoute } from 'next';
import { BOOKS, SITE, bookPath } from '@/lib/suresh';

const site = process.env.NEXT_PUBLIC_SITE_URL ?? SITE;

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/', '/works/', '/awards/', '/about/', '/contact/', ...BOOKS.map((book) => bookPath(book.slug))];
  return paths.map((path) => ({
    url: path === '/' ? `${site}/` : `${site}${path}`,
    changeFrequency: 'monthly' as const,
    priority: path === '/' ? 1 : path.startsWith('/works/') && path !== '/works/' ? 0.8 : 0.7,
  }));
}
