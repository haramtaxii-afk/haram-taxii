import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Shield, Globe, Star, ArrowRight } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/al-rass',
    },
    title: 'Taxi Service in Al Rass | Qassim Region Taxi',
    description: 'Trusted taxi service in Al Rass. Transfers to Buraidah, Qassim Airport, and Medina. Reliable local and intercity rides.',
    keywords: ['taxi Al Rass', 'Al Rass taxi', 'Qassim airport taxi', 'Al Rass to Medina taxi', 'Al Rass to Buraidah'],
    openGraph: {
        title: 'Taxi Service in Al Rass | Qassim Gateway',
        description: 'Professional transport in Al Rass. Connecting you to Qassim Airport and the Holy Cities.',
        url: 'https://haramtaxiservice.com/locations/al-rass',
        type: 'website',
    },
};

export default function AlRassLocationPage() {
    const services = [
        {
            name: 'Qassim Airport (ELQ)',
            description: 'Reliable transfers to Prince Naif bin Abdulaziz International Airport in Buraidah.',
            icon: Globe,
            href: '/services/qassim-airport-taxi'
        },
        {
            name: 'Medina Transfer',
            description: 'Direct and comfortable rides to Al Madinah Al Munawwarah via the highway.',
            icon: Star,
            href: '/services/medina-taxi'
        },
        {
            name: 'Buraidah/Unaizah',
            description: 'Intercity trips to neighboring Qassim cities for business, shopping, or family visits.',
            icon: MapPin,
            href: '/services/buraidah-taxi'
        },
        {
            name: 'Local Errands',
            description: 'City taxis for shopping malls, hospitals, and colleges within Al Rass.',
            icon: ArrowRight,
            href: '/services/local-taxi'
        }
    ];

    const faqs = [
        {
            question: "How far is Al Rass from Qassim Airport?",
            answer: "It is about 60-70km away. The drive typically takes 45-50 minutes."
        },
        {
            question: "How much is a taxi to Medina?",
            answer: "A private sedan to Medina (approx. 400km) usually starts from 450-500 SAR."
        },
        {
            question: "Do you have female drivers?",
            answer: "We are expanding our fleet. Please contact us in advance to check availability for specific requests."
        },
        {
            question: "Can I book a return trip from Buraidah?",
            answer: "Yes, you can book a round trip with waiting time tailored to your schedule."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service Al Rass",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+923080628195",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "King Fahd Road",
            "addressLocality": "Al Rass",
            "postalCode": "58839",
            "addressCountry": "SA"
        },
        "url": "https://haramtaxiservice.com/locations/al-rass",
        "priceRange": "$$"
    };

    return (
        <div className="bg-emerald-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

            {/* Breadcrumbs */}
            <div className="bg-emerald-100 py-4 border-b border-emerald-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-emerald-900/60">
                    <Link href="/" className="hover:text-emerald-700">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/locations" className="hover:text-emerald-700">Locations</Link>
                    <span className="mx-2">/</span>
                    <span className="font-semibold text-emerald-900">Al Rass</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-emerald-900/50 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-emerald-800 z-0">
                    <Image
                        src="/al-rass-park.webp"
                        alt="Taxi Service in Al Rass Qassim"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 rounded-full mb-6 animate-fade-in border border-emerald-400/50">
                            <Star className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Heart of Qassim</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Al Rass Taxi Service
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-emerald-50">
                            Your reliable partner for travel in Al Rass, Buraidah, and beyond.
                        </p>

                        <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/923080628195?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Al%20Rass." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
            <section className="py-12 bg-white border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Taxi Fares in Al Rass</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Transfers to Qassim Airport cost around <span className="font-bold text-emerald-700">120-150 SAR</span>.
                        Rides to Buraidah city center are typically <span className="font-bold text-emerald-700">80-100 SAR</span>.
                        Local trips within Al Rass start from <span className="font-bold text-emerald-700">15-25 SAR</span>.
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
                                    <Shield className="w-8 h-8 text-emerald-600" />
                                    Why Haram Taxi Al Rass?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                                            <Shield className="w-5 h-5 text-emerald-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Safe & Secure</h3>
                                            <p className="text-sm text-gray-600">All our vehicles are tracked and drivers are vetted for your peace of mind.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                                            <Globe className="w-5 h-5 text-emerald-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Airport Punctuality</h3>
                                            <p className="text-sm text-gray-600">We guarantee on-time arrivals for all flights from Qassim/Gassim Airport.</p>
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
                                            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                                                <service.icon className="w-6 h-6 text-emerald-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                                <p className="text-gray-600 mb-3">{service.description}</p>
                                                {service.href && (
                                                    <Link href={service.href} className="text-emerald-600 font-semibold text-sm hover:underline flex items-center gap-1">
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
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Al Rass FAQs</h2>
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
                                <div className="bg-emerald-600 p-6 text-white">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <Clock className="w-5 h-5" /> Schedule Taxi
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Al Rass & Region</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/923080628195?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Al%20Rass." target="_blank" rel="noopener noreferrer" className="block w-full">
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
                                    <MapPin className="w-5 h-5 text-emerald-600" /> Key Sites
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div> Prince Sultan Park</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div> Al Rass General Hospital</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div> Sahara Mall</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div> Shenana Historic Tower</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Al Rass" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Traveling in Qassim?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Experience the comfort and reliability of our Al Rass fleet.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-6 text-lg font-bold">
                                Book Now
                            </Button>
                        </Link>
                        <a href="tel:+923080628195">
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

