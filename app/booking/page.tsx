import BookingForm from '@/components/BookingForm';
import Image from 'next/image';
import { Suspense } from 'react';
import { CheckCircle2, Shield, Clock, Car } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Book Taxi Online in Saudi Arabia | Instant Booking - Haram Taxi',
    description: 'Book taxi online in Saudi Arabia. Instant confirmation for Makkah, Madinah, Jeddah. Professional drivers, fixed rates. Available 24/7. Book now!',
    keywords: ['book taxi online Saudi Arabia', 'online taxi booking Makkah', 'book taxi Madinah', 'instant taxi booking', 'taxi reservation Saudi Arabia'],
    openGraph: {
        title: 'Book Taxi Online in Saudi Arabia | Instant Booking',
        description: 'Book taxi online with instant confirmation. Makkah, Madinah, Jeddah. Available 24/7.',
        url: 'https://www.haramtaxii.com/booking',
        type: 'website',
    },
};

export default function BookingPage() {
    const benefits = [
        {
            icon: CheckCircle2,
            title: "Fixed Pricing",
            description: "No hidden fees or surprises"
        },
        {
            icon: Shield,
            title: "Safe & Secure",
            description: "Licensed drivers and insured vehicles"
        },
        {
            icon: Clock,
            title: "24/7 Service",
            description: "Available anytime you need"
        },
        {
            icon: Car,
            title: "Clean Vehicles",
            description: "Well-maintained and sanitized"
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Booking Form Section - TOP */}
            <section className="pt-32 pb-12 bg-gradient-to-b from-brand-teal-pale/30 to-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-teal-pale/20 rounded-full mb-4">
                            <Car className="w-4 h-4 text-brand-teal-dark" />
                            <span className="text-brand-teal-dark text-sm font-semibold">Book Your Ride</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-4">
                            Reserve Your <span className="text-brand-teal">Taxi</span>
                        </h1>
                        <p className="text-lg text-gray-600">
                            Fill out the form below to book your taxi. We&apos;ll confirm your booking immediately.
                        </p>
                    </div>

                    {/* Booking Form */}
                    <div className="bg-white rounded-2xl shadow-xl border border-brand-teal-pale overflow-hidden">
                        <div className="h-2 bg-brand-teal"></div>
                        <div className="p-8">
                            <Suspense fallback={
                                <div className="text-center py-12">
                                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-brand-teal"></div>
                                    <p className="mt-4 text-gray-600">Loading booking form...</p>
                                </div>
                            }>
                                <BookingForm />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Grid - BELOW FORM */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Book With Us?</h2>
                        <p className="text-lg text-gray-600">Professional taxi service you can trust</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all border border-gray-100 hover:border-brand-teal/20">
                                <div className="w-12 h-12 bg-brand-teal-pale/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <benefit.icon className="w-6 h-6 text-brand-teal" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                                <p className="text-sm text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Section - BELOW BENEFITS */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Trust Card 1 */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden group">
                            <div className="relative h-64 w-full">
                                <Image
                                    src="/driver-nameboard.webp"
                                    alt="Professional Driver"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="font-bold text-xl mb-1">Professional Service</h3>
                                    <p className="text-sm opacity-90">Experienced drivers ready to serve you</p>
                                </div>
                            </div>
                        </div>

                        {/* Trust Card 2 */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden group">
                            <div className="relative h-64 w-full">
                                <Image
                                    src="/family-arrival.webp"
                                    alt="Family Friendly"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="font-bold text-xl mb-1">Family Friendly</h3>
                                    <p className="text-sm opacity-90">Spacious vehicles for everyone</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Benefits */}
            <section className="py-12 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-brand-teal rounded-2xl p-8 text-white shadow-xl shadow-brand-teal/20">
                        <h3 className="text-2xl font-bold mb-6 text-center font-display">Our Commitment to You</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-semibold mb-1">Transparent Pricing</div>
                                    <div className="text-sm opacity-90">No hidden fees or charges</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-semibold mb-1">Instant Confirmation</div>
                                    <div className="text-sm opacity-90">Quick booking confirmation</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-semibold mb-1">24/7 Support</div>
                                    <div className="text-sm opacity-90">Always here to help you</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-semibold mb-1">Professional Drivers</div>
                                    <div className="text-sm opacity-90">Licensed and experienced</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
