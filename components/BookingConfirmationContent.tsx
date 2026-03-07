'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Home, Mail, MessageSquare, Phone } from 'lucide-react';

export default function BookingConfirmationContent() {
    const searchParams = useSearchParams();
    const bookingId = searchParams.get('id');
    const already = searchParams.get('already');

    return (
        <div className="min-h-screen bg-black bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900 to-black flex items-center justify-center p-4">
            <div className="max-w-3xl w-full">
                {/* Main Card */}
                <div className="bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative">

                    {/* Top Accent Line */}
                    <div className="h-2 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 w-full" />

                    <div className="p-8 sm:p-12 text-center">
                        {/* Icon */}
                        <div className="mb-8 relative inline-block">
                            <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full animate-pulse" />
                            <div className="relative w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg ring-4 ring-black/50">
                                <CheckCircle2 className="w-12 h-12 text-black" strokeWidth={3} />
                            </div>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-serif tracking-tight">
                            {already ? 'Booking Already Confirmed' : 'Booking Successful!'}
                        </h1>

                        <p className="text-neutral-300 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                            {already
                                ? 'This booking has already been verified in our system.'
                                : 'Thank you! Your email has been verified and your booking is now confirmed.'
                            }
                        </p>

                        {/* Booking ID Badge */}
                        {bookingId && (
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-10">
                                <span className="text-neutral-400 text-sm font-medium">Booking ID:</span>
                                <span className="text-green-400 font-mono font-bold tracking-wider">#{bookingId.slice(0, 8).toUpperCase()}</span>
                            </div>
                        )}

                        {/* Action Steps - The "Timeline" */}
                        <div className="bg-black/40 rounded-xl p-6 sm:p-8 mb-10 text-left border border-white/5">
                            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                                <span className="w-1 h-6 bg-green-500 rounded-full" />
                                Booking Status
                            </h3>

                            <div className="space-y-6">
                                {/* Step 1 */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center border border-green-500/30">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">Request Submitted</h4>
                                        <p className="text-neutral-500 text-sm">Booking details received.</p>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center border border-green-500/30">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">Email Verified</h4>
                                        <p className="text-neutral-500 text-sm">
                                            {already ? 'You have already verified your email.' : 'You have successfully verified your email.'}
                                        </p>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center border border-amber-500/30 animate-pulse">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="text-amber-400 font-medium">Driver Assignment</h4>
                                        <p className="text-neutral-400 text-sm">We will contact you shortly via WhatsApp to arrange the pickup.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Support Contact Section */}
                        <div className="mb-10 p-4 rounded-lg bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-white/5">
                            <p className="text-neutral-400 text-sm mb-3">Questions? Contact Admin Support</p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                                <a href="mailto:umrahtaxi22@gmail.com" className="flex items-center gap-2 text-white hover:text-amber-400 transition-colors">
                                    <Mail className="w-4 h-4" />
                                    Admin: umrahtaxi22@gmail.com
                                </a>
                                <span className="hidden sm:inline text-neutral-600">|</span>
                                <a href="https://wa.me/923132222436" className="flex items-center gap-2 text-white hover:text-green-400 transition-colors">
                                    <MessageSquare className="w-4 h-4" />
                                    WhatsApp Support
                                </a>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/" className="w-full sm:w-auto">
                                <Button className="w-full bg-neutral-800 hover:bg-neutral-700 text-white font-semibold py-6 px-8 rounded-lg shadow-lg transition-all hover:scale-105">
                                    <Home className="w-5 h-5 mr-2" />
                                    Return to Home
                                </Button>
                            </Link>
                            <Link href="/contact" className="w-full sm:w-auto">
                                <Button variant="outline" className="w-full border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white py-6 px-8 rounded-lg transition-all">
                                    Contact Support
                                </Button>
                            </Link>
                        </div>

                    </div>
                </div>

                {/* Footer simple text */}
                <p className="text-center text-neutral-600 text-sm mt-8">
                    &copy; {new Date().getFullYear()} Haram Taxi Service
                </p>
            </div>
        </div>
    );
}
