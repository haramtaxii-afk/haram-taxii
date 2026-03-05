import { Metadata } from 'next';
import FareCalculator from '@/components/tools/FareCalculator';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Taxi Fare Calculator Saudi Arabia | Estimates for Makkah, Madinah - Haram Taxi',
    description: 'Calculate taxi fares instantly for Jeddah to Makkah, Madinah, and other cities. Get accurate price estimates for Sedan, GMC Yukon, and Hiace based on current market rates.',
    keywords: ['taxi fare calculator Saudi Arabia', 'Jeddah to Makkah taxi price', 'Madinah taxi rates', 'taxi cost calculator', 'Haram taxi prices'],
};

export default function FareCalculatorPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Taxi Fare <span className="text-teal-600">Calculator</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Plan your journey budget with our transparent fare estimator.
                        No hidden fees, just honest pricing for your Umrah travel.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Calculator Component */}
                    <div className="lg:col-span-12 xl:col-span-6 xl:col-start-4">
                        <FareCalculator />
                    </div>
                </div>

                {/* SEO Content / FAQ */}
                <div className="mt-20 max-w-4xl mx-auto space-y-12">
                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Taxi Rates in Saudi Arabia</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm text-gray-600">
                                <thead className="bg-gray-50 text-gray-900 font-semibold">
                                    <tr>
                                        <th className="p-4">Route</th>
                                        <th className="p-4">Sedan</th>
                                        <th className="p-4">GMC Yukon</th>
                                        <th className="p-4">Hiace Van</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr>
                                        <td className="p-4 font-medium">Jeddah Airport → Makkah</td>
                                        <td className="p-4">200 SAR</td>
                                        <td className="p-4">350 SAR</td>
                                        <td className="p-4">400 SAR</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium">Makkah → Madinah</td>
                                        <td className="p-4">450 SAR</td>
                                        <td className="p-4">650 SAR</td>
                                        <td className="p-4">700 SAR</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-lg text-gray-800 mb-2">Are these prices fixed?</h3>
                                <p className="text-gray-600">
                                    Our online bookings are fixed-price. The calculator provides an accurate estimate based on standard rates. During peak seasons (Ramadan, Hajj), rates may vary slightly.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-gray-800 mb-2">Does the fare include tolls and fuel?</h3>
                                <p className="text-gray-600">
                                    Yes, all our quotes include fuel, driver fees, and standard highway tolls. There are no hidden surcharges.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
