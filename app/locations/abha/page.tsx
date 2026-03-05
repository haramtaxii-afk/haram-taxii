import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Star, Shield, Car, CheckCircle2, Cloud, Mountain, ArrowRight } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/abha',
    },
    title: 'Taxi Service in Abha & Khamis Mushait | AHB Airport Taxi',
    description: 'Premier taxi service in Abha and Khamis Mushait. Reliable airport transfers (AHB), tours to Soudah, Green Mountain, and High City. 24/7 Service.',
    keywords: ['taxi Abha', 'Khamis Mushait taxi', 'Abha airport taxi', 'Soudah transport', 'Abha private driver'],
    openGraph: {
        title: 'Taxi Service in Abha | Airport & Tourism',
        description: 'Comfortable rides in the cloudy city. Airport transfers and sightseeing tours in Abha.',
        url: 'https://haramtaxiservice.com/locations/abha',
        type: 'website',
    },
};

export default function AbhaLocationPage() {
    const services = [
        {
            name: 'Abha Airport (AHB) Transfer',
            description: 'Prompt pickup from Abha International Airport to your hotel in Abha or Khamis Mushait.',
            icon: Car,
            href: '/services/abha-airport-taxi'
        },
        {
            name: 'Soudah Mountain Tour',
            description: 'Private day trips to Al Soudah, the highest peak in Saudi Arabia. Enjoy the cool weather comfortably.',
            icon: Mountain,
            href: '/services/soudah-tour'
        },
        {
            name: 'Khamis Mushait Link',
            description: 'Fast and reliable intercity transfers between Abha and the commercial hub of Khamis Mushait.',
            icon: MapPin,
            href: '/routes/abha-to-khamis'
        },
        {
            name: 'Rijal Almaa Village',
            description: 'Cultural tours to the heritage village of Rijal Almaa. Navigate the winding roads safely with us.',
            icon: Star,
            href: '/services/rijal-almaa-tour'
        }
    ];

    const faqs = [
        {
            question: "How much is a taxi from Abha Airport to the city center?",
            answer: "Fares typically range from 70 SAR to 100 SAR depending on your hotel location. Rides to Khamis Mushait range from 100 SAR to 150 SAR."
        },
        {
            question: "Do you service scenic spots like the High City?",
            answer: "Yes, we provide drop-offs and pickups for all major tourist spots including the High City, Green Mountain (Jebel Zara), and Art Street."
        },
        {
            question: "Can I book a car for a full day tour in Abha?",
            answer: "Absolutely. Our hourly chauffeur service is perfect for visiting multiple sites like Soudah and Habala Hanging Village in one day."
        },
        {
            question: "Are rides available to Jazan from Abha?",
            answer: "Yes, we offer long-distance transfers down the escarpment to Jazan. It's a scenic 2.5 - 3 hour drive handled by expert drivers."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service Abha",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+923080628195",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "King Abdulaziz Road",
            "addressLocality": "Abha",
            "postalCode": "62521",
            "addressCountry": "SA"
        },
        "url": "https://haramtaxiservice.com/locations/abha",
        "priceRange": "$$"
    };

    return (
        <div className="bg-indigo-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

            {/* Breadcrumbs */}
            <div className="bg-indigo-100 py-4 border-b border-indigo-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-indigo-900/60">
                    <Link href="/" className="hover:text-indigo-700">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/locations" className="hover:text-indigo-700">Locations</Link>
                    <span className="mx-2">/</span>
                    <span className="font-semibold text-indigo-900">Abha</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-indigo-900/40 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-slate-800 z-0">
                    <Image
                        src="/abha-green-mountain.webp"
                        alt="Taxi Service in Abha Saudi Arabia"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 rounded-full mb-6 animate-fade-in border border-indigo-400/50">
                            <Cloud className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Above the Clouds</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Abha & Khamis Taxi Service
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-indigo-50">
                            Reliable transport in the Asir region. Airport transfers, mountain tours, and city rides.
                        </p>

                        <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/923080628195?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Abha." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
            <section className="py-12 bg-white border-b border-indigo-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Taxi Fares in Abha</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Taxi fares in Abha are affordable. An airport transfer to the city center costs between <span className="font-bold text-indigo-700">70 SAR and 100 SAR</span>.
                        A trip to the top of Al Soudah typically costs around <span className="font-bold text-indigo-700">150 SAR</span>.
                        We offer fixed rates to avoid haggling.
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
                                    <Shield className="w-8 h-8 text-indigo-600" />
                                    Why Choose Haram Taxi Abha?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center shrink-0">
                                            <Mountain className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Mountain Experts</h3>
                                            <p className="text-sm text-gray-600">Our drivers are skilled at navigating the steep and winding roads of Al Soudah and Rijal Almaa.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Khamis Mushait Coverage</h3>
                                            <p className="text-sm text-gray-600">We fully serve the Khamis Mushait commercial and military city areas.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Services List */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Service Offerings</h2>
                                <div className="space-y-4">
                                    {services.map((service, index) => (
                                        <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center shrink-0">
                                                <service.icon className="w-6 h-6 text-indigo-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                                <p className="text-gray-600 mb-3">{service.description}</p>
                                                {service.href && (
                                                    <Link href={service.href} className="text-indigo-600 font-semibold text-sm hover:underline flex items-center gap-1">
                                                        More details <ArrowRight className="w-3 h-3" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQs */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Asir Region FAQs</h2>
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
                                <div className="bg-indigo-600 p-6 text-white">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <Clock className="w-5 h-5" /> Book Your Ride
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">24/7 Availability</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/923080628195?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Abha." target="_blank" rel="noopener noreferrer" className="block w-full">
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
                                    <MapPin className="w-5 h-5 text-indigo-600" /> Coverage Areas
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div> Abha City Center</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div> Khamis Mushait</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div> Abha Airport (AHB)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div> Soudah High Point</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div> Rijal Almaa</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div> Habala Village</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Abha" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Explore the Saudi Highlands</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Safe and comfortable transport across Abha and Asir.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-6 text-lg font-bold">
                                Book Now
                            </Button>
                        </Link>
                        <a href="tel:+923080628195">
                            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-10 py-6 text-lg">
                                Call Support
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

