"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Car, ChevronDown, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import HeaderDate from '@/components/HeaderDate';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [fleetDropdownOpen, setFleetDropdownOpen] = useState(false);
    const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false);

    const fleetItems = [
        { name: 'GMC Yukon', href: '/fleet/gmc-yukon' },
        { name: 'Toyota Camry', href: '/fleet/toyota-camry' },
        { name: 'Hyundai Staria', href: '/fleet/hyundai-staria' },
        { name: 'Toyota Hiace', href: '/fleet/toyota-hiace' },
        { name: 'Toyota Coaster', href: '/fleet/toyota-coaster' },
        { name: 'Hyundai Starex', href: '/fleet/hyundai-starex' },
    ];

    const locationItems = [
        { name: 'Makkah', href: '/locations/makkah' },
        { name: 'Madinah', href: '/locations/madinah' },
        { name: 'Jeddah', href: '/locations/jeddah' },
        { name: 'Taif', href: '/locations/taif' },
        { name: 'Riyadh', href: '/locations/riyadh' },
        { name: 'Dammam', href: '/locations/dammam' },
        { name: 'Al Ula', href: '/locations/al-ula' },
        { name: 'Tabuk', href: '/locations/tabuk' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-md transition-all border-b border-gray-100">
            {/* Top Bar - Date Display */}
            <div className="bg-brand-teal-dark w-full border-b border-brand-teal/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
                    <HeaderDate />
                    <div className="hidden sm:block text-[11px] text-brand-teal-pale uppercase tracking-[0.2em] font-medium">
                        Serving the Guests of Allah
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group">
                        <div className="relative w-[220px] h-[67px]">
                            <Image
                                src="/logo/logo.png"
                                alt="Haram Taxi"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/" className="text-gray-600 hover:text-brand-teal font-medium transition-colors text-sm uppercase tracking-wide">
                            Home
                        </Link>
                        <Link href="/services" className="text-gray-600 hover:text-brand-teal font-medium transition-colors text-sm uppercase tracking-wide">
                            Services
                        </Link>
                        <Link href="/blog" className="text-gray-600 hover:text-brand-teal font-medium transition-colors text-sm uppercase tracking-wide">
                            Blog
                        </Link>


                        {/* Fleet Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setFleetDropdownOpen(true)}
                            onMouseLeave={() => setFleetDropdownOpen(false)}
                        >
                            <button
                                className="flex items-center gap-1 text-gray-600 hover:text-brand-teal font-medium transition-colors py-2 text-sm uppercase tracking-wide"
                                aria-expanded={fleetDropdownOpen}
                                aria-haspopup="true"
                            >
                                Fleet
                                <ChevronDown className={`w-4 h-4 transition-transform ${fleetDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {fleetDropdownOpen && (
                                <div className="absolute top-full left-0 pt-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-3 animate-in fade-in slide-in-from-top-2 duration-200 ring-1 ring-gray-900/5">
                                    <div className="absolute -top-1 left-6 w-3 h-3 bg-white rotate-45 border-t border-l border-gray-100"></div>
                                    <Link href="/fleet" className="block px-5 py-3 text-sm text-gray-900 hover:bg-brand-teal-pale/50 hover:text-brand-teal font-bold border-b border-gray-50">
                                        View All Fleet
                                    </Link>
                                    {fleetItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-brand-teal-pale/30 hover:text-brand-teal transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Locations Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setLocationsDropdownOpen(true)}
                            onMouseLeave={() => setLocationsDropdownOpen(false)}
                        >
                            <button
                                className="flex items-center gap-1 text-gray-600 hover:text-brand-teal font-medium transition-colors py-2 text-sm uppercase tracking-wide"
                                aria-expanded={locationsDropdownOpen}
                                aria-haspopup="true"
                            >
                                Locations
                                <ChevronDown className={`w-4 h-4 transition-transform ${locationsDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {locationsDropdownOpen && (
                                <div className="absolute top-full left-0 pt-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-3 animate-in fade-in slide-in-from-top-2 duration-200 ring-1 ring-gray-900/5">
                                    <div className="absolute -top-1 left-10 w-3 h-3 bg-white rotate-45 border-t border-l border-gray-100"></div>
                                    <Link href="/locations" className="block px-5 py-3 text-sm text-gray-900 hover:bg-brand-teal-pale/50 hover:text-brand-teal font-bold border-b border-gray-50">
                                        View All Locations
                                    </Link>
                                    {locationItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-brand-teal-pale/30 hover:text-brand-teal transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link href="/about" className="text-gray-600 hover:text-brand-teal font-medium transition-colors text-sm uppercase tracking-wide">
                            About
                        </Link>
                        <Link href="/contact" className="text-gray-600 hover:text-brand-teal font-medium transition-colors text-sm uppercase tracking-wide">
                            Contact
                        </Link>

                        <a
                            href="https://wa.me/923132222436?text=As-salamu%20alaykum,%20I%20want%20to%20get%20a%20quote%20for%20taxi%20service."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 shadow-md hover:shadow-lg transition-all flex items-center gap-2">
                                <MessageCircle className="w-5 h-5" />
                                Get Quote
                            </Button>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-600"
                        aria-label="Toggle mobile menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
                    <div className="px-4 py-4 space-y-3 max-h-[80vh] overflow-y-auto">
                        <Link
                            href="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-3 text-gray-700 hover:bg-brand-teal-pale hover:text-brand-teal rounded-lg font-medium transition-colors"
                        >
                            Home
                        </Link>

                        <Link
                            href="/services"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-3 text-gray-700 hover:bg-brand-teal-pale hover:text-brand-teal rounded-lg font-medium transition-colors"
                        >
                            Services
                        </Link>

                        {/* Fleet Section */}
                        <div className="bg-gray-50/50 rounded-xl p-2">
                            <div className="px-2 py-1.5 text-xs font-bold text-gray-400 uppercase tracking-wider">Fleet</div>
                            <div className="space-y-1">
                                <Link href="/fleet" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-white hover:text-brand-teal rounded-lg hover:shadow-sm font-medium">
                                    View All Fleet
                                </Link>
                                {fleetItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-white hover:text-brand-teal rounded-lg transition-colors pl-6"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Locations Section */}
                        <div className="bg-gray-50/50 rounded-xl p-2">
                            <div className="px-2 py-1.5 text-xs font-bold text-gray-400 uppercase tracking-wider">Locations</div>
                            <div className="space-y-1">
                                <Link href="/locations" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-white hover:text-brand-teal rounded-lg hover:shadow-sm font-medium">
                                    View All Locations
                                </Link>
                                {locationItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-white hover:text-brand-teal rounded-lg transition-colors pl-6"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link
                            href="/about"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-3 text-gray-700 hover:bg-brand-teal-pale hover:text-brand-teal rounded-lg font-medium transition-colors"
                        >
                            About
                        </Link>

                        <Link
                            href="/blog"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-3 text-gray-700 hover:bg-brand-teal-pale hover:text-brand-teal rounded-lg font-medium transition-colors"
                        >
                            Blog
                        </Link>

                        <Link
                            href="/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-3 text-gray-700 hover:bg-brand-teal-pale hover:text-brand-teal rounded-lg font-medium transition-colors"
                        >
                            Contact
                        </Link>

                        <a
                            href="https://wa.me/923132222436?text=As-salamu%20alaykum,%20I%20want%20to%20get%20a%20quote%20for%20taxi%20service."
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <Button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-6 text-lg font-bold shadow-md flex items-center justify-center gap-2">
                                <MessageCircle className="w-5 h-5" />
                                Get Quote
                            </Button>
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
