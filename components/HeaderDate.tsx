"use client";

import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";

export default function HeaderDate() {
    const [mounted, setMounted] = useState(false);
    const [date, setDate] = useState({ greg: "", hijri: "" });

    useEffect(() => {
        setMounted(true);
        const now = new Date();

        // Gregorian Date
        const greg = new Intl.DateTimeFormat("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
            weekday: "short"
        }).format(now);

        // Hijri Date using Umm al-Qura Calendar
        const hijri = new Intl.DateTimeFormat("en-TN-u-ca-islamic-umalqura", {
            day: "numeric",
            month: "long",
            year: "numeric"
        }).format(now);

        setDate({ greg, hijri });
    }, []);

    if (!mounted) return <div className="h-4 w-32 bg-white/10 rounded animate-pulse"></div>;

    return (
        <div className="flex items-center gap-2 text-xs font-medium text-white/90 whitespace-nowrap">
            <Calendar className="w-3 h-3 text-teal-300" />
            <span className="hidden sm:inline">{date.greg}</span>
            <span className="sm:hidden">{date.greg.split(',')[1]}</span> {/* Short on mobile */}
            <span className="text-teal-500/50">|</span>
            <span className="text-teal-200">{date.hijri}</span>
        </div>
    );
}
