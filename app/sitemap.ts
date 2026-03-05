import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import { routesData } from '@/lib/routesData'
import { servicesData } from '@/lib/servicesData'
import { blogData } from '@/lib/blogData'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'http://www.haramtaxii.com'

    // Get all location directories dynamically
    const locationsDir = path.join(process.cwd(), 'app/locations')
    let locationPages: string[] = []

    try {
        if (fs.existsSync(locationsDir)) {
            locationPages = fs.readdirSync(locationsDir)
                .filter(file => {
                    const fullPath = path.join(locationsDir, file)
                    return fs.statSync(fullPath).isDirectory() && file !== '[slug]' // Exclude dynamic placeholders if present
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

    // Static pages
    const routes = [
        '',
        '/about',
        '/booking',
        '/contact',
        '/faq',
        '/fleet',
        '/locations',
        '/privacy-policy',
        '/terms-conditions',
        '/services', // The main services page
        '/routes',   // The main routes page
        '/blog',     // The main blog page
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: (route === '' ? 'daily' : 'weekly') as 'daily' | 'weekly',
        priority: route === '' ? 1 : 0.8,
    }))

    // Add fleet pages to sitemap
    const fleetSitemap = fleetPages.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // Add location pages to sitemap
    const locationSitemap = locationPages.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7, // Locations are important landing pages
    }))

    // Add dynamic routes (from lib/routesData)
    const routesSitemap = routesData.map((route) => ({
        url: `${baseUrl}/routes/${route.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    // Add dynamic services (from lib/servicesData)
    const servicesSitemap = servicesData.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    // Add dynamic blog posts (from lib/blogData)
    const blogSitemap = blogData.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date), // Use actual post date if available
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    return [...routes, ...fleetSitemap, ...locationSitemap, ...routesSitemap, ...servicesSitemap, ...blogSitemap]
}
