import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { fleetData } from '@/lib/fleetData';

interface RelatedVehiclesProps {
    currentVehicle: string;
}

export default function RelatedVehicles({ currentVehicle }: RelatedVehiclesProps) {
    // Filter out current vehicle and get 3 related ones
    const relatedVehicles = fleetData
        .filter(vehicle => vehicle.slug !== currentVehicle)
        .sort(() => 0.5 - Math.random()) // Shuffle for variety
        .slice(0, 3);

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Similar Vehicles You Might Like</h2>
                    <p className="text-xl text-gray-600">Explore other options for your journey</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {relatedVehicles.map((vehicle) => (
                        <Link key={vehicle.slug} href={`/fleet/${vehicle.slug}`} className="group">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                                <div className="relative h-48">
                                    <Image
                                        src={vehicle.image}
                                        alt={`${vehicle.name} taxi in Saudi Arabia`}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{vehicle.description}</p>
                                    <div className="flex items-center text-teal-500 font-semibold">
                                        View {vehicle.name} Details <ArrowRight className="w-4 h-4 ml-2" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
