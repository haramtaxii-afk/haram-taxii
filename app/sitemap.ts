import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import { routesData } from '@/lib/routesData'
import { servicesData } from '@/lib/servicesData'
import { blogData } from '@/lib/blogData'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.haramtaxii.com'
    const siteLastUpdated = '2026-03-05'

    // Get all location directories dynamically
    const locationsDir = path.join(process.cwd(), 'app/locations')
    let locationPages: string[] = []

    try {
        if (fs.existsSync(locationsDir)) {
            locationPages = fs.readdirSync(locationsDir)
                .filter(file => {
                    const fullPath = path.join(locationsDir, file)
                    return fs.statSync(fullPath).isDirectory() && file !== '[slug]'
                })
                .map(city => `/locations/${city}`)
        }
    } catch (e) {
        console.error('Error reading locations directory for sitemap:', e)
    }

    // Get all fleet directories dynamically
    const fleetDir = path.join(process.cwd(), 'app/fleet')
    let fleetPages: string[] = []

    try {
        if (fs.existsSync(fleetDir)) {
            fleetPages = fs.readdirSync(fleetDir)
                .filter(file => {
                    const fullPath = path.join(fleetDir, file)
                    return fs.statSync(fullPath).isDirectory() && file !== '[slug]'
                })
                .map(vehicle => `/fleet/${vehicle}`)
        }
    } catch (e) {
        console.error('Error reading fleet directory for sitemap:', e)
    }

    // Homepage
    const homepage = [{
        url: baseUrl,
        lastModified: new Date(siteLastUpdated),
        changeFrequency: 'daily' as const,
        priority: 1,
    }]

    // Core pages (change often, high value)
    const corePages = [
        '/booking',
        '/services',
        '/routes',
        '/locations',
        '/fleet',
        '/blog',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(siteLastUpdated),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    // Informational pages (change rarely)
    const infoPages = [
        '/about',
        '/contact',
        '/faq',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(siteLastUpdated),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // Legal pages (almost never change)
    const legalPages = [
        '/privacy-policy',
        '/terms-conditions',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(siteLastUpdated),
        changeFrequency: 'yearly' as const,
        priority: 0.3,
    }))

    // Location pages — key SEO landing pages, high priority
    const locationSitemap = locationPages.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(siteLastUpdated),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    // Fleet pages
    const fleetSitemap = fleetPages.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(siteLastUpdated),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    // Dynamic routes (from lib/routesData)
    const routesSitemap = routesData.map((route) => ({
        url: `${baseUrl}/routes/${route.slug}`,
        lastModified: new Date(siteLastUpdated),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    // Dynamic services (from lib/servicesData)
    const servicesSitemap = servicesData.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(siteLastUpdated),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    // Dynamic blog posts (from lib/blogData)
    const blogSitemap = blogData.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [
        ...homepage,
        ...corePages,
        ...infoPages,
        ...legalPages,
        ...locationSitemap,
        ...fleetSitemap,
        ...routesSitemap,
        ...servicesSitemap,
        ...blogSitemap,
    ]
}
