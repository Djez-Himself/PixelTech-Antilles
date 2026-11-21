import { MetadataRoute } from 'next'
import { SITE_PAUSED } from '@/lib/site-mode'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pixeltech-antilles.com'
  const currentDate = new Date().toISOString().split('T')[0]

  if (SITE_PAUSED) {
    return [{
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 1.0,
    }]
  }

  return [
    { url: baseUrl, lastModified: currentDate, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/tarifs`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/a-propos`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
  ]
}
