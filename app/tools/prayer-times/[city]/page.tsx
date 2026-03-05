import { Metadata } from 'next';
import { getPrayerTimes } from '@/lib/prayer-times';
import PrayerTimesWidget from '@/components/PrayerTimes';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar } from 'lucide-react';

type Props = {
    params: { city: string }
};

function capitalize(s: string) {
    if (!s) return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const city = capitalize(params.city);
    return {
        title: `Prayer Times ${city} | Today's Salah Time - Haram Taxi`,
        description: `Get accurate prayer times (Salah time) for ${city} today. Fajr, Dhuhr, Asr, Maghrib, and Isha timings provided by Haram Taxi Service.`,
    };
}

export default async function CityPrayerPage({ params }: Props) {
    const citySlug = params.city;
    const cityName = capitalize(citySlug);

    const times = await getPrayerTimes(cityName);

    // Fallback or Error handling logic
    // AlAdhan API is robust for major cities.

    return (
        <div className="bg-gray-50 min-h-screen py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb / Back */}
                <div className="mb-8">
                    <Link href="/tools/prayer-times">
                        <Button variant="ghost" className="pl-0 hover:bg-transparent hover:text-teal-600">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to All Cities
                        </Button>
                    </Link>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-6 lg:col-start-4">
                        <div className="text-center mb-8">
                            <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                                Daily Schedule
                            </span>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                Prayer Times for <span className="text-teal-600">{cityName}</span>
                            </h1>
                            <p className="text-gray-500 flex items-center justify-center gap-2">
                                <Calendar className="w-4 h-4" />
                                Updated for today
                            </p>
                        </div>

                        <PrayerTimesWidget initialData={times} initialCity={cityName} />

                        <div className="mt-8 bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                            <h3 className="font-semibold text-gray-900 mb-2">Need a ride to the Masjid?</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                We provide reliable taxi services in {cityName} for all prayer times.
                            </p>
                            <Link href={`/locations/${citySlug === 'makkah' || citySlug === 'madinah' || citySlug === 'jeddah' ? citySlug : 'makkah'}`}>
                                <Button className="bg-teal-600 hover:bg-teal-700 w-full">
                                    Book Taxi in {cityName}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
