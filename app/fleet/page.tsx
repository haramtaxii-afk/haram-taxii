import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Users, Briefcase, CheckCircle2, ArrowRight, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'Taxi Fleet in Saudi Arabia | GMC Yukon, Camry, Vans - Haram Taxi',
    description: 'View our taxi fleet in Saudi Arabia. Luxury SUVs, sedans, family vans, and buses. GMC Yukon, Toyota Camry, Hyundai Staria. Book your vehicle now!',
    keywords: ['taxi fleet Saudi Arabia', 'GMC Yukon taxi', 'Toyota Camry taxi', 'family van taxi', 'luxury SUV taxi Makkah', 'group taxi Saudi Arabia'],
    openGraph: {
        title: 'Taxi Fleet in Saudi Arabia | Premium Vehicles',
        description: 'Luxury SUVs, sedans, and vans for taxi service in Saudi Arabia. Book now!',
        url: 'https://www.haramtaxii.com/fleet',
        type: 'website',
    },
};

export default function FleetPage() {
    const fleet = [
        {
            name: "GMC Yukon XL",
            image: "/gmc-yukon-xl-taxi.webp",
            passengers: 7,
            luggage: 5,
            category: "Luxury SUV",
            features: ["Luxury Interior", "Extra Legroom", "VIP Experience", "Premium Sound"],
            description: "Perfect for VIP travel and families seeking ultimate comfort",
            href: "/fleet/gmc-yukon",
            alt: "GMC Yukon XL luxury SUV taxi for VIP travel in Saudi Arabia"
        },
        {
            name: "Toyota Camry",
            image: "/toyota-camry-taxi-sedan.webp",
            passengers: 4,
            luggage: 2,
            category: "Sedan",
            features: ["Comfortable", "AC", "Economic", "City Travel"],
            description: "Ideal for business trips and city transportation",
            href: "/fleet/toyota-camry",
            alt: "Toyota Camry reliability taxi sedan for city trips in Jeddah"
        },
        {
            name: "Hyundai Staria",
            image: "/hyundai-staria-family-taxi.webp",
            passengers: 7,
            luggage: 4,
            category: "Family Van",
            features: ["Modern Design", "Spacious", "Family Friendly", "USB Charging"],
            description: "Modern van perfect for families with children",
            href: "/fleet/hyundai-staria",
            alt: "Hyundai Staria modern family van taxi for Umrah pilgrimage"
        },
        {
            name: "Toyota Hiace",
            image: "/toyota-hiace-commuter-van.webp",
            passengers: 11,
            luggage: 16,
            category: "Group Van",
            features: ["Group Travel", "Spacious", "Reliable", "Long Distance"],
            description: "Best choice for medium-sized groups and tours",
            href: "/fleet/toyota-hiace",
            alt: "Toyota Hiace commuter van for group transport in Makkah"
        },
        {
            name: "Toyota Coaster",
            image: "/toyota-coaster-minibus.webp",
            passengers: 17,
            luggage: 20,
            category: "Mini Bus",
            features: ["Large Groups", "Tour Bus", "Corporate", "Long Distance"],
            description: "Perfect for large groups and corporate events",
            href: "/fleet/toyota-coaster",
            alt: "Toyota Coaster minibus for corporate and group events in Riyadh"
        },
        {
            name: "Hyundai Starex",
            image: "/hyundai-starex-family-van.webp",
            passengers: 7,
            luggage: 10,
            category: "Van",
            features: ["Family Friendly", "Comfortable", "Reliable", "Airport Transfer"],
            description: "Reliable van for airport transfers and family trips",
            href: "/fleet/hyundai-starex",
            alt: "Hyundai Starex family van for airport transfers in Madinah"
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Breadcrumb */}
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Link href="/" className="hover:text-teal-500">Home</Link>
                        <span>/</span>
                        <span className="text-gray-900 font-medium">Fleet</span>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="bg-gradient-to-b from-gray-50 to-white pt-20 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full mb-6">
                            <Car className="w-4 h-4 text-teal-500" />
                            <span className="text-teal-600 text-sm font-semibold">Premium Fleet</span>
                        </div>

                        <h1 className="text-fluid-h1 font-bold text-gray-900 mb-6">
                            Our <span className="text-teal-500">Vehicle Fleet</span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Choose from our range of well-maintained, comfortable vehicles. From luxury SUVs to spacious vans, we have the perfect ride for your journey.
                        </p>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                            <div className="text-3xl font-bold text-teal-500 mb-2">6</div>
                            <div className="text-sm text-gray-600">Vehicle Types</div>
                        </div>
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                            <div className="text-3xl font-bold text-teal-500 mb-2">2024</div>
                            <div className="text-sm text-gray-600">Latest Models</div>
                        </div>
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                            <div className="text-3xl font-bold text-teal-500 mb-2">100%</div>
                            <div className="text-sm text-gray-600">Clean & Safe</div>
                        </div>
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                            <div className="text-3xl font-bold text-teal-500 mb-2">24/7</div>
                            <div className="text-sm text-gray-600">Available</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fleet Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {fleet.map((vehicle, index) => (
                            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                                {/* Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={vehicle.image}
                                        alt={vehicle.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-teal-500 text-white text-xs font-semibold rounded-full">
                                            {vehicle.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-teal-500 transition-colors">
                                        {vehicle.name}
                                    </h3>

                                    <p className="text-gray-600 text-sm mb-4">
                                        {vehicle.description}
                                    </p>

                                    {/* Capacity */}
                                    <div className="flex items-center gap-6 mb-4 pb-4 border-b border-gray-100">
                                        <div className="flex items-center gap-2 text-gray-700">
                                            <Users className="w-5 h-5 text-teal-500" />
                                            <span className="text-sm font-medium">{vehicle.passengers} Seats</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-700">
                                            <Briefcase className="w-5 h-5 text-teal-500" />
                                            <span className="text-sm font-medium">{vehicle.luggage} Bags</span>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-2 mb-6">
                                        {vehicle.features.slice(0, 3).map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0" />
                                                <span className="text-sm text-gray-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <Button asChild className="w-full bg-teal-500 hover:bg-teal-600 text-white group-hover:shadow-lg transition-all">
                                        <Link href={vehicle.href}>
                                            View {vehicle.name} Details
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Our Fleet */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-fluid-h1 font-bold text-gray-900 mb-4">Why Choose Our Fleet?</h2>
                        <p className="text-xl text-gray-600">Quality and comfort guaranteed</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl text-center">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle2 className="w-8 h-8 text-teal-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Well Maintained</h3>
                            <p className="text-gray-600">All vehicles regularly serviced and inspected</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl text-center">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle2 className="w-8 h-8 text-teal-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Clean & Sanitized</h3>
                            <p className="text-gray-600">Thoroughly cleaned before every trip</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl text-center">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle2 className="w-8 h-8 text-teal-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Latest Models</h3>
                            <p className="text-gray-600">Modern vehicles with latest features</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-teal-500 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-fluid-h1 font-bold mb-6">Ready to Book Your Ride?</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Choose your preferred vehicle and book now for a comfortable journey
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-white text-teal-500 hover:bg-gray-100 px-8 py-6 text-lg">
                                Book Now
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-500 px-8 py-6 text-lg">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
