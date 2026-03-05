"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Users, Map, CheckCircle2 } from 'lucide-react';

const PACKAGES = [
    { id: 'full', name: 'Full Umrah Route', desc: 'Jeddah → Makkah → Madinah → Jeddah' },
    { id: 'makkah_only', name: 'Makkah Only', desc: 'Jeddah → Makkah → Jeddah' },
    { id: 'madinah_first', name: 'Madinah First', desc: 'Madinah → Makkah → Jeddah' },
];

export default function UmrahEstimator() {
    const [groupSize, setGroupSize] = useState('small'); // small (Sedan), medium (GMC), large (Hiace)
    const [route, setRoute] = useState('full');
    const [ziyarat, setZiyarat] = useState(false);
    const [estimate, setEstimate] = useState<number | null>(null);

    const calculate = () => {
        let vehicle = 'Sedan';
        if (groupSize === 'medium') vehicle = 'GMC Yukon';
        if (groupSize === 'large') vehicle = 'Hiace';

        // Base costs per leg (Approximations based on known rates)
        const RATE_MAP: any = {
            'Sedan': { airport: 200, intercity: 450, ziyarat: 150 },
            'GMC Yukon': { airport: 350, intercity: 650, ziyarat: 250 },
            'Hiace': { airport: 400, intercity: 700, ziyarat: 300 },
        };

        const rates = RATE_MAP[vehicle];
        let total = 0;

        if (route === 'full') {
            // Jed->Mak (Airport), Mak->Mad (Intercity), Mad->Jed (Intercity)
            total = rates.airport + rates.intercity * 2;
        } else if (route === 'makkah_only') {
            // Jed->Mak (Airport), Mak->Jed (Airport)
            total = rates.airport * 2;
        } else if (route === 'madinah_first') {
            // Mad->Mak (Intercity), Mak->Jed (Airport) -- Arrival pickup assumed included or separate?
            // Let's assume Airport pickup at Madinah (similar to Jeddah rate usually or slightly less? let's use airport rate)
            // Mad Airport->Mad Hotel (Airport cost?), Mad->Mak (Intercity), Mak->Jed Airport (Airport cost)
            total = rates.airport * 2 + rates.intercity;
        }

        if (ziyarat) {
            // Add Ziyarat for each major city visited
            if (route === 'full') total += rates.ziyarat * 2; // Mak + Mad
            if (route === 'makkah_only') total += rates.ziyarat; // Mak
            if (route === 'madinah_first') total += rates.ziyarat * 2; // Mad + Mak
        }

        setEstimate(total);
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-w-2xl mx-auto">
            <div className="bg-teal-900 p-6 text-white text-center">
                <Map className="w-10 h-10 mx-auto mb-2 opacity-90" />
                <h2 className="text-2xl font-bold">Umrah Transport Budget Planner</h2>
                <p className="text-teal-200 text-sm">Estimate total transport costs for your group</p>
            </div>

            <div className="p-8 space-y-8">
                {/* Group Size */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Group Size</label>
                    <div className="grid grid-cols-3 gap-3">
                        <button onClick={() => setGroupSize('small')} className={`p-4 rounded-xl border-2 text-center transition-all ${groupSize === 'small' ? 'border-teal-600 bg-teal-50' : 'border-gray-100 hover:border-teal-200'}`}>
                            <Users className="w-6 h-6 mx-auto mb-2 text-gray-500" />
                            <div className="font-semibold text-sm">1-4 Pax</div>
                            <div className="text-xs text-gray-400">Sedan</div>
                        </button>
                        <button onClick={() => setGroupSize('medium')} className={`p-4 rounded-xl border-2 text-center transition-all ${groupSize === 'medium' ? 'border-teal-600 bg-teal-50' : 'border-gray-100 hover:border-teal-200'}`}>
                            <Users className="w-6 h-6 mx-auto mb-2 text-gray-500" />
                            <div className="font-semibold text-sm">5-7 Pax</div>
                            <div className="text-xs text-gray-400">GMC Yukon</div>
                        </button>
                        <button onClick={() => setGroupSize('large')} className={`p-4 rounded-xl border-2 text-center transition-all ${groupSize === 'large' ? 'border-teal-600 bg-teal-50' : 'border-gray-100 hover:border-teal-200'}`}>
                            <Users className="w-6 h-6 mx-auto mb-2 text-gray-500" />
                            <div className="font-semibold text-sm">8-12 Pax</div>
                            <div className="text-xs text-gray-400">Hiace</div>
                        </button>
                    </div>
                </div>

                {/* Route */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Travel Route</label>
                    <div className="space-y-2">
                        {PACKAGES.map(pkg => (
                            <div key={pkg.id} onClick={() => setRoute(pkg.id)} className={`p-4 rounded-lg border-2 cursor-pointer transition-all flex items-center justify-between ${route === pkg.id ? 'border-teal-600 bg-teal-50' : 'border-gray-100'}`}>
                                <div>
                                    <div className="font-semibold text-gray-900">{pkg.name}</div>
                                    <div className="text-xs text-gray-500">{pkg.desc}</div>
                                </div>
                                {route === pkg.id && <CheckCircle2 className="w-5 h-5 text-teal-600" />}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Extras */}
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <input
                        type="checkbox"
                        checked={ziyarat}
                        onChange={(e) => setZiyarat(e.target.checked)}
                        className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500 border-gray-300"
                    />
                    <div>
                        <div className="font-medium text-gray-900">Include Ziyarat Tours?</div>
                        <div className="text-xs text-gray-500">Add visits to holy sites in each city</div>
                    </div>
                </div>

                <Button onClick={calculate} className="w-full bg-teal-800 hover:bg-teal-900 h-12 text-lg">
                    Calculate Total Cost
                </Button>

                {estimate !== null && (
                    <div className="bg-teal-900 text-white p-6 rounded-xl text-center animate-in zoom-in-95">
                        <div className="text-teal-200 text-sm mb-1">Estimated Total Transport Cost</div>
                        <div className="text-4xl font-bold mb-2">SAR {estimate}</div>
                        <p className="text-xs text-teal-300/80">Includes fuel, driver, and tolls. No hidden fees.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
