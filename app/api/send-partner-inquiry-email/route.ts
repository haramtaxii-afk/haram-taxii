import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/lib/mailer';
import { partnerInquiryClientEmail, partnerInquiryAdminEmail } from '@/lib/email-templates';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const adminEmail = process.env.ADMIN_EMAIL || 'info@haramtaxii.com';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        if (!body || !body.formData) {
            return NextResponse.json({ error: 'Missing form data' }, { status: 400 });
        }

        const { formData } = body;

        const requiredFields = ['company_name', 'contact_person', 'email', 'phone', 'business_type'];
        const missingFields = requiredFields.filter(field => !formData[field]);
        if (missingFields.length > 0) {
            return NextResponse.json({ error: 'Missing required fields', missingFields }, { status: 400 });
        }

        // Send client confirmation email
        try {
            const { subject, html } = partnerInquiryClientEmail(formData);
            await sendMail({ to: formData.email, subject, html });
        } catch (err: any) {
            console.error('Failed to send partner client email:', err.message);
        }

        // Send admin notification email
        try {
            const { subject, html } = partnerInquiryAdminEmail(formData);
            await sendMail({ to: adminEmail, subject, html });
        } catch (err: any) {
            console.error('Failed to send partner admin email:', err.message);
        }

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('PARTNER INQUIRY EMAIL ERROR:', error.message);
        return NextResponse.json({ error: 'Failed to send emails' }, { status: 500 });
    }
}
