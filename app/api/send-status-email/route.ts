import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/lib/mailer';
import { statusChangeEmail } from '@/lib/email-templates';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
    try {
        const { bookingId, status, customerEmail, customerName } = await request.json();

        if (!bookingId || !status || !customerEmail) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const template = statusChangeEmail(bookingId, status, customerName);

        if (!template) {
            return NextResponse.json({ message: 'No email sent for this status' });
        }

        console.log(`Sending ${status} email to ${customerEmail}`);
        const data = await sendMail({ to: customerEmail, subject: template.subject, html: template.html });

        return NextResponse.json({ success: true, data });
    } catch (error: any) {
        console.error('Error sending status email:', error);
        return NextResponse.json({ error: 'Failed to send status email' }, { status: 500 });
    }
}
