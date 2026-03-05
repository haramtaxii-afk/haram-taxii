import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Phone, ArrowRight, AlertCircle, Wallet } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/taif',
    },
    title: 'Taxi Service in Taif | Mountain Tours & City Rides - Haram Taxi',
    description: 'Book reliable taxi service in Taif, Saudi Arabia. Mountain tours, city transfers, and hotel pickups. Available 24/7. Call now for instant booking!',
    keywords: ['taxi service Taif', 'Taif taxi', 'taxi in Taif', 'Taif to Makkah taxi', 'Taif mountain tour taxi'],
    openGraph: {
        title: 'Taxi Service in Taif | Mountain Tours & City Rides',
        description: 'Professional taxi service in Taif. Mountain tours, city transfers, hotel pickups. Book now!',
        url: 'https://haramtaxiservice.com/locations/taif',
        type: 'website',
    },
};

export default function TaifPage() {
    const services = [
        { name: 'City Transfer', description: 'Reliable taxi service within Taif city', icon: Car },
        { name: 'Mountain Tours', description: 'Scenic tours to Al Hada & Shafa mountains', icon: MapPin },
        { name: 'Transfer to Makkah', description: 'Comfortable ride from Taif to Makkah (1.5 hours)', icon: ArrowRight },
        { name: 'Hotel Pickup', description: 'Pickup from any hotel or resort in Taif', icon: MapPin },
        { name: 'Rose Farm Tours', description: 'Visits to famous rose farms in season', icon: Car },
        { name: '24/7 Service', description: 'Round-the-clock taxi service for your convenience', icon: Clock },
    ];

    const features = [
        'Licensed Taif taxi drivers',
        'Clean and air-conditioned vehicles',
        'Fixed rates - no hidden charges',
        '24/7 availability in Taif',
        'English & Arabic speaking drivers',
        'Mountain tour packages available',
    ];

    const faqs = [
        {
            question: "How much is a taxi from Taif to Makkah?",
            answer: "The taxi fare from Taif to Makkah typically ranges from SAR 120-200 depending on the vehicle type. The scenic journey takes approximately 1.5 hours through mountain roads."
        },
        {
            question: "Do you provide mountain tour services in Taif?",
            answer: "Yes, we provide comprehensive mountain tour services in Taif including visits to Al-Hada, Shubra Palace, and scenic viewpoints. Our drivers know all the best spots in Taif mountains."
        },
        {
            question: "Is taxi service available 24/7 in Taif?",
            answer: "Yes, our taxi service in Taif operates 24 hours a day, 7 days a week. Whether you need early morning transfer or late-night pickup, we're always available to serve you."
        },
        {
            question: "Can you take us to Taif rose farms?",
            answer: "Yes, we offer special tours to Taif's famous rose farms during the rose season. Our drivers will take you to the best rose farms and wait while you explore."
        },
        {
            question: "How long does it take from Taif to Jeddah by taxi?",
            answer: "The taxi journey from Taif to Jeddah takes approximately 2-2.5 hours. We provide comfortable vehicles with experienced drivers for this route."
        }
    ];

    const popularRoutes = [
        { from: 'Taif', to: 'Makkah', duration: '1.5 hrs', price: 'SAR 120-200' },
        { from: 'Taif', to: 'Jeddah', duration: '2-2.5 hrs', price: 'SAR 200-300' },
        { from: 'Taif City', to: 'Al-Hada', duration: '30 min', price: 'SAR 50-80' },
        { from: 'Taif', to: 'Shubra Palace', duration: '20 min', price: 'SAR 30-50' },
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service - Taif",
        "image": "https://haramtaxiservice.com/taif-mountains-view.webp",
        "@id": "https://haramtaxiservice.com/locations/taif",
        "url": "https://haramtaxiservice.com/locations/taif",
        "telephone": "+923080628195",
        "priceRange": "SAR 30-300",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Taif",
            "addressRegion": "Makkah Province",
            "postalCode": "26511",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 21.2703,
            "longitude": 40.4150
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
        },
        "areaServed": { "@type": "City", "name": "Taif" }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="bg-white min-h-screen">
                <div className="bg-gray-50 py-4">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Link href="/" className="hover:text-teal-500">Home</Link>
                            <span>/</span>
                            <Link href="/locations" className="hover:text-teal-500">Locations</Link>
                            <span>/</span>
                            <span className="text-gray-900 font-medium">Taif</span>
                        </div>
                    </div>
                </div>

                <section className="relative h-[500px] bg-gray-900">
                    <Image src="/taif-mountains-view.webp" alt="Taxi service in Taif - Mountain view" fill className="object-cover opacity-60" priority />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                    <div className="absolute inset-0 flex items-center">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                            <div className="max-w-3xl">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/90 rounded-full mb-6">
                                    <MapPin className="w-4 h-4 text-white" />
                                    <span className="text-white text-sm font-semibold">Taif, Saudi Arabia</span>
                                </div>

                                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                                    Taxi Service in <span className="text-teal-400">Taif</span>
                                </h1>

                                <p className="text-xl text-gray-200 mb-6">
                                    Experience the City of Roses with our premium taxi service. We offer scenic tours to Al Hada & Shafa, visits to historic Rose Farms, and comfortable transfers to Makkah or Jeddah.
                                </p>

                                <div className="flex items-center gap-2 mb-8 text-teal-100 font-medium bg-white/10 w-fit px-4 py-2 rounded-lg backdrop-blur-sm">
                                    <MapPin className="w-5 h-5" />
                                    <span>Serving Taif and surrounding areas within 40km radius</span>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/923080628195?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Taif." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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

                <section className="py-12 bg-teal-500 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div><div className="text-3xl font-bold mb-2">24/7</div><div className="text-sm opacity-90">Service in Taif</div></div>
                            <div><div className="text-3xl font-bold mb-2">1.5 hrs</div><div className="text-sm opacity-90">To Makkah</div></div>
                            <div><div className="text-3xl font-bold mb-2">20+</div><div className="text-sm opacity-90">Hotels Covered</div></div>
                            <div><div className="text-3xl font-bold mb-2">500+</div><div className="text-sm opacity-90">Happy Customers</div></div>
                        </div>
                    </div>
                </section>

                {/* Travel Times Section */}
                <section className="py-12 bg-gray-50 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Estimated Travel Times from Taif</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                                <div>
                                    <div className="font-semibold text-gray-900">Makkah</div>
                                    <div className="text-sm text-gray-500">Distance: 90km</div>
                                </div>
                                <div className="text-xl font-bold text-teal-600">1.5 hours</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                                <div>
                                    <div className="font-semibold text-gray-900">Jeddah</div>
                                    <div className="text-sm text-gray-500">Distance: 170km</div>
                                </div>
                                <div className="text-xl font-bold text-teal-600">2 hours</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                                <div>
                                    <div className="font-semibold text-gray-900">Riyadh</div>
                                    <div className="text-sm text-gray-500">Distance: 780km</div>
                                </div>
                                <div className="text-xl font-bold text-teal-600">7 hours</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Problems Solved Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Transport Challenges in Taif</h2>
                            <p className="text-xl text-gray-600">We solve the unique problems travelers face in Saudi Arabia&apos;s summer capital.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Mountain Road Safety</h3>
                                <p className="text-gray-600 mb-4">The winding mountain roads from Makkah to Taif (Al Hada route) can be challenging, especially for unfamiliar drivers or at night.</p>
                                <div className="flex items-center text-teal-600 font-medium">
                                    <CheckCircle2 className="w-5 h-5 mr-2" />
                                    <span>Solution: Experienced mountain drivers with local knowledge</span>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Scattered Tourist Sites</h3>
                                <p className="text-gray-600 mb-4">Popular attractions like Shubra Palace, Al Rudaf Park, and Souq Okaz are spread across the city, making taxi-hopping expensive and tiring.</p>
                                <div className="flex items-center text-teal-600 font-medium">
                                    <CheckCircle2 className="w-5 h-5 mr-2" />
                                    <span>Solution: Half-day city tour packages with fixed pricing</span>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Limited Street Taxis</h3>
                                <p className="text-gray-600 mb-4">Unlike major cities, finding available taxis in residential areas or tourist spots can take 30+ minutes during peak hours.</p>
                                <div className="flex items-center text-teal-600 font-medium">
                                    <CheckCircle2 className="w-5 h-5 mr-2" />
                                    <span>Solution: Pre-booking ensures guaranteed availability</span>
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
                                <span className="text-teal-800 text-sm font-semibold">Transparent Rates</span>
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Taxi Pricing in Taif</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Fair pricing for mountain routes and city tours, with no hidden charges.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                            <div className="bg-white p-8 rounded-2xl shadow-sm">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">What Impacts Your Fare?</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-teal-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <MapPin className="w-4 h-4 text-teal-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Route Type</h4>
                                            <p className="text-gray-600 text-sm">Mountain routes (Al Hada, Shifa) require skilled drivers and are priced to reflect the expertise and safety measures.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-teal-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <Clock className="w-4 h-4 text-teal-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Tour Duration</h4>
                                            <p className="text-gray-600 text-sm">Quick transfers vs full-day sightseeing packages (Shubra Palace, cable car, rose farms) have different rates.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-teal-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <Car className="w-4 h-4 text-teal-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Vehicle Comfort</h4>
                                            <p className="text-gray-600 text-sm">Standard sedans for couples, family SUVs for groups exploring Taif&apos;s highlands.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-teal-500 p-8 rounded-2xl text-white flex flex-col justify-center">
                                <h3 className="text-2xl font-bold mb-6">Summer Season Stability</h3>
                                <p className="mb-6 opacity-90 text-lg">
                                    While Taif sees high demand in summer (June-August) as Saudis escape the heat, we maintain fair pricing year-round without exploiting peak seasons.
                                </p>
                                <Link href="/booking">
                                    <Button className="bg-white text-teal-600 hover:bg-gray-100 w-full text-lg h-12">
                                        Book Taif Transfer
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
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works in Taif</h2>
                            <p className="text-xl text-gray-600">From Makkah mountains to Taif valleys</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gray-100 -z-10"></div>

                            <div className="bg-white p-6 relative">
                                <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                                    <span className="text-3xl font-bold text-teal-500">1</span>
                                </div>
                                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Choose Your Journey</h3>
                                <p className="text-center text-gray-600">Select from transfers (Makkah-Taif) or city tours (rose farms, cable car, Shubra Palace).</p>
                            </div>

                            <div className="bg-white p-6 relative">
                                <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                                    <span className="text-3xl font-bold text-teal-500">2</span>
                                </div>
                                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Confirm Pickup Point</h3>
                                <p className="text-center text-gray-600">Share your hotel or location in Taif. We coordinate the best pickup point via WhatsApp.</p>
                            </div>

                            <div className="bg-white p-6 relative">
                                <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                                    <span className="text-3xl font-bold text-teal-500">3</span>
                                </div>
                                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Enjoy the Mountain Air</h3>
                                <p className="text-center text-gray-600">Safe, comfortable ride through Taif&apos;s scenic routes with experienced drivers.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Taxi Services in Taif</h2>
                            <p className="text-xl text-gray-600">Complete transportation solutions across Taif</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all">
                                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                                        <service.icon className="w-6 h-6 text-teal-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                    <p className="text-gray-600">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Routes from Taif</h2>
                            <p className="text-xl text-gray-600">Most requested destinations from Taif</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {popularRoutes.map((route, index) => (
                                <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex-1">
                                            <div className="text-sm text-gray-600 mb-1">From</div>
                                            <div className="font-bold text-gray-900">{route.from}</div>
                                        </div>
                                        <ArrowRight className="w-6 h-6 text-teal-500 mx-4" />
                                        <div className="flex-1">
                                            <div className="text-sm text-gray-600 mb-1">To</div>
                                            <div className="font-bold text-gray-900">{route.to}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Clock className="w-4 h-4" />{route.duration}
                                        </div>
                                        <div className="font-semibold text-teal-500">{route.price}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Taif Taxi Service?</h2>
                                <p className="text-gray-600 mb-8 text-lg">
                                    We provide reliable, professional taxi services throughout Taif with experienced drivers who know the mountain roads and tourist spots well.
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
                                <Image src="/taif-al-hada.webp" alt="Professional taxi service in Taif Al-Hada mountains" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                            <p className="text-xl text-gray-600">Common questions about taxi service in Taif</p>
                        </div>
                        <Accordion type="single" collapsible className="space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 px-6 rounded-xl border-0">
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

                <section className="py-20 bg-teal-500 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl font-bold mb-6">Ready to Book Your Taif Taxi?</h2>
                        <p className="text-xl mb-8 opacity-90">Professional taxi service in Taif available 24/7. Book now for instant confirmation!</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/booking">
                                <Button size="lg" className="bg-white text-teal-500 hover:bg-gray-100 px-8 py-6 text-lg">
                                    Book Taif Taxi Online
                                </Button>
                            </Link>
                            <a href="tel:+923080628195">
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-500 px-8 py-6 text-lg">
                                    <Phone className="w-5 h-5 mr-2" />Call for Booking
                                </Button>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
