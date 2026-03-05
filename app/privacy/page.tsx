import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Eye, Lock, UserCheck, FileText, Mail } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Privacy Policy | Harm Taxi Service',
    description: 'Learn how Haram Taxi Service protects your personal information. Our privacy policy explains data collection, usage, and your rights.',
    robots: 'index, follow',
};

export default function PrivacyPage() {
    return (
        <div className="bg-white min-h-screen pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <Shield className="w-16 h-16 text-teal-600 mx-auto mb-6" />
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
                    <p className="text-xl text-gray-600">Last Updated: December 19, 2024</p>
                    <p className="text-gray-600 mt-4">
                        At Haram Taxi Service, we respect your privacy and are committed to protecting your personal information.
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    {/* Introduction */}
                    <section className="mb-12 bg-gray-50 p-8 rounded-2xl border border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                            <Eye className="w-6 h-6 text-teal-600" />
                            Introduction
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            This Privacy Policy outlines how Haram Taxi Service (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, stores, and protects your personal information when you use our taxi and transportation services in Saudi Arabia, including bookings through our website, WhatsApp, or phone.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            By using our services, you agree to the collection and use of information in accordance with this policy.
                        </p>
                    </section>

                    {/* Information We Collect */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <FileText className="w-6 h-6 text-teal-600" />
                            Information We Collect
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-white p-6 border-l-4 border-teal-500 rounded-r-lg">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Personal Information Provided by You</h3>
                                <p className="text-gray-700 mb-3">When you book a ride, we collect:</p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><strong>Contact Details:</strong> Name, phone number, email address, WhatsApp number</li>
                                    <li><strong>Booking Information:</strong> Pickup location, destination, date, time, number of passengers</li>
                                    <li><strong>Travel Details:</strong> Flight number (for airport pickups), hotel name, special requests</li>
                                    <li><strong>Payment Information:</strong> Transaction details (we do not store full credit card numbers)</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 border-l-4 border-teal-500 rounded-r-lg">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Automatically Collected Information</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><strong>Device Information:</strong> IP address, browser type, operating system</li>
                                    <li><strong>Usage Data:</strong> Pages visited, time spent on site, referral sources</li>
                                    <li><strong>Location Data:</strong> GPS coordinates during ride (for service delivery only)</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* How We Use Your Information */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <UserCheck className="w-6 h-6 text-teal-600" />
                            How We Use Your Information
                        </h2>

                        <div className="bg-gray-50 p-6 rounded-xl">
                            <p className="text-gray-700 mb-4">We use collected information for:</p>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span><strong>Service Delivery:</strong> Processing bookings, coordinating pickups, tracking rides for safety</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span><strong>Communication:</strong> Sending booking confirmations, driver details, service updates</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span><strong>Customer Support:</strong> Responding to inquiries, resolving issues, improving service quality</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span><strong>Safety & Security:</strong> GPS tracking during rides, driver verification, emergency response</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span><strong>Legal Compliance:</strong> Meeting Saudi Arabia transportation regulations and legal obligations</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Data Security */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <Lock className="w-6 h-6 text-teal-600" />
                            Data Security
                        </h2>

                        <div className="bg-teal-50 p-8 rounded-xl border border-teal-200">
                            <p className="text-gray-800 leading-relaxed">
                                We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes:
                            </p>
                            <ul className="mt-4 space-y-2 text-gray-800">
                                <li className="flex items-center gap-2">
                                    <span className="text-teal-600">✓</span> Encrypted data transmission (SSL/TLS)
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-teal-600">✓</span> Secure servers with restricted access
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-teal-600">✓</span> Regular security audits and updates
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-teal-600">✓</span> Access controls for employees handling data
                                </li>
                            </ul>
                            <p className="text-gray-700 mt-4 italic text-sm">
                                However, no method of electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
                            </p>
                        </div>
                    </section>

                    {/* Data Sharing */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Information Sharing</h2>

                        <div className="space-y-4 text-gray-700">
                            <p className="leading-relaxed">
                                <strong>We do NOT sell your personal information to third parties.</strong> We may share limited information only in these circumstances:
                            </p>

                            <ul className="space-y-3">
                                <li className="pl-4 border-l-2 border-gray-300">
                                    <strong>With Our Drivers:</strong> We share your name, pickup location, and contact number with assigned drivers to complete the service.
                                </li>
                                <li className="pl-4 border-l-2 border-gray-300">
                                    <strong>Service Providers:</strong> Third-party services that help us operate (payment processors, GPS tracking systems) under strict confidentiality agreements.
                                </li>
                                <li className="pl-4 border-l-2 border-gray-300">
                                    <strong>Legal Requirements:</strong> When required by Saudi Arabian law, legal proceedings, or government authorities.
                                </li>
                                <li className="pl-4 border-l-2 border-gray-300">
                                    <strong>Emergency Situations:</strong> To protect safety in emergencies (e.g., accidents, medical situations).
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Your Rights */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Privacy Rights</h2>

                        <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                            <p className="text-gray-800 font-semibold">You have the right to:</p>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-3">
                                    <Shield className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                                    <span><strong>Access Your Data:</strong> Request a copy of the personal information we hold about you</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Shield className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                                    <span><strong>Correct Inaccuracies:</strong> Update or correct any incorrect personal information</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Shield className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                                    <span><strong>Delete Your Data:</strong> Request deletion of your information (subject to legal retention requirements)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Shield className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                                    <span><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</span>
                                </li>
                            </ul>
                            <p className="text-sm text-gray-600 mt-4">
                                To exercise these rights, contact us using the details below.
                            </p>
                        </div>
                    </section>

                    {/* Data Retention */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We retain your personal information only as long as necessary for the purposes outlined in this policy, typically:
                        </p>
                        <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
                            <li>Booking records: 2 years for accounting and legal compliance</li>
                            <li>Communication logs: 1 year for customer service quality</li>
                            <li>GPS tracking data: Deleted after 30 days unless required for incident investigation</li>
                        </ul>
                    </section>

                    {/* Contact */}
                    <section className="mb-12 bg-teal-500 text-white p-8 rounded-2xl">
                        <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                            <Mail className="w-8 h-8" />
                            Contact Us About Privacy
                        </h2>
                        <p className="text-teal-50 mb-6 leading-relaxed">
                            If you have questions about this Privacy Policy or how we handle your data, please contact us:
                        </p>
                        <div className="space-y-2 text-teal-50">
                            <p><strong>Email:</strong> haramtaxiservice@gmail.com</p>
                            <p><strong>Website:</strong> <Link href="/" className="underline hover:text-white">haramtaxiservice.com</Link></p>
                            <p><strong>Response Time:</strong> We aim to respond within 48 hours</p>
                        </div>
                    </section>

                    {/* Changes to Policy */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the new policy on this page with an updated &quot;Last Updated&quot; date. Your continued use of our services after changes constitutes acceptance of the updated policy.
                        </p>
                    </section>

                    {/* Footer Navigation */}
                    <div className="mt-16 pt-8 border-t border-gray-200 flex gap-6 justify-center">
                        <Link href="/terms" className="text-teal-600 hover:text-teal-700 font-semibold">
                            Terms & Conditions →
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
