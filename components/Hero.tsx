"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Clock, Shield, Star, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeroProps {
    images?: string[];
    title?: React.ReactNode;
    subtitle?: string;
    location?: string;
    h1Text?: string;
}

// Social proof avatars — real pilgrim silhouettes represented by initials
const socialProofAvatars = [
    { initials: "AK", color: "bg-teal-600" },
    { initials: "MR", color: "bg-amber-600" },
    { initials: "FH", color: "bg-indigo-600" },
    { initials: "SA", color: "bg-rose-600" },
];

export default function Hero(props: HeroProps) {
    const { images } = props;
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = images || [
        '/makkah-clock-tower.webp',
        '/madinah-prophets-mosque.webp',
        '/gmc-yukon.webp',
    ];

    const slideAltTexts = [
        "Makkah Clock Tower — Haram Taxi Service",
        "Madinah Prophet's Mosque — Private Transfer",
        "Luxury GMC Yukon Fleet — VIP Taxi Saudi Arabia"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-gray-950" aria-label="Hero Section">

            {/* ── Background Slider ── */}
            <div className="absolute inset-0 z-0">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <Image
                            src={slide}
                            alt={slideAltTexts[index] || "Haram Taxi Service"}
                            fill
                            sizes="100vw"
                            priority={index === 0}
                            className="object-cover"
                            quality={75}
                        />
                        {/* Gradient overlay — left heavy so text is always legible */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30" />
                    </div>
                ))}
            </div>

            {/* ── Main Content ── */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 min-h-screen flex items-center">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center w-full">

                    {/* ── LEFT: Value Proposition ── */}
                    <div className="lg:col-span-7 space-y-7 text-center lg:text-left">

                        {/* Trust badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-teal/90 backdrop-blur-sm rounded-full border border-brand-teal-light/20">
                            <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                            <span className="text-white text-sm font-semibold tracking-wide">
                                TGA Licensed · 15,000+ Pilgrims Served
                            </span>
                        </div>

                        {/* H1 — clear value proposition */}
                        <h1 className="text-fluid-h1 font-display font-bold text-white leading-tight drop-shadow-lg">
                            Private Umrah Taxi Service{" "}
                            <span className="text-brand-teal-light">Saudi Arabia</span>
                        </h1>

                        {/* Sub-copy — who it's for & why they should care */}
                        <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                            Trusted by Umrah &amp; Hajj pilgrims for airport transfers, Makkah–Madinah
                            intercity rides, and Ziyarat tours. Fixed rates, luxury vehicles, and
                            24/7 availability — no haggling, no surprises.
                        </p>

                        {/* ── CTAs ── */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
                            {/* Primary CTA */}
                            <Button
                                asChild
                                size="lg"
                                className="bg-brand-teal hover:bg-brand-teal-light text-white px-8 py-6 text-lg font-bold shadow-lg shadow-brand-teal/30 transition-all hover:scale-105"
                            >
                                <Link href="/booking">
                                    Book Your Ride
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </Button>

                            {/* Ghost / secondary CTA */}
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="border-white/60 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-gray-900 px-8 py-6 text-lg font-semibold transition-all"
                            >
                                <Link href="/fleet">
                                    View Fleet
                                </Link>
                            </Button>
                        </div>

                        {/* ── Social Proof ── */}
                        <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 pt-2 justify-center lg:justify-start">
                            {/* Avatar stack */}
                            <div className="flex -space-x-3">
                                {socialProofAvatars.map((a, i) => (
                                    <div
                                        key={i}
                                        className={`w-10 h-10 rounded-full ${a.color} border-2 border-gray-900 flex items-center justify-center text-white text-xs font-bold ring-2 ring-black/20`}
                                        aria-hidden="true"
                                    >
                                        {a.initials}
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full bg-brand-teal border-2 border-gray-900 flex items-center justify-center text-white text-xs font-bold ring-2 ring-black/20">
                                    +
                                </div>
                            </div>

                            <div className="text-center lg:text-left">
                                {/* Star rating */}
                                <div className="flex items-center gap-1 justify-center lg:justify-start">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <Star key={i} className="w-4 h-4 fill-brand-amber text-brand-amber" />
                                    ))}
                                    <span className="text-brand-amber font-bold text-sm ml-1">5.0</span>
                                </div>
                                <p className="text-gray-300 text-sm mt-0.5">
                                    <span className="text-white font-semibold">15,000+</span> happy pilgrims &amp; counting
                                </p>
                            </div>
                        </div>

                        {/* ── Quick Trust Badges ── */}
                        <div className="flex flex-wrap gap-6 pt-2 justify-center lg:justify-start">
                            <div className="flex items-center gap-2 text-white group">
                                <div className="w-9 h-9 bg-brand-teal/20 rounded-full flex items-center justify-center flex-shrink-0 border border-brand-teal/30 group-hover:bg-brand-teal/30 transition-colors">
                                    <Clock className="w-4 h-4 text-brand-teal-light" />
                                </div>
                                <div>
                                    <div className="font-semibold text-sm">24/7 Service</div>
                                    <div className="text-xs text-gray-400">Always Available</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-white group">
                                <div className="w-9 h-9 bg-brand-teal/20 rounded-full flex items-center justify-center flex-shrink-0 border border-brand-teal/30 group-hover:bg-brand-teal/30 transition-colors">
                                    <Shield className="w-4 h-4 text-brand-teal-light" />
                                </div>
                                <div>
                                    <div className="font-semibold text-sm">TGA Licensed</div>
                                    <div className="text-xs text-gray-400">Fully Insured</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-white group">
                                <div className="w-9 h-9 bg-brand-teal/20 rounded-full flex items-center justify-center flex-shrink-0 border border-brand-teal/30 group-hover:bg-brand-teal/30 transition-colors">
                                    <Users className="w-4 h-4 text-brand-teal-light" />
                                </div>
                                <div>
                                    <div className="font-semibold text-sm">50+ Drivers</div>
                                    <div className="text-xs text-gray-400">Professional Team</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT: Booking Card ── */}
                    <div className="lg:col-span-5">
                        <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/20">
                            {/* Card header */}
                            <div className="bg-brand-teal px-6 py-4 flex items-center justify-between relative overflow-hidden">
                                <div className="absolute inset-0 bg-white/5 pattern-dots opacity-20"></div>
                                <div className="relative z-10">
                                    <h2 className="text-white font-display font-bold text-lg">Book Instantly</h2>
                                    <p className="text-brand-teal-pale text-sm">Get a quote in under 2 minutes</p>
                                </div>
                                <div className="flex items-center gap-1.5 relative z-10">
                                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
                                    <span className="text-brand-teal-pale text-xs font-medium">Online Now</span>
                                </div>
                            </div>

                            {/* Card body */}
                            <div className="p-6 space-y-4">
                                {/* WhatsApp CTA — primary action */}
                                <a
                                    href="https://wa.me/923080628195?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-6 rounded-xl text-lg transition-all hover:scale-[1.02] shadow-lg shadow-green-500/20"
                                    aria-label="Book via WhatsApp"
                                >
                                    <svg className="w-6 h-6 fill-current flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    Book via WhatsApp
                                </a>

                                <div className="flex items-center gap-3 text-gray-400 text-sm">
                                    <div className="flex-1 h-px bg-gray-200" />
                                    <span>or</span>
                                    <div className="flex-1 h-px bg-gray-200" />
                                </div>

                                {/* Online booking CTA — secondary */}
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="w-full border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white font-semibold py-4 h-auto text-base transition-all"
                                >
                                    <Link href="/booking">
                                        Fill Booking Form
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>

                                {/* Mini social proof inside card */}
                                <div className="bg-gray-50 rounded-xl p-4 flex items-start gap-3">
                                    <div className="flex -space-x-2 flex-shrink-0 mt-0.5">
                                        {socialProofAvatars.slice(0, 3).map((a, i) => (
                                            <div
                                                key={i}
                                                className={`w-7 h-7 rounded-full ${a.color} border-2 border-white flex items-center justify-center text-white text-[10px] font-bold`}
                                                aria-hidden="true"
                                            >
                                                {a.initials}
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-gray-600 text-xs leading-relaxed">
                                        <span className="font-semibold text-gray-800">Ahmed K. and 14,999 others</span> have already booked with us this year.
                                    </p>
                                </div>

                                {/* Guarantee line */}
                                <div className="flex items-center justify-center gap-2 text-gray-500 text-xs">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal flex-shrink-0" />
                                    <span>Fixed rates · No hidden fees · Instant confirmation</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* ── Slide Indicators ── */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                            ? 'bg-brand-teal w-8 shadow-[0_0_8px_rgba(20,184,166,0.5)]'
                            : 'bg-white/40 w-2 hover:bg-white/70'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
