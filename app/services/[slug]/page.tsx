import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { servicesData } from '@/lib/servicesData';
import BookingForm from '@/components/BookingForm';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Star, Clock, MapPin, Phone, Home, ChevronRight } from 'lucide-react';
import { Suspense } from 'react';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        return {
            title: 'Service Not Found',
        };
    }

    return {
        title: service.title,
        description: service.description,
        alternates: {
            canonical: `http://www.haramtaxii.com/services/${slug}`,
        },
        openGraph: {
            title: service.title,
            description: service.description,
            type: 'website',
            url: `http://www.haramtaxii.com/services/${slug}`,
        },
    };
}

export async function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": service.title,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Haram Taxi Service",
            "priceRange": "$$"
        },
        "areaServed": {
            "@type": "State",
            "name": "Makkah Province"
        },
        "description": service.description
    };


    return (
        <div className="bg-white min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />

            {/* Breadcrumb */}
            <div className="bg-gray-100 py-3 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm flex items-center gap-2 text-gray-600">
                    <Link href="/" className="hover:text-teal-600 flex items-center gap-1"><Home className="w-3 h-3" /> Home</Link>
                    <ChevronRight className="w-3 h-3 text-gray-400" />
                    <Link href="/services" className="hover:text-teal-600">Services</Link>
                    <ChevronRight className="w-3 h-3 text-gray-400" />
                    <span className="text-gray-900 font-semibold truncate">{service.title}</span>
                </div>
            </div>

            {/* Hero Section */}
            <div className="bg-gray-900 text-white py-16 sm:py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-black/80 z-10"></div>
                {/* Placeholder for dynamic image if available */}
                <div className="absolute inset-0 bg-[url('/gmc-yukon-xl-taxi.webp')] bg-cover bg-center opacity-40"></div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 text-teal-300 rounded-full mb-6 border border-teal-500/30 backdrop-blur-sm">
                            <Star className="w-4 h-4 fill-teal-300" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Premium Service</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            {service.title}
                        </h1>
                        <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
                            {service.description}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/booking">
                                <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-8 py-6 text-lg">
                                    Book Now
                                </Button>
                            </Link>
                            <a href="tel:+923132222436">
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg">
                                    <Phone className="w-5 h-5 mr-2" /> Call Us
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="grid lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Description */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Overview</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {service.content}
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose This Service?</h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                        <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-5 h-5 text-teal-600" />
                                        </div>
                                        <span className="font-semibold text-gray-800 mt-2">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Pricing Table */}
                        {service.pricing && service.pricing.length > 0 && (
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Transparent Pricing</h3>
                                <div className="overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-sm">
                                    <table className="w-full text-left">
                                        <thead className="bg-gray-50 border-b border-gray-200">
                                            <tr>
                                                <th className="px-6 py-4 font-bold text-gray-900">Service / Vehicle</th>
                                                <th className="px-6 py-4 font-bold text-teal-600 text-right">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {service.pricing.map((item, idx) => (
                                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                                    <td className="px-6 py-4 font-medium text-gray-900">{item.title}</td>
                                                    <td className="px-6 py-4 font-bold text-teal-600 text-right">{item.price}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <p className="mt-4 text-sm text-gray-500 italic">* Prices may vary during peak seasons (Ramadan & Hajj).</p>
                            </div>
                        )}

                        {/* FAQ Section */}
                        {service.faqs && service.faqs.length > 0 && (
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                                <div className="space-y-4">
                                    {service.faqs.map((faq, idx) => (
                                        <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-teal-200 transition-colors">
                                            <h4 className="font-bold text-gray-900 mb-2 flex items-start gap-3">
                                                <span className="text-teal-500">Q.</span> {faq.question}
                                            </h4>
                                            <p className="text-gray-600 pl-7">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Booking Widget */}
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden sticky top-24">
                            <div className="bg-teal-500 p-6 text-white text-center">
                                <h3 className="text-xl font-bold">Book Your Ride</h3>
                                <p className="text-sm opacity-90 mt-1">Instant confirmation via WhatsApp</p>
                            </div>
                            <div className="p-6">
                                <Suspense fallback={<div className="h-[400px] flex items-center justify-center text-gray-400">Loading form...</div>}>
                                    <BookingForm />
                                </Suspense>
                            </div>
                            <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
                                <p className="text-xs text-gray-500 flex justify-center items-center gap-2">
                                    <Clock className="w-3 h-3" /> 24/7 Support Available
                                </p>
                            </div>
                        </div>

                        {/* Contact Card */}
                        <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
                            <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                            <p className="text-gray-400 mb-6 text-sm">Our support team is available 24/7 to assist you with your booking.</p>
                            <a href="tel:+923132222436" className="block mb-4">
                                <Button className="w-full bg-white text-gray-900 hover:bg-gray-100 group">
                                    <Phone className="w-4 h-4 mr-2 group-hover:text-teal-500 transition-colors" /> Call Support
                                </Button>
                            </a>
                            <div className="text-xs text-gray-500">
                                <span className="block mb-1">Email us at:</span>
                                <a href="mailto:info@haramtaxii.com" className="text-teal-400 hover:text-white transition-colors">info@haramtaxii.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Silo Linking Section */}
            <div className="bg-gray-50 border-t border-gray-200 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">Available in These Cities</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <Link href="/locations/makkah" className="px-5 py-2 bg-white hover:bg-teal-50 text-gray-700 hover:text-teal-700 rounded-full border border-gray-200 transition-colors shadow-sm">
                            Makkah
                        </Link>
                        <Link href="/locations/madinah" className="px-5 py-2 bg-white hover:bg-teal-50 text-gray-700 hover:text-teal-700 rounded-full border border-gray-200 transition-colors shadow-sm">
                            Madinah
                        </Link>
                        <Link href="/locations/jeddah" className="px-5 py-2 bg-white hover:bg-teal-50 text-gray-700 hover:text-teal-700 rounded-full border border-gray-200 transition-colors shadow-sm">
                            Jeddah
                        </Link>
                        <Link href="/routes/jeddah-airport-to-makkah" className="px-5 py-2 bg-white hover:bg-teal-50 text-gray-700 hover:text-teal-700 rounded-full border border-gray-200 transition-colors shadow-sm">
                            Jeddah Airport to Makkah
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

