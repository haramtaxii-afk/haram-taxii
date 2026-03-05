export interface PrayerTimes {
    Fajr: string;
    Sunrise: string;
    Dhuhr: string;
    Asr: string;
    Maghrib: string;
    Isha: string;
    [key: string]: string;
}

// Map display names to API-compatible names
const CITY_NAME_MAP: Record<string, string> = {
    'Makkah': 'Makkah',
    'Madinah': 'Medina',
    'Jeddah': 'Jeddah',
};

export async function getPrayerTimes(city: string = 'Makkah'): Promise<PrayerTimes | null> {
    try {
        // Use current date
        const date = new Date();
        const dateStr = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

        // Map city name to API-compatible name
        const apiCityName = CITY_NAME_MAP[city] || city;

        // Method 4: Umm Al-Qura University, Makkah (Standard for Saudi Arabia)
        const url = `https://api.aladhan.com/v1/timingsByCity/${dateStr}?city=${encodeURIComponent(apiCityName)}&country=SA&method=4&iso8601=true`;

        const res = await fetch(url, {
            next: {
                revalidate: 3600 * 12, // Cache for 12 hours
                tags: ['prayer-times']
            }
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch prayer times: ${res.status}`);
        }

        const data = await res.json();

        // Return only the basic timings
        const { Fajr, Sunrise, Dhuhr, Asr, Maghrib, Isha } = data.data.timings;
        return { Fajr, Sunrise, Dhuhr, Asr, Maghrib, Isha };
    } catch (error) {
        console.warn('Warning: Failed to fetch prayer times:', error instanceof Error ? error.message : error);
        return null;
    }
}
