import Image from 'next/image';
import { Quote } from 'lucide-react';

export default function FounderNote() {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Text Content */}
                    <div className="space-y-8 relative">
                        <Quote className="w-20 h-20 text-brand-teal-pale absolute -top-10 -left-6 -z-10 opacity-50" />

                        <div className="space-y-4">
                            <div className="inline-block px-4 py-1.5 bg-brand-amber-pale text-brand-amber-dark rounded-full text-sm font-bold tracking-wide uppercase">
                                Our Mission
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight">
                                Serving the <span className="text-brand-teal">Guests of Allah</span> with Honor
                            </h2>
                        </div>

                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                            <p>
                                When we started <strong>Haram Taxi Service</strong>, we saw a gap in the industry. Pilgrims arriving for Umrah or Hajj were often met with uncertainty—haggling for prices, unreliable cars, and unlicensed drivers. This is not how a guest of the Holy Cities should be treated.
                            </p>
                            <p>
                                We built this company on a simple promise: <strong>Trust & Comfort</strong>. We believe that your spiritual journey begins the moment you land. Our duty is to ensure that your travel between Jeddah, Makkah, and Madinah is safe, peaceful, and respectful.
                            </p>
                            <p>
                                Every driver in our fleet is not just a chauffeur, but a guide who understands the sanctity of your visit. We are honored to be a part of your journey.
                            </p>
                        </div>

                        <div className="pt-6 border-t border-gray-100">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-gray-100 rounded-full overflow-hidden relative border-2 border-white shadow-md">
                                    {/* Placeholder for founder image, using a generic professional silhouette if needed or just initials */}
                                    <div className="bg-brand-teal w-full h-full flex items-center justify-center text-white font-display font-bold text-2xl">
                                        HT
                                    </div>
                                </div>
                                <div>
                                    <div className="font-display font-bold text-xl text-gray-900">Abu Abdullah</div>
                                    <div className="text-brand-teal font-medium">Operations Manager</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Visual/Image */}
                    <div className="relative h-[300px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
                        {/* Using a high-quality relevant image from the library */}
                        <Image
                            src="/makkah-haram-night-view.webp"
                            alt="Makkah Haram View"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-teal/80 via-transparent to-transparent opacity-60"></div>

                        {/* Text overlay similar to the 'founder video' vibe from the transcript */}
                        <div className="absolute bottom-8 left-8 right-8 text-white">
                            <p className="font-display text-lg md:text-2xl font-bold leading-relaxed">
                                &quot;Our goal is simple: You focus on your Ibadah, we handle the journey.&quot;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
