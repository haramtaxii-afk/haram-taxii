import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Star, Shield, Car, CheckCircle2, Building, Plane, ArrowRight } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://www.haramtaxii.com/locations/tabuk',
    },
    title: 'Taxi Service in Tabuk & NEOM | The Line & Airport Transfers',
    description: 'Professional taxi service in Tabuk and NEOM. Airport transfers to Prince Sultan Airport (TUU) and NEOM Bay (NUM). Rides to The Line, Trojena, and Sindalah.',
    keywords: ['taxi Tabuk', 'NEOM taxi service', 'The Line transport', 'Tabuk airport taxi', 'Neom Bay airport transfer'],
    openGraph: {
        title: 'Taxi Service in Tabuk & NEOM | The Line',
        description: 'Reliable transport for NEOM project visitors and Tabuk residents. Airport transfers and site visits.',
        url: 'https://www.haramtaxii.com/locations/tabuk',
        type: 'website',
    },
};

export default function TabukLocationPage() {
    const services = [
        {
            name: 'Tabuk Airport (TUU) Transfer',
            description: 'Reliable pickup from Prince Sultan bin Abdulaziz Airport to Tabuk city or NEOM base camps.',
            icon: Plane,
            href: '/services/tabuk-airport-transfer'
        },
        {
            name: 'NEOM & The Line Transport',
            description: 'Authorized transport services for visitors and contractors heading to NEOM Community, The Line, or Trojena.',
            icon: Building,
            href: '/services/neom-taxi'
        },
        {
            name: 'NEOM Bay Airport (NUM)',
            description: 'Direct transfers from NEOM Bay Airport to resorts and project sites.',
            icon: Plane,
            href: '/services/neom-bay-transfer'
        },
        {
            name: 'Historical Tours',
            description: 'Visit Tabuk Castle and the ancient diverse landscapes of Wadi Al Disah.',
            icon: MapPin,
            href: '/services/tabuk-city-tour'
        },
        {
            name: 'Jordan Border (Halat Ammar)',
            description: 'Direct transfers to the Halat Ammar border crossing for travel to Jordan.',
            icon: ArrowRight, // Using ArrowRight as Globe needs import
            href: '/routes/tabuk-to-jordan-border'
        }
    ];

    const faqs = [
        {
            question: "Is there a taxi service to NEOM from Tabuk?",
            answer: "Yes, we provide specialized 4x4 and sedan taxi services from Tabuk to all NEOM sectors, including The Line and Oxagon."
        },
        {
            question: "How long is the drive from Tabuk to NEOM?",
            answer: "It generally takes about 2 to 2.5 hours to reach the main NEOM community areas from Tabuk City."
        },
        {
            question: "Do I need a permit to enter NEOM?",
            answer: "While transport is available, entry to certain construction zones is restricted. Please ensure you have your visitor passes ready if visiting work sites."
        },
        {
            question: "What is the cost of a taxi to NEOM?",
            answer: "Fares typically start from 400 SAR for a one-way trip, depending on the specific destination within the massive NEOM zones."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service Tabuk",
        "image": "https://www.haramtaxii.com/logo.png",
        "telephone": "+923132222436",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "King Faisal Road",
            "addressLocality": "Tabuk",
            "postalCode": "47913",
            "addressCountry": "SA"
        },
        "url": "https://www.haramtaxii.com/locations/tabuk",
        "priceRange": "$$"
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

            {/* Breadcrumbs */}
            <div className="bg-slate-100 py-4 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-600">
                    <Link href="/" className="hover:text-cyan-600">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/locations" className="hover:text-cyan-600">Locations</Link>
                    <span className="mx-2">/</span>
                    <span className="font-semibold text-slate-900">Tabuk & NEOM</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-cyan-950/60 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-slate-900 z-0">
                    <Image
                        src="/neom-the-line-concept.webp"
                        alt="Taxi Service in Tabuk and NEOM"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 rounded-full mb-6 animate-fade-in shadow-lg shadow-cyan-500/20">
                            <Star className="w-4 h-4 fill-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Gateway to the Future</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Tabuk & NEOM Taxi Service
                        </h1>
                        <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed font-light">
                            Your trusted connection between Tabuk City, Prince Sultan Airport, and the NEOM gigaprojects.
                        </p>

                        <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/923132222436?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Tabuk." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
            <section className="py-12 bg-white border-b border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">How do I get from Tabuk to NEOM?</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        The most convenient way is by private taxi. Fares from Tabuk Airport to NEOM Community usually range between <span className="font-bold text-cyan-700">400 SAR and 600 SAR</span>.
                        The journey takes approximately 2 hours via King Faisal Road. We offer licensed 4x4s suitable for desert terrain.
                    </p>
                    <p className="text-sm text-slate-400 mt-2 italic">*Prices confirm upon booking. Corporate accounts available.</p>
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
                                <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                    <Shield className="w-8 h-8 text-cyan-600" />
                                    Why Choose Us in Tabuk?
                                </h2>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-cyan-500 shrink-0 mt-1" />
                                        <div>
                                            <strong className="block text-slate-900">NEOM Knowledgeable</strong>
                                            <p className="text-slate-600 text-sm">Our drivers know the locations of the various camps and project sites like Sharma, Magna, and Gayal.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-cyan-500 shrink-0 mt-1" />
                                        <div>
                                            <strong className="block text-slate-900">Long Distance Comfort</strong>
                                            <p className="text-slate-600 text-sm">Modern SUVs for the long stretches of highway between Tabuk and the coast.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-cyan-500 shrink-0 mt-1" />
                                        <div>
                                            <strong className="block text-slate-900">Reliable Airport Pickups</strong>
                                            <p className="text-slate-600 text-sm">Flight tracking for both TUU (Tabuk) and NUM (Neom Bay) airports.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Services List */}
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-8">Transport Services</h2>
                                <div className="space-y-4">
                                    {services.map((service, index) => (
                                        <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                            <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center shrink-0">
                                                <service.icon className="w-6 h-6 text-cyan-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.name}</h3>
                                                <p className="text-slate-600 mb-3">{service.description}</p>
                                                {service.href && (
                                                    <Link href={service.href} className="text-cyan-600 font-semibold text-sm hover:underline flex items-center gap-1">
                                                        Check Rates <ArrowRight className="w-3 h-3" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQs */}
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {faqs.map((faq, idx) => (
                                        <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200">
                                            <h3 className="font-bold text-slate-900 mb-2">{faq.question}</h3>
                                            <p className="text-slate-600">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Booking Widget */}
                            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden sticky top-24">
                                <div className="bg-cyan-600 p-6 text-white">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <Clock className="w-5 h-5" /> Book Tabuk/NEOM
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Instant confirmation available</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/923132222436?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Tabuk." target="_blank" rel="noopener noreferrer" className="block w-full">
                                        <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold h-12">
                                            <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg> WhatsApp Booking
                                        </Button>
                                    </a>
                                </div>
                                </div>
                            </div>

                            {/* Local Info */}
                            <div className="bg-white rounded-2xl p-6 border border-slate-200">
                                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-cyan-500" /> Key Destinations
                                </h3>
                                <ul className="space-y-3 text-sm text-slate-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div> Tabuk City Centre</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div> Tabuk Airport (TUU)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div> NEOM Community 1 & 2</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div> NEOM Bay Airport (NUM)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div> Sharma & Magna</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div> Wadi Al Disah</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div> Halat Ammar (Jordan Border)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Tabuk" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-slate-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Visiting the Future?</h2>
                    <p className="text-xl text-slate-400 mb-8">
                        Secure your reliable transport in Tabuk and NEOM region today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white px-10 py-6 text-lg font-bold">
                                Book NEOM Taxi
                            </Button>
                        </Link>
                        <a href="tel:+923132222436">
                            <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800 px-10 py-6 text-lg">
                                Call Support
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

