import { NextResponse } from 'next/server';
import { getPrayerTimes } from '@/lib/prayer-times';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const city = searchParams.get('city') || 'Makkah';

    const timings = await getPrayerTimes(city);

    if (!timings) {
        return NextResponse.json({ error: 'Failed to fetch prayer times' }, { status: 500 });
    }

    return NextResponse.json(timings);
}
