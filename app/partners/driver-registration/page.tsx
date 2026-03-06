import { Metadata } from 'next';
import DriverRegistrationForm from '@/components/DriverRegistrationForm';
import { Car, Wallet, Zap, DollarSign, Headphones, ClipboardCheck } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Driver Registration | Drive with Haram Taxi',
    description: 'Apply now to become a premium partner driver. We are looking for professional drivers with high-quality vehicles in Makkah, Madinah, Jeddah, and Riyadh. Zero registration fees, weekly payments.',
    keywords: ['taxi driver registration Saudi Arabia', 'drive with Haram Taxi', 'driver partner KSA', 'Makkah taxi driver', 'Jeddah driver registration'],
    alternates: {
        canonical: 'https://www.haramtaxii.com/partners/driver-registration',
    },
    openGraph: {
        title: 'Drive with Haram Taxi Service | Driver Registration',
        description: 'Apply now to become a premium partner driver with high-value bookings, weekly payments, and 24/7 support.',
        url: 'https://www.haramtaxii.com/partners/driver-registration',
        type: 'website',
    },
};

const benefits = [
    {
        icon: Car,
        title: 'B2B/B2C Bookings',
        description: 'Access to corporate and private customer bookings from pilgrims, tourists, and executives.',
    },
    {
        icon: Wallet,
        title: 'Weekly Payments',
        description: 'Secure weekly payment processing directly to your account. No delays.',
    },
    {
        icon: Zap,
        title: 'Smart Dispatch',
        description: 'Location-based smart dispatch system assigns you the nearest high-value rides.',
    },
    {
        icon: DollarSign,
        title: 'Free Registration',
        description: 'Zero registration fees. Start earning from day one with no hidden charges.',
    },
    {
        icon: Headphones,
        title: 'Support & Coordination',
        description: 'Our dedicated partner coordinator is available 24/7 to assist with onboarding and booking management.',
    },
    {
        icon: ClipboardCheck,
        title: 'Requirements Check',
        description: 'Simple onboarding process. Meet the basic requirements and start driving within days.',
    },
];

export default function DriverRegistrationPage() {
    return (
        <main className="pt-32">
            {/* Hero Section */}
            <section className="relative bg-brand-teal-dark overflow-hidden">
                <div className="absolute inset-0 bg-[url('/makkah-clock-tower-new.png')] bg-cover bg-center opacity-15" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
                    <p className="text-[#D4AF37] text-sm uppercase tracking-[0.2em] mb-4 font-semibold">Join Our Network</p>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif mb-6 leading-tight">
                        Drive with <span className="text-[#D4AF37]">Haram Taxi Service</span>
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Apply now to become a premium partner. We are looking for professional drivers with high-quality vehicles in Makkah, Madinah, Jeddah, and Riyadh.
                    </p>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <p className="text-brand-teal text-sm uppercase tracking-[0.15em] font-semibold mb-2">Why Drive With Us</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-serif">Partner Benefits</h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {benefits.map((item) => (
                            <div key={item.title} className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-brand-teal/30 transition-all duration-300">
                                <div className="w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-teal/20 transition-colors">
                                    <item.icon className="w-6 h-6 text-brand-teal" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Registration Form Section */}
            <section className="py-16 sm:py-24 bg-gray-50">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="text-brand-teal text-sm uppercase tracking-[0.15em] font-semibold mb-2">Apply Now</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-serif">Driver Registration Form</h2>
                        <p className="text-gray-500 mt-4">We&apos;ll contact you via email after reviewing your application.</p>
                    </div>
                    <DriverRegistrationForm />
                </div>
            </section>
        </main>
    );
}
