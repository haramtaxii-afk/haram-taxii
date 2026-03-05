export type VehicleType = 'Sedan' | 'GMC Yukon' | 'H1 Hyundai' | 'Hiace';

interface RouteRate {
    [key: string]: number;
}

const BASE_RATES: Record<string, RouteRate> = {
    'Jeddah-Makkah': { 'Sedan': 200, 'GMC Yukon': 350, 'H1 Hyundai': 350, 'Hiace': 400 },
    'Makkah-Jeddah': { 'Sedan': 200, 'GMC Yukon': 350, 'H1 Hyundai': 350, 'Hiace': 400 },

    'Makkah-Madinah': { 'Sedan': 450, 'GMC Yukon': 650, 'H1 Hyundai': 650, 'Hiace': 700 },
    'Madinah-Makkah': { 'Sedan': 450, 'GMC Yukon': 650, 'H1 Hyundai': 650, 'Hiace': 700 },

    'Jeddah-Madinah': { 'Sedan': 450, 'GMC Yukon': 650, 'H1 Hyundai': 650, 'Hiace': 700 },
    'Madinah-Jeddah': { 'Sedan': 450, 'GMC Yukon': 650, 'H1 Hyundai': 650, 'Hiace': 700 },

    'Makkah-Taif': { 'Sedan': 250, 'GMC Yukon': 400, 'H1 Hyundai': 400, 'Hiace': 450 },
    'Taif-Makkah': { 'Sedan': 250, 'GMC Yukon': 400, 'H1 Hyundai': 400, 'Hiace': 450 },
};

export function calculateFare(from: string, to: string, vehicle: VehicleType): number | null {
    // Normalize logic if needed (e.g. Jeddah Airport maps to Jeddah)
    let origin = from;
    let dest = to;

    if (from.includes('Jeddah') && !from.includes('Airport')) origin = 'Jeddah';
    if (from.includes('Airport') && from.includes('Jeddah')) origin = 'Jeddah';

    // Simplified key matching
    const key = `${origin}-${dest}`.replace(' Airport', ''); // Naive normalization

    // Check direct match
    const directKey = `${from}-${to}`.replace(' Airport', '').replace(' City', '');
    const reverseKey = `${to}-${from}`.replace(' Airport', '').replace(' City', '');

    // Try multiple variations
    const possibleKeys = [
        `${from}-${to}`,
        `${from.split(' ')[0]}-${to.split(' ')[0]}`, // e.g. Jeddah-Makkah
    ];

    for (const k of possibleKeys) {
        if (BASE_RATES[k] && BASE_RATES[k][vehicle]) {
            return BASE_RATES[k][vehicle];
        }
    }

    // Default fallbacks if keys roughly match knowing distance
    // This is a mockup; in production we'd have a comprehensive graph or list.
    return null;
}

export const CITIES = ['Jeddah Airport', 'Makkah', 'Madinah', 'Taif', 'Jeddah City'];
export const VEHICLES: VehicleType[] = ['Sedan', 'GMC Yukon', 'H1 Hyundai', 'Hiace'];
