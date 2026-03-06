"use client";

import Link from 'next/link';
import { Car, MapPin, Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Blog', href: '/blog' },
        { name: 'About Us', href: '/about' },
        { name: 'Fleet', href: '/fleet' },
        { name: 'Locations', href: '/locations' },
        { name: 'Contact', href: '/contact' },
        { name: 'Booking', href: '/booking' },
    ];

    const locations = [
        { name: 'Makkah', href: '/locations/makkah' },
        { name: 'Madinah', href: '/locations/madinah' },
        { name: 'Jeddah', href: '/locations/jeddah' },
        { name: 'Taif', href: '/locations/taif' },
        { name: 'Riyadh', href: '/locations/riyadh' },
        { name: 'Dammam', href: '/locations/dammam' },
        { name: 'Al Ula', href: '/locations/al-ula' },
        { name: 'Tabuk', href: '/locations/tabuk' },
    ];

    const vehicles = [
        { name: 'GMC Yukon', href: '/fleet/gmc-yukon' },
        { name: 'Toyota Camry', href: '/fleet/toyota-camry' },
        { name: 'Hyundai Staria', href: '/fleet/hyundai-staria' },
        { name: 'Toyota Hiace', href: '/fleet/toyota-hiace' },
        { name: 'Toyota Coaster', href: '/fleet/toyota-coaster' },
        { name: 'Hyundai Starex', href: '/fleet/hyundai-starex' },
    ];

    const services = [
        { name: 'Umrah Travel Agency', href: '/routes/umrah-travel-agency' },
        { name: 'Hajj Travel Agency', href: '/routes/hajj-travel-agency' },
        { name: 'Umrah Transport', href: '/routes/umrah-transport' },
        { name: 'Luxury Transport', href: '/routes/luxury-umrah-transport' },
        { name: 'Hotel to Haram', href: '/routes/hotel-to-haram-transport' },
    ];

    return (
        <footer className="bg-gray-950 text-gray-300 border-t border-gray-900">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="flex items-center mb-6 group">
                            <div className="relative w-48 h-12">
                                <Image
                                    src="/logo/logo.png"
                                    alt="Haram Taxi"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </Link>
                        <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                            Professional taxi service across Saudi Arabia. Available 24/7 for your transportation needs, specializing in Umrah and Hajj transfers.
                        </p>
                        <div className="mb-6">
                            <a href="mailto:info@haramtaxii.com" className="text-brand-teal hover:text-brand-teal-light text-sm flex items-center gap-3 transition-colors font-medium">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                info@haramtaxii.com
                            </a>
                        </div>
                        <div className="flex gap-3 flex-wrap">
                            {/* Facebook */}
                            <a
                                href="https://www.facebook.com/profile.php?id=61583000570242"
                                className="w-10 h-10 bg-gray-900 border border-gray-800 hover:bg-[#1877F2] hover:border-[#1877F2] rounded-lg flex items-center justify-center transition-all duration-300 text-gray-400 hover:text-white"
                                aria-label="Facebook"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/company/112232906/"
                                className="w-10 h-10 bg-gray-900 border border-gray-800 hover:bg-[#0A66C2] hover:border-[#0A66C2] rounded-lg flex items-center justify-center transition-all duration-300 text-gray-400 hover:text-white"
                                aria-label="LinkedIn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                            </a>
                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/haramtaxii/"
                                className="w-10 h-10 bg-gray-900 border border-gray-800 hover:bg-pink-600 hover:border-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 text-gray-400 hover:text-white"
                                aria-label="Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            {/* Reddit */}
                            <a
                                href="https://www.reddit.com/user/ActAppropriate7146/"
                                className="w-10 h-10 bg-gray-900 border border-gray-800 hover:bg-[#FF4500] hover:border-[#FF4500] rounded-lg flex items-center justify-center transition-all duration-300 text-gray-400 hover:text-white"
                                aria-label="Reddit"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-2.467 3.928c-1.353 0-2.433-.679-2.435-.682a.375.375 0 0 0-.528.1.375.375 0 0 0 .1.527c.038.026 1.285.808 2.863.808 1.583 0 2.825-.783 2.863-.808a.375.375 0 0 0 .1-.528.375.375 0 0 0-.528-.1c-.003.003-1.084.683-2.435.683z" /></svg>
                            </a>
                            {/* Quora */}
                            <a
                                href="https://www.quora.com/profile/Haram-Taxii"
                                className="w-10 h-10 bg-gray-900 border border-gray-800 hover:bg-[#B92B27] hover:border-[#B92B27] rounded-lg flex items-center justify-center transition-all duration-300 text-gray-400 hover:text-white"
                                aria-label="Quora"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.964 1.942c-5.495 0-9.957 4.191-9.957 9.68 0 3.737 2.213 6.96 5.408 8.618l-.519 1.831h2.296l.487-1.874c.758.204 1.52.296 2.296.296 5.49 0 9.948-4.256 9.948-9.69a9.7 9.7 0 0 0-9.96-8.86zm6.315 14.54l-1.921-.772.31 1.18h-1.6l-.375-1.284a7.228 7.228 0 0 1-2.903.626c-3.15 0-5.748-2.316-5.748-5.743s2.598-5.733 5.748-5.733c3.16 0 5.759 2.306 5.759 5.733 0 1.268-.426 2.457-1.12 3.441a5.61 5.61 0 0 1 .491 1.636l1.359.535v.38zm-1.39-8.496c-.477-1.278-1.782-2.181-3.328-2.181-1.914 0-3.486 1.488-3.486 3.493s1.572 3.492 3.486 3.492c1.472 0 2.723-.815 3.255-2.001A3.763 3.763 0 0 0 17 10.51a3.812 3.812 0 0 0-.111-2.524z" /></svg>
                            </a>
                            {/* Trustpilot */}
                            <a
                                href="https://www.trustpilot.com/review/haramtaxii.com"
                                className="w-10 h-10 bg-gray-900 border border-gray-800 hover:bg-[#00B67A] hover:border-[#00B67A] rounded-lg flex items-center justify-center transition-all duration-300 text-gray-400 hover:text-white"
                                aria-label="Trustpilot"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.007 0C5.378 0 0 5.377 0 12c0 6.623 5.378 12 12.007 12 6.623 0 12-5.377 12-12 0-6.623-5.377-12-12-12zm4.35 17.512l-4.35-3.135-4.35 3.135 1.634-5.116-4.351-3.111h5.395l1.672-5.116 1.672 5.116h5.395l-4.351 3.111 1.634 5.116z" /></svg>
                            </a>
                            {/* X (Twitter) */}
                            <a
                                href="https://x.com/HaramTaxii"
                                className="w-10 h-10 bg-gray-900 border border-gray-800 hover:bg-black hover:border-black rounded-lg flex items-center justify-center transition-all duration-300 text-gray-400 hover:text-white"
                                aria-label="X (Twitter)"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                            </a>
                            {/* Pinterest */}
                            <a
                                href="https://pin.it/15NxhfI6X"
                                className="w-10 h-10 bg-gray-900 border border-gray-800 hover:bg-[#E60023] hover:border-[#E60023] rounded-lg flex items-center justify-center transition-all duration-300 text-gray-400 hover:text-white"
                                aria-label="Pinterest"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.366 18.601 0 12.017 0z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-display font-bold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="block text-gray-400 hover:text-brand-teal transition-colors text-sm hover:translate-x-1 duration-200">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Locations */}
                    <div>
                        <h3 className="text-white font-display font-bold text-lg mb-6">Service Areas</h3>
                        <ul className="space-y-3">
                            {locations.map((location) => (
                                <li key={location.name}>
                                    <Link href={location.href} className="block text-gray-400 hover:text-brand-teal transition-colors text-sm flex items-center gap-2 hover:translate-x-1 duration-200">
                                        <MapPin className="w-4 h-4 text-brand-teal/70" />
                                        {location.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-display font-bold text-lg mb-6">Services</h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.name}>
                                    <Link href={service.href} className="block text-gray-400 hover:text-brand-teal transition-colors text-sm flex items-center gap-2 hover:translate-x-1 duration-200">
                                        <Car className="w-4 h-4 text-brand-teal/70" />
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Fleet */}
                    <div>
                        <h3 className="text-white font-display font-bold text-lg mb-6">Our Fleet</h3>
                        <ul className="space-y-3">
                            {vehicles.map((vehicle) => (
                                <li key={vehicle.name}>
                                    <Link href={vehicle.href} className="block text-gray-400 hover:text-brand-teal transition-colors text-sm flex items-center gap-2 hover:translate-x-1 duration-200">
                                        <Car className="w-4 h-4 text-brand-teal/70" />
                                        {vehicle.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-900 bg-gray-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-gray-500 text-sm">
                            © {currentYear} Haram Taxi Service. All rights reserved.
                        </div>
                        <div className="flex gap-8 text-sm">
                            <Link href="/privacy" className="text-gray-500 hover:text-brand-teal transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-gray-500 hover:text-brand-teal transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
}
