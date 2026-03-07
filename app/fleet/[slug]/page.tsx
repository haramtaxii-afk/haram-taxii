import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { fleetData } from '@/lib/fleetData';
import { Button } from '@/components/ui/button';
import {
    Users,
    Briefcase,
    CheckCircle2,
    Star,
    Shield,
    Car,
    Check,
    ArrowRight,
    Crown,
    Info,
    Calendar,
    Award
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import RelatedVehicles from '@/components/RelatedVehicles';

interface Props {
    params: Promise<{ slug: string }>;
}

const IconMap: { [key: string]: any } = {
    Users,
    Briefcase,
    Crown,
    Car,
    Star,
    Shield,
    Calendar,
    Award,
    Info
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const vehicle = fleetData.find((v) => v.slug === slug);

    if (!vehicle) {
        return {
            title: 'Vehicle Not Found',
        };
    }

    return {
        title: vehicle.seoTitle,
        description: vehicle.seoDescription,
        keywords: vehicle.keywords,
        alternates: {
            canonical: `https://www.haramtaxii.com/fleet/${slug}`,
        },
        openGraph: {
            title: vehicle.seoTitle,
            description: vehicle.seoDescription,
            url: `https://www.haramtaxii.com/fleet/${slug}`,
            type: 'website',
            images: [
                {
                    url: vehicle.image,
                    width: 1200,
                    height: 630,
                    alt: vehicle.name,
                }
            ]
        },
    };
}

export async function generateStaticParams() {
    return fleetData.map((vehicle) => ({
        slug: vehicle.slug,
    }));
}

export default async function VehicleDetailPage({ params }: Props) {
    const { slug } = await params;
    const vehicle = fleetData.find((v) => v.slug === slug);

    if (!vehicle) {
        notFound();
    }

    const vehicleSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": vehicle.name,
        "description": vehicle.longDescription,
        "image": `https://www.haramtaxii.com${vehicle.image}`,
        "brand": {
            "@type": "Brand",
            "name": vehicle.name.split(' ')[0]
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "SAR",
            "availability": "https://schema.org/InStock"
        },
        "additionalProperty": [
            {
                "@type": "PropertyValue",
                "name": "Seating Capacity",
                "value": vehicle.passengers
            },
            {
                "@type": "PropertyValue",
                "name": "Luggage Capacity",
                "value": vehicle.luggage
            },
            {
                "@type": "PropertyValue",
                "name": "Category",
                "value": vehicle.category
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleSchema) }}
            />

            {/* Breadcrumb */}
            <div className="bg-gray-50 py-4 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Link href="/" className="hover:text-teal-500">Home</Link>
                        <span>/</span>
                        <Link href="/fleet" className="hover:text-teal-500">Fleet</Link>
                        <span>/</span>
                        <span className="text-gray-900 font-medium">{vehicle.name}</span>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-white via-gray-50 to-teal-50/30 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 text-teal-700 rounded-full border border-teal-200">
                                {vehicle.category.toLowerCase().includes('vip') || vehicle.category.toLowerCase().includes('elite') ? (
                                    <Crown className="w-4 h-4" />
                                ) : (
                                    <Star className="w-4 h-4" />
                                )}
                                <span className="text-sm font-bold tracking-wide uppercase">{vehicle.category}</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                                {vehicle.name}
                            </h1>

                            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                                {vehicle.longDescription}
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link href={`/booking?vehicle=${encodeURIComponent(vehicle.name)}`}>
                                    <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-10 py-7 text-xl font-bold rounded-xl shadow-xl hover:shadow-teal-500/20 transition-all active:scale-95">
                                        Book Now
                                        <ArrowRight className="w-6 h-6 ml-2" />
                                    </Button>
                                </Link>
                                <a href="#specifications">
                                    <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 px-10 py-7 text-xl font-semibold rounded-xl transition-all">
                                        View Specs
                                    </Button>
                                </a>
                            </div>
                        </div>

                        {/* Image Container */}
                        <div className="relative group animate-in fade-in zoom-in duration-1000">
                            <div className="absolute -inset-4 bg-teal-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                                <Image
                                    src={vehicle.image}
                                    alt={vehicle.name}
                                    fill
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Specs Grid */}
            <section id="specifications" className="py-20 bg-white relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {vehicle.specifications.map((spec, index) => {
                            const Icon = IconMap[spec.icon] || Info;
                            return (
                                <div key={index} className="group p-8 bg-gray-50 hover:bg-white rounded-3xl border border-transparent hover:border-teal-100 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 text-center">
                                    <div className="w-16 h-16 bg-white group-hover:bg-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-teal-500/20 transition-all">
                                        <Icon className="w-8 h-8 text-teal-500 group-hover:text-white transition-colors" />
                                    </div>
                                    <div className="text-3xl font-black text-gray-900 mb-2">{spec.value}</div>
                                    <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">{spec.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-5" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/10 rounded-full text-teal-400 text-sm font-bold uppercase tracking-widest">
                                Exclusive Amenities
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold">Premium Features Included</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                                {vehicle.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 bg-teal-500/20 group-hover:bg-teal-500 rounded-xl flex items-center justify-center transition-all">
                                            <Check className="w-5 h-5 text-teal-500 group-hover:text-white transition-colors" />
                                        </div>
                                        <span className="text-lg text-gray-300 group-hover:text-white transition-colors font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Interactive "Ideal For" Card */}
                        <div className="bg-white/5 backdrop-blur-xl p-12 rounded-[2.5rem] border border-white/10 relative">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-500/20 blur-[80px] rounded-full" />
                            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                                <Award className="w-8 h-8 text-teal-400" />
                                Perfect For
                            </h3>
                            <div className="space-y-4">
                                {vehicle.idealFor.map((use, index) => (
                                    <div key={index} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all">
                                        <div className="w-2 h-2 rounded-full bg-teal-400" />
                                        <span className="text-lg text-gray-100">{use}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-12 pt-8 border-t border-white/10 text-center">
                                <p className="text-gray-400 text-sm mb-6 uppercase tracking-widest font-bold">Ready to travel in style?</p>
                                <Link href={`/booking?vehicle=${encodeURIComponent(vehicle.name)}`}>
                                    <Button className="w-full bg-white text-gray-900 hover:bg-teal-400 hover:text-white font-bold py-6 text-lg rounded-xl transition-all">
                                        Instant Booking Confirmation
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Vehicles */}
            <RelatedVehicles currentVehicle={vehicle.slug} />

            {/* Final CTA */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">
                        Experience the <span className="text-teal-500">{vehicle.name}</span> Difference
                    </h2>
                    <p className="text-xl text-gray-500 mb-12 leading-relaxed">
                        Don't settle for less. Book the finest transportation service in Saudi Arabia today. Available 24/7 across Makkah, Madinah, Jeddah, and Riyadh.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/booking" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full bg-teal-500 hover:bg-teal-600 text-white px-12 py-8 text-2xl font-bold rounded-2xl shadow-2xl hover:shadow-teal-500/40 transition-all">
                                Book Now
                            </Button>
                        </Link>
                        <a href="https://wa.me/923132222436" className="w-full sm:w-auto">
                            <Button size="lg" variant="outline" className="w-full border-gray-200 text-gray-700 hover:bg-gray-50 px-12 py-8 text-2xl font-bold rounded-2xl transition-all">
                                Talk to Support
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
