import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Users, Navigation, ArrowRight, AlertCircle, Wallet } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: {
        canonical: 'http://www.haramtaxii.com/locations/makkah',
    },
    title: 'Makkah Taxi Service | Haram Taxi Service',
    description: 'Professional taxi service in Makkah. Airport transfers, hotel pickups, and city transportation. Available 24/7.',
    keywords: ['Makkah taxi', 'taxi Makkah', 'Makkah to Madinah taxi', 'Jeddah airport to Makkah', 'Umrah taxi Makkah', 'private taxi Makkah', 'taxi for umrah'],
};

export default function MakkahPage() {
    const services = [
        {
            name: 'Airport Transfers',
            description: 'Direct pickup from Jeddah Airport (KAIA) to your Makkah hotel.',
            icon: Navigation,
            href: '/routes/jeddah-airport-to-makkah'
        },
        {
            name: 'Hotel Pickup',
            description: 'Service from Clock Tower, Aziziyah, and all Makkah hotels.',
            icon: MapPin,
            href: '/booking'
        },
        {
            name: 'Haram Transfers',
            description: 'Convenient daily rides to and from Masjid Al-Haram.',
            icon: MapPin,
            href: '/services/hotel-to-haram-transport'
        },
        {
            name: 'Makkah to Madinah',
            description: 'Comfortable intercity journey via Hijrah Highway (4.5 hours).',
            icon: Car,
            href: '/routes/makkah-to-madinah'
        },
        {
            name: 'Ziyarat Tours',
            description: 'Visit Cave of Hira, Jabal Thawr, Mina, and Arafat.',
            icon: Navigation,
            href: '/services/makkah-ziyarat'
        },
        {
            name: 'Group Transport',
            description: 'Spacious vans and buses for families and Umrah groups.',
            icon: Users,
            href: '/fleet'
        },
    ];

    const features = [
        'Experienced local drivers',
        'Clean and comfortable vehicles',
        'Fixed transparent pricing',
        '24/7 availability',
        'English & Arabic speaking',
        'All major hotels covered',
    ];

    const faqs = [
        {
            question: "How do I book a taxi from Jeddah Airport to Makkah?",
            answer: "You can book online through our website or contact us. Our driver will meet you at the arrival hall with a name board."
        },
        {
            question: "How long does it take from Jeddah Airport to Makkah?",
            answer: "The journey typically takes 1.5 to 2 hours depending on traffic conditions."
        },
        {
            question: "Do you provide transportation to the Grand Mosque?",
            answer: "Yes, we provide direct transportation to the Grand Mosque area and can drop you at the nearest permitted point."
        },
        {
            question: "Can you arrange transport from Makkah to Madinah?",
            answer: "Yes, we offer comfortable intercity transportation between Makkah and Madinah. The journey takes approximately 4-5 hours."
        },
        {
            question: "Do you offer group transportation?",
            answer: "Yes, we have vans and buses available for families and groups of all sizes."
        }
    ];

    
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service - Makkah",
        "description": "Professional taxi service in Makkah. Book online for reliable transportation.",
        "@id": "http://www.haramtaxii.com/locations/makkah",
        "url": "http://www.haramtaxii.com/locations/makkah",
        "telephone": "+923132222436",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Makkah",
            "addressLocality": "Makkah",
            "addressCountry": "SA"
        },
        "areaServed": {
            "@type": "City",
            "name": "Makkah"
        }
    };

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            {/* Hero Section */}
            <section className="relative h-[500px] bg-gray-900">
                <Image
                    src="/makkah-royal-clock-tower.webp"
                    alt="Makkah Royal Clock Tower and Haram view"
                    fill
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/90 rounded-full mb-6">
                                <MapPin className="w-4 h-4 text-white" />
                                <span className="text-white text-sm font-semibold">Makkah</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                                Taxi Service in <span className="text-teal-400">Makkah</span>
                            </h1>

                            <p className="text-xl text-gray-200 mb-6">
                                Trusted taxi service in the Holy City of Makkah. We provide 24/7 transfers to Masjid Al-Haram, Ziyarat tours to holy sites, and reliable Umrah taxi rides to Jeddah Airport and Madinah.
                            </p>

                            <div className="flex items-center gap-2 mb-8 text-teal-100 font-medium bg-white/10 w-fit px-4 py-2 rounded-lg backdrop-blur-sm">
                                <MapPin className="w-5 h-5" />
                                <span>Serving Makkah and surrounding areas within 50km radius</span>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/923132222436?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Makkah." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                        <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg w-full sm:w-auto shadow-lg hover:scale-105 transition-transform flex items-center justify-center">
                                            <svg className="w-6 h-6 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                                            Book via WhatsApp
                                        </Button>
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-12 bg-teal-500 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div className="text-3xl font-bold mb-2">24/7</div>
                            <div className="text-sm opacity-90">Available</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-2">1-2hrs</div>
                            <div className="text-sm opacity-90">From Airport</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-2">100+</div>
                            <div className="text-sm opacity-90">Hotels Covered</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-2">5000+</div>
                            <div className="text-sm opacity-90">Happy Customers</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Travel Times Section */}
            <section className="py-12 bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Estimated Travel Times from Makkah</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                            <div>
                                <div className="font-semibold text-gray-900">Jeddah Airport</div>
                                <div className="text-sm text-gray-500">Distance: 80km</div>
                            </div>
                            <div className="text-xl font-bold text-teal-600">60 mins</div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                            <div>
                                <div className="font-semibold text-gray-900">Madinah</div>
                                <div className="text-sm text-gray-500">Distance: 450km</div>
                            </div>
                            <div className="text-xl font-bold text-teal-600">4.5 hours</div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                            <div>
                                <div className="font-semibold text-gray-900">Taif</div>
                                <div className="text-sm text-gray-500">Distance: 90km</div>
                            </div>
                            <div className="text-xl font-bold text-teal-600">1.5 hours</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problems Solved Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Transport Challenges in Makkah</h2>
                        <p className="text-xl text-gray-600">We solve the unique problems pilgrims face when traveling in the Holy City.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                <AlertCircle className="w-6 h-6 text-red-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Haram Access Restrictions</h3>
                            <p className="text-gray-600 mb-4">Private vehicles cannot enter the immediate Haram area. Drop-off points can be confusing, especially for first-time visitors.</p>
                            <div className="flex items-center text-teal-600 font-medium">
                                <CheckCircle2 className="w-5 h-5 mr-2" />
                                <span>Solution: We know the closest legal pickup/drop-off points</span>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                <AlertCircle className="w-6 h-6 text-red-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Walking Distance with Luggage</h3>
                            <p className="text-gray-600 mb-4">Hotels in Aziziyah and Misfalah areas often require long walks through pedestrian-only zones, difficult with heavy bags.</p>
                            <div className="flex items-center text-teal-600 font-medium">
                                <CheckCircle2 className="w-5 h-5 mr-2" />
                                <span>Solution: Door-to-door service where legally permitted</span>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                <AlertCircle className="w-6 h-6 text-red-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Peak Prayer Traffic</h3>
                            <p className="text-gray-600 mb-4">Gridlock after Maghrib and Isha prayers makes transportation extremely difficult, with some taxis refusing trips.</p>
                            <div className="flex items-center text-teal-600 font-medium">
                                <CheckCircle2 className="w-5 h-5 mr-2" />
                                <span>Solution: Pre-scheduled rides with timing flexibility</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cost / Pricing Guide */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full mb-4">
                            <Wallet className="w-4 h-4 text-teal-600" />
                            <span className="text-teal-800 text-sm font-semibold">Fair Pricing</span>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Taxi Pricing in Makkah</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Transparent pricing designed for pilgrims, with no inflated rates during peak seasons.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">What Influences Your Fare?</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="w-8 h-8 bg-teal-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <Users className="w-4 h-4 text-teal-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Group Size</h4>
                                        <p className="text-gray-600 text-sm">Family sedans accommodate up to 4 passengers. Larger groups need vans or multiple vehicles.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-8 h-8 bg-teal-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <MapPin className="w-4 h-4 text-teal-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Hotel Location</h4>
                                        <p className="text-gray-600 text-sm">Hotels closer to Haram (Clock Tower area) vs outer districts (Aziziyah) may have different drop-off coordination needs.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-8 h-8 bg-teal-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <Clock className="w-4 h-4 text-teal-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Ramadan & Hajj Season</h4>
                                        <p className="text-gray-600 text-sm">While some services surge pricing, we maintain fair rates year-round, with only minor adjustments for operational costs.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-teal-500 p-8 rounded-2xl text-white flex flex-col justify-center">
                            <h3 className="text-2xl font-bold mb-6">No Ramadan Surges</h3>
                            <p className="mb-6 opacity-90 text-lg">
                                Many services triple their prices during Ramadan and Hajj. We believe in serving pilgrims with honesty and maintain consistent, fair pricing throughout the year.
                            </p>
                            <Link href="/booking">
                                <Button className="bg-white text-teal-600 hover:bg-gray-100 w-full text-lg h-12">
                                    Get Your Quote
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works in Makkah</h2>
                        <p className="text-xl text-gray-600">Seamless transportation for your pilgrimage</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gray-100 -z-10"></div>

                        <div className="bg-white p-6 relative">
                            <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                                <span className="text-3xl font-bold text-teal-500">1</span>
                            </div>
                            <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Book & Coordinate</h3>
                            <p className="text-center text-gray-600">Share your hotel details via WhatsApp. We&apos;ll confirm the exact pickup point based on accessibility rules.</p>
                        </div>

                        <div className="bg-white p-6 relative">
                            <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                                <span className="text-3xl font-bold text-teal-500">2</span>
                            </div>
                            <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Meet Your Driver</h3>
                            <p className="text-center text-gray-600">Receive driver details and live location. No searching or waiting in the heat.</p>
                        </div>

                        <div className="bg-white p-6 relative">
                            <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                                <span className="text-3xl font-bold text-teal-500">3</span>
                            </div>
                            <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Arrive Safely</h3>
                            <p className="text-center text-gray-600">Comfortable ride to your destination, whether Jeddah Airport, Madinah, or local Ziyarat sites.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services in Makkah</h2>
                        <p className="text-xl text-gray-600">Complete transportation solutions</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Link key={index} href={service.href} className="block group">
                                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all h-full border border-transparent group-hover:border-teal-100">
                                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-teal-500 transition-colors">
                                        <service.icon className="w-6 h-6 text-teal-500 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">{service.name}</h3>
                                    <p className="text-gray-600">{service.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Why Choose Our Makkah Taxi Service?
                            </h2>
                            <p className="text-gray-600 mb-8 text-lg">
                                We provide reliable, professional taxi services throughout Makkah with experienced drivers who know the city well.
                            </p>
                            <ul className="space-y-4">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-center text-gray-700">
                                        <CheckCircle2 className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/makkah-highway.webp"
                                alt="Makkah Highway"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Routes */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Routes from Makkah</h2>
                        <p className="text-xl text-gray-600">Most requested destinations</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Link href="/routes/jeddah-airport-to-makkah" className="block group">
                            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all border border-transparent hover:border-teal-100">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600">Jeddah Airport</h3>
                                    <ArrowRight className="w-5 h-5 text-teal-500 group-hover:translate-x-1 transition-transform" />
                                </div>
                                <p className="text-gray-600 mb-2">Duration: 1.5-2 hours</p>
                                <p className="text-sm text-gray-500">Most popular airport transfer</p>
                            </div>
                        </Link>

                        <Link href="/routes/makkah-to-madinah" className="block group">
                            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all border border-transparent hover:border-teal-100">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600">Madinah</h3>
                                    <ArrowRight className="w-5 h-5 text-teal-500 group-hover:translate-x-1 transition-transform" />
                                </div>
                                <p className="text-gray-600 mb-2">Duration: 4-5 hours</p>
                                <p className="text-sm text-gray-500">Comfortable intercity travel</p>
                            </div>
                        </Link>

                        <div className="bg-white p-8 rounded-2xl shadow-md">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-gray-900">Taif</h3>
                                <ArrowRight className="w-5 h-5 text-teal-500" />
                            </div>
                            <p className="text-gray-600 mb-2">Duration: 1.5 hours</p>
                            <p className="text-sm text-gray-500">Scenic mountain route</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-xl text-gray-600">Common questions about Makkah taxi service</p>
                    </div>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-gray-50 px-6 rounded-xl border-0"
                            >
                                <AccordionTrigger className="text-lg font-semibold text-gray-900 py-6 hover:text-teal-500 text-left">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-6 text-base leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Nearby Cities */}
            <NearbyCities currentCity="makkah" />

            {/* CTA Section */}
            <section className="py-20 bg-teal-500 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to Book Your Makkah Taxi?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Professional taxi service available 24/7. Book now for instant confirmation!
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
