import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Shield, Globe, Sun, ArrowRight, CheckCircle2 } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: {
        canonical: 'http://www.haramtaxii.com/locations/al-qunfudhah',
    },
    title: 'Trusted Taxi Service in Al Qunfudhah | Red Sea Coast Rides',
    description: 'Reliable taxi service in Al Qunfudhah near the Corniche & 28821. Flat-rate transfers to Jeddah/Abha with no hidden fees. Call or book online today.',
    keywords: ['taxi Al Qunfudhah', 'Qunfudhah airport transfer', 'taxi near Corniche', 'Al Qunfudhah to Jeddah taxi', 'taxi 28821'],
    openGraph: {
        title: 'Taxi Service in Al Qunfudhah | Coastal Transport',
        description: 'Professional limo and taxi service in Al Qunfudhah. Safe rides to Palm Beach, Historical Castle, and hospitals.',
        url: 'http://www.haramtaxii.com/locations/al-qunfudhah',
        type: 'website',
    },
};

export default function AlQunfudhahLocationPage() {
    const services = [
        {
            name: 'Jeddah Airport Transfer',
            description: 'Direct, comfortable rides to King Abdulaziz Int\'l Airport (JED) with flight tracking.',
            icon: Globe,
            href: '/services/jeddah-airport-taxi'
        },
        {
            name: 'Corniche & Leisure',
            description: 'Relaxing rides to Palm Beach, Al Qunfudhah Corniche, and local parks.',
            icon: Sun,
            href: '/services/city-tour'
        },
        {
            name: 'Intercity Travel',
            description: 'Long-distance reliable transport to Al Layth, Abha, or Jazan.',
            icon: MapPin,
            href: '/services/intercity-taxi'
        },
        {
            name: 'Medical Transport',
            description: 'Timely drops and pickups for Al Qunfudhah General Hospital and clinics.',
            icon: ArrowRight,
            href: '/services/medical-transport'
        }
    ];

    const faqs = [
        {
            question: "How much does a taxi cost in Al Qunfudhah?",
            answer: "Local rides start from 15 SAR. Trips to Jeddah Airport range from 400-500 SAR depending on vehicle type."
        },
        {
            question: "Can I get a taxi late at night?",
            answer: "Yes, we operate 24/7, including holidays and late nights for emergency or travel needs."
        },
        {
            question: "Are your drivers licensed?",
            answer: "Yes, all our drivers are fully licensed, background-checked, and insured for your safety."
        },
        {
            question: "Do you serve Al Layth as well?",
            answer: "Absolutely. We pick up and drop off in Al Layth and surrounding coastal towns."
        },
        {
            question: "What is your cancellation policy?",
            answer: "We offer free cancellation up to 2 hours before your scheduled pickup time."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service Al Qunfudhah",
        "image": "http://www.haramtaxii.com/logo.png",
        "telephone": "+923132222436",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "King Abdulaziz Road",
            "addressLocality": "Al Qunfudhah",
            "postalCode": "28821",
            "addressCountry": "SA"
        },
        "url": "http://www.haramtaxii.com/locations/al-qunfudhah",
        "priceRange": "$$"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <div className="bg-cyan-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Breadcrumbs */}
            <div className="bg-cyan-100 py-4 border-b border-cyan-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-cyan-900/60">
                    <Link href="/" className="hover:text-cyan-700">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/locations" className="hover:text-cyan-700">Locations</Link>
                    <span className="mx-2">/</span>
                    <span className="font-semibold text-cyan-900">Al Qunfudhah</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-cyan-900/50 z-10"></div>
                <div className="absolute inset-0 bg-cyan-800 z-0">
                    <Image
                        src="/qunfudhah-corniche.webp"
                        alt="Taxi Service in Al Qunfudhah Corniche"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-600 rounded-full mb-6 animate-fade-in border border-cyan-400/50">
                            <Sun className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Pearl of the Coast</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Al Qunfudhahâ€™s Reliable Taxi Service
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-cyan-50">
                            Rely on Haram Taxi for smooth, punctual rides to Jeddah, Abha, and local landmarks. Comfort you can count on.
                        </p>

                        <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/923132222436?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Al%20Qunfudhah." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
            <section className="py-12 bg-white border-b border-cyan-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">How much does taxi service cost in Al Qunfudhah?</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Taxi service in Al Qunfudhah typically runs between <span className="font-bold text-cyan-700">15 SAR</span> and <span className="font-bold text-cyan-700">500 SAR</span>, depending on timing, vehicle, and trip distance. We operate 24/7, serving areas such as <span className="font-bold text-gray-900">28821</span> and <span className="font-bold text-gray-900">28822</span> for your convenience.
                    </p>
                    <p className="text-sm text-gray-500 mt-2 italic">Prices vary by vehicle model and route; confirm before booking.</p>
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
                                    <Shield className="w-8 h-8 text-cyan-600" />
                                    Why Choose Haram Taxi?
                                </h2>
                                <ul className="space-y-4">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-cyan-600 shrink-0" />
                                        <span><strong>Licensed & Insured:</strong> Fully certified operations ensuring your safety and peace of mind.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-cyan-600 shrink-0" />
                                        <span><strong>No Hidden Fees:</strong> The price you see is the price you payâ€”no surprises at the end of your ride.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-cyan-600 shrink-0" />
                                        <span><strong>Professional Drivers:</strong> Background-checked chauffeurs who know the coastal roads perfectly.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-cyan-600 shrink-0" />
                                        <span><strong>Always On:</strong> Service runs 24/7, so you can book a ride for early morning flights or late arrivals.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-cyan-600 shrink-0" />
                                        <span><strong>Spotlessly Clean Fleet:</strong> Well-maintained vehicles with AC and comfortable seating.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Common Problems */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Problems We Solve</h3>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    <li>Missed or delayed airport rides due to lack of reliable transport.</li>
                                    <li>Last-minute hospital visits requiring immediate pickup.</li>
                                    <li>Group travel hassles when visiting the Corniche or Palm Beach.</li>
                                    <li>Uncertainty about long-distance fares to Jeddah or Abha.</li>
                                    <li>Lack of vehicle familiarity for tourists visiting historical sites.</li>
                                </ul>
                            </div>

                            {/* Pricing Table */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Typical Pricing Table</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                <th className="p-4 font-semibold text-gray-900">Service Type</th>
                                                <th className="p-4 font-semibold text-gray-900">Price Range</th>
                                                <th className="p-4 font-semibold text-gray-900">Whatâ€™s Included</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            <tr>
                                                <td className="p-4 text-gray-700">Jeddah Airport Transfer</td>
                                                <td className="p-4 text-gray-900 font-medium">400â€“500 SAR</td>
                                                <td className="p-4 text-sm text-gray-600">Door-to-door, luggage assist, toll fees</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-gray-700">Hourly City Tour</td>
                                                <td className="p-4 text-gray-900 font-medium">100â€“150 SAR/hr</td>
                                                <td className="p-4 text-sm text-gray-600">Driver, fuel, waiting time at landmarks</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-gray-700">Local Trip</td>
                                                <td className="p-4 text-gray-900 font-medium">15â€“30 SAR</td>
                                                <td className="p-4 text-sm text-gray-600">Standard pickup within city limits</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-sm text-gray-500 mt-2">*Pricing is indicative and varies by vehicle size and exact timing.</p>
                            </div>

                            {/* Process */}
                            <div className="bg-gray-50 p-8 rounded-2xl">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">3-Step Process</h3>
                                <div className="grid sm:grid-cols-3 gap-6 text-center">
                                    <div>
                                        <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                                        <h4 className="font-bold mb-2">Book</h4>
                                        <p className="text-sm text-gray-600">Use our form or call 24/7.</p>
                                    </div>
                                    <div>
                                        <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                                        <h4 className="font-bold mb-2">Confirm</h4>
                                        <p className="text-sm text-gray-600">Get instant driver details & price.</p>
                                    </div>
                                    <div>
                                        <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
                                        <h4 className="font-bold mb-2">Ride</h4>
                                        <p className="text-sm text-gray-600">Enjoy a safe, comfortable journey.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Coverage & Localization */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Coverage & Localization</h2>
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    We serve many parts of Al Qunfudhah, including Al Khalidiya and Al Aziziyah neighborhoods. Youâ€™ll often find our vehicles near landmarks like the <strong>Historical Castle</strong>, <strong>Palm Beach</strong>, and the <strong>Civil Affairs Office</strong>. We regularly pick up and drop off in postal areas like <strong>28821</strong> and <strong>28822</strong>, ensuring fast access whether youâ€™re by the sea or in the city center.
                                </p>
                                <p className="text-gray-700 font-medium">Also serving Al Layth, Mahayil Asir, and Al Birk.</p>
                            </div>

                            {/* FAQs */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {faqs.map((faq, idx) => (
                                        <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200">
                                            <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                                            <p className="text-gray-600">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* EEAT Section */}
                            <div className="border-t border-gray-200 pt-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted Local Experience</h3>
                                <p className="text-gray-700 mb-6">
                                    For years, Haram Taxi has served Al Qunfudhah and the Tihama coast with safe, professional rides. As a fully licensed service, weâ€™ve completed thousands of airport transfers with a 99% on-time record. Our drivers are ID-verified and provide clear, written estimates to protect you from surprises.
                                </p>
                                <div className="flex gap-4">
                                    <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-semibold">Licensed</span>
                                    <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-semibold">Insured</span>
                                    <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-semibold">Background-checked</span>
                                </div>
                            </div>

                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Booking Widget */}
                            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden sticky top-24">
                                <div className="bg-cyan-600 p-6 text-white">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <Clock className="w-5 h-5" /> Quick Booking
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Al Qunfudhah & Coast</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/923132222436?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Al%20Qunfudhah." target="_blank" rel="noopener noreferrer" className="block w-full">
                                        <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold h-12">
                                            <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg> WhatsApp Booking
                                        </Button>
                                    </a>
                                </div>
                                </div>
                            </div>

                            {/* Testimonials */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-cyan-600" /> Recent Reviews
                                </h3>
                                <div className="space-y-4">
                                    <blockquote className="text-sm italic text-gray-600">
                                        &quot;Super clean AC car and the driver was right on time for my Jeddah trip. Made the long drive very smooth.&quot;
                                        <footer className="text-xs font-bold text-gray-900 mt-2">â€” Ahmed, Al Khalidiya</footer>
                                    </blockquote>
                                    <blockquote className="text-sm italic text-gray-600">
                                        &quot;Professional service to the hospital. No stress, just comfort.&quot;
                                        <footer className="text-xs font-bold text-gray-900 mt-2">â€” Sarah, 28821</footer>
                                    </blockquote>
                                </div>
                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <h4 className="font-bold text-gray-900 text-sm mb-2">Case Study: Palm Beach Trip</h4>
                                    <p className="text-xs text-gray-600">
                                        A family needed transport from Al Aziziyah to Palm Beach for a sunset picnic. We dispatched a van within 15 mins. The driver arrived early, helped with supplies, and ensured a safe return after dark.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Al Qunfudhah" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Ready to Ride in Al Qunfudhah?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        The best way to travel the Red Sea coast.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-10 py-6 text-lg font-bold">
                                Book Today
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

            {/* HTML Comments for Soft Hints */}
            {/* Al Qunfudhah Taxi Service near Corniche. Licensed, same-day. */}
            {/* Al Qunfudhah emergency taxi in 28821. */}
        </div>
    );
}

