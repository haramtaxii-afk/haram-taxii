import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
            <div className="max-w-2xl mx-auto text-center">
                {/* 404 Number */}
                <div className="mb-8">
                    <h1 className="text-9xl font-bold font-display text-brand-teal">404</h1>
                </div>

                {/* Message */}
                <h2 className="text-4xl font-bold font-display text-gray-900 mb-4">
                    Page Not Found
                </h2>
                <p className="text-xl text-gray-600 mb-8 font-light">
                    Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/">
                        <Button size="lg" className="bg-brand-teal hover:bg-brand-teal-dark text-white px-8">
                            <Home className="w-5 h-5 mr-2" />
                            Go to Homepage
                        </Button>
                    </Link>
                    <Link href="/fleet">
                        <Button size="lg" variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50 px-8">
                            <Search className="w-5 h-5 mr-2" />
                            View Fleet
                        </Button>
                    </Link>
                </div>

                {/* Quick Links */}
                <div className="mt-12 pt-8 border-t border-gray-100">
                    <p className="text-sm text-gray-500 mb-4 font-medium uppercase tracking-wider">Popular Pages:</p>
                    <div className="flex flex-wrap gap-6 justify-center">
                        <Link href="/booking" className="text-brand-teal hover:text-brand-teal-dark text-sm font-bold hover:underline">
                            Book a Taxi
                        </Link>
                        <Link href="/locations" className="text-brand-teal hover:text-brand-teal-dark text-sm font-bold hover:underline">
                            Our Locations
                        </Link>
                        <Link href="/contact" className="text-brand-teal hover:text-brand-teal-dark text-sm font-bold hover:underline">
                            Contact Us
                        </Link>
                        <Link href="/about" className="text-brand-teal hover:text-brand-teal-dark text-sm font-bold hover:underline">
                            About Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
