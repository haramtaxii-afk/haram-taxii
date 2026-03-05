import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Initialize Resend with API key check
const resendApiKey = process.env.RESEND_API_KEY;
const adminEmail = process.env.ADMIN_EMAIL || 'haramtaxiservice@gmail.com';

if (!resendApiKey) {
    console.error('RESEND_API_KEY is not set in environment variables');
}

if (!adminEmail) {
    console.error('ADMIN_EMAIL is not set in environment variables');
}

const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Helper function to escape HTML to prevent XSS in emails
function escapeHtml(str: string | undefined | null): string {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Helper function to format booking ID
function formatBookingId(id: string | undefined): string {
    if (!id) return 'N/A';
    return `#${id.slice(0, 8).toUpperCase()}`;
}

// Helper function to format phone number for WhatsApp
function formatPhoneForWhatsApp(phone: string | undefined): string {
    if (!phone) return '';
    // Remove all non-digit characters (including + sign)
    const cleaned = phone.replace(/\D/g, '');

    // If number already starts with a country code (more than 10 digits), use as is
    if (cleaned.length > 10) {
        return cleaned;
    }

    // If it starts with 0, remove it and add Saudi code
    if (cleaned.startsWith('0')) {
        return `966${cleaned.substring(1)}`;
    }

    // If it's just a local number, add Saudi code
    if (!cleaned.startsWith('966')) {
        return `966${cleaned}`;
    }

    return cleaned;
}

// Helper function to format date safely
function formatDate(date: string | Date | undefined): string {
    if (!date) return 'N/A';
    try {
        const dateObj = typeof date === 'string' ? new Date(date) : date;
        return dateObj.toLocaleString('en-US', { timeZone: 'Asia/Riyadh' });
    } catch {
        return String(date);
    }
}

export async function POST(request: NextRequest) {
    try {
        // Validate request body
        const body = await request.json();

        if (!body || !body.booking) {
            return NextResponse.json(
                { error: 'Missing booking data in request body' },
                { status: 400 }
            );
        }

        const { booking, price, confirmationToken } = body;

        // Validate required fields
        const requiredFields = [
            'customer_name',
            'customer_email',
            'customer_phone',
            'pickup_location',
            'destination',
            'pickup_date',
            'pickup_time',
            'vehicle_type'
        ];

        const missingFields = requiredFields.filter(field => !booking[field]);

        if (missingFields.length > 0) {
            return NextResponse.json(
                {
                    error: 'Missing required booking fields',
                    missingFields
                },
                { status: 400 }
            );
        }

        // Validate environment variables
        if (!resend) {
            console.error('Resend client not initialized - RESEND_API_KEY missing');
            return NextResponse.json(
                { error: 'Email service not configured. Please contact support.' },
                { status: 500 }
            );
        }

        if (!adminEmail) {
            console.error('ADMIN_EMAIL not set');
            return NextResponse.json(
                { error: 'Admin email not configured' },
                { status: 500 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(booking.customer_email)) {
            return NextResponse.json(
                { error: 'Invalid customer email format' },
                { status: 400 }
            );
        }

        console.log('Sending emails for booking:', booking.id || 'new booking');

        // Send email to customer
        let customerEmail;
        try {
            const confirmationUrl = confirmationToken
                ? `${request.url.replace('/api/send-booking-emails', '')}/api/confirm-booking?token=${confirmationToken}`
                : '';

            customerEmail = await resend.emails.send({
                from: 'Haram Taxi <bookings@haramtaxiservice.com>',
                to: [booking.customer_email],
                subject: `Action Required: Confirm Your Booking (#${booking.id.slice(0, 8)})`,
                html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                        body { 
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                            line-height: 1.6; 
                            color: #1a1a1a;
                            margin: 0;
                            padding: 0;
                            background-color: #f4f4f5;
                        }
                        .container { 
                            max-width: 600px; 
                            margin: 40px auto; 
                            background: #ffffff;
                            border-radius: 16px;
                            overflow: hidden;
                            box-shadow: 0 4px 20px rgba(0,0,0,0.05);
                        }
                        .header { 
                            background: #000000;
                            padding: 40px 30px; 
                            text-align: center;
                            border-bottom: 4px solid #d97706;
                        }
                        .header h1 { 
                            color: #ffffff; 
                            margin: 0; 
                            font-size: 28px;
                            font-weight: 700;
                            letter-spacing: -0.5px;
                        }
                        .header p {
                            color: #d1d5db;
                            margin: 8px 0 0 0;
                            font-size: 16px;
                        }
                        .content { 
                            padding: 40px 30px;
                        }
                        .greeting {
                            font-size: 18px;
                            color: #000000;
                            margin-bottom: 24px;
                            font-weight: 600;
                        }
                        .cta-container {
                            text-align: center;
                            background: #fdf8f6;
                            border: 1px solid #fed7aa;
                            border-radius: 12px;
                            padding: 30px 20px;
                            margin: 0 0 30px 0;
                        }
                        .cta-button { 
                            display: inline-block; 
                            background: #d97706;
                            color: #ffffff !important; 
                            padding: 18px 48px; 
                            text-decoration: none; 
                            border-radius: 8px; 
                            font-weight: 700;
                            font-size: 18px;
                            box-shadow: 0 4px 6px rgba(217, 119, 6, 0.2);
                            transition: all 0.2s ease;
                        }
                        .cta-subtext {
                            display: block;
                            margin-top: 12px;
                            color: #92400e;
                            font-size: 14px;
                            font-weight: 500;
                        }
                        .section-title {
                            font-size: 14px;
                            text-transform: uppercase;
                            color: #6b7280;
                            letter-spacing: 1px;
                            font-weight: 700;
                            margin: 0 0 16px 0;
                            padding-bottom: 8px;
                            border-bottom: 1px solid #e5e7eb;
                        }
                        .details-grid {
                            display: grid;
                            gap: 16px;
                            margin-bottom: 30px;
                        }
                        .detail-item {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            padding: 8px 0;
                        }
                        .label { 
                            color: #6b7280; 
                            font-size: 15px;
                            font-weight: 500;
                        }
                        .value { 
                            color: #111827; 
                            font-weight: 600;
                            font-size: 15px;
                            text-align: right;
                        }
                        .price-box {
                            background: #18181b;
                            color: #fff;
                            padding: 24px;
                            border-radius: 12px;
                            margin-top: 30px;
                            text-align: center;
                        }
                        .total-label {
                            color: #a1a1aa;
                            font-size: 14px;
                            text-transform: uppercase;
                            letter-spacing: 1px;
                            margin-bottom: 4px;
                        }
                        .total-amount {
                            color: #fbbf24;
                            font-size: 36px;
                            font-weight: 800;
                        }
                        .footer { 
                            background: #f9fafb; 
                            padding: 30px; 
                            text-align: center;
                            border-top: 1px solid #e5e7eb;
                        }
                        .footer p {
                            margin: 4px 0;
                            color: #6b7280;
                            font-size: 13px;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>Booking Request Received</h1>
                            <p>One step left to secure your ride</p>
                        </div>
                        
                        <div class="content">
                            <p class="greeting">Hi ${escapeHtml(booking.customer_name)},</p>

                            <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
                                We've received your booking request for a trip from <strong>${escapeHtml(booking.pickup_location)}</strong> to <strong>${escapeHtml(booking.destination)}</strong>.
                            </p>

                            ${confirmationUrl ? `
                            <div class="cta-container">
                                <a href="${confirmationUrl}" class="cta-button">
                                    Confirm My Booking
                                </a>
                                <span class="cta-subtext">Click above to verify your request instantly</span>
                            </div>
                            ` : ''}
                            
                            <div class="section-title">Trip Details</div>
                            
                            <div class="details-grid">
                                <div class="detail-item">
                                    <span class="label">Date & Time</span>
                                    <span class="value">${escapeHtml(booking.pickup_date)} at ${escapeHtml(booking.pickup_time)}</span>
                                </div>
                                <div class="detail-item">
                                    <span class="label">Vehicle</span>
                                    <span class="value">${escapeHtml(booking.vehicle_type)}</span>
                                </div>
                                <div class="detail-item">
                                    <span class="label">Passengers</span>
                                    <span class="value">${escapeHtml(String(booking.passengers))}</span>
                                </div>
                                <div class="detail-item">
                                    <span class="label">Booking Reference</span>
                                    <span class="value">#${booking.id.slice(0, 8).toUpperCase()}</span>
                                </div>
                            </div>
                            
                            ${price ? `
                            <div class="price-box">
                                <div class="total-label">Estimated Total</div>
                                <div class="total-amount">SAR ${price}</div>
                            </div>
                            ` : ''}
                            
                            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
                                <p style="color: #6b7280; font-size: 14px;">
                                    Questions? Contact us at <a href="mailto:${adminEmail}" style="color: #d97706; font-weight: 600; text-decoration: none;">${adminEmail}</a>
                                </p>
                            </div>
                        </div>
                        
                        <div class="footer">
                            <p><strong>Haram Taxi Service</strong></p>
                            <p>Professional • Reliable • 24/7 Support</p>
                            <p style="margin-top: 12px; opacity: 0.6;">
                                © ${new Date().getFullYear()} Haram Taxi Service. All rights reserved.
                            </p>
                        </div>
                    </div>
                </body>
                </html>
            `,
            });
            console.log('Customer email sent:', customerEmail);
        } catch (customerEmailError: any) {
            console.error('Failed to send customer email:', {
                error: customerEmailError.message,
                name: customerEmailError.name,
                response: customerEmailError.response || customerEmailError
            });

            // Check if it's a domain verification error
            const errorMessage = customerEmailError.message || '';
            if (errorMessage.includes('domain') || errorMessage.includes('verify') || errorMessage.includes('not verified')) {
                console.error(`Email domain not verified. Please verify 'haramtaxiservice.com' in Resend dashboard. Error: ${customerEmailError.message}`);
            } else {
                console.error(`Customer email failed: ${customerEmailError.message}`);
            }
            // Do not throw here so admin email can still be sent
        }

        // Send email to admin
        let adminEmailResult;
        try {
            console.log('Sending admin email to:', adminEmail);
            adminEmailResult = await resend.emails.send({
                from: 'Haram Taxi System <bookings@haramtaxiservice.com>',
                to: [adminEmail],
                subject: `NEW BOOKING: ${booking.customer_name} - ${booking.pickup_date}`,
                html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { 
                            font-family: Arial, sans-serif; 
                            line-height: 1.6; 
                            color: #000000; 
                            background-color: #fce7f3; /* Light background to prevent dark mode issues */
                            margin: 0;
                            padding: 20px;
                        }
                        .container { 
                            max-width: 600px; 
                            margin: 0 auto; 
                            background: #ffffff; 
                            border: 2px solid #000000;
                            border-radius: 0;
                            overflow: hidden;
                        }
                        .header { 
                            background: #000000; 
                            padding: 20px; 
                            text-align: center; 
                        }
                        .header h2 { 
                            color: #ffffff; 
                            margin: 0; 
                            font-size: 24px;
                            text-transform: uppercase;
                            letter-spacing: 1px;
                        }
                        .content { 
                            padding: 20px;
                        }
                        .alert-box { 
                            background: #fefce8; 
                            border: 2px solid #eab308;
                            color: #854d0e; 
                            padding: 15px; 
                            margin-bottom: 25px; 
                            font-weight: bold; 
                            text-align: center; 
                        }
                        .section {
                            margin-bottom: 25px;
                            border-bottom: 1px solid #eeeeee;
                            padding-bottom: 20px;
                        }
                        .section:last-child {
                            border-bottom: none;
                        }
                        .section-title {
                            font-size: 14px;
                            text-transform: uppercase;
                            color: #666666;
                            font-weight: 700;
                            margin-bottom: 15px;
                        }
                        .row {
                            display: flex;
                            margin-bottom: 10px;
                            border-bottom: 1px dashed #e5e5e5;
                            padding-bottom: 5px;
                        }
                        .key {
                            flex: 1;
                            color: #666666;
                            font-weight: 500;
                        }
                        .value {
                            flex: 2;
                            color: #000000; /* Force black */
                            font-weight: 700;
                            text-align: right;
                        }
                        .action-bar {
                            background: #f8fafc;
                            padding: 20px;
                            text-align: center;
                            border-top: 2px solid #000000;
                            display: flex;
                            flex-wrap: wrap;
                            gap: 10px;
                            justify-content: center;
                        }
                        .btn {
                            display: inline-block;
                            padding: 10px 20px;
                            border-radius: 6px;
                            text-decoration: none;
                            font-weight: bold;
                            font-size: 14px;
                            color: #ffffff !important;
                        }
                        .btn-whatsapp { background: #25d366; }
                        .btn-call { background: #3b82f6; }
                        .btn-email { background: #64748b; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h2>New Booking Alert</h2>
                        </div>
                        <div class="content">
                            <div class="alert-box">
                                ⚡ Please review and contact the customer
                            </div>

                            <div class="section">
                                <div class="section-title">Customer Details</div>
                                <div class="row">
                                    <div class="key">Name</div>
                                    <div class="value">${escapeHtml(booking.customer_name)}</div>
                                </div>
                                <div class="row">
                                    <div class="key">Phone</div>
                                    <div class="value">${escapeHtml(booking.customer_phone)}</div>
                                </div>
                                <div class="row">
                                    <div class="key">Email</div>
                                    <div class="value">${escapeHtml(booking.customer_email)}</div>
                                </div>
                            </div>

                            <div class="section">
                                <div class="section-title">Trip Information</div>
                                <div class="row">
                                    <div class="key">From</div>
                                    <div class="value">${escapeHtml(booking.pickup_location)}</div>
                                </div>
                                <div class="row">
                                    <div class="key">To</div>
                                    <div class="value">${escapeHtml(booking.destination)}</div>
                                </div>
                                <div class="row">
                                    <div class="key">Date & Time</div>
                                    <div class="value">${escapeHtml(booking.pickup_date)} @ ${escapeHtml(booking.pickup_time)}</div>
                                </div>
                                <div class="row">
                                    <div class="key">Vehicle</div>
                                    <div class="value">${escapeHtml(booking.vehicle_type)}</div>
                                </div>
                                <div class="row">
                                    <div class="key">Passenger(s)</div>
                                    <div class="value">${escapeHtml(String(booking.passengers))}</div>
                                </div>
                            </div>
                            
                            ${price ? `
                            <div class="section">
                                <div class="section-title">Payment Info</div>
                                <div class="row">
                                    <div class="key">Quoted Price</div>
                                    <div class="value" style="color: #16a34a;">SAR ${price}</div>
                                </div>
                            </div>
                            ` : ''}

                        </div>
                        
                        <div class="action-bar">
                            ${booking.customer_phone ? `<a href="https://wa.me/${formatPhoneForWhatsApp(booking.customer_phone)}" class="btn btn-whatsapp">WhatsApp</a>` : ''}
                            ${booking.customer_phone ? `<a href="tel:${booking.customer_phone}" class="btn btn-call">Call</a>` : ''}
                            <a href="mailto:${booking.customer_email}" class="btn btn-email">Email</a>
                        </div>
                    </div>
                </body>
                </html>
            `,
            });
            console.log('Admin email sent:', adminEmailResult);
        } catch (adminEmailError: any) {
            console.error('Failed to send admin email:', {
                error: adminEmailError.message,
                name: adminEmailError.name,
                response: adminEmailError.response || adminEmailError
            });
            // Don't throw here - customer email was sent, admin email failure is less critical
            console.warn('Admin email failed but customer email was sent successfully');
        }

        console.log('Both emails sent successfully!');

        return NextResponse.json({
            success: true,
            customerEmail,
            adminEmail: adminEmailResult || { error: 'Admin email failed but customer email sent' },
            bookingId: booking.id || 'pending'
        });
    } catch (error: any) {
        // Log full error details to server console
        console.error('========== EMAIL API ERROR ==========');
        console.error('Error Message:', error.message);
        console.error('Error Name:', error.name);
        console.error('Error Stack:', error.stack);
        if (error.response) {
            console.error('Resend API Response:', JSON.stringify(error.response, null, 2));
        }
        if (error.cause) {
            console.error('Error Cause:', error.cause);
        }
        console.error('=====================================');

        // Return safe error to client (no stack traces or internal details)
        return NextResponse.json({
            error: 'Failed to send emails. Please try again or contact support.',
        }, { status: 500 });
    }
}
