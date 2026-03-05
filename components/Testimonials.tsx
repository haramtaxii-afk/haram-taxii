import { Star, Quote, CheckCircle2, Users, Shield } from 'lucide-react';

const testimonials = [
    {
        name: 'Ahmed Al-Sayed',
        role: 'Umrah Pilgrim',
        origin: 'Egypt 🇪🇬',
        content: 'Alhamdulillah, the driver was waiting for us at the airport with a name board. The GMC Yukon was spotless and the AC was perfect. After a 10-hour flight, this was exactly the comfort we needed. Highly recommended for any pilgrim.',
        rating: 5,
        initials: 'AA',
        color: 'bg-teal-600',
        trip: 'Jeddah Airport → Makkah',
    },
    {
        name: 'Fatima Rahman',
        role: 'Family of 6',
        origin: 'United Kingdom 🇬🇧',
        content: 'We traveled with our elderly parents and young children. The driver was incredibly patient and helped with all our luggage. He even stopped at the Meeqat for us without us asking. This is the kind of service that makes your Umrah special.',
        rating: 5,
        initials: 'FR',
        color: 'bg-indigo-600',
        trip: 'Makkah → Madinah',
    },
    {
        name: 'Mohammad Khan',
        role: 'Group Leader',
        origin: 'Pakistan 🇵🇰',
        content: 'I organized Umrah for a group of 14 people. Haram Taxi provided two Hiace vans, both on time and both immaculate. The drivers knew every Ziyarat location in Madinah. Will definitely use again for our next group trip.',
        rating: 5,
        initials: 'MK',
        color: 'bg-amber-600',
        trip: 'Madinah Ziyarat Tour',
    },
    {
        name: 'Yusuf Al-Farsi',
        role: 'Business Traveler',
        origin: 'UAE 🇦🇪',
        content: 'I travel to Makkah frequently for business. Haram Taxi is the only service I trust. Fixed prices, no surprises, always on time. The WhatsApp booking is instant — I get confirmation within minutes.',
        rating: 5,
        initials: 'YF',
        color: 'bg-rose-600',
        trip: 'Jeddah Airport → Makkah',
    },
    {
        name: 'Aisha Okonkwo',
        role: 'First-time Pilgrim',
        origin: 'Nigeria 🇳🇬',
        content: 'As a first-time Umrah pilgrim traveling alone, I was nervous about transportation. The driver was professional and made me feel completely safe. He gave me tips about the Haram and even helped me find my hotel. Truly above and beyond.',
        rating: 5,
        initials: 'AO',
        color: 'bg-purple-600',
        trip: 'Jeddah Airport → Makkah Hotel',
    },
    {
        name: 'Hassan Al-Turki',
        role: 'Hajj Pilgrim',
        origin: 'Saudi Arabia 🇸🇦',
        content: 'Even as a local, I use Haram Taxi for Hajj season because of the reliability. During Hajj, every minute counts. Their drivers know the routes perfectly and never get stuck. Best decision I made for my Hajj logistics.',
        rating: 5,
        initials: 'HT',
        color: 'bg-cyan-600',
        trip: 'Makkah → Mina → Arafat',
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-gray-50" id="testimonials" aria-label="Customer Testimonials">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header with aggregate social proof */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-brand-amber-pale/40 border border-brand-amber text-brand-amber-dark rounded-full mb-8 shadow-sm">
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map(i => (
                                <Star key={i} className="w-4 h-4 fill-brand-amber text-brand-amber" />
                            ))}
                        </div>
                        <span className="text-sm font-bold tracking-wide">Rated 5.0 · 15,000+ Pilgrims Served</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
                        Trusted by Pilgrims <span className="text-brand-teal">Worldwide</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                        Real experiences from real pilgrims. From Jeddah Airport transfers to full Ziyarat tours — here&apos;s what our customers say.
                    </p>

                    {/* Avatar stack — aggregate social proof */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <div className="flex -space-x-4">
                            {testimonials.slice(0, 5).map((t, i) => (
                                <div
                                    key={i}
                                    className={`w-12 h-12 rounded-full ${t.color} border-4 border-white flex items-center justify-center text-white text-xs font-bold shadow-md hover:scale-110 transition-transform z-10`}
                                    aria-hidden="true"
                                >
                                    {t.initials}
                                </div>
                            ))}
                            <div className="w-12 h-12 rounded-full bg-gray-100 border-4 border-white flex items-center justify-center text-gray-600 text-xs font-bold shadow-md z-0">
                                +
                            </div>
                        </div>
                        <div className="text-left">
                            <p className="text-gray-900 font-bold text-sm">
                                15,000+ happy pilgrims
                            </p>
                            <p className="text-gray-500 text-xs font-medium">from 50+ countries</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-brand-teal/30 hover:-translate-y-1 transition-all duration-300 flex flex-col group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Quote className="w-24 h-24 text-brand-teal transform rotate-12" />
                            </div>

                            {/* Quote icon */}
                            <Quote className="w-8 h-8 text-brand-teal/20 fill-brand-teal/20 mb-4 flex-shrink-0" aria-hidden="true" />

                            {/* Stars */}
                            <div className="flex gap-0.5 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-brand-amber text-brand-amber" />
                                ))}
                            </div>

                            {/* Review text — the "mirror" content */}
                            <p className="text-gray-700 leading-relaxed flex-grow mb-6 relative z-10 font-light italic">
                                &ldquo;{testimonial.content}&rdquo;
                            </p>

                            {/* Trip tag */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-teal-pale/20 text-brand-teal-dark rounded-full text-xs font-bold mb-6 self-start border border-brand-teal-pale/50">
                                <span className="w-1.5 h-1.5 bg-brand-teal rounded-full animate-pulse" aria-hidden="true" />
                                {testimonial.trip}
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-4 pt-6 border-t border-gray-50 relative z-10">
                                <div
                                    className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-md ring-4 ring-gray-50`}
                                    aria-hidden="true"
                                >
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900 text-sm tracking-wide">{testimonial.name}</div>
                                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">{testimonial.role} · {testimonial.origin}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom aggregate trust line */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-wrap items-center justify-center gap-6 px-10 py-6 bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-200/50">
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-1">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <Star key={i} className="w-5 h-5 fill-brand-amber text-brand-amber drop-shadow-sm" />
                                ))}
                            </div>
                            <span className="text-gray-900 font-bold text-base">5.0 Average Rating</span>
                        </div>
                        <div className="w-px h-6 bg-gray-200 hidden sm:block" aria-hidden="true" />
                        <span className="text-gray-600 text-sm font-medium flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-brand-teal" /> 15,000+ Verified Bookings
                        </span>
                        <div className="w-px h-6 bg-gray-200 hidden sm:block" aria-hidden="true" />
                        <span className="text-gray-600 text-sm font-medium flex items-center gap-2">
                            <Users className="w-4 h-4 text-brand-teal" /> 50+ Countries Served
                        </span>
                        <div className="w-px h-6 bg-gray-200 hidden sm:block" aria-hidden="true" />
                        <span className="text-gray-600 text-sm font-medium flex items-center gap-2">
                            <Shield className="w-4 h-4 text-brand-teal" /> TGA Licensed &amp; Insured
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
