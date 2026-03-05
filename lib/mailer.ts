import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

interface SendMailOptions {
    to: string | string[];
    subject: string;
    html: string;
    from?: string;
}

export async function sendMail({ to, subject, html, from }: SendMailOptions) {
    const fromAddress = from || 'Haram Taxi Service <admin@haramtaxii.com>';
    const recipients = Array.isArray(to) ? to.join(', ') : to;

    const info = await transporter.sendMail({
        from: fromAddress,
        to: recipients,
        subject,
        html,
    });

    return { id: info.messageId, accepted: info.accepted };
}
