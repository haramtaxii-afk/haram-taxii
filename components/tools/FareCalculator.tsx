"use client";

import { useState } from 'react';
import { CITIES, VEHICLES, calculateFare, VehicleType } from '@/lib/fares';
import { Button } from '@/components/ui/button';
import { Car, MapPin, Calculator, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function FareCalculator() {
    const [from, setFrom] = useState(CITIES[0]);
    const [to, setTo] = useState(CITIES[1]);
    const [vehicle, setVehicle] = useState<VehicleType>(VEHICLES[1]);
    const [showQuote, setShowQuote] = useState(false);

    const handleCalculate = () => {
        setShowQuote(true);
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-w-lg mx-auto">
            <div className="bg-teal-600 p-6 text-white text-center">
                <Calculator className="w-10 h-10 mx-auto mb-2 opacity-90" />
                <h2 className="text-2xl font-bold">Taxi Fare Estimator</h2>
                <p className="text-teal-100 text-sm">Get a quote for your ride</p>
            </div>

            <div className="p-8 space-y-6">
                {/* From */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-teal-500" />
                        Pickup Location
                    </label>
                    <select
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                        className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none bg-gray-50"
                    >
                        {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                </div>

                {/* To */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-red-500" />
                        Drop-off Location
                    </label>
                    <select
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none bg-gray-50"
                    >
                        {CITIES.filter(c => c !== from).map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                </div>

                {/* Vehicle */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <Car className="w-4 h-4 text-blue-500" />
                        Vehicle Type
                    </label>
                    <select
                        value={vehicle}
                        onChange={(e) => setVehicle(e.target.value as VehicleType)}
                        className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none bg-gray-50"
                    >
                        {VEHICLES.map(v => <option key={v} value={v}>{v}</option>)}
                    </select>
                </div>

                <Button
                    onClick={handleCalculate}
                    className="w-full bg-teal-600 hover:bg-teal-700 h-12 text-lg"
                >
                    Get Quote
                </Button>

                {/* Result */}
                {showQuote ? (
                    <div className="mt-8 p-6 bg-teal-50 rounded-xl border border-teal-100 text-center animate-in fade-in slide-in-from-bottom-4">
                        <div className="text-sm text-gray-600 mb-1">Estimated Fare</div>
                        <div className="text-2xl font-bold text-teal-700 mb-2">
                            Contact for Best Price
                        </div>
                        <p className="text-xs text-gray-500 mb-4">*Prices vary by season & availability</p>
                        <Link href="/booking">
                            <Button variant="outline" className="border-teal-600 text-teal-700 hover:bg-teal-600 hover:text-white w-full">
                                Book This Ride
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <div className="mt-4 text-center text-sm text-gray-400">
                        Select details to get a quote
                    </div>
                )}
            </div>
        </div>
    );
}
