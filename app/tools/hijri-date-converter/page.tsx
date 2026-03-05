import { Metadata } from 'next';
import HijriConverter from '@/components/tools/HijriConverter';

export const metadata: Metadata = {
    title: 'Hijri Date Converter | Gregorian to Islamic Date - Haram Taxi',
    description: 'Free tool to convert Gregorian dates to Hijri (Islamic) dates and vice versa. Accurate Umm Al-Qura calendar for Umrah and Hajj planning.',
    keywords: ['Hijri date converter', 'Islamic date today', 'Gregorian to Hijri', 'Umrah date converter', 'Saudi Arabia date'],
};

export default function HijriConverterPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Hijri Date <span className="text-teal-600">Converter</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Planning your Umrah or Ziyarat? Use our accurate converter to match your travel dates with the Islamic calendar.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-12 xl:col-span-6 xl:col-start-4">
                        <HijriConverter />
                    </div>
                </div>

                {/* SEO Text */}
                <div className="mt-20 max-w-3xl mx-auto text-gray-600 space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">About the Islamic Calendar</h2>
                    <p>
                        The Hijri calendar is a lunar calendar consisting of 12 months in a year of 354 or 355 days. It is used to determine the days of Islamic holidays and rituals, such as the annual period of fasting and the proper time for the Hajj.
                    </p>
                    <p>
                        In Saudi Arabia, the Umm Al-Qura calendar is the official system used for administrative and religious purposes. Our tool uses the same algorithms to provide you with the most accurate date conversion for your travel planning.
                    </p>
                </div>
            </div>
        </div>
    );
}
