import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/suresh';

const site = process.env.NEXT_PUBLIC_SITE_URL ?? SITE;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${site}/sitemap.xml`,
  };
}
