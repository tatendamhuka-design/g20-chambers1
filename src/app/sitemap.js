export default async function sitemap() {
  const baseUrl = 'https://g20chambers.co.za'

  const areas = [
    'criminal-law',
    'family-law',
    'human-rights',
    'civil-litigation',
    'immigration-law',
    'employment-law',
    'public-administrative-law',
    'property-land-law',
  ]

  const areaPages = areas.map((area) => ({
    url: `${baseUrl}/areas/${area}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const staticPages = [
    // ... existing static pages
    { url: `${baseUrl}/areas`, priority: 0.8, changeFrequency: 'monthly' },
  ]

  return [...staticPages, ...areaPages]
}