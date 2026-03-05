"use client";

import { useState, useEffect, useRef } from 'react';
import { MapPin, Clock } from 'lucide-react';

interface PrayerTimesData {
    Fajr: string;
    Sunrise: string;
    Dhuhr: string;
    Asr: string;
    Maghrib: string;
    Isha: string;
    [key: string]: string;
}

const CITIES = ['Makkah', 'Madinah', 'Jeddah'];

export default function PrayerTimesWidget({ initialData, initialCity = 'Makkah' }: { initialData: PrayerTimesData | null, initialCity?: string }) {
    const [city, setCity] = useState(initialCity);
    const [times, setTimes] = useState<PrayerTimesData | null>(initialData);
    const [loading, setLoading] = useState(!initialData);
    const hasMounted = useRef(false);

    useEffect(() => {
        // Skip fetch on initial mount IF we have data
        if (!hasMounted.current) {
            hasMounted.current = true;
            if (city === initialCity && initialData) {
                setLoading(false);
                return;
            }
        }

        // Always fetch when city changes (or initial data missing)
        async function fetchTimes() {
            setLoading(true);
            try {
                const url = `/api/prayer-times?city=${encodeURIComponent(city)}`;
                const res = await fetch(url);

                if (res.ok) {
                    const data = await res.json();
                    if (data && data.Fajr) {
                        setTimes(data);
                    } else if (data && data.error) {
                        console.error('API error:', data.error);
                    }
                } else {
                    const errorData = await res.json().catch(() => ({}));
                    console.error('Failed to fetch prayer times:', res.status, errorData);
                }
            } catch (err) {
                console.error('Error fetching prayer times:', err);
            } finally {
                setLoading(false);
            }
        }

        fetchTimes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [city]);

    if (!times) {
        return (
            <div className="bg-white rounded-2xl shadow-lg border border-teal-100 overflow-hidden h-full min-h-[300px] flex items-center justify-center p-8 text-gray-500">
                <div className="text-center">
                    {loading ? (
                        <>
                            <Clock className="w-8 h-8 text-teal-600 animate-spin mx-auto mb-2" />
                            <p>Loading prayer times...</p>
                        </>
                    ) : (
                        <>
                            <Clock className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                            <p>Prayer times unavailable.</p>
                            <button
                                onClick={() => window.location.reload()}
                                className="mt-2 text-sm text-teal-600 hover:underline"
                            >
                                Retry
                            </button>
                        </>
                    )}
                </div>
            </div>
        );
    }

    const prayers = [
        { name: 'Fajr', time: times.Fajr },
        { name: 'Sunrise', time: times.Sunrise },
        { name: 'Dhuhr', time: times.Dhuhr },
        { name: 'Asr', time: times.Asr },
        { name: 'Maghrib', time: times.Maghrib },
        { name: 'Isha', time: times.Isha },
    ];

    // Helper to format time (remove timezone if present)
    const formatTime = (t: string) => t.split(' ')[0];

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-teal-100 overflow-hidden h-full">
            <div className="bg-teal-600 p-6 text-white">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold text-xl flex items-center gap-2">
                            <Clock className="w-6 h-6" />
                            Prayer Times
                        </h3>
                    </div>

                    <div className="flex gap-2 bg-teal-700/50 p-1.5 rounded-lg w-full">
                        {CITIES.map((c) => (
                            <button
                                key={c}
                                type="button"
                                onClick={() => {
                                    setCity(c);
                                }}
                                className={`flex-1 px-4 py-2.5 rounded-md transition-all font-semibold text-sm ${city === c ? 'bg-white text-teal-700 shadow-md' : 'text-teal-100 hover:text-white hover:bg-teal-600/50'
                                    }`}
                            >
                                {c}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 text-sm opacity-90 mt-1">
                        <MapPin className="w-4 h-4" />
                        Today in {city}, Saudi Arabia
                    </div>
                </div>
            </div>

            <div className="p-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {prayers.map((prayer) => (
                        <div key={prayer.name} className="text-center p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-teal-200 hover:bg-teal-50/50 transition-all group">
                            <div className="text-gray-500 text-xs font-medium mb-1 uppercase tracking-wider">{prayer.name}</div>
                            <div className="text-teal-700 font-bold text-lg font-mono group-hover:text-teal-600">
                                {loading ? '...' : formatTime(prayer.time)}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-6 flex items-center justify-center gap-2 text-xs text-gray-400">
                    <span>Method: Umm Al-Qura University</span>
                </div>
            </div>
        </div>
    );
}
