import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, TrendingUp, Globe, Headphones, Car, Building2, ArrowRight } from 'lucide-react';
import PartnerInquiryForm from '@/components/PartnerInquiryForm';

export const metadata: Metadata = {
    title: 'Partner with Us | B2B & Driver Registration',
    description: 'Join Saudi Arabia\'s fastest-growing premium transport network. We offer lucrative opportunities for professional taxi drivers and B2B solutions for travel agencies, hotels, and corporate travel desks.',
    keywords: ['taxi partner Saudi Arabia', 'driver registration KSA', 'B2B transport Saudi', 'Umrah taxi partner', 'taxi business Saudi Arabia'],
    alternates: {
        canonical: 'https://www.haramtaxii.com/partners',
    },
    openGraph: {
        title: 'Partner with Haram Taxi Service | B2B & Driver Registration',
        description: 'Join our elite network of professional drivers and business partners across Saudi Arabia.',
        url: 'https://www.haramtaxii.com/partners',
        type: 'website',
    },
};

const advantages = [
    {
        icon: Shield,
        title: 'Trusted Network',
        description: 'Government licensed and insured operations across all major Saudi cities.',
    },
    {
        icon: TrendingUp,
        title: 'Scalable Earnings',
        description: 'Access to 50,000+ monthly potential travelers including pilgrims and tourists.',
    },
    {
        icon: Globe,
        title: 'Global Reach',
        description: 'Connecting drivers to international pilgrim groups from UK, USA, Canada & beyond.',
    },
    {
        icon: Headphones,
        title: 'Direct Support',
        description: 'Dedicated local partner management team available 24/7 for your needs.',
    },
];

export default function PartnersPage() {
    return (
        <main className="pt-32">
            {/* Hero Section */}
            <section className="relative bg-brand-teal-dark overflow-hidden">
                <div className="absolute inset-0 bg-[url('/makkah-clock-tower-new.png')] bg-cover bg-center opacity-15" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
                    <p className="text-brand-teal-pale/80 text-sm uppercase tracking-[0.2em] mb-4 font-medium">Haram Taxi Service</p>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif mb-6 leading-tight">
                        Grow Your Business with<br />
                        <span className="text-[#D4AF37]">Haram Taxi Service</span>
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Join our elite network of professional drivers and business partners across Saudi Arabia. We bridge the gap between world-class transport and premium clientele.
                    </p>
                </div>
            </section>

            {/* Choose Your Path */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <p className="text-brand-teal text-sm uppercase tracking-[0.15em] font-semibold mb-2">Partnership Options</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-serif">Choose Your Path</h2>
                        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
                            Whether you are an individual professional driver or a business looking for reliable transport solutions, we have a partnership model for you.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Driver Card */}
                        <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-brand-teal/30 transition-all duration-300">
                            <div className="w-14 h-14 bg-brand-teal/10 rounded-xl flex items-center justify-center mb-6">
                                <Car className="w-7 h-7 text-brand-teal" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 font-serif mb-3">For Professional Drivers</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Are you a licensed driver in Saudi Arabia? Register your vehicle with us and gain access to high-value bookings from pilgrims, tourists, and corporate executives.
                            </p>
                            <ul className="space-y-3 mb-8 text-sm text-gray-600">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-2 shrink-0" />
                                    Access to corporate and private customer bookings
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-2 shrink-0" />
                                    Secure weekly payment processing
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-2 shrink-0" />
                                    Location-based smart dispatch system
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-2 shrink-0" />
                                    Zero registration fees
                                </li>
                            </ul>
                            <Link
                                href="/partners/driver-registration"
                                className="inline-flex items-center gap-2 bg-brand-teal text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-brand-teal-dark transition-colors"
                            >
                                Register as Driver <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* B2B Card */}
                        <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-[#D4AF37]/30 transition-all duration-300">
                            <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-6">
                                <Building2 className="w-7 h-7 text-[#D4AF37]" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 font-serif mb-3">B2B & Agencies</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Partner with us to provide seamless transportation for your clients. We work with Umrah agencies, hotels, and corporate travel desks globally.
                            </p>
                            <ul className="space-y-3 mb-8 text-sm text-gray-600">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                                    Dedicated account manager for your business
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                                    Custom pricing & volume discounts
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                                    White-label transport solutions
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                                    Real-time booking dashboard
                                </li>
                            </ul>
                            <a
                                href="#partner-form"
                                className="inline-flex items-center gap-2 bg-[#D4AF37] text-brand-teal-dark px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#c9a432] transition-colors"
                            >
                                Contact Business Team <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advantages Section */}
            <section className="py-16 sm:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-brand-teal text-sm uppercase tracking-[0.15em] font-semibold mb-2">Our Advantage</p>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-serif mb-6">
                                Built for Growth,<br />Designed for Excellence.
                            </h2>
                            <p className="text-gray-600 mb-10 leading-relaxed">
                                We aren&apos;t just a taxi service; we are a technology-driven ecosystem that connects the best drivers in Saudi Arabia with local and international demand.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {advantages.map((item) => (
                                    <div key={item.title} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                                        <item.icon className="w-6 h-6 text-brand-teal mb-3" />
                                        <h4 className="font-bold text-gray-900 mb-1 text-sm">{item.title}</h4>
                                        <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/makkah-clock-tower-new.png"
                                    alt="Premium chauffeur and taxi service in Saudi Arabia - Professional airport transfer and luxury transportation"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-brand-teal-dark rounded-xl p-5 shadow-xl hidden lg:block">
                                <p className="text-[#D4AF37] text-3xl font-bold">500+</p>
                                <p className="text-white text-sm">Active Partners</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* B2B Inquiry Form */}
            <section id="partner-form" className="py-16 sm:py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="text-brand-teal text-sm uppercase tracking-[0.15em] font-semibold mb-2">B2B Partnership</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-serif">Partner Inquiry Form</h2>
                        <p className="text-gray-500 mt-4">Tell us about your business and we&apos;ll get back to you within 24 hours.</p>
                    </div>
                    <PartnerInquiryForm />
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-brand-teal-dark py-16 sm:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif mb-4">
                        Ready to start your journey with us?
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join hundreds of successful partners across the Kingdom. Let&apos;s redefine luxury transport together.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/partners/driver-registration"
                            className="inline-flex items-center gap-2 bg-[#D4AF37] text-brand-teal-dark px-8 py-3.5 rounded-lg font-bold text-sm hover:bg-[#c9a432] transition-colors"
                        >
                            Driver Signup <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-3.5 rounded-lg font-bold text-sm hover:bg-white/20 transition-colors"
                        >
                            Contact Business Team
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
