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
import { User, Mail, Phone, Car, Check, Loader2 } from 'lucide-react';

export default function DriverRegistrationForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        full_name: '',
        phone: '',
        email: '',
        city: '',
        vehicle_model: '',
        owns_vehicle: true,
        has_saudi_license: false,
        vehicle_condition_ok: false,
        speaks_languages: false,
        background_check_agreed: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { error } = await supabase
                .from('driver_registrations')
                .insert([formData]);

            if (error) throw error;

            // Send email notifications to client and admin
            try {
                await fetch('/api/send-driver-registration-email', {
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
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <div className="w-16 h-16 bg-brand-teal rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
                <p className="text-gray-500 max-w-md mx-auto">Thank you for your interest. Our partner coordinator will review your application and contact you via email within 48 hours.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 space-y-5">
            {/* Personal Info */}
            <div className="relative">
                <User className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 z-10" />
                <Input
                    name="full_name"
                    placeholder="Full Name *"
                    required
                    value={formData.full_name}
                    onChange={handleChange}
                    className="pl-10 h-12 bg-gray-50 border-gray-300 text-gray-900 rounded-lg"
                />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
                <div className="relative">
                    <Phone className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 z-10" />
                    <Input
                        name="phone"
                        type="tel"
                        placeholder="Phone Number *"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="pl-10 h-12 bg-gray-50 border-gray-300 text-gray-900 rounded-lg"
                    />
                </div>
                <div className="relative">
                    <Mail className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 z-10" />
                    <Input
                        name="email"
                        type="email"
                        placeholder="Email Address *"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10 h-12 bg-gray-50 border-gray-300 text-gray-900 rounded-lg"
                    />
                </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
                <Select
                    value={formData.city}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, city: value }))}
                >
                    <SelectTrigger className="h-12 bg-gray-50 border-gray-300 text-gray-900 rounded-lg">
                        <SelectValue placeholder="Vehicle City *" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Makkah">Makkah</SelectItem>
                        <SelectItem value="Madinah">Madinah</SelectItem>
                        <SelectItem value="Jeddah">Jeddah</SelectItem>
                        <SelectItem value="Riyadh">Riyadh</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                </Select>

                <div className="relative">
                    <Car className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 z-10" />
                    <Input
                        name="vehicle_model"
                        placeholder="Vehicle Model (e.g. Camry 2022) *"
                        required
                        value={formData.vehicle_model}
                        onChange={handleChange}
                        className="pl-10 h-12 bg-gray-50 border-gray-300 text-gray-900 rounded-lg"
                    />
                </div>
            </div>

            {/* Vehicle Ownership */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-3">Do you own your vehicle?</p>
                <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="ownership"
                            checked={formData.owns_vehicle}
                            onChange={() => setFormData(prev => ({ ...prev, owns_vehicle: true }))}
                            className="w-4 h-4 text-brand-teal accent-brand-teal"
                        />
                        <span className="text-sm text-gray-700">Yes, I own my vehicle</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="ownership"
                            checked={!formData.owns_vehicle}
                            onChange={() => setFormData(prev => ({ ...prev, owns_vehicle: false }))}
                            className="w-4 h-4 text-brand-teal accent-brand-teal"
                        />
                        <span className="text-sm text-gray-700">No, I do not</span>
                    </label>
                </div>
            </div>

            {/* Requirements Checklist */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-3">Requirements Checklist</p>
                <div className="space-y-3">
                    <label className="flex items-start gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            name="has_saudi_license"
                            checked={formData.has_saudi_license}
                            onChange={handleChange}
                            className="w-4 h-4 mt-0.5 accent-brand-teal rounded"
                        />
                        <span className="text-sm text-gray-600">I have a valid Saudi Driving License</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            name="vehicle_condition_ok"
                            checked={formData.vehicle_condition_ok}
                            onChange={handleChange}
                            className="w-4 h-4 mt-0.5 accent-brand-teal rounded"
                        />
                        <span className="text-sm text-gray-600">My vehicle is in excellent condition (2018 or newer)</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            name="speaks_languages"
                            checked={formData.speaks_languages}
                            onChange={handleChange}
                            className="w-4 h-4 mt-0.5 accent-brand-teal rounded"
                        />
                        <span className="text-sm text-gray-600">I can communicate in English, Arabic, or Urdu</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            name="background_check_agreed"
                            checked={formData.background_check_agreed}
                            onChange={handleChange}
                            className="w-4 h-4 mt-0.5 accent-brand-teal rounded"
                        />
                        <span className="text-sm text-gray-600">I agree to a background check</span>
                    </label>
                </div>
            </div>

            <Button
                type="submit"
                disabled={loading || !formData.city}
                className="w-full h-12 bg-brand-teal hover:bg-brand-teal-dark text-white font-bold rounded-lg"
            >
                {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : null}
                {loading ? 'Submitting...' : 'Submit Application'}
            </Button>
        </form>
    );
}
