import { Metadata } from 'next';
import Link from 'next/link';
import { routesData } from '@/lib/routesData';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Clock, Tag } from 'lucide-react';

export const metadata: Metadata = {
    title: 'All Taxi Routes | Haram Taxi Service',
    description: 'Explore all our available taxi routes across Saudi Arabia, including Makkah, Madinah, Jeddah, and major city transfers.',
    alternates: {
        canonical: 'https://www.haramtaxii.com/routes',
    },
};

export default function RoutesIndexPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="bg-brand-teal text-white py-12 md:py-20 px-4 text-center">
                <h1 className="text-fluid-h1 font-bold mb-4 font-display">Our Taxi Routes</h1>
                <p className="text-xl opacity-90 max-w-2xl mx-auto font-light">
                    Explore our comprehensive network of over {routesData.length} active routes connecting major cities, airports, and holy sites across Saudi Arabia.
                </p>
            </div>

            {/* Routes Grid */}
            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {routesData.map((route) => (
                        <Card key={route.slug} className="hover:shadow-xl transition-all duration-300 border-brand-teal-pale hover:border-brand-teal group flex flex-col h-full">
                            <CardHeader>
                                <CardTitle className="text-xl font-bold font-display text-gray-900 group-hover:text-brand-teal transition-colors">
                                    {route.title.split('|')[0].trim()}
                                </CardTitle>
                                <CardDescription className="line-clamp-2 mt-2 text-gray-600">
                                    {route.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <ul className="space-y-3 text-sm text-gray-600 mb-6">
                                    <li className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-brand-amber" />
                                        <span className="font-semibold text-gray-800">Distance:</span> {route.distance}
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-brand-amber" />
                                        <span className="font-semibold text-gray-800">Duration:</span> {route.duration}
                                    </li>
                                    {route.pricing && route.pricing.length > 0 && (
                                        <li className="flex items-center gap-2">
                                            <Tag className="w-4 h-4 text-brand-amber" />
                                            <span className="font-semibold text-gray-800">Starting from:</span> {route.pricing[0].price}
                                        </li>
                                    )}
                                </ul>
                            </CardContent>
                            <CardFooter className="mt-auto">
                                <Link href={`/routes/${route.slug}`} className="w-full">
                                    <Button className="w-full bg-brand-teal hover:bg-brand-teal-dark group shadow-md hover:shadow-lg transition-all">
                                        View Details <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
