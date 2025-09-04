import { SITE_URL } from '@/lib/constants';
import { MetadataRoute } from 'next';

const fullUrl = (path: string) => `${SITE_URL}${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '/',
    '/about',
    '/services',
    '/branches',
    '/contact',
    '/consultation',
    '/privacy-policy',
    '/terms-of-service',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: fullUrl(route),
    lastModified: new Date().toISOString(),
  }));

  return sitemapEntries;
}
