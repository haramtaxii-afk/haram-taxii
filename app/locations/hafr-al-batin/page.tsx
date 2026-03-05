import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Star, Shield, Car, CheckCircle2, ArrowRight } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://www.haramtaxii.com/locations/hafr-al-batin',
    },
    title: 'Taxi Service in Hafr Al Batin | Kuwait Border Transfer',
    description: 'Reliable taxi in Hafr Al Batin. Direct transfers to Al Raqi (Kuwait Border) and Qaisumah Airport (AQI). 24/7 Service.',
    keywords: ['taxi Hafr Al Batin', 'Kuwait border taxi', 'Al Raqi border taxi', 'Hafr Al Batin airport taxi', 'taxi to Kuwait'],
    openGraph: {
        title: 'Taxi Service in Hafr Al Batin | Kuwait Border',
        description: 'Professional transfers to the Kuwait border and Qaisumah Airport. Safe and affordable.',
        url: 'https://www.haramtaxii.com/locations/hafr-al-batin',
        type: 'website',
    },
};

export default function HafrLocationPage() {
    const services = [
        {
            name: 'Kuwait Border (Al Raqi) Transfer',
            description: 'Direct and fast taxi service to the Al Raqi border crossing for travelers heading to Kuwait.',
            icon: ArrowRight,
            href: '/routes/hafr-to-kuwait-border'
        },
        {
            name: 'Qaisumah Airport (AQI) Taxi',
            description: 'Punctual airport pickup and drop-off at Al Qaisumah/Hafr Al Batin Airport.',
            icon: Car,
            href: '/services/qaisumah-airport-taxi'
        },
        {
            name: 'Hafr to Riyadh',
            description: 'Long-distance intercity transfer to Riyadh via the Majmaah route (approx. 5 hours).',
            icon: MapPin,
            href: '/routes/hafr-to-riyadh'
        },
        {
            name: 'King Khalid Military City',
            description: 'Authorized drop-off at the gates of KKMC for personnel and visitors.',
            icon: Shield,
            href: '/services/kkmc-taxi'
        }
    ];

    const faqs = [
        {
            question: "How far is the Kuwait border from Hafr Al Batin?",
            answer: "The Al Raqi border crossing is about 90km from the center of Hafr Al Batin, taking roughly 1 hour by taxi."
        },
        {
            question: "Do you take passengers inside Kuwait?",
            answer: "We drop you off at the Saudi passport control at Al Raqi. You will need to arrange Kuwaiti transport on the other side or we can help arrange a cross-border car for an extra fee."
        },
        {
            question: "How much is a taxi to the Kuwait border?",
            answer: "A standard sedan trip to the Al Raqi border typically costs around 150-200 SAR."
        },
        {
            question: "Do you serve King Khalid Military City (KKMC)?",
            answer: "Yes, we frequently transport passengers to and from the KKMC main gates."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service Hafr Al Batin",
        "image": "https://www.haramtaxii.com/logo.png",
        "telephone": "+923132222436",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "King Abdulaziz Road",
            "addressLocality": "Hafr Al Batin",
            "postalCode": "39921",
            "addressCountry": "SA"
        },
        "url": "https://www.haramtaxii.com/locations/hafr-al-batin",
        "priceRange": "$$"
    };

    return (
        <div className="bg-orange-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

            {/* Breadcrumbs */}
            <div className="bg-orange-100 py-4 border-b border-orange-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-orange-900/60">
                    <Link href="/" className="hover:text-orange-700">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/locations" className="hover:text-orange-700">Locations</Link>
                    <span className="mx-2">/</span>
                    <span className="font-semibold text-orange-900">Hafr Al Batin</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-orange-900/50 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-stone-800 z-0">
                    <Image
                        src="/hafr-al-batin-desert.webp"
                        alt="Taxi Service in Hafr Al Batin and Kuwait Border"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 rounded-full mb-6 animate-fade-in border border-orange-400/50">
                            <MapPin className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Gateway to Kuwait</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Hafr Al Batin Taxi
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-orange-50">
                            Fast and safe transfers to the Al Raqi Kuwait Border and Qaisumah Airport (AQI).
                        </p>

                        <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/923132222436?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Hafr%20Al%20Batin." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
            <section className="py-12 bg-white border-b border-orange-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Taxi Rates in Hafr Al Batin</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        A taxi from Hafr Al Batin to the Kuwait Border (Al Raqi) typically costs <span className="font-bold text-orange-700">150-200 SAR</span>.
                        Transfers to Qaisumah Airport (AQI) are approximately <span className="font-bold text-orange-700">50-70 SAR</span>.
                        Long-distance rides to Riyadh start from <span className="font-bold text-orange-700">600 SAR</span>.
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
                                    <Shield className="w-8 h-8 text-orange-600" />
                                    Why Haram Taxi Hafr Al Batin?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                                            <Car className="w-5 h-5 text-orange-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Border Reliability</h3>
                                            <p className="text-sm text-gray-600">We ensure you reach the Kuwait border crossing on time, every time.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-5 h-5 text-orange-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">KKMC Authorized</h3>
                                            <p className="text-sm text-gray-600">Trusted transport for military city personnel and visitors.</p>
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
                                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                                                <service.icon className="w-6 h-6 text-orange-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                                <p className="text-gray-600 mb-3">{service.description}</p>
                                                {service.href && (
                                                    <Link href={service.href} className="text-orange-600 font-semibold text-sm hover:underline flex items-center gap-1">
                                                        Booking Details <ArrowRight className="w-3 h-3" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQs */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Hafr Travel FAQs</h2>
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
                                <div className="bg-orange-600 p-6 text-white">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <Clock className="w-5 h-5" /> Reserve Taxi
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Border & Airport Service</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/923132222436?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Hafr%20Al%20Batin." target="_blank" rel="noopener noreferrer" className="block w-full">
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
                                    <MapPin className="w-5 h-5 text-orange-600" /> Coverage Map
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div> Hafr Al Batin City</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div> Al Raqi (Kuwait Border)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div> Qaisumah Airport (AQI)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div> KKMC Military City</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div> Al Qaisumah</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Hafr Al Batin" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Traveling to Kuwait?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        We provide reliable connections to the border crossing 24/7.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-6 text-lg font-bold">
                                Book Border Ride
                            </Button>
                        </Link>
                        <a href="tel:+923132222436">
                            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-10 py-6 text-lg">
                                Call Now
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

