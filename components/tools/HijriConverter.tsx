"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, RefreshCw, ArrowRight } from 'lucide-react';

export default function HijriConverter() {
    const [mode, setMode] = useState<'gToH' | 'hToG'>('gToH');
    const [dateInput, setDateInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<any>(null);

    const handleConvert = async () => {
        if (!dateInput) return;
        setLoading(true);
        setResult(null);

        try {
            // Convert input YYYY-MM-DD to DD-MM-YYYY
            const [y, m, d] = dateInput.split('-');
            const apiDate = `${d}-${m}-${y}`;

            const res = await fetch(`/api/hijri-converter?date=${apiDate}&type=${mode}`);
            if (res.ok) {
                const data = await res.json();
                setResult(data);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-w-lg mx-auto">
            <div className="bg-teal-600 p-6 text-white text-center">
                <Calendar className="w-10 h-10 mx-auto mb-2 opacity-90" />
                <h2 className="text-2xl font-bold">Date Converter</h2>
                <div className="flex justify-center mt-4">
                    <div className="bg-teal-700 p-1 rounded-lg flex text-xs font-semibold">
                        <button
                            onClick={() => { setMode('gToH'); setResult(null); }}
                            className={`px-4 py-2 rounded-md transition-all ${mode === 'gToH' ? 'bg-white text-teal-700 shadow' : 'text-teal-100 hover:text-white'}`}
                        >
                            Gregorian → Hijri
                        </button>
                        <button
                            onClick={() => { setMode('hToG'); setResult(null); }}
                            className={`px-4 py-2 rounded-md transition-all ${mode === 'hToG' ? 'bg-white text-teal-700 shadow' : 'text-teal-100 hover:text-white'}`}
                        >
                            Hijri → Gregorian
                        </button>
                    </div>
                </div>
            </div>

            <div className="p-8 space-y-6">
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                        Select {mode === 'gToH' ? 'Gregorian' : 'Hijri'} Date
                    </label>
                    <input
                        type="date"
                        value={dateInput}
                        onChange={(e) => setDateInput(e.target.value)}
                        className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none bg-gray-50"
                    />
                    <p className="text-xs text-gray-400 mt-2">
                        {mode === 'hToG' && "Note: Select the approximate Gregorian equivalent to find Hijri date, or standard calendar input."}
                    </p>
                </div>

                <Button
                    onClick={handleConvert}
                    disabled={loading || !dateInput}
                    className="w-full bg-teal-600 hover:bg-teal-700 h-12 text-lg"
                >
                    {loading ? <RefreshCw className="w-5 h-5 animate-spin" /> : 'Convert Date'}
                </Button>

                {result && (
                    <div className="mt-8 p-6 bg-teal-50 rounded-xl border border-teal-100 text-center animate-in fade-in slide-in-from-bottom-4">
                        <div className="text-sm text-gray-600 mb-2">Converted Date</div>
                        {mode === 'gToH' ? (
                            <>
                                <div className="text-3xl font-bold text-teal-800 font-serif">
                                    {result.day} {result.month.en} {result.year}
                                </div>
                                <div className="text-xl text-teal-600 font-serif mt-1">
                                    {result.month.ar}
                                </div>
                                <div className="text-sm text-gray-500 mt-2">{result.weekday.en}</div>
                            </>
                        ) : (
                            <div className="text-3xl font-bold text-teal-800 font-serif">
                                {result.date}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
