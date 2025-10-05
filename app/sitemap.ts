import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://adibahasanchowdhury.vercel.app'
  const now = new Date().toISOString()

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/#about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/#skills`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/#experience`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/#education`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/#projects`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/#articles`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${base}/#contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
  ]
}
