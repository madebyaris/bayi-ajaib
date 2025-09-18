import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://vibe-talent.com' // Replace with your actual domain

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',           // Disallow API routes
          '/admin/',         // Disallow admin areas (if any)
          '/_next/',         // Disallow Next.js internal files
          '/private/',       // Disallow private areas (if any)
          '/temp/',          // Disallow temporary files
          '*.json',          // Disallow JSON files
          '/search?*',       // Disallow search result pages with parameters
          '/jobs?*',         // Allow job listings but disallow filtered URLs
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '/temp/',
        ],
        crawlDelay: 1, // 1 second delay for Googlebot
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '/temp/',
        ],
        crawlDelay: 2, // 2 second delay for Bingbot
      },
      {
        userAgent: 'LinkedInBot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '/temp/',
        ],
      },
      // Block bad bots and scrapers
      {
        userAgent: [
          'AhrefsBot',
          'SemrushBot',
          'MJ12bot',
          'DotBot',
          'BLEXBot',
        ],
        disallow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
