import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Users, Briefcase, CheckCircle2, Star, Shield, Car, Check, ArrowRight } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import RelatedVehicles from '@/components/RelatedVehicles';

export const metadata: Metadata = {
    title: 'GMC Yukon Taxi in Saudi Arabia | Luxury SUV Rental - Haram Taxi',
    description: 'Book GMC Yukon luxury SUV taxi in Saudi Arabia. Premium 7-seater for VIP transport in Makkah, Madinah, Jeddah. Professional drivers, fixed rates.',
    keywords: ['GMC Yukon taxi', 'luxury SUV rental Saudi Arabia', 'VIP taxi Makkah', 'GMC Yukon Madinah', '7 seater taxi'],
    openGraph: {
        title: 'GMC Yukon Luxury Taxi | Premium SUV Rental',
        description: 'Book GMC Yukon luxury SUV for VIP transport in Saudi Arabia.',
        url: 'https://haramtaxiservice.com/fleet/gmc-yukon',
        type: 'website',
    },
};

export default function GMCYukonPage() {
    const features = [
        'Luxury Leather Interiors',
        'Extended Legroom',
        'Premium Sound System',
        'Multi-Zone Climate Control',
        'Privacy Tinted Windows',
        'Professional Driver',
        'Complimentary WiFi',
        'USB Charging Ports',
    ];

    const specifications = [
        { label: 'Passengers', value: '7 Adults', icon: Users },
        { label: 'Luggage', value: '5 Large Bags', icon: Briefcase },
        { label: 'Class', value: 'Luxury SUV', icon: Star },
        { label: 'Transmission', value: 'Automatic', icon: Car },
    ];

    const idealFor = [
        'VIP Airport Transfers',
        'Executive Business Travel',
        'Family Trips',
        'Corporate Delegations',
        'Luxury Tours',
        'Special Events',
    ];

    const faqs = [
        {
            question: "Does the GMC Yukon come with a professional driver?",
            answer: "Yes, all our GMC Yukon rentals include a professional, well-trained driver who speaks multiple languages. We ensure the highest level of service."
        },
        {
            question: "How many passengers can the GMC Yukon accommodate?",
            answer: "The GMC Yukon comfortably seats 7 passengers with ample space for 5 large luggage pieces, perfect for families and groups."
        },
        {
            question: "Is fuel and toll included in the booking?",
            answer: "Yes, our pricing is all-inclusive. Fuel, road tolls, parking fees, and driver costs are all covered in your quoted price."
        },
        {
            question: "Can I book the GMC Yukon from Jeddah to Makkah?",
            answer: "Absolutely. The GMC Yukon is perfect for the Jeddah-Makkah route, providing a smooth and comfortable ride."
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Breadcrumb */}
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Link href="/" className="hover:text-teal-500">Home</Link>
                        <span>/</span>
                        <Link href="/fleet" className="hover:text-teal-500">Fleet</Link>
                        <span>/</span>
                        <span className="text-gray-900 font-medium">GMC Yukon</span>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full">
                                <Star className="w-4 h-4 text-teal-500" />
                                <span className="text-teal-600 text-sm font-semibold">Premium Luxury SUV</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                                GMC <span className="text-teal-500">Yukon</span>
                            </h1>

                            <p className="text-xl text-gray-600 leading-relaxed">
                                Experience ultimate luxury and comfort with our GMC Yukon. Perfect for VIP transport, family trips, and executive travel across Saudi Arabia.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link href="/booking?vehicle=GMC%20Yukon">
                                    <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg">
                                        Book Now
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </Link>
                                <a href="#details">
                                    <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 px-8 py-6 text-lg">
                                        View GMC Yukon Specs
                                    </Button>
                                </a>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative">
                            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/gmc-yukon-xl-taxi.webp"
                                    alt="GMC Yukon luxury SUV taxi in Saudi Arabia"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specifications */}
            <section id="details" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {specifications.map((spec, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all">
                                <spec.icon className="w-8 h-8 text-teal-500 mx-auto mb-3" />
                                <div className="text-2xl font-bold text-gray-900 mb-1">{spec.value}</div>
                                <div className="text-sm text-gray-600">{spec.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features & Image */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Features */}
                        <div className="bg-white p-8 rounded-2xl shadow-md">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Premium Features</h2>
                            <ul className="space-y-4">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-center text-gray-700">
                                        <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                                            <Check className="w-4 h-4 text-teal-500" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Context Image */}
                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/gmc-yukon-context.webp"
                                alt="GMC Yukon taxi at Makkah"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8">
                                <h3 className="text-2xl font-bold text-white mb-4">Perfect For</h3>
                                <div className="flex flex-wrap gap-2">
                                    {idealFor.map((use, index) => (
                                        <span key={index} className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-sm rounded-full border border-white/30">
                                            {use}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-xl text-gray-600">Common questions about GMC Yukon rental</p>
                    </div>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-lg font-semibold text-gray-900 py-6 hover:text-teal-500 text-left">
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

            {/* Related Vehicles */}
            <RelatedVehicles currentVehicle="gmc-yukon" />

            {/* CTA Section */}
            <section className="py-20 bg-teal-500 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Book GMC Yukon?</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Experience luxury travel in Saudi Arabia. Book your GMC Yukon now!
                    </p>
                    <Link href="/booking?vehicle=GMC%20Yukon">
                        <Button size="lg" className="bg-white text-teal-500 hover:bg-gray-100 px-12 py-6 text-lg">
                            Book This Vehicle
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
