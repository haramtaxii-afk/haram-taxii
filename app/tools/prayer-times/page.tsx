import { Metadata } from 'next';
import Link from 'next/link';
import { getPrayerTimes } from '@/lib/prayer-times';
import PrayerTimesWidget from '@/components/PrayerTimes';
import { MapPin, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Prayer Times Saudi Arabia | Makkah, Madinah, Jeddah - Haram Taxi',
    description: 'Get accurate daily prayer times for all major cities in Saudi Arabia. Fajr, Dhuhr, Asr, Maghrib, and Isha timings for Makkah, Madinah, Jeddah, and more.',
    alternates: {
        canonical: 'https://www.haramtaxii.com/tools/prayer-times',
    },
};

const CITIES = [
    { name: 'Makkah', slug: 'makkah', image: '/makkah-clock-tower.webp' },
    { name: 'Madinah', slug: 'madinah', image: '/madinah-prophets-mosque.webp' },
    { name: 'Jeddah', slug: 'jeddah', image: '/jeddah-corniche-view.webp' },
    { name: 'Taif', slug: 'taif', image: '/taif-mountains-view.webp' },
];

export default async function PrayerTimesIndex() {
    const makkahTimes = await getPrayerTimes('Makkah');

    return (
        <div className="bg-gray-50 min-h-screen py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Prayer Times inside <span className="text-teal-600">Saudi Arabia</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Accurate daily Salah timings for pilgrims and residents. Calculated using Umm Al-Qura University method.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Main Widget */}
                    <div>
                        <PrayerTimesWidget initialData={makkahTimes} initialCity="Makkah" />
                    </div>

                    {/* City Links */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Select City</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {CITIES.map((city) => (
                                <Link key={city.slug} href={`/tools/prayer-times/${city.slug}`}>
                                    <div className="group border border-gray-100 rounded-xl p-4 hover:border-teal-500 hover:shadow-md transition-all cursor-pointer flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center group-hover:bg-teal-500 transition-colors">
                                                <MapPin className="w-5 h-5 text-teal-600 group-hover:text-white" />
                                            </div>
                                            <span className="font-semibold text-gray-800">{city.name}</span>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-teal-500 transform group-hover:translate-x-1 transition-all" />
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="mt-8 bg-teal-50 rounded-xl p-6">
                            <h3 className="font-bold text-teal-900 mb-2">Why Accurate Timings Matter?</h3>
                            <p className="text-sm text-teal-800/80">
                                For pilgrims performing Umrah or Hajj, knowing the exact prayer times is crucial for arranging visits to the Haram. Our data is synced directly with official sources.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
