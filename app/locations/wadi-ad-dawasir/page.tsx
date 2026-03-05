import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Shield, Sun, ArrowRight, Mountain } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/wadi-ad-dawasir',
    },
    title: 'Taxi Service in Wadi Ad Dawasir | Airport Transfer & Heritage',
    description: 'Premier taxi service in Wadi Ad Dawasir. Transfers to Wadi Ad Dawasir Airport (WAE), Empty Quarter gateway, and historic palaces. 24/7 service.',
    keywords: ['taxi Wadi Ad Dawasir', 'Wadi Ad Dawasir airport taxi', 'Empty Quarter taxi', 'Al-Faw heritage taxi', 'taxi to Riyadh from Wadi'],
    openGraph: {
        title: 'Taxi Service in Wadi Ad Dawasir',
        description: 'Reliable transport in Wadi Ad Dawasir. Connecting you to the airport (WAE) and the gateway to the Empty Quarter.',
        url: 'https://haramtaxiservice.com/locations/wadi-ad-dawasir',
        type: 'website',
    },
};

export default function WadiLocationPage() {
    const services = [
        {
            name: 'Wadi Ad Dawasir Airport (WAE)',
            description: 'Direct airport taxi service for domestic flights. Timely pickups and drop-offs.',
            icon: ArrowRight,
            href: '/services/wadi-ad-dawasir-airport-taxi'
        },
        {
            name: 'Empty Quarter Gateway',
            description: 'Transport for adventurers and researchers heading into the Rub\' al Khali desert.',
            icon: Sun,
            href: '/services/empty-quarter-taxi'
        },
        {
            name: 'Intercity to Riyadh/Abha',
            description: 'Long-distance chauffeured rides to Riyadh or the southern Asir region.',
            icon: MapPin,
            href: '/services/intercity-taxi'
        },
        {
            name: 'Heritage Tours',
            description: 'Visits to Qaryat Al-Faw archaeological site and historic palaces.',
            icon: Mountain, // Using Mountain as generally suitable for ruins/earth
            href: '/services/heritage-taxi'
        }
    ];

    const faqs = [
        {
            question: "How far is Riyadh from Wadi Ad Dawasir?",
            answer: "Wadi Ad Dawasir is a major stopover, located about 600km south of Riyadh, a drive of approximately 6 hours."
        },
        {
            question: "Is there a taxi service at Wadi Ad Dawasir Airport?",
            answer: "Taxis can be limited. Pre-booking with us ensures a driver is waiting for your arrival at WAE Airport."
        },
        {
            question: "Can I book a trip to the Empty Quarter?",
            answer: "Yes, we can arrange transport to the edge of the Empty Quarter or coordinate with specialized 4x4 tour operators."
        },
        {
            question: "What are the taxi rates in Wadi Ad Dawasir?",
            answer: "Local city rides typically cost 30-50 SAR. Airport transfers start from 60 SAR depending on your location."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service Wadi Ad Dawasir",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+923080628195",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Prince Sultan Road",
            "addressLocality": "Wadi Ad Dawasir",
            "postalCode": "18615",
            "addressCountry": "SA"
        },
        "url": "https://haramtaxiservice.com/locations/wadi-ad-dawasir",
        "priceRange": "$$"
    };

    return (
        <div className="bg-amber-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

            {/* Breadcrumbs */}
            <div className="bg-amber-100 py-4 border-b border-amber-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-amber-900/60">
                    <Link href="/" className="hover:text-amber-700">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/locations" className="hover:text-amber-700">Locations</Link>
                    <span className="mx-2">/</span>
                    <span className="font-semibold text-amber-900">Wadi Ad Dawasir</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-amber-900/50 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-stone-800 z-0">
                    <Image
                        src="/wadi-desert.webp"
                        alt="Taxi Service inside the Wadi and Desert"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 rounded-full mb-6 animate-fade-in border border-amber-400/50">
                            <Sun className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Desert Gateway</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Wadi Ad Dawasir Taxi
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-amber-50">
                            Connecting the central heartland to the southern highlands. Airport & Intercity.
                        </p>

                        <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/923080628195?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Wadi%20Ad%20Dawasir." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                        <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg w-full sm:w-auto shadow-lg hover:scale-105 transition-transform flex items-center justify-center">
                                            <svg className="w-6 h-6 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                                            Book via WhatsApp
                                        </Button>
                                    </a>
                                </div>
                    </div>
                </div>
            </section>

            {/* AI Overview Block */}
            <section className="py-12 bg-white border-b border-amber-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Taxi Fares in Wadi Ad Dawasir</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        A taxi from Wadi Ad Dawasir Airport (WAE) to town center is approximately <span className="font-bold text-amber-700">60-80 SAR</span>.
                        Private transfers to Riyadh can cost between <span className="font-bold text-amber-700">600-800 SAR</span>.
                        Local hourly rental starts at <span className="font-bold text-amber-700">100 SAR/hour</span>.
                    </p>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-16">

                            {/* Why Choose Us */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                    <Shield className="w-8 h-8 text-amber-600" />
                                    Why Haram Taxi Wadi?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                                            <MapPin className="w-5 h-5 text-amber-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Long Haul Experts</h3>
                                            <p className="text-sm text-gray-600">Our vehicles are maintained for long desert highway journeys to Riyadh or Abha.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                                            <Sun className="w-5 h-5 text-amber-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Local Insight</h3>
                                            <p className="text-sm text-gray-600">We can guide you to the best heritage sites like Qaryat Al-Faw safely.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Services List */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h2>
                                <div className="space-y-4">
                                    {services.map((service, index) => (
                                        <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                                                <service.icon className="w-6 h-6 text-amber-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                                <p className="text-gray-600 mb-3">{service.description}</p>
                                                {service.href && (
                                                    <Link href={service.href} className="text-amber-600 font-semibold text-sm hover:underline flex items-center gap-1">
                                                        More Info <ArrowRight className="w-3 h-3" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQs */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Local Travel FAQs</h2>
                                <div className="space-y-4">
                                    {faqs.map((faq, idx) => (
                                        <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200">
                                            <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                                            <p className="text-gray-600">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Booking Widget */}
                            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden sticky top-24">
                                <div className="bg-amber-600 p-6 text-white">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <Clock className="w-5 h-5" /> Quick Booking
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Airport & Highways</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/923080628195?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Wadi%20Ad%20Dawasir." target="_blank" rel="noopener noreferrer" className="block w-full">
                                        <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold h-12">
                                            <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg> WhatsApp Booking
                                        </Button>
                                    </a>
                                </div>
                                </div>
                            </div>

                            {/* Local Info */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-amber-600" /> Key Landmarks
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div> Wadi Ad Dawasir Airport (WAE)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div> Old Emirate Palace</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div> Qaryat Al-Faw (100km+)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div> Prince Sultan University College</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div> Empty Quarter Edge</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Wadi Ad Dawasir" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Crossing the Kingdom?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Make your stop in Wadi Ad Dawasir comfortable with our premium local transport.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-6 text-lg font-bold">
                                Book Now
                            </Button>
                        </Link>
                        <a href="tel:+923080628195">
                            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-10 py-6 text-lg">
                                Call Driver
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

