import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Shield, Plane, Users, ArrowRight } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://www.haramtaxii.com/locations/dawadmi',
    },
    title: 'Taxi Service in Dawadmi | Central Saudi Transport',
    description: 'Premier taxi service in Dawadmi. Airport transfers (DWD), intercity rides to Riyadh and Taif, and local transport.',
    keywords: ['taxi Dawadmi', 'Dawadmi airport taxi', 'taxi to Riyadh from Dawadmi', 'taxi to Taif from Dawadmi', 'Dawadmi intercity ride'],
    openGraph: {
        title: 'Taxi Service in Dawadmi | Heart of Najd',
        description: 'Reliable taxis in Dawadmi. Connecting King Salman Domestic Airport to the city and region.',
        url: 'https://www.haramtaxii.com/locations/dawadmi',
        type: 'website',
    },
};

export default function DawadmiLocationPage() {
    const services = [
        {
            name: 'King Salman Airport (DWD)',
            description: 'Prompt airport taxi service for arrivals and departures at Dawadmi Domestic Airport.',
            icon: Plane,
            href: '/services/dawadmi-airport-taxi'
        },
        {
            name: 'Riyadh Intercity',
            description: 'Comfortable long-distance travel to Riyadh (approx. 3 hours) for business or medical visits.',
            icon: ArrowRight,
            href: '/services/riyadh-taxi'
        },
        {
            name: 'Taif Connection',
            description: 'Direct routes to the summer capital of Taif, passing through the central desert landscapes.',
            icon: MapPin,
            href: '/services/taif-taxi'
        },
        {
            name: 'Local Transport',
            description: 'Available for daily errands, hospital visits, and shopping trips within Dawadmi.',
            icon: Users,
            href: '/services/city-taxi'
        }
    ];

    const faqs = [
        {
            question: "How far is Dawadmi from Riyadh?",
            answer: "Dawadmi is approximately 330km west of Riyadh. The drive generally takes about 3 to 3.5 hours."
        },
        {
            question: "Do you service King Salman Domestic Airport?",
            answer: "Yes, we are the leading taxi provider for airport transfers at DWD, ensuring timely arrivals for your flight."
        },
        {
            question: "Can I book a ride to Makkah?",
            answer: "Yes, we provide Umrah taxi services from Dawadmi to Makkah, which is about a 5-6 hour journey."
        },
        {
            question: "Are family cars available?",
            answer: "Yes, our fleet includes GMCs and SUVs suitable for large families traveling together."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service Dawadmi",
        "image": "https://www.haramtaxii.com/logo.png",
        "telephone": "+923132222436",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "King Abdulaziz Road",
            "addressLocality": "Dawadmi",
            "postalCode": "17461",
            "addressCountry": "SA"
        },
        "url": "https://www.haramtaxii.com/locations/dawadmi",
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
                    <span className="font-semibold text-amber-900">Dawadmi</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-amber-900/50 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-amber-800 z-0">
                    <Image
                        src="/dawadmi-desert.webp"
                        alt="Taxi Service in Dawadmi and Desert"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 rounded-full mb-6 animate-fade-in border border-amber-400/50">
                            <MapPin className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Heart of Najd</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Dawadmi Taxi Service
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-amber-50">
                            Connecting the Central Region. Airport transfers and long-distance comfort.
                        </p>

                        <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/923132222436?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Dawadmi." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Taxi Fares in Dawadmi</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Local taxis within Dawadmi average <span className="font-bold text-amber-700">15-20 SAR</span>.
                        Rides to Riyadh typically cost <span className="font-bold text-amber-700">300-400 SAR</span>.
                        Airport transfers to DWD are approximately <span className="font-bold text-amber-700">50-70 SAR</span> depending on distance.
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
                                    Why Haram Taxi Dawadmi?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                                            <Plane className="w-5 h-5 text-amber-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Flight Tracking</h3>
                                            <p className="text-sm text-gray-600">We monitor flights at King Salman Airport to ensure we are there when you land.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                                            <MapPin className="w-5 h-5 text-amber-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Regional Expert</h3>
                                            <p className="text-sm text-gray-600">Our drivers know the best routes through the central Najd region to Riyadh and Taif.</p>
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
                                                        Booking Info <ArrowRight className="w-3 h-3" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQs */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Dawadmi FAQs</h2>
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
                                        <Clock className="w-5 h-5" /> Book Your Ride
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Airport & Intercity</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/923132222436?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Dawadmi." target="_blank" rel="noopener noreferrer" className="block w-full">
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
                                    <MapPin className="w-5 h-5 text-amber-600" /> Key Locations
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div> King Salman Airport (DWD)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div> Dawadmi General Hospital</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div> King Abdulaziz Road</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div> Heritage Village</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div> College of Technology</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Dawadmi" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Need a Long Distance Ride?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Travel comfortably across the Kingdom from the heart of Najd.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-6 text-lg font-bold">
                                Book Now
                            </Button>
                        </Link>
                        <a href="tel:+923132222436">
                            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-10 py-6 text-lg">
                                Call Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

