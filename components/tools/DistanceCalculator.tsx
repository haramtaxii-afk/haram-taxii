"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation, Clock } from 'lucide-react';

const CITIES = ['Jeddah Airport', 'Makkah', 'Madinah', 'Taif', 'Jeddah City'];

const DISTANCE_DATA: Record<string, { km: number, time: string }> = {
    'Jeddah Airport-Makkah': { km: 95, time: '1 hr 15 min' },
    'Makkah-Jeddah Airport': { km: 95, time: '1 hr 15 min' },

    'Jeddah City-Makkah': { km: 85, time: '1 hr 05 min' },
    'Makkah-Jeddah City': { km: 85, time: '1 hr 05 min' },

    'Makkah-Madinah': { km: 453, time: '4 hr 30 min' },
    'Madinah-Makkah': { km: 453, time: '4 hr 30 min' },

    'Jeddah Airport-Madinah': { km: 420, time: '4 hr 10 min' },
    'Madinah-Jeddah Airport': { km: 420, time: '4 hr 10 min' },

    'Makkah-Taif': { km: 88, time: '1 hr 15 min' },
    'Taif-Makkah': { km: 88, time: '1 hr 15 min' },
};

export default function DistanceCalculator() {
    const [from, setFrom] = useState(CITIES[0]);
    const [to, setTo] = useState(CITIES[1]);
    const [result, setResult] = useState<{ km: number, time: string } | null>(null);

    const handleCalculate = () => {
        const key = `${from}-${to}`;
        const data = DISTANCE_DATA[key];
        if (data) {
            setResult(data);
        } else {
            // Fallback for demo if exact key missing
            setResult({ km: 100, time: '1 hr 30 min' });
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-w-lg mx-auto">
            <div className="bg-teal-600 p-6 text-white text-center">
                <Navigation className="w-10 h-10 mx-auto mb-2 opacity-90" />
                <h2 className="text-2xl font-bold">Distance Calculator</h2>
                <p className="text-teal-100 text-sm">Plan your travel durations</p>
            </div>

            <div className="p-8 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">From</label>
                        <select
                            value={from} onChange={(e) => setFrom(e.target.value)}
                            className="w-full p-3 rounded-lg border border-gray-200 bg-gray-50 text-sm"
                        >
                            {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">To</label>
                        <select
                            value={to} onChange={(e) => setTo(e.target.value)}
                            className="w-full p-3 rounded-lg border border-gray-200 bg-gray-50 text-sm"
                        >
                            {CITIES.filter(c => c !== from).map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>
                </div>

                <Button onClick={handleCalculate} className="w-full bg-teal-600 hover:bg-teal-700">
                    Check Distance
                </Button>

                {result && (
                    <div className="mt-4 p-4 bg-teal-50 rounded-xl border border-teal-100 flex justify-between items-center animate-in fade-in">
                        <div className="text-center w-1/2 border-r border-teal-200">
                            <div className="text-xs text-teal-600 uppercase font-bold">Distance</div>
                            <div className="text-2xl font-bold text-gray-800">{result.km} km</div>
                        </div>
                        <div className="text-center w-1/2">
                            <div className="text-xs text-teal-600 uppercase font-bold">Time</div>
                            <div className="text-2xl font-bold text-gray-800">{result.time}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
