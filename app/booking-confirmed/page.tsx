import type { Metadata } from 'next';
import { Suspense } from 'react';
import BookingConfirmationContent from '@/components/BookingConfirmationContent';

export const metadata: Metadata = {
    title: 'Booking Confirmed | Haram Taxi Service',
    description: 'Your booking has been successfully confirmed. We will contact you shortly via WhatsApp to arrange your pickup in Makkah, Madinah, or Jeddah.',
    alternates: {
        canonical: 'https://www.haramtaxii.com/booking-confirmed',
    },
    robots: {
        index: false,
        follow: true,
    }
};

export default function BookingConfirmedPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="animate-spin w-8 h-8 border-4 border-teal-500 border-t-transparent rounded-full"></div>
            </div>
        }>
            <BookingConfirmationContent />
        </Suspense>
    );
}
