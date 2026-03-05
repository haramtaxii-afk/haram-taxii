import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/lib/mailer';
import { customerBookingEmail, adminBookingEmail } from '@/lib/email-templates';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const adminEmail = process.env.ADMIN_EMAIL || 'info@haramtaxii.com';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        if (!body || !body.booking) {
            return NextResponse.json(
                { error: 'Missing booking data in request body' },
                { status: 400 }
            );
        }

        const { booking, price, confirmationToken } = body;

        const requiredFields = [
            'customer_name', 'customer_email', 'customer_phone',
            'pickup_location', 'destination', 'pickup_date',
            'pickup_time', 'vehicle_type'
        ];

        const missingFields = requiredFields.filter(field => !booking[field]);
        if (missingFields.length > 0) {
            return NextResponse.json(
                { error: 'Missing required booking fields', missingFields },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(booking.customer_email)) {
            return NextResponse.json(
                { error: 'Invalid customer email format' },
                { status: 400 }
            );
        }

        console.log('Sending emails for booking:', booking.id || 'new booking');

        // Send customer email
        let customerEmailResult;
        try {
            const confirmationUrl = confirmationToken
                ? `${request.url.replace('/api/send-booking-emails', '')}/api/confirm-booking?token=${confirmationToken}`
                : undefined;

            const { subject, html } = customerBookingEmail(booking, confirmationUrl);
            customerEmailResult = await sendMail({ to: booking.customer_email, subject, html });
            console.log('Customer email sent:', customerEmailResult);
        } catch (err: any) {
            console.error('Failed to send customer email:', err.message);
        }

        // Send admin email
        let adminEmailResult;
        try {
            const { subject, html } = adminBookingEmail(booking, price);
            adminEmailResult = await sendMail({ to: adminEmail, subject, html });
            console.log('Admin email sent:', adminEmailResult);
        } catch (err: any) {
            console.error('Failed to send admin email:', err.message);
        }

        return NextResponse.json({
            success: true,
            customerEmail: customerEmailResult,
            adminEmail: adminEmailResult,
            bookingId: booking.id || 'pending'
        });
    } catch (error: any) {
        console.error('EMAIL API ERROR:', error.message);
        return NextResponse.json(
            { error: 'Failed to send emails. Please try again or contact support.' },
            { status: 500 }
        );
    }
}
