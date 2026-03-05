import { Metadata } from 'next';
import DistanceCalculator from '@/components/tools/DistanceCalculator';

export const metadata: Metadata = {
    title: 'Distance Calculator Saudi Arabia | Makkah to Madinah Travel Time - Haram Taxi',
    description: 'Calculate driving distance and estimated taxi travel time between Makkah, Madinah, Jeddah Airport, and Taif. Plan your Umrah journey efficiently.',
    keywords: ['distance calculator Saudi Arabia', 'Makkah to Madinah distance', 'Jeddah to Makkah travel time', 'taxi travel time Saudi Arabia'],
};

export default function DistancePage() {
    return (
        <div className="bg-gray-50 min-h-screen py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Travel Distance <span className="text-teal-600">Calculator</span>
                    </h1>
                </div>
                <div className="flex justify-center">
                    <DistanceCalculator />
                </div>

                <div className="mt-16 max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm">
                    <h3 className="font-bold text-lg mb-4">Popular Routes</h3>
                    <ul className="space-y-3">
                        <li className="flex justify-between border-b pb-2">
                            <span>Jeddah Airport ↔ Makkah</span>
                            <span className="font-mono text-gray-600">95 km / 1 hr 15 min</span>
                        </li>
                        <li className="flex justify-between border-b pb-2">
                            <span>Makkah ↔ Madinah (Hijrah Rd)</span>
                            <span className="font-mono text-gray-600">453 km / 4 hr 30 min</span>
                        </li>
                        <li className="flex justify-between border-b pb-2">
                            <span>Jeddah ↔ Madinah</span>
                            <span className="font-mono text-gray-600">420 km / 4 hr 10 min</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
