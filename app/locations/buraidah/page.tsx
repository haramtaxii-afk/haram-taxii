import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Star, Shield, Car, CheckCircle2, Trees, ArrowRight, Sun } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://www.haramtaxii.com/locations/buraidah',
    },
    title: 'Taxi Service in Al Qassim | Buraidah & Unayzah Transfers',
    description: 'Reliable taxi service in Al Qassim. Transfers between Buraidah, Unayzah, and Prince Naif Airport (ELQ). Intercity rides to Riyadh.',
    keywords: ['taxi Buraidah', 'taxi Unayzah', 'taxi Al Qassim', 'Qassim airport taxi', 'driver in Buraidah'],
    openGraph: {
        title: 'Taxi Service in Al Qassim | Buraidah & Unayzah',
        description: 'Professional taxi service across the Qassim region. Airport transfers and intercity travel.',
        url: 'https://www.haramtaxii.com/locations/buraidah',
        type: 'website',
    },
};

export default function QassimLocationPage() {
    const services = [
        {
            name: 'Prince Naif Airport (ELQ) Transfer',
            description: 'Direct transfers from Qassim International Airport to Buraidah, Unayzah, or Al Rass.',
            icon: Car,
            href: '/services/qassim-airport-taxi'
        },
        {
            name: 'Buraidah to Unayzah',
            description: 'Quick and convenient intercity taxi service connecting the two major cities of Qassim.',
            icon: MapPin,
            href: '/routes/buraidah-to-unayzah'
        },
        {
            name: 'Qassim to Riyadh',
            description: 'Comfortable long-distance travel to Riyadh (approx 3.5 hours). Private car, door-to-door.',
            icon: ArrowRight,
            href: '/routes/qassim-to-riyadh'
        },
        {
            name: 'Date Festival Transfers',
            description: 'Dedicated transport during the Buraidah Date Festival season for visitors and traders.',
            icon: Trees,
            href: '/services/date-festival-transfer'
        }
    ];

    const faqs = [
        {
            question: "How much is a taxi from Qassim Airport to Buraidah?",
            answer: "A taxi from Prince Naif Airport (ELQ) to downtown Buraidah typically costs between 60 SAR and 90 SAR. To Unayzah, it is usually 80-120 SAR."
        },
        {
            question: "Is there Uber in Buraidah and Unayzah?",
            answer: "Yes, ride-hailing apps exist, but availability can be low during prayer times or early mornings. Our pre-booked service guarantees your ride."
        },
        {
            question: "Can you take me to the Al Rass area?",
            answer: "Yes, we cover the entire Al Qassim region including Al Rass, Al Bukairiyah, and Al Mithnab."
        },
        {
            question: "How long does it take to drive from Buraidah to Riyadh?",
            answer: "The drive typically takes about 3 hours and 30 minutes via the Qassim-Riyadh highway. It's a smooth, well-maintained road."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service Al Qassim",
        "image": "https://www.haramtaxii.com/logo.png",
        "telephone": "+923132222436",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "King Fahd Road",
            "addressLocality": "Buraidah",
            "postalCode": "51411",
            "addressCountry": "SA"
        },
        "url": "https://www.haramtaxii.com/locations/buraidah",
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
                    <span className="font-semibold text-amber-900">Al Qassim</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-amber-900/40 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-stone-800 z-0">
                    <Image
                        src="/qassim-dates-market.webp"
                        alt="Taxi Service in Buraidah and Unayzah"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 rounded-full mb-6 animate-fade-in border border-amber-400/50">
                            <Sun className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Heart of Najd</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Al Qassim Taxi Service
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-amber-50">
                            Connecting Buraidah, Unayzah, and Prince Naif Airport (ELQ) with reliable private transport.
                        </p>

                        <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/923132222436?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Buraidah." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Taxi Prices in Al Qassim</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Getting a taxi from Prince Naif Airport (ELQ) to Buraidah costs around <span className="font-bold text-amber-700">70 SAR</span>.
                        Transfers to Unayzah are slightly higher, around <span className="font-bold text-amber-700">100 SAR</span>.
                        Intercity trips to Riyadh start from <span className="font-bold text-amber-700">450 SAR</span> for a private sedan.
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
                                    Why Haram Taxi in Qassim?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                                            <Trees className="w-5 h-5 text-amber-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Regional Knowledge</h3>
                                            <p className="text-sm text-gray-600">We know every farm road and district in Buraidah and Unayzah perfectly.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-5 h-5 text-amber-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Always On Time</h3>
                                            <p className="text-sm text-gray-600">Crucial for early morning flights from Qassim Airport. We never delay.</p>
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
                                                        Details <ArrowRight className="w-3 h-3" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQs */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Qassim FAQs</h2>
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
                                        <Clock className="w-5 h-5" /> Book Transfer
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Cash or Online</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/923132222436?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Buraidah." target="_blank" rel="noopener noreferrer" className="block w-full">
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
                                    <MapPin className="w-5 h-5 text-amber-600" /> Service Area
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div> Buraidah City</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div> Unayzah City</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div> Prince Naif Airport (ELQ)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div> Al Rass</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div> Al Bukairiyah</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div> Al Mithnab</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Buraidah" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Need a Lift in Al Qassim?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        The most trusted private taxi service in Buraidah and Unayzah.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-6 text-lg font-bold">
                                Book Now
                            </Button>
                        </Link>
                        <a href="tel:+923132222436">
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

