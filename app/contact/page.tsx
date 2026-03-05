import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { Clock, MapPin, CheckCircle2, MessageSquare, Headphones, Phone, Mail } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
    title: 'Contact Us | Book Taxi in Saudi Arabia - Haram Taxi Service',
    description: 'Contact Haram Taxi Service for bookings in Makkah, Madinah, Jeddah. Book online or call us 24/7. Professional taxi service across Saudi Arabia.',
    keywords: ['contact taxi Saudi Arabia', 'book taxi Makkah', 'taxi booking Madinah', 'call taxi Jeddah', 'online taxi booking'],
    openGraph: {
        title: 'Contact Us | Book Taxi in Saudi Arabia',
        description: 'Contact us for taxi bookings in Makkah, Madinah, Jeddah. Available 24/7.',
        url: 'https://www.haramtaxii.com/contact',
        type: 'website',
    },
};

export default function ContactPage() {
    const faqs = [
        {
            question: "How can I book a taxi?",
            answer: "You can book through our online booking form on this page or the homepage. Fill in your details and we&apos;ll confirm your booking immediately."
        },
        {
            question: "What is your response time?",
            answer: "We aim to respond to all inquiries within 30-60 minutes. For urgent bookings, we provide instant confirmation."
        },
        {
            question: "Do you operate 24/7?",
            answer: "Yes, our taxi service is available 24 hours a day, 7 days a week including holidays."
        },
        {
            question: "Can I modify my booking?",
            answer: "Yes, you can modify your booking by contacting us through the form. We recommend making changes at least 24 hours before your scheduled pickup."
        },
        {
            question: "What areas do you cover?",
            answer: "We provide taxi services across Makkah, Madinah, Jeddah, Taif, AlUla, and other major cities in Saudi Arabia."
        }
    ];

    const features = [
        {
            icon: Clock,
            title: "24/7 Available",
            description: "Round the clock service for your convenience"
        },
        {
            icon: CheckCircle2,
            title: "Instant Confirmation",
            description: "Quick booking confirmation via online form"
        },
        {
            icon: MapPin,
            title: "Wide Coverage",
            description: "Service across all major cities in KSA"
        },
        {
            icon: Headphones,
            title: "Customer Support",
            description: "Dedicated support team ready to help"
        }
    ];

    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Haram Taxi Service",
        "description": "Contact us for taxi bookings in Makkah, Madinah, Jeddah.",
        "url": "https://www.haramtaxii.com/contact",
        "mainEntity": {
            "@type": "LocalBusiness",
            "name": "Haram Taxi Service",
            "telephone": "+923132222436",
            "email": "info@haramtaxii.com",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Makkah / Madinah / Jeddah",
                "addressCountry": "SA"
            },
            "areaServed": ["Makkah", "Madinah", "Jeddah", "Taif"]
        }
    };

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-brand-teal/5 to-white pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-teal-pale rounded-full mb-6">
                            <MessageSquare className="w-4 h-4 text-brand-teal" />
                            <span className="text-brand-teal-dark text-sm font-semibold">Get in Touch</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
                            Contact <span className="text-brand-teal">Us</span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                            Have questions about our taxi service? Fill out the form below and we&apos;ll get back to you as soon as possible.
                        </p>

                        <div className="mt-8">
                            <a href="mailto:info@haramtaxii.com" className="inline-flex items-center gap-2 text-brand-teal hover:text-brand-teal-dark font-semibold text-lg hover:underline transition-all">
                                <Mail className="w-5 h-5" />
                                info@haramtaxii.com
                            </a>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100 group">
                                <div className="w-14 h-14 bg-brand-teal-pale rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-7 h-7 text-brand-teal" />
                                </div>
                                <h3 className="font-display font-bold text-gray-900 mb-1 text-lg">{feature.title}</h3>
                                <p className="text-sm text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-24 bg-gray-50 border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Start Your Journey</h2>
                        <p className="text-gray-600">
                            Ready to travel? Book your ride instantly using our secure booking form below.
                        </p>
                    </div>
                    <Suspense fallback={<div className="h-[400px] flex items-center justify-center text-gray-400">Loading form...</div>}>
                        <BookingForm variant="default" />
                    </Suspense>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6 leading-tight">
                                Why Choose <span className="text-brand-teal">Haram Taxi?</span>
                            </h2>
                            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                                We are committed to providing the best taxi service experience in Saudi Arabia with professional drivers and well-maintained vehicles.
                            </p>
                            <ul className="space-y-6">
                                <li className="flex items-start group">
                                    <div className="w-10 h-10 rounded-full bg-brand-teal-pale flex items-center justify-center flex-shrink-0 mr-4 group-hover:bg-brand-teal transition-colors duration-300">
                                        <CheckCircle2 className="w-5 h-5 text-brand-teal group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold text-gray-900 mb-1 text-lg">Professional Drivers</h3>
                                        <p className="text-gray-600">Experienced and licensed drivers</p>
                                    </div>
                                </li>
                                <li className="flex items-start group">
                                    <div className="w-10 h-10 rounded-full bg-brand-teal-pale flex items-center justify-center flex-shrink-0 mr-4 group-hover:bg-brand-teal transition-colors duration-300">
                                        <CheckCircle2 className="w-5 h-5 text-brand-teal group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold text-gray-900 mb-1 text-lg">Clean Vehicles</h3>
                                        <p className="text-gray-600">Well-maintained and sanitized cars</p>
                                    </div>
                                </li>
                                <li className="flex items-start group">
                                    <div className="w-10 h-10 rounded-full bg-brand-teal-pale flex items-center justify-center flex-shrink-0 mr-4 group-hover:bg-brand-teal transition-colors duration-300">
                                        <CheckCircle2 className="w-5 h-5 text-brand-teal group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold text-gray-900 mb-1 text-lg">Transparent Pricing</h3>
                                        <p className="text-gray-600">No hidden fees or charges</p>
                                    </div>
                                </li>
                                <li className="flex items-start group">
                                    <div className="w-10 h-10 rounded-full bg-brand-teal-pale flex items-center justify-center flex-shrink-0 mr-4 group-hover:bg-brand-teal transition-colors duration-300">
                                        <CheckCircle2 className="w-5 h-5 text-brand-teal group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold text-gray-900 mb-1 text-lg">24/7 Service</h3>
                                        <p className="text-gray-600">Always available when you need us</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
                            <Image
                                src="/support-team.webp"
                                alt="Customer Support"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-10 left-10 right-10">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-teal rounded-full mb-4 shadow-lg">
                                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                                    <span className="text-white text-sm font-bold tracking-wide uppercase">Available Now</span>
                                </div>
                                <h3 className="text-white text-3xl font-display font-bold mb-2">Need Help?</h3>
                                <p className="text-gray-200 text-lg">Our support team is online waiting to help you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Areas Links */}
            <section className="py-16 bg-gray-50 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-display font-bold text-gray-900 mb-10">Serving All Major Locations</h2>
                    <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
                        <Link href="/locations/makkah" className="px-6 py-4 bg-white border border-gray-200 rounded-full hover:border-brand-teal hover:bg-brand-teal hover:text-white transition-all shadow-sm">
                            Taxi in Makkah
                        </Link>
                        <Link href="/locations/madinah" className="px-6 py-4 bg-white border border-gray-200 rounded-full hover:border-brand-teal hover:bg-brand-teal hover:text-white transition-all shadow-sm">
                            Taxi in Madinah
                        </Link>
                        <Link href="/locations/jeddah" className="px-6 py-4 bg-white border border-gray-200 rounded-full hover:border-brand-teal hover:bg-brand-teal hover:text-white transition-all shadow-sm">
                            Taxi in Jeddah
                        </Link>
                        <Link href="/routes/jeddah-airport-to-makkah" className="px-6 py-4 bg-white border border-gray-200 rounded-full hover:border-brand-teal hover:bg-brand-teal hover:text-white transition-all shadow-sm">
                            Jeddah Airport to Makkah
                        </Link>
                        <Link href="/routes/makkah-to-madinah" className="px-6 py-4 bg-white border border-gray-200 rounded-full hover:border-brand-teal hover:bg-brand-teal hover:text-white transition-all shadow-sm">
                            Makkah to Madinah
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Common questions about our service</p>
                    </div>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-gray-50 px-6 rounded-2xl border border-gray-100 shadow-sm"
                            >
                                <AccordionTrigger className="text-lg font-bold font-display text-gray-900 py-6 hover:text-brand-teal text-left">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-6 text-base leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-brand-teal text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to Book?</h2>
                    <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto font-light">
                        Book your taxi now and experience professional service across Saudi Arabia.
                    </p>
                    <Link
                        href="/booking"
                        className="inline-block bg-white text-brand-teal hover:bg-gray-100 hover:text-brand-teal-dark px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                    >
                        Book Now
                    </Link>
                </div>
            </section>
        </div>
    );
}

