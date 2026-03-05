import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/lib/mailer';
import { bookingConfirmedEmail } from '@/lib/email-templates';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
    try {
        const { booking } = await request.json();

        if (!booking) {
            return NextResponse.json(
                { error: 'Missing booking data' },
                { status: 400 }
            );
        }

        const { subject, html } = bookingConfirmedEmail(booking);
        const emailResult = await sendMail({ to: booking.customer_email, subject, html });

        return NextResponse.json({ success: true, emailResult });
    } catch (error: any) {
        console.error('Confirmation email error:', error);
        return NextResponse.json(
            { error: 'Failed to send confirmation email', details: error.message },
            { status: 500 }
        );
    }
}
