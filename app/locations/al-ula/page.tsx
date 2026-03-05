import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Star, Shield, Car, CheckCircle2, Bed, Palette, Mountain } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/al-ula',
    },
    title: 'Taxi Service in AlUla | Al-Ula Airport & Hegra Tours - Haram Taxi',
    description: 'Premier taxi service in Al Ula. Airport transfers (ULH), private tours to Hegra (Madain Saleh), Old Town, and Elephant Rock. Luxury SUVs available.',
    keywords: ['taxi Al Ula', 'AlUla airport transfer', 'Hegra tour taxi', 'Al Ula driver', 'Madain Saleh transport', 'AlUla Uber'],
    openGraph: {
        title: 'Taxi Service in AlUla | Hegra & Airport',
        description: 'Explore AlUla with our private chauffeur service. Airport transfers and historical tours.',
        url: 'https://haramtaxiservice.com/locations/al-ula',
        type: 'website',
    },
};

export default function AlUlaLocationPage() {
    const services = [
        {
            name: 'Airport Transfer (ULH)',
            description: 'Greet & ride from AlUla International Airport to resorts like Habitas, Banyan Tree, or Shaden.',
            icon: Car,
            href: '/services/alula-airport-transfer'
        },
        {
            name: 'Hegra (Madain Saleh) Tour',
            description: 'Half-day or full-day private driver for UNESCO heritage sites. Skip the bus crowds.',
            icon: Mountain,
            href: '/services/hegra-tour'
        },
        {
            name: 'AlUla to Madinah',
            description: 'Direct private transfer from AlUla to Madinah (approx 3.5 hours). Comfortable and scenic.',
            icon: MapPin,
            href: '/routes/alula-to-madinah'
        },
        {
            name: 'Old Town & Elephant Rock',
            description: 'Evening chauffeurs for dinner in the Old Town or sunset at Elephant Rock.',
            icon: Star,
            href: '/services/alula-city-tour'
        }
    ];

    const faqs = [
        {
            question: "Is there Uber in Al Ula?",
            answer: "Ride-sharing apps are very scarce in Al Ula. It is highly recommended to pre-book a private driver to ensure you can get around the scattered sites."
        },
        {
            question: "How far is the airport from Al Ula resorts?",
            answer: "AlUla International Airport (ULH) is about 35-50 minutes from most major resorts like Habitas and Banyan Tree."
        },
        {
            question: "Can I book a driver for the whole day in Al Ula?",
            answer: "Yes, our daily chauffeur service is the most popular option. You get a dedicated car and driver for 8-12 hours to explore at your own pace."
        },
        {
            question: "Do you offer transport to Madinah?",
            answer: "Yes, we provide one-way and round-trip transfers to Madinah. It's a beautiful drive through the desert mountains."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service AlUla",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+923080628195",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Al Ula Old Town Road",
            "addressLocality": "Al Ula",
            "postalCode": "43511",
            "addressCountry": "SA"
        },
        "url": "https://haramtaxiservice.com/locations/al-ula",
        "priceRange": "$$$"
    };

    return (
        <div className="bg-stone-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

            {/* Breadcrumbs */}
            <div className="bg-stone-100 py-4 border-b border-stone-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-stone-600">
                    <Link href="/" className="hover:text-amber-700">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/locations" className="hover:text-amber-700">Locations</Link>
                    <span className="mx-2">/</span>
                    <span className="font-semibold text-stone-900">AlUla</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[650px] flex items-center">
                <div className="absolute inset-0 bg-stone-900/40 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-stone-800 z-0">
                    <Image
                        src="/alula-elephant-rock.webp"
                        alt="Taxi Service in Al Ula Saudi Arabia"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
                    <div className="max-w-4xl mx-auto text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600/90 backdrop-blur-sm rounded-full mb-8 animate-fade-in border border-amber-500/50">
                            <Star className="w-4 h-4 fill-white" />
                            <span className="text-sm font-semibold uppercase tracking-widest font-serif">Luxury Desert Transport</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight font-serif">
                            Experience AlUla in Private Comfort
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-10 leading-relaxed font-light text-stone-100">
                            Reliable airport transfers and private chauffeurs for Hegra, Old Town, and beyond.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/booking">
                                <Button size="lg" className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white px-10 py-6 text-lg font-serif">
                                    Reserve Your Driver
                                </Button>
                            </Link>
                            <a href="tel:+923080628195">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-stone-900 px-10 py-6 text-lg font-serif">
                                    <Phone className="w-5 h-5 mr-3" /> Call Concierge
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Overview Block */}
            <section className="py-16 bg-white border-b border-stone-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-stone-800 mb-6 font-serif">Getting around Al Ula?</h2>
                    <p className="text-lg text-stone-600 leading-relaxed font-light">
                        Transport in AlUla relies heavily on pre-booked private cars as taxis are rare.
                        Airport transfers typically cost <span className="font-semibold text-amber-700">150â€“250 SAR</span>.
                        For sightseeing (Hegra, Elephant Rock), hiring a driver by the hour or day is the most efficient option.
                    </p>
                    <p className="text-sm text-stone-400 mt-4 italic">*Advance booking recommended during peak season (Winter at Tantora).</p>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="py-24 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-16">

                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-20">

                            {/* Why Choose Us */}
                            <div>
                                <h2 className="text-4xl font-bold text-stone-900 mb-10 font-serif flex items-center gap-4">
                                    <Shield className="w-8 h-8 text-amber-600" />
                                    The Premier Choice in AlUla
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-8">
                                    <div className="bg-white p-8 rounded-none border-l-4 border-amber-600 shadow-sm">
                                        <h3 className="font-bold text-lg text-stone-900 mb-3 font-serif">Punctual & Local</h3>
                                        <p className="text-stone-600 leading-relaxed">Our drivers know the desert roads and resort locations perfectly. No getting lost in the canyons.</p>
                                    </div>
                                    <div className="bg-white p-8 rounded-none border-l-4 border-amber-600 shadow-sm">
                                        <h3 className="font-bold text-lg text-stone-900 mb-3 font-serif">Luxury Fleet</h3>
                                        <p className="text-stone-600 leading-relaxed">Travel in style with our GMC Yukons and Lexus vehicles, perfect for the rugged yet upscale AlUla vibe.</p>
                                    </div>
                                    <div className="bg-white p-8 rounded-none border-l-4 border-amber-600 shadow-sm">
                                        <h3 className="font-bold text-lg text-stone-900 mb-3 font-serif">Flexible Scheduling</h3>
                                        <p className="text-stone-600 leading-relaxed">Change your pickup times as your tour plans evolve. We are at your service.</p>
                                    </div>
                                    <div className="bg-white p-8 rounded-none border-l-4 border-amber-600 shadow-sm">
                                        <h3 className="font-bold text-lg text-stone-900 mb-3 font-serif">Airport Meet & Greet</h3>
                                        <p className="text-stone-600 leading-relaxed">Driver waits at ULH arrivals with your name card. Hassle-free start to your holiday.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Services List */}
                            <div>
                                <h2 className="text-4xl font-bold text-stone-900 mb-10 font-serif">Tailored Transport Services</h2>
                                <div className="space-y-6">
                                    {services.map((service, index) => (
                                        <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-6 p-8 bg-white shadow-sm hover:shadow-md transition-all border border-stone-100">
                                            <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center shrink-0">
                                                <service.icon className="w-8 h-8 text-amber-700" />
                                            </div>
                                            <div className="grow">
                                                <h3 className="text-2xl font-bold text-stone-900 mb-3 font-serif">{service.name}</h3>
                                                <p className="text-stone-600 text-lg">{service.description}</p>
                                            </div>
                                            <div className="shrink-0 mt-4 sm:mt-0">
                                                {service.href && (
                                                    <Link href={service.href}>
                                                        <Button variant="outline" className="border-stone-300 hover:bg-stone-100 text-stone-800">
                                                            Details
                                                        </Button>
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQs */}
                            <div>
                                <h2 className="text-4xl font-bold text-stone-900 mb-8 font-serif">Common Questions</h2>
                                <div className="divide-y divide-stone-200">
                                    {faqs.map((faq, idx) => (
                                        <div key={idx} className="py-6">
                                            <h3 className="font-bold text-lg text-stone-900 mb-3">{faq.question}</h3>
                                            <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Sidebar */}
                        <div className="space-y-12">
                            {/* Booking Widget */}
                            <div className="bg-stone-900 text-white p-8 shadow-2xl sticky top-24">
                                <div className="mb-8 border-b border-stone-700 pb-6">
                                    <h3 className="text-2xl font-bold font-serif mb-2">Secure Your Ride</h3>
                                    <p className="text-stone-400">Concierge-level service via WhatsApp</p>
                                </div>
                                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/923080628195?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Al%20Ula." target="_blank" rel="noopener noreferrer" className="block w-full">
                                        <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold h-12">
                                            <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg> WhatsApp Booking
                                        </Button>
                                    </a>
                                </div>
                            </div>

                            {/* Local Info */}
                            <div className="bg-white p-8 border border-stone-200">
                                <h3 className="font-bold text-stone-900 mb-6 font-serif text-xl flex items-center gap-3">
                                    <Palette className="w-5 h-5 text-amber-600" /> Key Destinations
                                </h3>
                                <ul className="space-y-4 text-stone-600">
                                    <li className="flex items-center gap-3 border-b border-stone-100 pb-3">
                                        <div className="w-2 h-2 bg-amber-600 rotate-45"></div> Hegra (Madain Saleh)
                                    </li>
                                    <li className="flex items-center gap-3 border-b border-stone-100 pb-3">
                                        <div className="w-2 h-2 bg-amber-600 rotate-45"></div> Elephant Rock
                                    </li>
                                    <li className="flex items-center gap-3 border-b border-stone-100 pb-3">
                                        <div className="w-2 h-2 bg-amber-600 rotate-45"></div> AlUla Old Town
                                    </li>
                                    <li className="flex items-center gap-3 border-b border-stone-100 pb-3">
                                        <div className="w-2 h-2 bg-amber-600 rotate-45"></div> Maraya Concert Hall
                                    </li>
                                    <li className="flex items-center gap-3 border-b border-stone-100 pb-3">
                                        <div className="w-2 h-2 bg-amber-600 rotate-45"></div> Habitas AlUla
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-24">
                <NearbyCities currentCity="AlUla" />
            </div>

            {/* Final CTA */}
            <section className="py-24 bg-stone-900 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern-islamic.png')] opacity-5"></div>
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <h2 className="text-5xl font-bold mb-8 font-serif">Journey Through History</h2>
                    <p className="text-xl text-stone-300 mb-10 font-light">
                        Let us handle the driving while you immerse yourself in the wonders of Al Ula.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-12 py-8 text-xl font-serif">
                                Book Transport
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

