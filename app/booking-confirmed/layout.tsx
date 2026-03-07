import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Booking Confirmed | Haram Taxi Service',
    description: 'Your taxi booking has been confirmed. Thank you for choosing Haram Taxi Service. We will contact you shortly with driver details.',
    alternates: {
        canonical: 'https://www.haramtaxii.com/booking-confirmed',
    },
    robots: {
        index: false,
        follow: true,
    },
};

export default function BookingConfirmedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
