"use client";

import { MessageSquare, CalendarCheck, Car } from "lucide-react";

export default function HowItWorks() {
    const steps = [
        {
            icon: MessageSquare,
            title: "1. Contact Us",
            description: "Send us a message on WhatsApp or fill the booking form."
        },
        {
            icon: CalendarCheck,
            title: "2. Confirm Details",
            description: "Get an instant quote and confirm your pickup time/location."
        },
        {
            icon: Car,
            title: "3. Enjoy Your Ride",
            description: "Our driver meets you at the location. Travel with peace of mind."
        }
    ];

    return (
        <section className="py-20 bg-gray-950 text-white relative overflow-hidden" aria-labelledby="how-it-works-heading">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 id="how-it-works-heading" className="text-4xl md:text-5xl font-display font-bold mb-4">How It Works</h2>
                    <p className="text-xl text-gray-400 font-light">Your journey begins with a simple 3-step process</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connecting line (desktop only) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-800 -z-10"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-center text-center group">
                            <div className="w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center border-4 border-gray-800 group-hover:border-brand-amber transition-colors duration-300 shadow-xl mb-6 relative z-10">
                                <step.icon className="w-10 h-10 text-brand-teal-light group-hover:text-brand-amber transition-colors duration-300" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold text-sm border-2 border-gray-900">
                                    {index + 1}
                                </div>
                            </div>
                            <h3 className="text-2xl font-display font-bold mb-3">{step.title.split('. ')[1]}</h3>
                            <p className="text-gray-400 max-w-xs leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
