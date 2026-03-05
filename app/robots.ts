import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/admin/', '/booking-confirmed/'],
            },
        ],
        sitemap: 'https://haramtaxiservice.com/sitemap.xml',
    }
}
