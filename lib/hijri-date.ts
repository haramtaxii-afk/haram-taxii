export interface HijriDate {
    date: string;
    format: string;
    day: string;
    weekday: { en: string; ar: string };
    month: { number: number; en: string; ar: string };
    year: string;
    designation: { abbreviated: string; expanded: string };
}

export interface GregorianDate {
    date: string;
    month: { number: number; en: string };
    year: string;
    // ... basic parts
}

export async function convertToHijri(dateStr: string): Promise<HijriDate | null> {
    // dateStr: DD-MM-YYYY
    try {
        const res = await fetch(`https://api.aladhan.com/v1/gToH?date=${dateStr}`, {
            next: { revalidate: 86400 }
        });
        if (!res.ok) return null;
        const json = await res.json();
        return json.data.hijri;
    } catch (e) {
        console.error(e);
        return null;
    }
}

export async function convertToGregorian(dateStr: string): Promise<GregorianDate | null> {
    // dateStr: DD-MM-YYYY
    try {
        const res = await fetch(`https://api.aladhan.com/v1/hToG?date=${dateStr}`, {
            next: { revalidate: 86400 }
        });
        if (!res.ok) return null;
        const json = await res.json();
        return json.data.gregorian;
    } catch (e) {
        console.error(e);
        return null;
    }
}
