"use client";

import Link from 'next/link';
import { Car, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

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
                        <Link href="/" className="flex items-center gap-3 mb-6 group">
                            <div className="w-12 h-12 bg-brand-teal rounded-xl flex items-center justify-center shadow-lg shadow-brand-teal/20 group-hover:bg-brand-teal-light transition-colors">
                                <Car className="w-7 h-7 text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-display font-bold text-white tracking-wide">
                                    Haram <span className="text-brand-teal">Taxi</span>
                                </span>
                                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-medium ml-0.5">Premium Service</span>
                            </div>
                        </Link>
                        <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                            Professional taxi service across Saudi Arabia. Available 24/7 for your transportation needs, specializing in Umrah and Hajj transfers.
                        </p>
                        <div className="mb-6">
                            <a href="mailto:haramtaxiservice@gmail.com" className="text-brand-teal hover:text-brand-teal-light text-sm flex items-center gap-3 transition-colors font-medium">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                haramtaxiservice@gmail.com
                            </a>
                        </div>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-900 border border-gray-800 hover:border-brand-teal/50 hover:bg-brand-teal rounded-lg flex items-center justify-center transition-all duration-300 text-gray-400 hover:text-white"
                                aria-label="Facebook"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-900 border border-gray-800 hover:border-brand-teal/50 hover:bg-brand-teal rounded-lg flex items-center justify-center transition-all duration-300 text-gray-400 hover:text-white"
                                aria-label="Twitter"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-900 border border-gray-800 hover:border-brand-teal/50 hover:bg-brand-teal rounded-lg flex items-center justify-center transition-all duration-300 text-gray-400 hover:text-white"
                                aria-label="Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Instagram className="w-5 h-5" />
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
