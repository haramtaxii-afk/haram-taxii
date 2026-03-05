import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Star, Shield, Car, CheckCircle2, Navigation, Plane, Globe, ArrowRight } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://www.haramtaxii.com/locations/dammam',
    },
    title: 'Trusted Taxi Service in Dammam | Airport & Bahrain Causeway Transfers',
    description: 'Professional taxi service in Dammam. Airport transfers to King Fahd Int\'l (DMM), Bahrain Causeway rides, and intercity travel. Licensed & Insured.',
    keywords: ['taxi Dammam', 'Dammam airport taxi', 'taxi Dammam to Bahrain', 'Dammam taxi service', 'Uber alternative Dammam'],
    openGraph: {
        title: 'Taxi Service in Dammam | DMM Airport & Bahrain',
        description: 'Reliable taxi in Dammam. Servicing Airport (DMM), Al Khobar, and Bahrain Causeway. Book now.',
        url: 'https://www.haramtaxii.com/locations/dammam',
        type: 'website',
    },
};

export default function DammamLocationPage() {
    const services = [
        {
            name: 'DMM Airport Transfer',
            description: 'Fixed-rate pickups from King Fahd International Airport (DMM) to Dammam, Khobar, or Jubail.',
            icon: Plane,
            href: '/services/dammam-airport-transfer'
        },
        {
            name: 'Bahrain Causeway',
            description: 'Seamless cross-border taxi service from Dammam/Khobar to Bahrain. We handle the paperwork.',
            icon: Globe,
            href: '/services/dammam-to-bahrain'
        },
        {
            name: 'Intercity Travel',
            description: 'Private rides from Dammam to Riyadh (4 hrs) or Makkah/Madinah for Umrah.',
            icon: Navigation,
            href: '/routes/dammam-to-makkah'
        },
        {
            name: 'City Commute',
            description: 'Daily transfers within Dammam, Dhahran, and Al Khobar for business or leisure.',
            icon: Car,
            href: '/services/hourly-chauffeur'
        }
    ];

    const faqs = [
        {
            question: "How much is a taxi from Dammam Airport to the city?",
            answer: "Fares typically range from 120 SAR to 180 SAR depending on your destination in Dammam or Al Khobar. We offer fixed rates to avoid meter surprises."
        },
        {
            question: "Can you take me from Dammam to Bahrain?",
            answer: "Yes! We specialize in King Fahd Causeway transfers. Our drivers are experienced with border procedures for a smooth crossing."
        },
        {
            question: "Do you service Aramco / Dhahran areas?",
            answer: "Yes, we provide reliable transport for professionals needing access to Dhahran Techno Valley and Aramco districts (gate clearance required)."
        },
        {
            question: "Is the taxi service available 24/7?",
            answer: "Absolutely. Whether your flight lands at 3 AM or you need an early morning ride to the Causeway, we are available 24/7."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service Dammam",
        "image": "https://www.haramtaxii.com/logo.png",
        "telephone": "+923132222436",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "King Abdullah Road",
            "addressLocality": "Dammam",
            "postalCode": "31411",
            "addressCountry": "SA"
        },
        "url": "https://www.haramtaxii.com/locations/dammam",
        "priceRange": "$$"
    };

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

            {/* Breadcrumbs */}
            <div className="bg-gray-50 py-4 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/" className="hover:text-teal-600">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/locations" className="hover:text-teal-600">Locations</Link>
                    <span className="mx-2">/</span>
                    <span className="font-semibold text-gray-900">Dammam</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-teal-900/70 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-gray-900 z-0">
                    <Image
                        src="/dammam-corniche.webp"
                        alt="Taxi Service in Dammam"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500 rounded-full mb-6 animate-fade-in">
                            <Star className="w-4 h-4 fill-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Top Rated in Eastern Province</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Dammam&apos;s Reliable Taxi Service
                        </h1>
                        <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed font-light">
                            Seamless transfers for Dammam Airport (DMM), Bahrain Causeway, and Al Khobar.
                        </p>

                        <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/923132222436?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Dammam." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
            <section className="py-12 bg-gray-50 border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">How much does a taxi cost in Dammam?</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Taxi service in Dammam typically costs between <span className="font-bold">100 SAR and 200 SAR</span> for airport runs, depending on the district (e.g., Al Shatti or Al Faisaliyah).
                        Cross-border trips to Bahrain start from <span className="font-bold">500 SAR</span>. available 24/7.
                    </p>
                    <p className="text-sm text-gray-500 mt-2 italic">*Prices vary by vehicle type and waiting time at borders.</p>
                </div>
            </section>

            {/* Service Details Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-16">

                            {/* Why Choose Us */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                    <Shield className="w-8 h-8 text-teal-500" />
                                    Why Choose Haram Taxi Dammam?
                                </h2>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-teal-500 shrink-0 mt-1" />
                                        <div>
                                            <strong className="block text-gray-900">Licensed & Cross-Border Ready</strong>
                                            <p className="text-gray-600 text-sm">TGA-certified for Saudi operations and authorized for Bahrain Causeway crossings.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-teal-500 shrink-0 mt-1" />
                                        <div>
                                            <strong className="block text-gray-900">Fixed Rates, No Meters</strong>
                                            <p className="text-gray-600 text-sm">Airport transfer prices significantly cheaper than DMM airport taxis.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-teal-500 shrink-0 mt-1" />
                                        <div>
                                            <strong className="block text-gray-900">Professional Chauffeurs</strong>
                                            <p className="text-gray-600 text-sm">Background-checked drivers who know the fastest routes to Al Khobar and Jubail.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-teal-500 shrink-0 mt-1" />
                                        <div>
                                            <strong className="block text-gray-900">24/7 Reliability</strong>
                                            <p className="text-gray-600 text-sm">We never sleep. Pre-book your ride for 3 AM flights with confidence.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Services List */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Eastern Province Services</h2>
                                <div className="space-y-4">
                                    {services.map((service, index) => (
                                        <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
                                                <service.icon className="w-6 h-6 text-teal-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                                <p className="text-gray-600 mb-3">{service.description}</p>
                                                {service.href && (
                                                    <Link href={service.href} className="text-teal-600 font-semibold text-sm hover:underline flex items-center gap-1">
                                                        View Options <ArrowRight className="w-3 h-3" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Case Study */}
                            <div className="bg-gradient-to-r from-teal-900 to-gray-900 text-white rounded-2xl p-8 shadow-xl">
                                <h3 className="text-xl font-bold mb-4 font-mono text-teal-300">Case Study: DMM Airport</h3>
                                <p className="text-gray-300 mb-4 font-medium">Problem: Late Night Arrival</p>
                                <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                                    A family arrived at King Fahd Airport at 2:00 AM. Airport taxis were charging exorbitant rates with long lines. They pre-booked with Haram Taxi.
                                </p>
                                <p className="text-white font-bold border-l-4 border-teal-500 pl-4">
                                    Outcome: Driver was waiting at arrivals with a sign. Fixed price of 140 SAR (saving ~30%). Family reached Al Khobar hotel in 35 mins comfort.
                                </p>
                            </div>

                            {/* FAQs */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {faqs.map((faq, idx) => (
                                        <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
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
                                <div className="bg-teal-600 p-6 text-white">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <Clock className="w-5 h-5" /> Book Dammam Taxi
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Check rates directly via WhatsApp</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/923132222436?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Dammam." target="_blank" rel="noopener noreferrer" className="block w-full">
                                        <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold h-12">
                                            <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg> WhatsApp Booking
                                        </Button>
                                    </a>
                                </div>
                                </div>
                            </div>

                            {/* Local Info */}
                            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-teal-500" /> Coverage Area
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    Serving the Greater Dammam Area:
                                </p>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div> Dammam City Center</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div> Al Khobar / Corniche</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div> Dhahran / Aramco</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div> King Fahd Airport (DMM)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div> Jubail Industrial City</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Dammam" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Ready to Ride in Dammam?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Experience the best taxi service in the Eastern Province. Licensed, Safe, and Affordable.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-10 py-6 text-lg font-bold">
                                Book Today
                            </Button>
                        </Link>
                        <a href="tel:+923132222436">
                            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-10 py-6 text-lg">
                                Emergency Service
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

