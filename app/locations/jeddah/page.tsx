import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Phone, ArrowRight, Star, AlertCircle, Wallet, MessageCircle } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://www.haramtaxii.com/locations/jeddah',
    },
    title: 'Taxi Service in Jeddah | Airport Transfer & City Rides - Haram Taxi',
    description: 'Book reliable taxi service in Jeddah, Saudi Arabia. Airport transfers, city tours, and hotel pickups. Available 24/7. Call now for instant booking!',
    keywords: ['taxi service Jeddah', 'Jeddah airport taxi', 'taxi in Jeddah', 'Jeddah to Makkah taxi', 'Jeddah city taxi'],
    openGraph: {
        title: 'Taxi Service in Jeddah | Airport Transfer & City Rides',
        description: 'Professional taxi service in Jeddah. Airport transfers, city tours, hotel pickups. Book now!',
        url: 'https://www.haramtaxii.com/locations/jeddah',
        type: 'website',
    },
};

export default function JeddahPage() {
    const services = [
        {
            name: 'Airport Transfer',
            description: 'Reliable pickup from King Abdulaziz International Airport (KAIA) to your destination.',
            icon: Car,
            href: '/routes/jeddah-airport-to-makkah'
        },
        {
            name: 'City Tours',
            description: 'Visit Al-Balad, Jeddah Corniche, and the Red Sea Mall with a local guide.',
            icon: MapPin,
            href: '/services/jeddah-city-tour'
        },
        {
            name: 'Transfer to Makkah',
            description: 'Direct ride to your Makkah hotel or the Haram (approx. 90 minutes).',
            icon: ArrowRight,
            href: '/routes/jeddah-airport-to-makkah'
        },
        {
            name: 'Hotel Pickup',
            description: 'Convenient rides from any hotel, resort, or apartment in Jeddah.',
            icon: MapPin,
            href: '/booking'
        },
        {
            name: 'Business Travel',
            description: 'Professional chauffeurs for meetings and corporate events.',
            icon: Car,
            href: '/services/business-travel'
        },
        {
            name: '24/7 Service',
            description: 'Always available, day or night, for all your transportation needs.',
            icon: Clock,
            href: '/contact'
        },
    ];

    const features = [
        'Licensed Jeddah taxi drivers',
        'Clean and air-conditioned vehicles',
        'Fixed rates - no hidden charges',
        '24/7 availability in Jeddah',
        'English & Arabic speaking drivers',
        'Airport meet & greet service',
    ];

    const faqs = [
        {
            question: "How much is a taxi from Jeddah Airport to Makkah?",
            answer: "The taxi fare from King Abdulaziz International Airport (Jeddah) to Makkah typically ranges from SAR 150-250 depending on the vehicle type. The journey takes approximately 90 minutes. Book with us for fixed, transparent pricing."
        },
        {
            question: "Is taxi service available 24/7 in Jeddah?",
            answer: "Yes, our taxi service in Jeddah operates 24 hours a day, 7 days a week. Whether you need an early morning airport transfer or late-night city ride, we're always available to serve you."
        },
        {
            question: "How do I book a taxi in Jeddah?",
            answer: "You can book a taxi in Jeddah through our online booking form on this website. Simply enter your pickup location, destination, date and time. You'll receive instant confirmation."
        },
        {
            question: "Do you provide taxi service from Jeddah to Madinah?",
            answer: "Yes, we provide comfortable taxi service from Jeddah to Madinah. The journey takes approximately 4-5 hours. We recommend booking in advance for intercity trips."
        },
        {
            question: "Are your Jeddah taxi drivers licensed?",
            answer: "Yes, all our drivers in Jeddah are fully licensed, experienced, and professionally trained. They have excellent knowledge of Jeddah city and surrounding areas."
        }
    ];

    const popularRoutes = [
        { from: 'Jeddah Airport', to: 'Makkah Hotels', duration: '90 min', price: 'SAR 150-250' },
        { from: 'Jeddah Airport', to: 'Jeddah City Center', duration: '30 min', price: 'SAR 50-80' },
        { from: 'Jeddah', to: 'Madinah', duration: '4-5 hrs', price: 'SAR 400-600' },
        { from: 'Jeddah Corniche', to: 'Al-Balad', duration: '20 min', price: 'SAR 30-50' },
    ];

    // Schema markup for Local Business
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service - Jeddah",
        "image": "https://www.haramtaxii.com/jeddah-corniche-sunset.webp",
        "@id": "https://www.haramtaxii.com/locations/jeddah",
        "url": "https://www.haramtaxii.com/locations/jeddah",
        "telephone": "+923132222436",
        "priceRange": "SAR 30-600",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jeddah",
            "addressLocality": "Jeddah",
            "addressRegion": "Makkah Province",
            "postalCode": "21442",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 21.5433,
            "longitude": 39.1728
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "sameAs": [
            "https://facebook.com/haramtaxi",
            "https://twitter.com/haramtaxi",
            "https://instagram.com/haramtaxi"
        ],
        "areaServed": {
            "@type": "City",
            "name": "Jeddah"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="bg-white min-h-screen">
                {/* Breadcrumb */}
                <div className="bg-gray-50 py-4">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Link href="/" className="hover:text-teal-500">Home</Link>
                            <span>/</span>
                            <Link href="/locations" className="hover:text-teal-500">Locations</Link>
                            <span>/</span>
                            <span className="text-gray-900 font-medium">Jeddah</span>
                        </div>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative h-[500px] bg-gray-900">
                    <Image
                        src="/jeddah-corniche-view.webp"
                        alt="Taxi service in Jeddah - Jeddah Corniche sunset view"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                    <div className="absolute inset-0 flex items-center">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                            <div className="max-w-3xl">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/90 rounded-full mb-6">
                                    <MapPin className="w-4 h-4 text-white" />
                                    <span className="text-white text-sm font-semibold">Jeddah, Saudi Arabia</span>
                                </div>

                                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                                    Taxi Service in <span className="text-teal-400">Jeddah</span>
                                </h1>

                                <p className="text-xl text-gray-200 mb-6">
                                    Reliable taxi service in Jeddah, the Gateway to the Holy Cities. We offer premium airport pickups, intercity transfers to Makkah (1 hr) & Madinah (4 hrs), and local rides to popular spots like the Corniche and Al-Balad.
                                </p>

                                <div className="flex items-center gap-2 mb-8 text-teal-100 font-medium bg-white/10 w-fit px-4 py-2 rounded-lg backdrop-blur-sm">
                                    <MapPin className="w-5 h-5" />
                                    <span>Serving Jeddah and surrounding areas within 50km radius</span>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/923132222436?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Jeddah." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                        <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg w-full sm:w-auto shadow-lg hover:scale-105 transition-transform flex items-center justify-center">
                                            <svg className="w-6 h-6 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
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
                                <div className="text-sm opacity-90">Service in Jeddah</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-2">90 min</div>
                                <div className="text-sm opacity-90">To Makkah</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-2">50+</div>
                                <div className="text-sm opacity-90">Hotels Covered</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-2">1000+</div>
                                <div className="text-sm opacity-90">Happy Customers</div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Travel Times Section */}
                <section className="py-12 bg-gray-50 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Estimated Travel Times from Jeddah</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                                <div>
                                    <div className="font-semibold text-gray-900">Makkah</div>
                                    <div className="text-sm text-gray-500">Distance: 80km</div>
                                </div>
                                <div className="text-xl font-bold text-teal-600">60 mins</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                                <div>
                                    <div className="font-semibold text-gray-900">Madinah</div>
                                    <div className="text-sm text-gray-500">Distance: 420km</div>
                                </div>
                                <div className="text-xl font-bold text-teal-600">4 hours</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                                <div>
                                    <div className="font-semibold text-gray-900">KAEC</div>
                                    <div className="text-sm text-gray-500">Distance: 100km</div>
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
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Taxi Challenges in Jeddah</h2>
                            <p className="text-xl text-gray-600">We solve the problems travelers often face at Jeddah Airport and city.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Airport Chaos & Queues</h3>
                                <p className="text-gray-600 mb-4">Finding a taxi at King Abdulaziz International Airport (KAIA) can be chaotic, especially during peak seasons. Long queues are common.</p>
                                <div className="flex items-center text-teal-600 font-medium">
                                    <CheckCircle2 className="w-5 h-5 mr-2" />
                                    <span>Solution: Pre-booked Meet & Greet</span>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Unpredictable Meters</h3>
                                <p className="text-gray-600 mb-4">Street taxis often refuse to use meters or take longer routes, leading to higher fares than expected.</p>
                                <div className="flex items-center text-teal-600 font-medium">
                                    <CheckCircle2 className="w-5 h-5 mr-2" />
                                    <span>Solution: Fixed Upfront Pricing</span>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Language Barriers</h3>
                                <p className="text-gray-600 mb-4">Communicating destination details to non-English speaking drivers can be stressful and lead to errors.</p>
                                <div className="flex items-center text-teal-600 font-medium">
                                    <CheckCircle2 className="w-5 h-5 mr-2" />
                                    <span>Solution: English Speaking Drivers</span>
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
                                <span className="text-teal-800 text-sm font-semibold">Price Transparency</span>
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Taxi Fare Guide for Jeddah</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Unlike metered taxis that charge by time and distance, we offer fixed rates based on vehicle type and destination.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                            <div className="bg-white p-8 rounded-2xl shadow-sm">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">What Affects Your Price?</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-teal-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <Car className="w-4 h-4 text-teal-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Vehicle Class</h4>
                                            <p className="text-gray-600 text-sm">Economy sedans are standard. GMCs and H1 Vans for groups cost more due to capacity and luxury.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-teal-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <MapPin className="w-4 h-4 text-teal-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Distance & Route</h4>
                                            <p className="text-gray-600 text-sm">Longer trips like Jeddah to Makkah (90km) are priced differently than local city rides.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-teal-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <Clock className="w-4 h-4 text-teal-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Seasonality</h4>
                                            <p className="text-gray-600 text-sm">Prices may adjust slightly during high-demand periods like Ramadan and Hajj due to traffic and resource availability.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-teal-500 p-8 rounded-2xl text-white flex flex-col justify-center">
                                <h3 className="text-2xl font-bold mb-6">Why Fixed Pricing Wins</h3>
                                <p className="mb-6 opacity-90 text-lg">
                                    With street taxis, traffic jams mean the meter keeps running. With Haram Taxi, you pay the agreed price regardless of traffic delays on Medina Road or Haramain Highway.
                                </p>
                                <Link href="/booking">
                                    <Button className="bg-white text-teal-600 hover:bg-gray-100 w-full text-lg h-12">
                                        Get Your Fixed Quote
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
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
                            <p className="text-xl text-gray-600">Your journey in 3 simple steps</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gray-100 -z-10"></div>

                            <div className="bg-white p-6 relative">
                                <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                                    <span className="text-3xl font-bold text-teal-500">1</span>
                                </div>
                                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Book Online</h3>
                                <p className="text-center text-gray-600">Select your pickup, drop-off, and vehicle type. No payment needed to reserve.</p>
                            </div>

                            <div className="bg-white p-6 relative">
                                <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                                    <span className="text-3xl font-bold text-teal-500">2</span>
                                </div>
                                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Receive Confirmation</h3>
                                <p className="text-center text-gray-600">Get an instant confirmation via WhatsApp. We&apos;ll share driver details before your trip.</p>
                            </div>

                            <div className="bg-white p-6 relative">
                                <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                                    <span className="text-3xl font-bold text-teal-500">3</span>
                                </div>
                                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Meet & Ride</h3>
                                <p className="text-center text-gray-600">Driver meets you at the location. Enjoy a comfortable ride to your destination.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services in Jeddah */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Taxi Services in Jeddah</h2>
                            <p className="text-xl text-gray-600">Complete transportation solutions across Jeddah</p>
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

                {/* Popular Routes from Jeddah */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Taxi Routes from Jeddah</h2>
                            <p className="text-xl text-gray-600">Most requested destinations from Jeddah</p>
                        </div>

                        <Link href="/routes/jeddah-airport-to-makkah" className="block group">
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-teal-300 transition-all">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex-1">
                                        <div className="text-sm text-gray-600 mb-1">From</div>
                                        <div className="font-bold text-gray-900">Jeddah Airport</div>
                                    </div>
                                    <ArrowRight className="w-6 h-6 text-teal-500 mx-4 group-hover:translate-x-1 transition-transform" />
                                    <div className="flex-1">
                                        <div className="text-sm text-gray-600 mb-1">To</div>
                                        <div className="font-bold text-gray-900">Makkah Hotels</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Clock className="w-4 h-4" />
                                        90 min
                                    </div>
                                    <div className="font-semibold text-teal-500">SAR 150-250</div>
                                </div>
                            </div>
                        </Link>

                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex-1">
                                    <div className="text-sm text-gray-600 mb-1">From</div>
                                    <div className="font-bold text-gray-900">Jeddah Airport</div>
                                </div>
                                <ArrowRight className="w-6 h-6 text-teal-500 mx-4" />
                                <div className="flex-1">
                                    <div className="text-sm text-gray-600 mb-1">To</div>
                                    <div className="font-bold text-gray-900">Jeddah City Center</div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Clock className="w-4 h-4" />
                                    30 min
                                </div>
                                <div className="font-semibold text-teal-500">SAR 50-80</div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex-1">
                                    <div className="text-sm text-gray-600 mb-1">From</div>
                                    <div className="font-bold text-gray-900">Jeddah</div>
                                </div>
                                <ArrowRight className="w-6 h-6 text-teal-500 mx-4" />
                                <div className="flex-1">
                                    <div className="text-sm text-gray-600 mb-1">To</div>
                                    <div className="font-bold text-gray-900">Madinah</div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Clock className="w-4 h-4" />
                                    4-5 hrs
                                </div>
                                <div className="font-semibold text-teal-500">SAR 400-600</div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex-1">
                                    <div className="text-sm text-gray-600 mb-1">From</div>
                                    <div className="font-bold text-gray-900">Jeddah Corniche</div>
                                </div>
                                <ArrowRight className="w-6 h-6 text-teal-500 mx-4" />
                                <div className="flex-1">
                                    <div className="text-sm text-gray-600 mb-1">To</div>
                                    <div className="font-bold text-gray-900">Al-Balad</div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Clock className="w-4 h-4" />
                                    20 min
                                </div>
                                <div className="font-semibold text-teal-500">SAR 30-50</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                    Why Choose Our Jeddah Taxi Service?
                                </h2>
                                <p className="text-gray-600 mb-8 text-lg">
                                    We provide reliable, professional taxi services throughout Jeddah with experienced drivers who know the city well. From airport transfers to city tours, we ensure comfortable and safe transportation.
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
                                    src="/jeddah-corniche-road.webp"
                                    alt="Professional taxi service on Jeddah Corniche road"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                            <p className="text-xl text-gray-600">Common questions about taxi service in Jeddah</p>
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

                {/* CTA Section */}
                <section className="py-20 bg-teal-500 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl font-bold mb-6">
                            Ready to Book Your Jeddah Taxi?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Professional taxi service in Jeddah available 24/7. Book now for instant confirmation!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/booking">
                                <Button size="lg" className="bg-white text-teal-500 hover:bg-gray-100 px-8 py-6 text-lg">
                                    Book Jeddah Taxi Online
                                </Button>
                            </Link>
                            <a href="https://wa.me/923132222436?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Jeddah." target="_blank" rel="noopener noreferrer">
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-500 px-8 py-6 text-lg">
                                    <MessageCircle className="w-5 h-5 mr-2" />
                                    WhatsApp Us
                                </Button>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
