import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { routesData } from '@/lib/routesData';
import BookingForm from '@/components/BookingForm';
import { CheckCircle2, MapPin, Clock } from 'lucide-react';
import { Suspense } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home } from 'lucide-react';

export const dynamic = 'force-static';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const route = routesData.find((r) => r.slug === slug);

    if (!route) {
        return {
            title: 'Route Not Found',
        };
    }

    return {
        title: route.title,
        description: route.description,
        alternates: {
            canonical: `https://haramtaxiservice.com/routes/${slug}`,
        },
        openGraph: {
            title: route.title,
            description: route.description,
            type: 'website',
            url: `https://haramtaxiservice.com/routes/${slug}`,
        },
    };
}

export async function generateStaticParams() {
    return routesData.map((route) => ({
        slug: route.slug,
    }));
}

export default async function RoutePage({ params }: Props) {
    const { slug } = await params;
    const route = routesData.find((r) => r.slug === slug);

    if (!route) {
        notFound();
    }

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": route.title,
        "description": route.description,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Haram Taxi Service",
            "telephone": "+923080628195",
            "image": "https://haramtaxiservice.com/logo.png"
        },
        "areaServed": "Saudi Arabia",
        "url": `https://haramtaxiservice.com/routes/${route.slug}`,
        "offers": route.pricing.map(p => ({
            "@type": "Offer",
            "priceCurrency": "SAR",
            "price": p.price.replace(/[^0-9]/g, '') || "0",
            "itemOffered": {
                "@type": "Service",
                "name": p.vehicle
            }
        }))
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

            {/* Breadcrumb */}
            <div className="bg-teal-700 text-teal-100 py-3 border-b border-teal-600">
                <div className="container mx-auto px-4 text-sm flex items-center gap-2">
                    <Link href="/" className="hover:text-white flex items-center gap-1"><Home className="w-3 h-3" /> Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    <Link href="/locations" className="hover:text-white">Routes</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-white font-semibold truncate">{route.h1}</span>
                </div>
            </div>

            {/* Hero Header */}
            <div className="bg-teal-600 text-white py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">{route.h1}</h1>
                    <p className="text-xl opacity-90">{route.description}</p>
                    <div className="flex gap-6 mt-6 text-sm font-semibold">
                        <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                            <MapPin className="w-4 h-4" /> {route.distance}
                        </div>
                        <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                            <Clock className="w-4 h-4" /> {route.duration}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white rounded-2xl p-8 shadow-sm">
                            <h2 className="text-2xl font-bold mb-4">About This Route</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">{route.content}</p>
                        </div>

                        {/* Pricing Table */}
                        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                            <div className="bg-gray-900 text-white p-6">
                                <h2 className="text-2xl font-bold">2026 Taxi Rates</h2>
                                <p className="opacity-80">Fixed prices for {route.h1}</p>
                            </div>
                            <div className="p-6">
                                <div className="grid gap-4">
                                    {route.pricing.map((item, idx) => (
                                        <div key={idx} className="flex flex-col sm:flex-row justify-between items-center p-4 border border-gray-100 rounded-lg hover:border-teal-500 hover:bg-teal-50/10 transition-all">
                                            <div className="mb-2 sm:mb-0">
                                                <h3 className="font-bold text-lg text-gray-900">{item.vehicle}</h3>
                                                <div className="text-sm text-gray-500 flex gap-3">
                                                    <span>{item.capacity}</span>
                                                    <span>â€¢</span>
                                                    <span>{item.luggage}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <span className="text-2xl font-bold text-teal-600">{item.price}</span>
                                                <Link href="/booking">
                                                    <Button size="sm">Book Now</Button>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* FAQs */}
                        {route.faqs && route.faqs.length > 0 && (
                            <div className="bg-white rounded-2xl p-8 shadow-sm">
                                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-6">
                                    {route.faqs.map((faq, idx) => (
                                        <div key={idx}>
                                            <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                                            <p className="text-gray-600">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar Booking Form */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                            <h3 className="text-xl font-bold mb-4">Book Your Ride</h3>
                            <Suspense fallback={<div className="h-[600px] flex items-center justify-center text-gray-400">Loading booking form...</div>}>
                                <BookingForm />
                            </Suspense>
                            <div className="mt-6 pt-6 border-t border-gray-100">
                                <h4 className="font-semibold mb-3">Why Choose Us?</h4>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-teal-500" /> Licensed Drivers</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-teal-500" /> Fixed Prices</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-teal-500" /> 24/7 Support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Silo Linking Section */}
            <div className="bg-white border-t border-gray-200 mt-12 py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">Explore Other Destinations</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <Link href="/locations/makkah" className="px-5 py-2 bg-gray-50 hover:bg-teal-50 text-gray-700 hover:text-teal-700 rounded-full border border-gray-200 transition-colors">
                            Taxi in Makkah
                        </Link>
                        <Link href="/locations/madinah" className="px-5 py-2 bg-gray-50 hover:bg-teal-50 text-gray-700 hover:text-teal-700 rounded-full border border-gray-200 transition-colors">
                            Taxi in Madinah
                        </Link>
                        <Link href="/locations/jeddah" className="px-5 py-2 bg-gray-50 hover:bg-teal-50 text-gray-700 hover:text-teal-700 rounded-full border border-gray-200 transition-colors">
                            Taxi in Jeddah
                        </Link>
                        <Link href="/blog" className="px-5 py-2 bg-gray-50 hover:bg-teal-50 text-gray-700 hover:text-teal-700 rounded-full border border-gray-200 transition-colors">
                            Travel Blog
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

