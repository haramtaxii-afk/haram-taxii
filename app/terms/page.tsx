import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, AlertCircle, CheckCircle, XCircle, Shield, CreditCard } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Terms & Conditions | Haram Taxi Service',
    description: 'Terms and conditions for using Haram Taxi Service. Learn about booking policies, cancellations, liability, and service agreements.',
    robots: 'index, follow',
    alternates: {
        canonical: 'https://www.haramtaxii.com/terms',
    },
};

export default function TermsPage() {
    return (
        <div className="bg-white min-h-screen pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <FileText className="w-16 h-16 text-teal-600 mx-auto mb-6" />
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
                    <p className="text-xl text-gray-600">Last Updated: December 19, 2024</p>
                    <p className="text-gray-600 mt-4">
                        Please read these terms carefully before using our taxi services.
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    {/* Introduction */}
                    <section className="mb-12 bg-gray-50 p-8 rounded-2xl border border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
                        <p className="text-gray-700 leading-relaxed">
                            By booking or using Haram Taxi Service (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you agree to be bound by these Terms and Conditions. These terms govern your use of our taxi and transportation services in Saudi Arabia, including Makkah, Madinah, Jeddah, Taif, AlUla, and Khayber.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            If you do not agree with any part of these terms, please do not use our services.
                        </p>
                    </section>

                    {/* Service Description */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <CheckCircle className="w-6 h-6 text-teal-600" />
                            Service Description
                        </h2>

                        <div className="bg-white p-6 border-l-4 border-teal-500 rounded-r-lg">
                            <p className="text-gray-700 mb-4">Haram Taxi Service provides:</p>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-teal-600 mt-1">✓</span>
                                    <span>Airport transfer services (Jeddah, Madinah, Taif airports)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-teal-600 mt-1">✓</span>
                                    <span>Intercity taxi rides (Makkah, Madinah, Jeddah, Taif, AlUla, Khayber)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-teal-600 mt-1">✓</span>
                                    <span>Local city transportation and hotel transfers</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-teal-600 mt-1">✓</span>
                                    <span>Ziyarat tours to historic Islamic sites</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-teal-600 mt-1">✓</span>
                                    <span>Group transportation with vans and buses</span>
                                </li>
                            </ul>
                            <p className="text-gray-600 text-sm mt-4 italic">
                                Services are subject to availability and may vary based on location and demand.
                            </p>
                        </div>
                    </section>

                    {/* Booking & Confirmation */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Booking & Confirmation</h2>

                        <div className="space-y-4 text-gray-700">
                            <div className="bg-gray-50 p-6 rounded-xl">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">How to Book</h3>
                                <p className="leading-relaxed">
                                    Bookings can be made through our website booking form, WhatsApp, or by contacting us via email. All booking requests must include: pickup location, destination, date, time, number of passengers, and contact information.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-xl">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Confirmation</h3>
                                <p className="leading-relaxed">
                                    A booking is confirmed only when you receive a confirmation message from us via WhatsApp or email. This confirmation will include driver details, vehicle information, and pickup time. Unconfirmed requests are not guaranteed.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-xl">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Booking Accuracy</h3>
                                <p className="leading-relaxed">
                                    You are responsible for providing accurate booking information. Errors in pickup location, time, or passenger count may result in delays or additional charges. We recommend double-checking all details before confirmation.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Pricing & Payment */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <CreditCard className="w-6 h-6 text-teal-600" />
                            Pricing & Payment
                        </h2>

                        <div className="bg-teal-50 p-8 rounded-xl border border-teal-200 space-y-4">
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Fixed Pricing</h3>
                                <p className="text-gray-700">
                                    We offer transparent, fixed-rate pricing quoted at the time of booking. Prices are based on route distance, vehicle type, and duration. The quoted price is final unless changes are made to the booking.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Additional Charges</h3>
                                <p className="text-gray-700">Extra fees may apply for:</p>
                                <ul className="mt-2 space-y-1 text-gray-700 text-sm">
                                    <li>• Extra stops not included in original booking</li>
                                    <li>• Excessive waiting time beyond agreed free wait period (typically 60 minutes for airports)</li>
                                    <li>• Child seats or special equipment (if requested)</li>
                                    <li>• Last-minute booking changes (less than 12 hours before pickup)</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Payment Methods</h3>
                                <p className="text-gray-700">
                                    We accept cash payment (Saudi Riyal) to the driver upon completion of service. Corporate clients may arrange bank transfers with advance agreement. No payment is required when booking.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Cancellation Policy */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <XCircle className="w-6 h-6 text-red-600" />
                            Cancellation & Changes Policy
                        </h2>

                        <div className="border-2 border-gray-200 rounded-xl overflow-hidden">
                            <div className="bg-green-50 p-6 border-b border-gray-200">
                                <h3 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    FREE Cancellation
                                </h3>
                                <p className="text-gray-700">
                                    Cancel or modify your booking <strong>more than 12 hours before pickup</strong> at no charge. Contact us via WhatsApp or email.
                                </p>
                            </div>

                            <div className="bg-yellow-50 p-6 border-b border-gray-200">
                                <h3 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
                                    <AlertCircle className="w-5 h-5 text-yellow-600" />
                                    Partial Charge (50%)
                                </h3>
                                <p className="text-gray-700">
                                    Cancellations or major changes made <strong>less than 12 hours but more than 2 hours before pickup</strong> may incur a 50% cancellation fee to compensate driver allocation.
                                </p>
                            </div>

                            <div className="bg-red-50 p-6">
                                <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                                    <XCircle className="w-5 h-5 text-red-600" />
                                    Full Charge (100%)
                                </h3>
                                <p className="text-gray-700">
                                    Cancellations made <strong>less than 2 hours before pickup</strong> or no-shows incur the full fare, as the driver has already been dispatched and other bookings declined.
                                </p>
                            </div>
                        </div>

                        <p className="text-sm text-gray-600 mt-4 italic">
                            Flight delays automatically adjust your pickup time at no charge. This policy does not apply to emergencies or situations beyond your control.
                        </p>
                    </section>

                    {/* Customer Responsibilities */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Responsibilities</h2>

                        <div className="space-y-3 text-gray-700">
                            <div className="flex items-start gap-3 pl-4 border-l-2 border-teal-500">
                                <span className="font-bold text-teal-600">→</span>
                                <p><strong>Be Ready on Time:</strong> Be at the pickup location 5 minutes before the agreed time. Drivers will wait up to 15 minutes for hotel pickups and 60 minutes for airport pickups (from flight landing time).</p>
                            </div>
                            <div className="flex items-start gap-3 pl-4 border-l-2 border-teal-500">
                                <span className="font-bold text-teal-600">→</span>
                                <p><strong>Accurate Information:</strong> Provide correct pickup location, contact number, and flight details (for airports).</p>
                            </div>
                            <div className="flex items-start gap-3 pl-4 border-l-2 border-teal-500">
                                <span className="font-bold text-teal-600">→</span>
                                <p><strong>Respectful Behavior:</strong> Treat drivers with respect. Inappropriate behavior, harassment, or damage to vehicles may result in immediate service termination and legal action.</p>
                            </div>
                            <div className="flex items-start gap-3 pl-4 border-l-2 border-teal-500">
                                <span className="font-bold text-teal-600">→</span>
                                <p><strong>Passenger Limits:</strong> Do not exceed the vehicle&apos;s maximum passenger capacity for safety reasons.</p>
                            </div>
                            <div className="flex items-start gap-3 pl-4 border-l-2 border-teal-500">
                                <span className="font-bold text-teal-600">→</span>
                                <p><strong>Luggage:</strong> Standard luggage is included. Oversized items (bicycles, wheelchairs, large equipment) must be mentioned at booking.</p>
                            </div>
                        </div>
                    </section>

                    {/* Liability & Disclaimer */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <Shield className="w-6 h-6 text-teal-600" />
                            Liability & Disclaimer
                        </h2>

                        <div className="bg-gray-50 p-8 rounded-xl space-y-6">
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Our Liability</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    While we strive for excellent service, Haram Taxi Service is not liable for delays caused by: traffic conditions, road closures, weather, accidents, flight delays beyond our tracking window, or other events outside our reasonable control. We are not liable for missed flights, appointments, or events due to such circumstances.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Lost Items</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    We are not responsible for items left in vehicles. However, we will make reasonable efforts to assist in recovering lost belongings if reported within 24 hours. Contact us immediately with booking details and item description.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Insurance</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    All our vehicles carry mandatory insurance as required by Saudi Arabian law. This covers accidents and third-party liability. Personal travel insurance is your responsibility.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Medical Conditions</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    If you have medical conditions requiring special assistance, inform us at booking. We will accommodate where possible but cannot guarantee medical care during transport.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Service Quality */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Quality Commitment</h2>
                        <div className="bg-teal-50 p-6 rounded-xl border-l-4 border-teal-500">
                            <p className="text-gray-700 leading-relaxed">
                                We are committed to providing safe, professional, and reliable service. If you experience issues with:
                            </p>
                            <ul className="mt-3 space-y-2 text-gray-700">
                                <li>• Driver conduct or professionalism</li>
                                <li>• Vehicle cleanliness or condition</li>
                                <li>• Route choices or unnecessary delays</li>
                                <li>• Pricing discrepancies</li>
                            </ul>
                            <p className="text-gray-700 mt-4 font-semibold">
                                Please report to us within 24 hours via info@haramtaxii.com. We investigate all complaints seriously and take corrective action where needed.
                            </p>
                        </div>
                    </section>

                    {/* Governing Law */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
                        <p className="text-gray-700 leading-relaxed">
                            These Terms and Conditions are governed by the laws of the Kingdom of Saudi Arabia. Any disputes arising from these terms or our services shall be resolved under Saudi jurisdiction.
                        </p>
                    </section>

                    {/* Changes to Terms */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page with an updated &quot;Last Updated&quot; date. Continued use of our services after changes constitutes acceptance of the modified terms.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="mb-12 bg-teal-500 text-white p-8 rounded-2xl">
                        <h2 className="text-3xl font-bold mb-4">Questions About Terms?</h2>
                        <p className="text-teal-50 mb-6 leading-relaxed">
                            If you have questions about these Terms and Conditions, please contact us:
                        </p>
                        <div className="space-y-2 text-teal-50">
                            <p><strong>Email:</strong> info@haramtaxii.com</p>
                            <p><strong>Website:</strong> <Link href="/" className="underline hover:text-white">haramtaxii.com</Link></p>
                            <p><strong>Response Time:</strong> We aim to respond within 48 hours</p>
                        </div>
                    </section>

                    {/* Footer Navigation */}
                    <div className="mt-16 pt-8 border-t border-gray-200 flex gap-6 justify-center">
                        <Link href="/privacy" className="text-teal-600 hover:text-teal-700 font-semibold">
                            Privacy Policy →
                        </Link>
                        <Link href="/about" className="text-teal-600 hover:text-teal-700 font-semibold">
                            About Us →
                        </Link>
                        <Link href="/contact" className="text-teal-600 hover:text-teal-700 font-semibold">
                            Contact →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
