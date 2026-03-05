import { Metadata } from 'next';
import Link from 'next/link';
import { routesData } from '@/lib/routesData';
import { servicesData } from '@/lib/servicesData';
import BookingForm from '@/components/BookingForm';
import { CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'Taxi Prices & Rates | Haram Taxi Service',
    description: 'Transparent pricing for Umrah taxi services. Makkah to Madinah, Jeddah Airport transfers, and Ziyarat tours. Fixed rates, no hidden fees.',
};

export default function PricingPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="bg-teal-700 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Transparent Taxi Rates 2026</h1>
                    <p className="text-xl opacity-90">Fixed prices for all Umrah & Hajj transfers. No hidden charges.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Pricing Tables */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Routes Pricing */}
                        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                            <div className="bg-gray-900 text-white p-6">
                                <h2 className="text-2xl font-bold">Intercity Route Rates</h2>
                                <p className="opacity-80">Jeddah, Makkah, Madinah Transfers</p>
                            </div>
                            <div className="p-6">
                                <div className="space-y-8">
                                    {routesData.map((route, idx) => (
                                        <div key={idx} className="border-b last:border-0 pb-6 last:pb-0">
                                            <h3 className="text-xl font-bold text-teal-700 mb-4 flex items-center justify-between">
                                                <Link href={`/routes/${route.slug}`} className="hover:underline">
                                                    {route.h1}
                                                </Link>
                                            </h3>
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                {route.pricing.map((price, pIdx) => (
                                                    <div key={pIdx} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
                                                        <span className="font-semibold text-gray-700">{price.vehicle}</span>
                                                        <span className="font-bold text-teal-600">{price.price}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Services Pricing */}
                        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                            <div className="bg-gray-900 text-white p-6">
                                <h2 className="text-2xl font-bold">Special Service Rates</h2>
                                <p className="opacity-80">Ziyarat, Airport Transfers & More</p>
                            </div>
                            <div className="p-6">
                                <div className="space-y-8">
                                    {servicesData.map((service, idx) => (
                                        <div key={idx} className="border-b last:border-0 pb-6 last:pb-0">
                                            <h3 className="text-xl font-bold text-teal-700 mb-4 flex items-center justify-between">
                                                <Link href={`/services/${service.slug}`} className="hover:underline">
                                                    {service.title}
                                                </Link>
                                            </h3>
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                {service.pricing.map((price, pIdx) => (
                                                    <div key={pIdx} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
                                                        <span className="font-semibold text-gray-700">{price.title}</span>
                                                        <span className="font-bold text-teal-600">{price.price}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                            <h3 className="text-xl font-bold mb-4">Get a Custom Quote</h3>
                            <BookingForm />

                            <div className="mt-8 pt-8 border-t border-gray-100 space-y-4">
                                <a href="https://wa.me/923132222436" target="_blank" rel="noopener noreferrer">
                                    <Button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white">
                                        <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Us
                                    </Button>
                                </a>
                                <a href="tel:+923132222436">
                                    <Button variant="outline" className="w-full">
                                        <Phone className="w-4 h-4 mr-2" /> Call Now
                                    </Button>
                                </a>
                            </div>

                            <div className="mt-6 text-sm text-gray-500">
                                <h4 className="font-bold text-gray-900 mb-2">Note:</h4>
                                <ul className="space-y-1 list-disc list-inside">
                                    <li>Prices may vary during Ramadan & Hajj seasons.</li>
                                    <li>Advance booking required for VIP vehicles.</li>
                                    <li>All prices are in Saudi Riyal (SAR).</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
