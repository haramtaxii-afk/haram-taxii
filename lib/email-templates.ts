const LOGO_URL = 'https://xyuhzrdhlfiwfxyzjjhj.supabase.co/storage/v1/object/public/assets/logo.png';
const BRAND_NAVY = '#112D4E';
const BRAND_NAVY_DARK = '#0A1D33';
const BRAND_GOLD = '#D4AF37';
const BRAND_GOLD_LIGHT = '#F5E6B8';
const WEBSITE_URL = 'https://www.haramtaxii.com';
const WHATSAPP_NUMBER = '923132222436';
const CONTACT_EMAIL = 'info@haramtaxii.com';

function escapeHtml(str: string | undefined | null): string {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function formatBookingId(id: string | number | undefined): string {
    if (id === undefined || id === null) return 'N/A';
    return `HT-${String(id).padStart(5, '0')}`;
}

function formatPhoneForWhatsApp(phone: string | undefined): string {
    if (!phone) return WHATSAPP_NUMBER;
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length > 10) return cleaned;
    if (cleaned.startsWith('0')) return `966${cleaned.substring(1)}`;
    if (!cleaned.startsWith('966')) return `966${cleaned}`;
    return cleaned;
}

const baseLayout = (content: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Haram Taxi Service</title>
</head>
<body style="margin:0;padding:0;background-color:#f0f2f5;font-family:'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;-webkit-font-smoothing:antialiased;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0f2f5;padding:32px 16px;">
        <tr>
            <td align="center">
                <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 16px rgba(0,0,0,0.08);">
                    ${content}
                </table>

                <!-- Footer -->
                <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;margin-top:24px;">
                    <tr>
                        <td align="center" style="padding:0 20px;">
                            <table role="presentation" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center" style="padding-bottom:12px;">
                                        <a href="https://wa.me/${WHATSAPP_NUMBER}" style="display:inline-block;width:36px;height:36px;margin:0 6px;text-decoration:none;">
                                            <img src="https://cdn-icons-png.flaticon.com/512/3536/3536445.png" width="36" height="36" alt="WhatsApp" style="border:0;display:block;border-radius:50%;" />
                                        </a>
                                        <a href="${WEBSITE_URL}" style="display:inline-block;width:36px;height:36px;margin:0 6px;text-decoration:none;">
                                            <img src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png" width="36" height="36" alt="Website" style="border:0;display:block;border-radius:50%;" />
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            <p style="margin:0 0 4px;font-size:13px;color:#8b95a5;">Haram Taxi Service &mdash; Premium Umrah & Hajj Transport</p>
                            <p style="margin:0 0 4px;font-size:12px;color:#a0a8b4;">Jeddah &bull; Makkah &bull; Madinah &bull; All Saudi Arabia</p>
                            <p style="margin:0;font-size:11px;color:#b0b8c4;">&copy; ${new Date().getFullYear()} Haram Taxi Service. All rights reserved.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;

const headerBlock = (subtitle: string) => `
    <!-- Header with Logo -->
    <tr>
        <td style="background:linear-gradient(135deg, ${BRAND_NAVY} 0%, ${BRAND_NAVY_DARK} 100%);padding:36px 30px 28px;text-align:center;">
            <img src="${LOGO_URL}" alt="Haram Taxi" width="180" style="display:block;margin:0 auto 16px;max-width:180px;height:auto;" />
            <p style="margin:0;font-size:14px;color:${BRAND_GOLD};letter-spacing:2px;text-transform:uppercase;font-weight:600;">${subtitle}</p>
        </td>
    </tr>
    <!-- Gold accent line -->
    <tr>
        <td style="background:linear-gradient(90deg, ${BRAND_GOLD}, ${BRAND_GOLD_LIGHT}, ${BRAND_GOLD});height:3px;font-size:0;line-height:0;">&nbsp;</td>
    </tr>`;

// ─── CUSTOMER BOOKING CONFIRMATION EMAIL ──────────────────────

interface BookingEmailData {
    id?: string | number;
    customer_name: string;
    customer_email: string;
    customer_phone: string;
    pickup_location: string;
    destination: string;
    pickup_date: string;
    pickup_time: string;
    vehicle_type: string;
    passengers?: number;
    special_requests?: string;
}

export function customerBookingEmail(booking: BookingEmailData, confirmationUrl?: string): { subject: string; html: string } {
    const bookingRef = formatBookingId(booking.id);

    const html = baseLayout(`
        ${headerBlock('Booking Confirmation')}

        <!-- Body -->
        <tr>
            <td style="padding:36px 32px 12px;">
                <h1 style="margin:0 0 6px;font-size:22px;color:${BRAND_NAVY};font-weight:700;">Thank you, ${escapeHtml(booking.customer_name)}!</h1>
                <p style="margin:0;font-size:15px;color:#5a6577;line-height:1.6;">
                    Your booking request has been received. Our team will review it and get back to you shortly.
                </p>
            </td>
        </tr>

        <!-- Booking Reference Badge -->
        <tr>
            <td style="padding:16px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND_NAVY};border-radius:10px;overflow:hidden;">
                    <tr>
                        <td style="padding:20px 24px;text-align:center;">
                            <p style="margin:0 0 4px;font-size:11px;color:${BRAND_GOLD};text-transform:uppercase;letter-spacing:2px;font-weight:600;">Booking Reference</p>
                            <p style="margin:0;font-size:28px;color:#ffffff;font-weight:800;letter-spacing:1px;">${bookingRef}</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        <!-- Trip Details Card -->
        <tr>
            <td style="padding:8px 32px 24px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8ecf1;border-radius:10px;overflow:hidden;">
                    <tr>
                        <td style="background:#f7f8fa;padding:14px 20px;border-bottom:1px solid #e8ecf1;">
                            <p style="margin:0;font-size:12px;color:${BRAND_NAVY};text-transform:uppercase;letter-spacing:1.5px;font-weight:700;">Trip Details</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:0;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;width:40%;font-size:13px;color:#8b95a5;font-weight:500;">Pickup</td>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:14px;color:${BRAND_NAVY};font-weight:600;text-align:right;">${escapeHtml(booking.pickup_location)}</td>
                                </tr>
                                <tr>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:13px;color:#8b95a5;font-weight:500;">Destination</td>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:14px;color:${BRAND_NAVY};font-weight:600;text-align:right;">${escapeHtml(booking.destination)}</td>
                                </tr>
                                <tr>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:13px;color:#8b95a5;font-weight:500;">Date</td>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:14px;color:${BRAND_NAVY};font-weight:600;text-align:right;">${escapeHtml(booking.pickup_date)}</td>
                                </tr>
                                <tr>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:13px;color:#8b95a5;font-weight:500;">Time</td>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:14px;color:${BRAND_NAVY};font-weight:600;text-align:right;">${escapeHtml(booking.pickup_time)}</td>
                                </tr>
                                <tr>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:13px;color:#8b95a5;font-weight:500;">Vehicle</td>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:14px;color:${BRAND_NAVY};font-weight:600;text-align:right;">${escapeHtml(booking.vehicle_type)}</td>
                                </tr>
                                <tr>
                                    <td style="padding:14px 20px;font-size:13px;color:#8b95a5;font-weight:500;">Passengers</td>
                                    <td style="padding:14px 20px;font-size:14px;color:${BRAND_NAVY};font-weight:600;text-align:right;">${booking.passengers || 1}</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        ${confirmationUrl ? `
        <!-- CTA Button -->
        <tr>
            <td style="padding:8px 32px 24px;text-align:center;">
                <a href="${confirmationUrl}" style="display:inline-block;background:${BRAND_GOLD};color:${BRAND_NAVY};padding:16px 48px;border-radius:8px;font-size:16px;font-weight:700;text-decoration:none;letter-spacing:0.5px;">Confirm My Booking</a>
            </td>
        </tr>
        ` : ''}

        <!-- What's Next -->
        <tr>
            <td style="padding:8px 32px 28px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f7f8fa;border-radius:10px;padding:20px 24px;">
                    <tr>
                        <td style="padding:20px 24px;">
                            <p style="margin:0 0 12px;font-size:14px;color:${BRAND_NAVY};font-weight:700;">What happens next?</p>
                            <p style="margin:0 0 8px;font-size:13px;color:#5a6577;line-height:1.7;">1. Our team reviews your booking and confirms availability</p>
                            <p style="margin:0 0 8px;font-size:13px;color:#5a6577;line-height:1.7;">2. You'll receive driver details before your pickup</p>
                            <p style="margin:0;font-size:13px;color:#5a6577;line-height:1.7;">3. Your driver arrives at the scheduled time & location</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        <!-- Contact Bar -->
        <tr>
            <td style="background:${BRAND_NAVY};padding:24px 32px;text-align:center;">
                <p style="margin:0 0 14px;font-size:13px;color:#a0b0c8;">Need help? We're available 24/7</p>
                <table role="presentation" cellpadding="0" cellspacing="0" align="center">
                    <tr>
                        <td style="padding:0 8px;">
                            <a href="https://wa.me/${WHATSAPP_NUMBER}" style="display:inline-block;background:#25d366;color:#ffffff;padding:10px 22px;border-radius:6px;font-size:13px;font-weight:600;text-decoration:none;">WhatsApp</a>
                        </td>
                        <td style="padding:0 8px;">
                            <a href="mailto:${CONTACT_EMAIL}" style="display:inline-block;background:${BRAND_GOLD};color:${BRAND_NAVY};padding:10px 22px;border-radius:6px;font-size:13px;font-weight:600;text-decoration:none;">Email Us</a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    `);

    return {
        subject: `Booking Received - ${bookingRef} | Haram Taxi Service`,
        html,
    };
}

// ─── ADMIN NEW BOOKING NOTIFICATION EMAIL ─────────────────────

export function adminBookingEmail(booking: BookingEmailData, price?: number): { subject: string; html: string } {
    const bookingRef = formatBookingId(booking.id);
    const whatsappLink = `https://wa.me/${formatPhoneForWhatsApp(booking.customer_phone)}`;

    const html = baseLayout(`
        ${headerBlock('New Booking Alert')}

        <!-- Urgent Banner -->
        <tr>
            <td style="padding:24px 32px 0;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg, #fff8e1 0%, #fff3cd 100%);border:1px solid ${BRAND_GOLD};border-radius:10px;overflow:hidden;">
                    <tr>
                        <td style="padding:16px 20px;text-align:center;">
                            <p style="margin:0;font-size:15px;color:#7c6200;font-weight:700;">New booking received &mdash; please review and contact the customer</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        <!-- Booking Ref + Status -->
        <tr>
            <td style="padding:20px 32px 8px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                        <td>
                            <p style="margin:0 0 2px;font-size:11px;color:#8b95a5;text-transform:uppercase;letter-spacing:1.5px;">Booking ID</p>
                            <p style="margin:0;font-size:22px;color:${BRAND_NAVY};font-weight:800;">${bookingRef}</p>
                        </td>
                        <td align="right" valign="top">
                            <span style="display:inline-block;background:#fef3c7;color:#92400e;padding:6px 16px;border-radius:20px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Pending</span>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        <!-- Customer Details -->
        <tr>
            <td style="padding:16px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8ecf1;border-radius:10px;overflow:hidden;">
                    <tr>
                        <td style="background:${BRAND_NAVY};padding:12px 20px;">
                            <p style="margin:0;font-size:12px;color:${BRAND_GOLD};text-transform:uppercase;letter-spacing:1.5px;font-weight:700;">Customer Details</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:0;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;width:35%;font-size:13px;color:#8b95a5;font-weight:500;">Name</td>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:14px;color:${BRAND_NAVY};font-weight:700;text-align:right;">${escapeHtml(booking.customer_name)}</td>
                                </tr>
                                <tr>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:13px;color:#8b95a5;font-weight:500;">Phone</td>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:14px;color:${BRAND_NAVY};font-weight:700;text-align:right;">${escapeHtml(booking.customer_phone)}</td>
                                </tr>
                                <tr>
                                    <td style="padding:14px 20px;font-size:13px;color:#8b95a5;font-weight:500;">Email</td>
                                    <td style="padding:14px 20px;font-size:14px;color:${BRAND_NAVY};font-weight:700;text-align:right;">${escapeHtml(booking.customer_email)}</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        <!-- Trip Details -->
        <tr>
            <td style="padding:0 32px 16px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8ecf1;border-radius:10px;overflow:hidden;">
                    <tr>
                        <td style="background:${BRAND_NAVY};padding:12px 20px;">
                            <p style="margin:0;font-size:12px;color:${BRAND_GOLD};text-transform:uppercase;letter-spacing:1.5px;font-weight:700;">Trip Information</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:0;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;width:35%;font-size:13px;color:#8b95a5;font-weight:500;">From</td>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:14px;color:${BRAND_NAVY};font-weight:600;text-align:right;">${escapeHtml(booking.pickup_location)}</td>
                                </tr>
                                <tr>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:13px;color:#8b95a5;font-weight:500;">To</td>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:14px;color:${BRAND_NAVY};font-weight:600;text-align:right;">${escapeHtml(booking.destination)}</td>
                                </tr>
                                <tr>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:13px;color:#8b95a5;font-weight:500;">Date & Time</td>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:14px;color:${BRAND_NAVY};font-weight:600;text-align:right;">${escapeHtml(booking.pickup_date)} @ ${escapeHtml(booking.pickup_time)}</td>
                                </tr>
                                <tr>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:13px;color:#8b95a5;font-weight:500;">Vehicle</td>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:14px;color:${BRAND_NAVY};font-weight:600;text-align:right;">${escapeHtml(booking.vehicle_type)}</td>
                                </tr>
                                <tr>
                                    <td style="padding:14px 20px;font-size:13px;color:#8b95a5;font-weight:500;">Passengers</td>
                                    <td style="padding:14px 20px;font-size:14px;color:${BRAND_NAVY};font-weight:600;text-align:right;">${booking.passengers || 1}</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        ${booking.special_requests ? `
        <!-- Special Requests -->
        <tr>
            <td style="padding:0 32px 16px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f7f8fa;border-radius:10px;border:1px solid #e8ecf1;">
                    <tr>
                        <td style="padding:16px 20px;">
                            <p style="margin:0 0 6px;font-size:12px;color:#8b95a5;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Special Requests</p>
                            <p style="margin:0;font-size:14px;color:${BRAND_NAVY};line-height:1.6;">${escapeHtml(booking.special_requests)}</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        ` : ''}

        ${price ? `
        <tr>
            <td style="padding:0 32px 16px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND_NAVY};border-radius:10px;">
                    <tr>
                        <td style="padding:20px;text-align:center;">
                            <p style="margin:0 0 4px;font-size:11px;color:${BRAND_GOLD};text-transform:uppercase;letter-spacing:2px;">Quoted Price</p>
                            <p style="margin:0;font-size:32px;color:#ffffff;font-weight:800;">SAR ${price}</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        ` : ''}

        <!-- Quick Action Buttons -->
        <tr>
            <td style="background:${BRAND_NAVY};padding:24px 32px;text-align:center;">
                <p style="margin:0 0 16px;font-size:13px;color:#a0b0c8;font-weight:500;">Quick Actions</p>
                <table role="presentation" cellpadding="0" cellspacing="0" align="center">
                    <tr>
                        <td style="padding:0 6px;">
                            <a href="${whatsappLink}" style="display:inline-block;background:#25d366;color:#ffffff;padding:12px 24px;border-radius:6px;font-size:13px;font-weight:700;text-decoration:none;">WhatsApp</a>
                        </td>
                        <td style="padding:0 6px;">
                            <a href="tel:${booking.customer_phone}" style="display:inline-block;background:#3b82f6;color:#ffffff;padding:12px 24px;border-radius:6px;font-size:13px;font-weight:700;text-decoration:none;">Call</a>
                        </td>
                        <td style="padding:0 6px;">
                            <a href="mailto:${booking.customer_email}" style="display:inline-block;background:${BRAND_GOLD};color:${BRAND_NAVY};padding:12px 24px;border-radius:6px;font-size:13px;font-weight:700;text-decoration:none;">Email</a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    `);

    return {
        subject: `New Booking: ${booking.customer_name} - ${booking.pickup_location} to ${booking.destination} (${booking.pickup_date})`,
        html,
    };
}

// ─── BOOKING CONFIRMED EMAIL (after admin confirms) ──────────

export function bookingConfirmedEmail(booking: BookingEmailData): { subject: string; html: string } {
    const bookingRef = formatBookingId(booking.id);

    const html = baseLayout(`
        ${headerBlock('Booking Confirmed')}

        <!-- Success Banner -->
        <tr>
            <td style="padding:28px 32px 0;text-align:center;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);border:1px solid #6ee7b7;border-radius:10px;">
                    <tr>
                        <td style="padding:20px;text-align:center;">
                            <p style="margin:0;font-size:28px;line-height:1;">&#10003;</p>
                            <p style="margin:8px 0 0;font-size:16px;color:#065f46;font-weight:700;">Your booking has been confirmed!</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        <tr>
            <td style="padding:24px 32px 8px;">
                <p style="margin:0;font-size:15px;color:#5a6577;line-height:1.7;">
                    Dear <strong style="color:${BRAND_NAVY};">${escapeHtml(booking.customer_name)}</strong>, your booking <strong style="color:${BRAND_NAVY};">${bookingRef}</strong> is now confirmed. Your driver will meet you at the scheduled time and location.
                </p>
            </td>
        </tr>

        <!-- Trip Details Card -->
        <tr>
            <td style="padding:16px 32px 24px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8ecf1;border-radius:10px;overflow:hidden;">
                    <tr>
                        <td style="background:#f7f8fa;padding:14px 20px;border-bottom:1px solid #e8ecf1;">
                            <p style="margin:0;font-size:12px;color:${BRAND_NAVY};text-transform:uppercase;letter-spacing:1.5px;font-weight:700;">Confirmed Details</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:0;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;width:40%;font-size:13px;color:#8b95a5;font-weight:500;">Reference</td>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:14px;color:${BRAND_NAVY};font-weight:700;text-align:right;">${bookingRef}</td>
                                </tr>
                                <tr>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:13px;color:#8b95a5;font-weight:500;">Pickup</td>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:14px;color:${BRAND_NAVY};font-weight:600;text-align:right;">${escapeHtml(booking.pickup_location)}</td>
                                </tr>
                                <tr>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:13px;color:#8b95a5;font-weight:500;">Destination</td>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:14px;color:${BRAND_NAVY};font-weight:600;text-align:right;">${escapeHtml(booking.destination)}</td>
                                </tr>
                                <tr>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:13px;color:#8b95a5;font-weight:500;">Date & Time</td>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:14px;color:${BRAND_NAVY};font-weight:600;text-align:right;">${escapeHtml(booking.pickup_date)} at ${escapeHtml(booking.pickup_time)}</td>
                                </tr>
                                <tr>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:13px;color:#8b95a5;font-weight:500;">Vehicle</td>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:14px;color:${BRAND_NAVY};font-weight:600;text-align:right;">${escapeHtml(booking.vehicle_type)}</td>
                                </tr>
                                <tr>
                                    <td style="padding:14px 20px;font-size:13px;color:#8b95a5;font-weight:500;">Status</td>
                                    <td style="padding:14px 20px;font-size:14px;font-weight:700;text-align:right;color:#059669;">CONFIRMED</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        <!-- Contact Bar -->
        <tr>
            <td style="background:${BRAND_NAVY};padding:24px 32px;text-align:center;">
                <p style="margin:0 0 14px;font-size:13px;color:#a0b0c8;">Questions? Reach us anytime</p>
                <table role="presentation" cellpadding="0" cellspacing="0" align="center">
                    <tr>
                        <td style="padding:0 8px;">
                            <a href="https://wa.me/${WHATSAPP_NUMBER}" style="display:inline-block;background:#25d366;color:#ffffff;padding:10px 22px;border-radius:6px;font-size:13px;font-weight:600;text-decoration:none;">WhatsApp</a>
                        </td>
                        <td style="padding:0 8px;">
                            <a href="mailto:${CONTACT_EMAIL}" style="display:inline-block;background:${BRAND_GOLD};color:${BRAND_NAVY};padding:10px 22px;border-radius:6px;font-size:13px;font-weight:600;text-decoration:none;">Email Us</a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    `);

    return {
        subject: `Booking Confirmed - ${bookingRef} | Haram Taxi Service`,
        html,
    };
}

// ─── STATUS CHANGE EMAILS ─────────────────────────────────────

export function statusChangeEmail(bookingId: string | number, status: string, customerName: string): { subject: string; html: string } | null {
    const bookingRef = formatBookingId(bookingId);

    if (status === 'confirmed') {
        const html = baseLayout(`
            ${headerBlock('Booking Confirmed')}
            <tr>
                <td style="padding:32px;text-align:center;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ecfdf5;border:1px solid #6ee7b7;border-radius:10px;">
                        <tr><td style="padding:24px;text-align:center;">
                            <p style="margin:0 0 8px;font-size:28px;">&#10003;</p>
                            <p style="margin:0 0 4px;font-size:18px;color:#065f46;font-weight:700;">Booking Confirmed</p>
                            <p style="margin:0;font-size:14px;color:#5a6577;">Reference: <strong>${bookingRef}</strong></p>
                        </td></tr>
                    </table>
                    <p style="margin:24px 0 0;font-size:15px;color:#5a6577;line-height:1.7;">Dear <strong style="color:${BRAND_NAVY};">${escapeHtml(customerName)}</strong>, your booking has been confirmed. Your driver will meet you at the scheduled time.</p>
                </td>
            </tr>
            <tr>
                <td style="background:${BRAND_NAVY};padding:24px 32px;text-align:center;">
                    <a href="https://wa.me/${WHATSAPP_NUMBER}" style="display:inline-block;background:${BRAND_GOLD};color:${BRAND_NAVY};padding:12px 32px;border-radius:6px;font-size:14px;font-weight:700;text-decoration:none;">Contact Support</a>
                </td>
            </tr>
        `);
        return { subject: `Booking Confirmed - ${bookingRef} | Haram Taxi`, html };
    }

    if (status === 'cancelled') {
        const html = baseLayout(`
            ${headerBlock('Booking Update')}
            <tr>
                <td style="padding:32px;text-align:center;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fef2f2;border:1px solid #fca5a5;border-radius:10px;">
                        <tr><td style="padding:24px;text-align:center;">
                            <p style="margin:0 0 4px;font-size:18px;color:#991b1b;font-weight:700;">Booking Cancelled</p>
                            <p style="margin:0;font-size:14px;color:#5a6577;">Reference: <strong>${bookingRef}</strong></p>
                        </td></tr>
                    </table>
                    <p style="margin:24px 0 0;font-size:15px;color:#5a6577;line-height:1.7;">Dear <strong style="color:${BRAND_NAVY};">${escapeHtml(customerName)}</strong>, your booking has been cancelled. If this was a mistake, please rebook or contact us.</p>
                </td>
            </tr>
            <tr>
                <td style="background:${BRAND_NAVY};padding:24px 32px;text-align:center;">
                    <a href="${WEBSITE_URL}/booking" style="display:inline-block;background:${BRAND_GOLD};color:${BRAND_NAVY};padding:12px 32px;border-radius:6px;font-size:14px;font-weight:700;text-decoration:none;">Book Again</a>
                </td>
            </tr>
        `);
        return { subject: `Booking Cancelled - ${bookingRef} | Haram Taxi`, html };
    }

    if (status === 'completed') {
        const html = baseLayout(`
            ${headerBlock('Journey Complete')}
            <tr>
                <td style="padding:32px;text-align:center;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg, ${BRAND_NAVY} 0%, ${BRAND_NAVY_DARK} 100%);border-radius:10px;">
                        <tr><td style="padding:28px;text-align:center;">
                            <p style="margin:0 0 8px;font-size:20px;color:#ffffff;font-weight:700;">Thank you for riding with us!</p>
                            <p style="margin:0;font-size:14px;color:${BRAND_GOLD};">We hope you had a blessed Umrah</p>
                        </td></tr>
                    </table>
                    <p style="margin:24px 0 0;font-size:15px;color:#5a6577;line-height:1.7;">Dear <strong style="color:${BRAND_NAVY};">${escapeHtml(customerName)}</strong>, your journey is complete. Your feedback helps us serve pilgrims better.</p>
                </td>
            </tr>
            <tr>
                <td style="background:${BRAND_NAVY};padding:24px 32px;text-align:center;">
                    <a href="${WEBSITE_URL}/booking" style="display:inline-block;background:${BRAND_GOLD};color:${BRAND_NAVY};padding:12px 32px;border-radius:6px;font-size:14px;font-weight:700;text-decoration:none;">Book Another Ride</a>
                </td>
            </tr>
        `);
        return { subject: `Journey Complete - Haram Taxi Service`, html };
    }

    return null;
}

// ─── DRIVER REGISTRATION EMAILS ──────────────────────────────

interface DriverRegistrationData {
    full_name: string;
    phone: string;
    email: string;
    city: string;
    vehicle_model: string;
    owns_vehicle: boolean;
    has_saudi_license: boolean;
    vehicle_condition_ok: boolean;
    speaks_languages: boolean;
    background_check_agreed: boolean;
}

export function driverRegistrationClientEmail(data: DriverRegistrationData): { subject: string; html: string } {
    const html = baseLayout(`
        ${headerBlock('Application Received')}

        <tr>
            <td style="padding:36px 32px 12px;">
                <h1 style="margin:0 0 6px;font-size:22px;color:${BRAND_NAVY};font-weight:700;">Thank you, ${escapeHtml(data.full_name)}!</h1>
                <p style="margin:0;font-size:15px;color:#5a6577;line-height:1.6;">
                    Your driver registration application has been received. Our partner coordinator will review your details and contact you within 48 hours.
                </p>
            </td>
        </tr>

        <!-- Application Details Card -->
        <tr>
            <td style="padding:16px 32px 24px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8ecf1;border-radius:10px;overflow:hidden;">
                    <tr>
                        <td style="background:#f7f8fa;padding:14px 20px;border-bottom:1px solid #e8ecf1;">
                            <p style="margin:0;font-size:12px;color:${BRAND_NAVY};text-transform:uppercase;letter-spacing:1.5px;font-weight:700;">Your Application Details</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:0;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;width:40%;font-size:13px;color:#8b95a5;font-weight:500;">Name</td>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:14px;color:${BRAND_NAVY};font-weight:600;text-align:right;">${escapeHtml(data.full_name)}</td>
                                </tr>
                                <tr>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:13px;color:#8b95a5;font-weight:500;">City</td>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:14px;color:${BRAND_NAVY};font-weight:600;text-align:right;">${escapeHtml(data.city)}</td>
                                </tr>
                                <tr>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:13px;color:#8b95a5;font-weight:500;">Vehicle</td>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:14px;color:${BRAND_NAVY};font-weight:600;text-align:right;">${escapeHtml(data.vehicle_model)}</td>
                                </tr>
                                <tr>
                                    <td style="padding:14px 20px;font-size:13px;color:#8b95a5;font-weight:500;">Owns Vehicle</td>
                                    <td style="padding:14px 20px;font-size:14px;color:${BRAND_NAVY};font-weight:600;text-align:right;">${data.owns_vehicle ? 'Yes' : 'No'}</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        <!-- What's Next -->
        <tr>
            <td style="padding:8px 32px 28px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f7f8fa;border-radius:10px;">
                    <tr>
                        <td style="padding:20px 24px;">
                            <p style="margin:0 0 12px;font-size:14px;color:${BRAND_NAVY};font-weight:700;">What happens next?</p>
                            <p style="margin:0 0 8px;font-size:13px;color:#5a6577;line-height:1.7;">1. Our team reviews your application</p>
                            <p style="margin:0 0 8px;font-size:13px;color:#5a6577;line-height:1.7;">2. We verify your documents and vehicle details</p>
                            <p style="margin:0;font-size:13px;color:#5a6577;line-height:1.7;">3. You receive onboarding instructions and start driving</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        <!-- Contact Bar -->
        <tr>
            <td style="background:${BRAND_NAVY};padding:24px 32px;text-align:center;">
                <p style="margin:0 0 14px;font-size:13px;color:#a0b0c8;">Questions about your application?</p>
                <table role="presentation" cellpadding="0" cellspacing="0" align="center">
                    <tr>
                        <td style="padding:0 8px;">
                            <a href="https://wa.me/${WHATSAPP_NUMBER}" style="display:inline-block;background:#25d366;color:#ffffff;padding:10px 22px;border-radius:6px;font-size:13px;font-weight:600;text-decoration:none;">WhatsApp</a>
                        </td>
                        <td style="padding:0 8px;">
                            <a href="mailto:${CONTACT_EMAIL}" style="display:inline-block;background:${BRAND_GOLD};color:${BRAND_NAVY};padding:10px 22px;border-radius:6px;font-size:13px;font-weight:600;text-decoration:none;">Email Us</a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    `);

    return {
        subject: 'Application Received | Haram Taxi Driver Partner',
        html,
    };
}

export function driverRegistrationAdminEmail(data: DriverRegistrationData): { subject: string; html: string } {
    const checkMark = (val: boolean) => val ? '<span style="color:#059669;font-weight:700;">&#10003; Yes</span>' : '<span style="color:#dc2626;font-weight:700;">&#10007; No</span>';

    const html = baseLayout(`
        ${headerBlock('New Driver Application')}

        <!-- Alert Banner -->
        <tr>
            <td style="padding:24px 32px 0;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg, #fff8e1 0%, #fff3cd 100%);border:1px solid ${BRAND_GOLD};border-radius:10px;">
                    <tr>
                        <td style="padding:16px 20px;text-align:center;">
                            <p style="margin:0;font-size:15px;color:#7c6200;font-weight:700;">New driver registration &mdash; please review</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        <!-- Driver Details -->
        <tr>
            <td style="padding:20px 32px 16px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8ecf1;border-radius:10px;overflow:hidden;">
                    <tr>
                        <td style="background:${BRAND_NAVY};padding:12px 20px;">
                            <p style="margin:0;font-size:12px;color:${BRAND_GOLD};text-transform:uppercase;letter-spacing:1.5px;font-weight:700;">Driver Details</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:0;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;width:35%;font-size:13px;color:#8b95a5;font-weight:500;">Name</td>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:14px;color:${BRAND_NAVY};font-weight:700;text-align:right;">${escapeHtml(data.full_name)}</td>
                                </tr>
                                <tr>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:13px;color:#8b95a5;font-weight:500;">Phone</td>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:14px;color:${BRAND_NAVY};font-weight:700;text-align:right;">${escapeHtml(data.phone)}</td>
                                </tr>
                                <tr>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:13px;color:#8b95a5;font-weight:500;">Email</td>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:14px;color:${BRAND_NAVY};font-weight:700;text-align:right;">${escapeHtml(data.email)}</td>
                                </tr>
                                <tr>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:13px;color:#8b95a5;font-weight:500;">City</td>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:14px;color:${BRAND_NAVY};font-weight:600;text-align:right;">${escapeHtml(data.city)}</td>
                                </tr>
                                <tr>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:13px;color:#8b95a5;font-weight:500;">Vehicle</td>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:14px;color:${BRAND_NAVY};font-weight:600;text-align:right;">${escapeHtml(data.vehicle_model)}</td>
                                </tr>
                                <tr>
                                    <td style="padding:14px 20px;font-size:13px;color:#8b95a5;font-weight:500;">Owns Vehicle</td>
                                    <td style="padding:14px 20px;font-size:14px;color:${BRAND_NAVY};font-weight:600;text-align:right;">${data.owns_vehicle ? 'Yes' : 'No'}</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        <!-- Requirements Checklist -->
        <tr>
            <td style="padding:0 32px 16px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8ecf1;border-radius:10px;overflow:hidden;">
                    <tr>
                        <td style="background:${BRAND_NAVY};padding:12px 20px;">
                            <p style="margin:0;font-size:12px;color:${BRAND_GOLD};text-transform:uppercase;letter-spacing:1.5px;font-weight:700;">Requirements Check</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:0;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:13px;color:#8b95a5;font-weight:500;">Saudi License</td>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:14px;text-align:right;">${checkMark(data.has_saudi_license)}</td>
                                </tr>
                                <tr>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:13px;color:#8b95a5;font-weight:500;">Vehicle Condition (2018+)</td>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:14px;text-align:right;">${checkMark(data.vehicle_condition_ok)}</td>
                                </tr>
                                <tr>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:13px;color:#8b95a5;font-weight:500;">Languages</td>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:14px;text-align:right;">${checkMark(data.speaks_languages)}</td>
                                </tr>
                                <tr>
                                    <td style="padding:14px 20px;font-size:13px;color:#8b95a5;font-weight:500;">Background Check</td>
                                    <td style="padding:14px 20px;font-size:14px;text-align:right;">${checkMark(data.background_check_agreed)}</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        <!-- Quick Actions -->
        <tr>
            <td style="background:${BRAND_NAVY};padding:24px 32px;text-align:center;">
                <p style="margin:0 0 16px;font-size:13px;color:#a0b0c8;font-weight:500;">Quick Actions</p>
                <table role="presentation" cellpadding="0" cellspacing="0" align="center">
                    <tr>
                        <td style="padding:0 6px;">
                            <a href="https://wa.me/${formatPhoneForWhatsApp(data.phone)}" style="display:inline-block;background:#25d366;color:#ffffff;padding:12px 24px;border-radius:6px;font-size:13px;font-weight:700;text-decoration:none;">WhatsApp</a>
                        </td>
                        <td style="padding:0 6px;">
                            <a href="tel:${data.phone}" style="display:inline-block;background:#3b82f6;color:#ffffff;padding:12px 24px;border-radius:6px;font-size:13px;font-weight:700;text-decoration:none;">Call</a>
                        </td>
                        <td style="padding:0 6px;">
                            <a href="mailto:${data.email}" style="display:inline-block;background:${BRAND_GOLD};color:${BRAND_NAVY};padding:12px 24px;border-radius:6px;font-size:13px;font-weight:700;text-decoration:none;">Email</a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    `);

    return {
        subject: `New Driver Application: ${data.full_name} - ${data.city}`,
        html,
    };
}

// ─── PARTNER INQUIRY EMAILS ─────────────────────────────────

interface PartnerInquiryData {
    company_name: string;
    contact_person: string;
    email: string;
    phone: string;
    business_type: string;
    message: string;
}

const businessTypeLabels: Record<string, string> = {
    'umrah-agency': 'Umrah / Hajj Agency',
    'travel-agency': 'Travel Agency',
    'hotel': 'Hotel / Hospitality',
    'corporate': 'Corporate Travel',
    'tour-operator': 'Tour Operator',
    'other': 'Other',
};

export function partnerInquiryClientEmail(data: PartnerInquiryData): { subject: string; html: string } {
    const html = baseLayout(`
        ${headerBlock('Inquiry Received')}

        <tr>
            <td style="padding:36px 32px 12px;">
                <h1 style="margin:0 0 6px;font-size:22px;color:${BRAND_NAVY};font-weight:700;">Thank you, ${escapeHtml(data.contact_person)}!</h1>
                <p style="margin:0;font-size:15px;color:#5a6577;line-height:1.6;">
                    We have received your partnership inquiry for <strong style="color:${BRAND_NAVY};">${escapeHtml(data.company_name)}</strong>. Our business development team will review your details and get back to you within 24 hours.
                </p>
            </td>
        </tr>

        <!-- Inquiry Details Card -->
        <tr>
            <td style="padding:16px 32px 24px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8ecf1;border-radius:10px;overflow:hidden;">
                    <tr>
                        <td style="background:#f7f8fa;padding:14px 20px;border-bottom:1px solid #e8ecf1;">
                            <p style="margin:0;font-size:12px;color:${BRAND_NAVY};text-transform:uppercase;letter-spacing:1.5px;font-weight:700;">Your Inquiry Details</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:0;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;width:40%;font-size:13px;color:#8b95a5;font-weight:500;">Company</td>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:14px;color:${BRAND_NAVY};font-weight:600;text-align:right;">${escapeHtml(data.company_name)}</td>
                                </tr>
                                <tr>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:13px;color:#8b95a5;font-weight:500;">Business Type</td>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:14px;color:${BRAND_NAVY};font-weight:600;text-align:right;">${escapeHtml(businessTypeLabels[data.business_type] || data.business_type)}</td>
                                </tr>
                                <tr>
                                    <td style="padding:14px 20px;font-size:13px;color:#8b95a5;font-weight:500;">Contact Person</td>
                                    <td style="padding:14px 20px;font-size:14px;color:${BRAND_NAVY};font-weight:600;text-align:right;">${escapeHtml(data.contact_person)}</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        <!-- What's Next -->
        <tr>
            <td style="padding:8px 32px 28px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f7f8fa;border-radius:10px;">
                    <tr>
                        <td style="padding:20px 24px;">
                            <p style="margin:0 0 12px;font-size:14px;color:${BRAND_NAVY};font-weight:700;">What happens next?</p>
                            <p style="margin:0 0 8px;font-size:13px;color:#5a6577;line-height:1.7;">1. Our business team reviews your inquiry</p>
                            <p style="margin:0 0 8px;font-size:13px;color:#5a6577;line-height:1.7;">2. A dedicated account manager will contact you</p>
                            <p style="margin:0;font-size:13px;color:#5a6577;line-height:1.7;">3. We tailor a partnership plan for your business</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        <!-- Contact Bar -->
        <tr>
            <td style="background:${BRAND_NAVY};padding:24px 32px;text-align:center;">
                <p style="margin:0 0 14px;font-size:13px;color:#a0b0c8;">Need to reach us sooner?</p>
                <table role="presentation" cellpadding="0" cellspacing="0" align="center">
                    <tr>
                        <td style="padding:0 8px;">
                            <a href="https://wa.me/${WHATSAPP_NUMBER}" style="display:inline-block;background:#25d366;color:#ffffff;padding:10px 22px;border-radius:6px;font-size:13px;font-weight:600;text-decoration:none;">WhatsApp</a>
                        </td>
                        <td style="padding:0 8px;">
                            <a href="mailto:${CONTACT_EMAIL}" style="display:inline-block;background:${BRAND_GOLD};color:${BRAND_NAVY};padding:10px 22px;border-radius:6px;font-size:13px;font-weight:600;text-decoration:none;">Email Us</a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    `);

    return {
        subject: 'Partnership Inquiry Received | Haram Taxi Service',
        html,
    };
}

export function partnerInquiryAdminEmail(data: PartnerInquiryData): { subject: string; html: string } {
    const html = baseLayout(`
        ${headerBlock('New B2B Partner Inquiry')}

        <!-- Alert Banner -->
        <tr>
            <td style="padding:24px 32px 0;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg, #fff8e1 0%, #fff3cd 100%);border:1px solid ${BRAND_GOLD};border-radius:10px;">
                    <tr>
                        <td style="padding:16px 20px;text-align:center;">
                            <p style="margin:0;font-size:15px;color:#7c6200;font-weight:700;">New B2B partnership inquiry &mdash; please follow up</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        <!-- Company Details -->
        <tr>
            <td style="padding:20px 32px 16px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8ecf1;border-radius:10px;overflow:hidden;">
                    <tr>
                        <td style="background:${BRAND_NAVY};padding:12px 20px;">
                            <p style="margin:0;font-size:12px;color:${BRAND_GOLD};text-transform:uppercase;letter-spacing:1.5px;font-weight:700;">Company Details</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:0;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;width:35%;font-size:13px;color:#8b95a5;font-weight:500;">Company</td>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:14px;color:${BRAND_NAVY};font-weight:700;text-align:right;">${escapeHtml(data.company_name)}</td>
                                </tr>
                                <tr>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:13px;color:#8b95a5;font-weight:500;">Contact Person</td>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:14px;color:${BRAND_NAVY};font-weight:700;text-align:right;">${escapeHtml(data.contact_person)}</td>
                                </tr>
                                <tr>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:13px;color:#8b95a5;font-weight:500;">Email</td>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:14px;color:${BRAND_NAVY};font-weight:700;text-align:right;">${escapeHtml(data.email)}</td>
                                </tr>
                                <tr>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:13px;color:#8b95a5;font-weight:500;">Phone</td>
                                    <td style="padding:14px 20px;border-bottom:1px solid #f0f2f5;font-size:14px;color:${BRAND_NAVY};font-weight:700;text-align:right;">${escapeHtml(data.phone)}</td>
                                </tr>
                                <tr>
                                    <td style="padding:14px 20px;font-size:13px;color:#8b95a5;font-weight:500;">Business Type</td>
                                    <td style="padding:14px 20px;font-size:14px;color:${BRAND_NAVY};font-weight:600;text-align:right;">${escapeHtml(businessTypeLabels[data.business_type] || data.business_type)}</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        ${data.message ? `
        <!-- Message -->
        <tr>
            <td style="padding:0 32px 16px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f7f8fa;border-radius:10px;border:1px solid #e8ecf1;">
                    <tr>
                        <td style="padding:16px 20px;">
                            <p style="margin:0 0 6px;font-size:12px;color:#8b95a5;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Message</p>
                            <p style="margin:0;font-size:14px;color:${BRAND_NAVY};line-height:1.6;">${escapeHtml(data.message)}</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        ` : ''}

        <!-- Quick Actions -->
        <tr>
            <td style="background:${BRAND_NAVY};padding:24px 32px;text-align:center;">
                <p style="margin:0 0 16px;font-size:13px;color:#a0b0c8;font-weight:500;">Quick Actions</p>
                <table role="presentation" cellpadding="0" cellspacing="0" align="center">
                    <tr>
                        <td style="padding:0 6px;">
                            <a href="https://wa.me/${formatPhoneForWhatsApp(data.phone)}" style="display:inline-block;background:#25d366;color:#ffffff;padding:12px 24px;border-radius:6px;font-size:13px;font-weight:700;text-decoration:none;">WhatsApp</a>
                        </td>
                        <td style="padding:0 6px;">
                            <a href="tel:${data.phone}" style="display:inline-block;background:#3b82f6;color:#ffffff;padding:12px 24px;border-radius:6px;font-size:13px;font-weight:700;text-decoration:none;">Call</a>
                        </td>
                        <td style="padding:0 6px;">
                            <a href="mailto:${data.email}" style="display:inline-block;background:${BRAND_GOLD};color:${BRAND_NAVY};padding:12px 24px;border-radius:6px;font-size:13px;font-weight:700;text-decoration:none;">Email</a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    `);

    return {
        subject: `New B2B Inquiry: ${data.company_name} (${businessTypeLabels[data.business_type] || data.business_type})`,
        html,
    };
}
