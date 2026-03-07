import { Metadata } from 'next';
import Link from 'next/link';
import { servicesData } from '@/lib/servicesData';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Professional Taxi Services | Haram Taxi Service',
    description: 'Explore our range of premium taxi services including airport transfers, intercity rides to Makkah & Madinah, and Ziyarat tours.',
    alternates: {
        canonical: 'https://www.haramtaxii.com/services',
    },
};

export default function ServicesIndexPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero */}
            <div className="bg-brand-teal text-white pt-32 pb-12 md:pt-40 md:pb-20 px-4 text-center">
                <h1 className="text-fluid-h1 font-bold mb-4 font-display">Our Services</h1>
                <p className="text-xl opacity-90 max-w-2xl mx-auto font-light">Reliable, comfortable, and affordable transportation solutions for your spiritual journey.</p>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service) => (
                        <Card key={service.slug} className="hover:shadow-xl transition-all duration-300 border-brand-teal-pale hover:border-brand-teal group">
                            <CardHeader>
                                <CardTitle className="text-xl font-bold font-display text-gray-900 line-clamp-2 min-h-[3.5rem] group-hover:text-brand-teal transition-colors">
                                    {service.title}
                                </CardTitle>
                                <CardDescription className="line-clamp-3 mt-2 text-gray-600">
                                    {service.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                    {service.features.slice(0, 3).map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2">
                                            <Star className="w-3.5 h-3.5 text-brand-amber fill-brand-amber" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Link href={`/services/${service.slug}`} className="w-full">
                                    <Button className="w-full bg-brand-teal hover:bg-brand-teal-dark group shadow-md hover:shadow-lg transition-all">
                                        View {service.title.split('|')[0].trim()} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gray-50 py-20 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Why Choose Haram Taxi?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Experience the difference with our premium service.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                            <div className="w-14 h-14 bg-brand-teal-pale rounded-full flex items-center justify-center mx-auto mb-6">
                                <Shield className="w-7 h-7 text-brand-teal" />
                            </div>
                            <h3 className="font-display font-bold text-xl mb-3 text-gray-900">Safe & Secure</h3>
                            <p className="text-gray-600 leading-relaxed">Licensed drivers and tracked vehicles for your complete peace of mind.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                            <div className="w-14 h-14 bg-brand-teal-pale rounded-full flex items-center justify-center mx-auto mb-6">
                                <Clock className="w-7 h-7 text-brand-teal" />
                            </div>
                            <h3 className="font-display font-bold text-xl mb-3 text-gray-900">Always Punctual</h3>
                            <p className="text-gray-600 leading-relaxed">We value your time above all. Our drivers arrive 15 minutes early, guaranteed.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                            <div className="w-14 h-14 bg-brand-teal-pale rounded-full flex items-center justify-center mx-auto mb-6">
                                <Star className="w-7 h-7 text-brand-teal" />
                            </div>
                            <h3 className="font-display font-bold text-xl mb-3 text-gray-900">Top Rated Service</h3>
                            <p className="text-gray-600 leading-relaxed">Trusted by thousands of pilgrims for Umrah and Hajj transport excellence.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
