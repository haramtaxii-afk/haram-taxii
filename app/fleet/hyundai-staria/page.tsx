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
    title: 'Hyundai Staria Taxi in Saudi Arabia | Family Van Rental - Haram Taxi',
    description: 'Book Hyundai Staria family van taxi in Saudi Arabia. Modern 7-seater for families in Makkah, Madinah, Jeddah. Spacious and comfortable.',
    keywords: ['Hyundai Staria taxi', 'family van Saudi Arabia', '7 seater taxi Makkah', 'family taxi Madinah', 'spacious van'],
    openGraph: {
        title: 'Hyundai Staria Family Van Taxi | 7-Seater',
        description: 'Book Hyundai Staria for comfortable family travel in Saudi Arabia.',
        url: 'http://www.haramtaxii.com/fleet/hyundai-staria',
        type: 'website',
    },
};

export default function HyundaiStariaPage() {
    const features = [
        'Modern Design',
        'Spacious Interior',
        'Family Friendly',
        'USB Charging Ports',
        'Air Conditioning',
        'Professional Driver',
        'Comfortable Seats',
        'Large Windows',
    ];

    const specifications = [
        { label: 'Passengers', value: '7 Adults', icon: Users },
        { label: 'Luggage', value: '4 Large Bags', icon: Briefcase },
        { label: 'Class', value: 'Family Van', icon: Star },
        { label: 'Transmission', value: 'Automatic', icon: Car },
    ];

    const idealFor = [
        'Family Travel',
        'Group Tours',
        'Airport Transfer',
        'City Tours',
        'Long Distance',
        'Hotel Transfers',
    ];

    const faqs = [
        {
            question: "How many people can the Hyundai Staria accommodate?",
            answer: "The Hyundai Staria comfortably seats 7 adults with modern amenities and ample luggage space for 4 large bags."
        },
        {
            question: "Is the Staria good for families with children?",
            answer: "Yes! The Hyundai Staria is designed for families with spacious seating, modern safety features, and comfortable ride quality."
        },
        {
            question: "Can we use the Staria for long-distance travel?",
            answer: "Absolutely. The Staria is perfect for long-distance journeys between cities like Makkah, Madinah, and Jeddah with its comfortable interior."
        },
        {
            question: "Does it have charging ports?",
            answer: "Yes, the Hyundai Staria comes equipped with USB charging ports for all passengers to keep devices charged during the journey."
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Link href="/" className="hover:text-teal-500">Home</Link>
                        <span>/</span>
                        <Link href="/fleet" className="hover:text-teal-500">Fleet</Link>
                        <span>/</span>
                        <span className="text-gray-900 font-medium">Hyundai Staria</span>
                    </div>
                </div>
            </div>

            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full">
                                <Star className="w-4 h-4 text-teal-500" />
                                <span className="text-teal-600 text-sm font-semibold">Modern Family Van</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                                Hyundai <span className="text-teal-500">Staria</span>
                            </h1>

                            <p className="text-xl text-gray-600 leading-relaxed">
                                Modern and spacious family van perfect for group travel. The Hyundai Staria combines contemporary design with comfort for your family journey.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link href="/booking?vehicle=Hyundai%20Staria">
                                    <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg">
                                        Book Now
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </Link>
                                <a href="#details">
                                    <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 px-8 py-6 text-lg">
                                        View Hyundai Staria Specs
                                    </Button>
                                </a>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/hyundai-staria-family-taxi.webp"
                                    alt="Hyundai Staria family van taxi in Saudi Arabia"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-2xl shadow-md">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Features</h2>
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

                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/hyundai-staria-family-travel-saudi.webp"
                                alt="Hyundai Staria for family travel"
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

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-xl text-gray-600">Common questions about Hyundai Staria rental</p>
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
            <RelatedVehicles currentVehicle="hyundai-staria" />
            <section className="py-20 bg-teal-500 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Book Hyundai Staria?</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Modern family van for comfortable group travel. Book now!
                    </p>
                    <Link href="/booking?vehicle=Hyundai%20Staria">
                        <Button size="lg" className="bg-white text-teal-500 hover:bg-gray-100 px-12 py-6 text-lg">
                            Book This Vehicle
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
