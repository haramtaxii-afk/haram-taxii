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
    title: 'Toyota Hiace Taxi in Saudi Arabia | 11-Seater Van Rental - Haram Taxi',
    description: 'Book Toyota Hiace 11-seater van taxi in Saudi Arabia. Perfect for group travel in Makkah, Madinah, Jeddah. Spacious and reliable.',
    keywords: ['Toyota Hiace taxi', 'group van Saudi Arabia', '11 seater taxi', 'group travel Makkah', 'tour van'],
    openGraph: {
        title: 'Toyota Hiace Group Van Taxi | 11-Seater',
        description: 'Book Toyota Hiace for group travel and tours in Saudi Arabia.',
        url: 'https://www.haramtaxii.com/fleet/toyota-hiace',
        type: 'website',
    },
};

export default function ToyotaHiacePage() {
    const features = [
        'Spacious Interior',
        'Group Travel',
        'Reliable Engine',
        'Long Distance Comfort',
        'Air Conditioning',
        'Professional Driver',
        'Large Luggage Space',
        'Comfortable Seats',
    ];

    const specifications = [
        { label: 'Passengers', value: '11 Adults', icon: Users },
        { label: 'Luggage', value: '16 Large Bags', icon: Briefcase },
        { label: 'Class', value: 'Group Van', icon: Star },
        { label: 'Transmission', value: 'Automatic', icon: Car },
    ];

    const idealFor = [
        'Group Tours',
        'Family Trips',
        'Corporate Travel',
        'Airport Transfer',
        'City Tours',
        'Long Distance',
    ];

    const faqs = [
        {
            question: "How many passengers can the Toyota Hiace accommodate?",
            answer: "The Toyota Hiace comfortably seats 11 adults with generous luggage space for up to 16 large bags, perfect for medium-sized groups."
        },
        {
            question: "Is the Hiace suitable for long-distance travel?",
            answer: "Yes! The Toyota Hiace is designed for long-distance comfort with reliable performance, making it ideal for trips between Makkah, Madinah, and other cities."
        },
        {
            question: "Can we use it for group tours?",
            answer: "Absolutely. The Hiace is perfect for group tours, corporate travel, and family trips with its spacious interior and comfortable seating."
        },
        {
            question: "Is luggage space sufficient for a group?",
            answer: "Yes, the Toyota Hiace has ample luggage space for 16 large bags, ensuring everyone's belongings fit comfortably."
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
                        <span className="text-gray-900 font-medium">Toyota Hiace</span>
                    </div>
                </div>
            </div>

            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full">
                                <Star className="w-4 h-4 text-teal-500" />
                                <span className="text-teal-600 text-sm font-semibold">Group Van</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                                Toyota <span className="text-teal-500">Hiace</span>
                            </h1>

                            <p className="text-xl text-gray-600 leading-relaxed">
                                Reliable and spacious van perfect for group travel and tours. The Toyota Hiace offers comfortable seating for 11 passengers with ample luggage space.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link href="/booking?vehicle=Toyota%20Hiace">
                                    <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg">
                                        Book Now
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </Link>
                                <a href="#details">
                                    <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 px-8 py-6 text-lg">
                                        View Toyota Hiace Specs
                                    </Button>
                                </a>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/toyota-hiace-commuter-van.webp"
                                    alt="Toyota Hiace group van taxi in Saudi Arabia"
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
                                src="/toyota-hiace-group-transport-saudi.webp"
                                alt="Toyota Hiace for group travel"
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
                        <p className="text-xl text-gray-600">Common questions about Toyota Hiace rental</p>
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
            <RelatedVehicles currentVehicle="toyota-hiace" />
            <section className="py-20 bg-teal-500 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Book Toyota Hiace?</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Spacious group van for comfortable travel. Book now!
                    </p>
                    <Link href="/booking?vehicle=Toyota%20Hiace">
                        <Button size="lg" className="bg-white text-teal-500 hover:bg-gray-100 px-12 py-6 text-lg">
                            Book This Vehicle
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
