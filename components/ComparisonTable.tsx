import { Check, X } from 'lucide-react';

export default function ComparisonTable() {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr>
                        <th className="p-4 bg-gray-50 border-b-2 border-gray-200 font-display font-bold text-gray-900">Feature</th>
                        <th className="p-4 bg-brand-teal-pale/50 border-b-2 border-brand-teal text-brand-teal-dark font-display font-bold text-lg">Haram Taxi Service</th>
                        <th className="p-4 bg-gray-50 border-b-2 border-gray-200 text-gray-500 font-display font-bold">Public Taxi / Uber</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
                        <td className="p-4 font-medium text-gray-700">Fixed Price</td>
                        <td className="p-4 bg-brand-teal-pale/20 text-brand-teal-dark font-bold border-l border-r border-brand-teal-pale/30"><Check className="w-5 h-5 inline mr-2 text-brand-teal" /> Yes, Guaranteed</td>
                        <td className="p-4 text-gray-500"><X className="w-5 h-5 inline mr-2 text-red-400" /> No, Surge Pricing</td>
                    </tr>
                    <tr className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
                        <td className="p-4 font-medium text-gray-700">Vehicle Type</td>
                        <td className="p-4 bg-brand-teal-pale/20 text-brand-teal-dark font-bold border-l border-r border-brand-teal-pale/30"><Check className="w-5 h-5 inline mr-2 text-brand-teal" /> GMC, Staria, Camry (2025)</td>
                        <td className="p-4 text-gray-500"><X className="w-5 h-5 inline mr-2 text-red-400" /> Random / Old Models</td>
                    </tr>
                    <tr className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
                        <td className="p-4 font-medium text-gray-700">Driver Language</td>
                        <td className="p-4 bg-brand-teal-pale/20 text-brand-teal-dark font-bold border-l border-r border-brand-teal-pale/30"><Check className="w-5 h-5 inline mr-2 text-brand-teal" /> English, Arabic & Urdu</td>
                        <td className="p-4 text-gray-500"><X className="w-5 h-5 inline mr-2 text-red-400" /> Arabic Only mostly</td>
                    </tr>
                    <tr className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
                        <td className="p-4 font-medium text-gray-700">Wait Time</td>
                        <td className="p-4 bg-brand-teal-pale/20 text-brand-teal-dark font-bold border-l border-r border-brand-teal-pale/30"><Check className="w-5 h-5 inline mr-2 text-brand-teal" /> Pre-booked (0 mins)</td>
                        <td className="p-4 text-gray-500"><X className="w-5 h-5 inline mr-2 text-red-400" /> Variable / Long Queues</td>
                    </tr>
                    <tr className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
                        <td className="p-4 font-medium text-gray-700">Luggage Assistance</td>
                        <td className="p-4 bg-brand-teal-pale/20 text-brand-teal-dark font-bold border-l border-r border-brand-teal-pale/30"><Check className="w-5 h-5 inline mr-2 text-brand-teal" /> Full Assistance</td>
                        <td className="p-4 text-gray-500"><X className="w-5 h-5 inline mr-2 text-red-400" /> Self Service</td>
                    </tr>
                    <tr className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
                        <td className="p-4 font-medium text-gray-700">Ziyarat Knowledge</td>
                        <td className="p-4 bg-brand-teal-pale/20 text-brand-teal-dark font-bold border-l border-r border-brand-teal-pale/30"><Check className="w-5 h-5 inline mr-2 text-brand-teal" /> Expert Guides</td>
                        <td className="p-4 text-gray-500"><X className="w-5 h-5 inline mr-2 text-red-400" /> Just a Driver</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
