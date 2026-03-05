import { Metadata } from 'next';
import Link from 'next/link';
import { Calculator, Clock, Calendar, Navigation, Map, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Travel Tools & Resources | Taxi Fare, Prayer Times, Hijri Date - Haram Taxi',
    description: 'Free utility tools for pilgrims and travelers in Saudi Arabia. Calculate taxi fares, check prayer times, convert Hijri dates, and plan your Umrah trip.',
};

const TOOLS = [
    {
        name: 'Taxi Fare Calculator',
        href: '/tools/taxi-fare-calculator',
        icon: Calculator,
        description: 'Get instant price estimates for rides between Jeddah, Makkah, and Madinah.',
        color: 'bg-teal-500'
    },
    {
        name: 'Prayer Times',
        href: '/tools/prayer-times',
        icon: Clock,
        description: 'Accurate daily Salah timings for all major cities in Saudi Arabia.',
        color: 'bg-blue-500'
    },
    {
        name: 'Hijri Date Converter',
        href: '/tools/hijri-date-converter',
        icon: Calendar,
        description: 'Convert between Gregorian and Hijri dates using the Umm Al-Qura calendar.',
        color: 'bg-indigo-500'
    },
    {
        name: 'Distance Calculator',
        href: '/tools/distance-calculator',
        icon: Navigation,
        description: 'Check driving distances and travel times between Holy Cities.',
        color: 'bg-orange-500'
    },
    {
        name: 'Umrah Cost Estimator',
        href: '/tools/umrah-trip-planner',
        icon: Map,
        description: 'Plan your budget for transportation during your Umrah or Ziyarat trip.',
        color: 'bg-green-500'
    }
];

export default function ToolsIndex() {
    return (
        <div className="bg-gray-50 min-h-screen py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Traveler <span className="text-teal-600">Resources</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Essential free tools to help you plan your journey in Saudi Arabia with ease and confidence.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TOOLS.map((tool) => (
                        <Link key={tool.name} href={tool.href} className="group">
                            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 h-full flex flex-col items-start">
                                <div className={`w-14 h-14 ${tool.color} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                                    <tool.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{tool.name}</h3>
                                <p className="text-gray-600 mb-6 flex-grow">{tool.description}</p>
                                <div className="flex items-center text-teal-600 font-semibold group-hover:translate-x-2 transition-transform">
                                    Use Tool <ArrowRight className="w-4 h-4 ml-2" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
