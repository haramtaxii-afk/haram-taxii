'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Building2, User, Mail, Phone, MessageSquare, Check, Loader2 } from 'lucide-react';

export default function PartnerInquiryForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        company_name: '',
        contact_person: '',
        email: '',
        phone: '',
        business_type: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { error } = await supabase
                .from('partner_inquiries')
                .insert([formData]);

            if (error) throw error;

            // Send email notifications to client and admin
            try {
                await fetch('/api/send-partner-inquiry-email', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ formData }),
                });
            } catch (emailErr) {
                console.error('Email notification failed:', emailErr);
            }

            setSuccess(true);
        } catch (err) {
            console.error('Error:', err);
            alert('Submission failed. Please try again or contact us directly.');
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="text-center py-12 bg-gray-50 rounded-2xl border border-gray-200">
                <div className="w-16 h-16 bg-brand-teal rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Inquiry Submitted!</h3>
                <p className="text-gray-500">Our business team will contact you within 24 hours.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl border border-gray-200 p-6 sm:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
                <div className="relative">
                    <Building2 className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 z-10" />
                    <Input
                        name="company_name"
                        placeholder="Company / Agency Name *"
                        required
                        value={formData.company_name}
                        onChange={handleChange}
                        className="pl-10 h-12 bg-white border-gray-300 text-gray-900 rounded-lg"
                    />
                </div>
                <div className="relative">
                    <User className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 z-10" />
                    <Input
                        name="contact_person"
                        placeholder="Contact Person *"
                        required
                        value={formData.contact_person}
                        onChange={handleChange}
                        className="pl-10 h-12 bg-white border-gray-300 text-gray-900 rounded-lg"
                    />
                </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
                <div className="relative">
                    <Mail className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 z-10" />
                    <Input
                        name="email"
                        type="email"
                        placeholder="Email Address *"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10 h-12 bg-white border-gray-300 text-gray-900 rounded-lg"
                    />
                </div>
                <div className="relative">
                    <Phone className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 z-10" />
                    <Input
                        name="phone"
                        type="tel"
                        placeholder="Phone Number *"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="pl-10 h-12 bg-white border-gray-300 text-gray-900 rounded-lg"
                    />
                </div>
            </div>

            <Select
                value={formData.business_type}
                onValueChange={(value) => setFormData(prev => ({ ...prev, business_type: value }))}
            >
                <SelectTrigger className="h-12 bg-white border-gray-300 text-gray-900 rounded-lg">
                    <SelectValue placeholder="Business Type *" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="umrah-agency">Umrah / Hajj Agency</SelectItem>
                    <SelectItem value="travel-agency">Travel Agency</SelectItem>
                    <SelectItem value="hotel">Hotel / Hospitality</SelectItem>
                    <SelectItem value="corporate">Corporate Travel</SelectItem>
                    <SelectItem value="tour-operator">Tour Operator</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                </SelectContent>
            </Select>

            <div className="relative">
                <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 z-10" />
                <textarea
                    name="message"
                    placeholder="Tell us about your business and requirements..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full pl-10 pt-3 bg-white border border-gray-300 text-gray-900 rounded-lg resize-none text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                />
            </div>

            <Button
                type="submit"
                disabled={loading || !formData.business_type}
                className="w-full h-12 bg-brand-teal hover:bg-brand-teal-dark text-white font-bold rounded-lg"
            >
                {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : null}
                {loading ? 'Submitting...' : 'Submit Inquiry'}
            </Button>
        </form>
    );
}
