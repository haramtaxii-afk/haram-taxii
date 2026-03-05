import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Star, Shield, Car, CheckCircle2, Navigation, DollarSign, ArrowRight } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://www.haramtaxii.com/locations/riyadh',
    },
    title: 'Taxi Service in Riyadh | Professional Chauffeur & City Transfer',
    description: 'Book trusted taxi service in Riyadh. Airport transfer to King Khalid Int\'l Airport (RUH), city tours, and intercity rides. 24/7 professional drivers.',
    keywords: ['taxi Riyadh', 'Riyadh airport taxi', 'taxi service Riyadh Saudi Arabia', 'chauffeur service Riyadh', 'ride to Riyadh'],
    openGraph: {
        title: 'Taxi Service in Riyadh | Professional Chauffeur',
        description: 'Reliable taxi service in Riyadh. Airport transfers, city tours, and private chauffeurs. Book now!',
        url: 'https://www.haramtaxii.com/locations/riyadh',
        type: 'website',
    },
};

export default function RiyadhLocationPage() {
    const services = [
        {
            name: 'Airport Transfer',
            description: 'Reliable pickup/drop-off at King Khalid International Airport (RUH). Meet & greet service included.',
            icon: Car,
            href: '/services/riyadh-airport-transfer'
        },
        {
            name: 'City Tours',
            description: 'Explore Riyadh landmarks like Kingdom Centre, Al Masmak Fortress, and The Boulevard.',
            icon: MapPin,
            href: '/services/city-tours'
        },
        {
            name: 'Intercity Travel',
            description: 'Comfortable private taxi from Riyadh to Dammam, Al Khobar, or Makkah/Madinah.',
            icon: Navigation,
            href: '/routes/riyadh-to-makkah'
        },
        {
            name: 'Hourly Chauffeur',
            description: 'Book a driver by the hour for business meetings, events, or shopping trips in Riyadh.',
            icon: Clock,
            href: '/services/hourly-chauffeur'
        }
    ];

    const faqs = [
        {
            question: "How much is a taxi from Riyadh Airport to downtown?",
            answer: "Fares typically range from 100 SAR to 200 SAR depending on the vehicle type (Sedan vs. GMC) and your hotel location in Riyadh."
        },
        {
            question: "Is Uber or Careem available in Riyadh?",
            answer: "Yes, but our private taxi service offers guaranteed fixed rates, no surge pricing, and professional drivers who know the city well."
        },
        {
            question: "Can I book a taxi from Riyadh to Makkah?",
            answer: "Yes, we offer long-distance intercity transfers. The drive takes about 8-9 hours, offering a comfortable private alternative to flying or buses."
        },
        {
            question: "Do you serve Riyadh Season events?",
            answer: "Absolutely! We provide dedicated transport to Riyadh Boulevard, Winter Wonderland, and other Riyadh Season venues."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service Riyadh",
        "image": "https://www.haramtaxii.com/logo.png",
        "telephone": "+923132222436",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "King Fahd Road",
            "addressLocality": "Riyadh",
            "postalCode": "11564",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 24.7136,
            "longitude": 46.6753
        },
        "url": "https://www.haramtaxii.com/locations/riyadh",
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
                    <span className="font-semibold text-gray-900">Riyadh</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-gray-900/60 z-10 transition-colors"></div>
                {/* Fallback color if image fails loading */}
                <div className="absolute inset-0 bg-gray-900 z-0">
                    <Image
                        src="/riyadh-skyline.webp"
                        alt="Taxi Service in Riyadh Saudi Arabia"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500 rounded-full mb-6 animate-fade-in">
                            <Star className="w-4 h-4 fill-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Rated #1 in Riyadh</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Riyadh&apos;s Premier Taxi Service
                        </h1>
                        <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed font-light">
                            Professional chauffeur service for airport transfers, business travel, and city tours in Saudi Arabia&apos;s capital.
                        </p>

                        <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/923132222436?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Riyadh." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                        <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg w-full sm:w-auto shadow-lg hover:scale-105 transition-transform flex items-center justify-center">
                                            <svg className="w-6 h-6 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                                            Book via WhatsApp
                                        </Button>
                                    </a>
                                </div>
                    </div>
                </div>
            </section>

            {/* AI Overview / Quick Info Block */}
            <section className="py-12 bg-teal-50 border-b border-teal-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-teal-900 mb-4">How much does a taxi cost in Riyadh?</h2>
                    <p className="text-lg text-teal-800 leading-relaxed">
                        Taxi fares in Riyadh typically range from <span className="font-bold">100 SAR to 300 SAR</span> for airport transfers and city rides.
                        We offer fixed-price booking for major districts like Olaya (12211), Al Malqa (13521), and Diplomatic Quarter (12512).
                        Available 24/7 for your convenience.
                    </p>
                    <p className="text-sm text-teal-600 mt-2 italic">*Prices vary by vehicle model (Camry vs. GMC) and distance.</p>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* Left Column: Content */}
                        <div className="lg:col-span-2 space-y-16">

                            {/* Why Choose Us */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                    <Shield className="w-8 h-8 text-teal-500" />
                                    Why Choose Haram Taxi in Riyadh?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {[
                                        { title: "Licensed & Insured", desc: "TGA-certified chauffeurs and fully insured vehicles." },
                                        { title: "Luxury Fleet", desc: "Late-model GMC Yukon, Mercedes, and Ford Taurus." },
                                        { title: "Fixed Pricing", desc: "Quote provided upfront. No hidden fees or meter anxiety." },
                                        { title: "24/7 Availability", desc: "Early morning flight? Late meeting? We are always on." },
                                        { title: "English Speaking", desc: "Communication is easy with our professional drivers." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-teal-200 transition-colors">
                                            <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                            <p className="text-gray-600 text-sm">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Services List */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h2>
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
                                                        Learn more <ArrowRight className="w-3 h-3" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Case Study / Testimonial Hybrid */}
                            <div className="bg-gray-900 text-white rounded-2xl p-8 relative overflow-hidden">
                                <div className="relative z-10">
                                    <div className="inline-block px-3 py-1 bg-teal-500 rounded text-xs font-bold mb-4">CASE STUDY: BUSINESS TRAVEL</div>
                                    <h3 className="text-2xl font-bold mb-4">Seamless Transport for Riyadh Conference</h3>
                                    <p className="text-gray-300 mb-6 leading-relaxed">
                                        &quot;                                        &quot;A delegation of 5 executives needed reliable transport for a 3-day conference at the Riyadh International Convention & Exhibition Center. We provided a dedicated GMC Yukon XL with a chauffeur on standby. The result? Zero delays, comfortable transit between meetings, and a stress-free experience.&quot;&quot;
                                    </p>
                                    <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                                        <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center font-bold">JD</div>
                                        <div>
                                            <div className="font-bold">John D. & Team</div>
                                            <div className="text-xs text-gray-400">Corporate Clients from UK</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
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

                        {/* Right Column: Sidebar */}
                        <div className="space-y-8">
                            {/* Booking Form Widget */}
                            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden sticky top-24">
                                <div className="bg-teal-600 p-6 text-white">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <Clock className="w-5 h-5" /> Book Your Ride
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Instant confirmation via WhatsApp</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/923132222436?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Riyadh." target="_blank" rel="noopener noreferrer" className="block w-full">
                                        <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold h-12">
                                            <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg> WhatsApp Booking
                                        </Button>
                                    </a>
                                </div>
                                </div>
                            </div>

                            {/* Coverage Area */}
                            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-teal-500" /> Service Areas
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    We serve all major districts in Riyadh including:
                                </p>
                                <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-teal-500" /> Olaya</li>
                                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-teal-500" /> Al Malqa</li>
                                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-teal-500" /> Al Nakheel</li>
                                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-teal-500" /> Diplomatic Q.</li>
                                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-teal-500" /> King Abdullah D.</li>
                                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-teal-500" /> Al Sulaimaniya</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Riyadh" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Need a Transfer in Riyadh?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        From King Khalid Airport to downtown, or a private tour of the city - we have you covered.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-10 py-6 text-lg font-bold">
                                Book Now
                            </Button>
                        </Link>
                        <a href="tel:+923132222436">
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

