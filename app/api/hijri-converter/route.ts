import { NextResponse } from 'next/server';
import { convertToHijri, convertToGregorian } from '@/lib/hijri-date';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date'); // Expect DD-MM-YYYY
    const type = searchParams.get('type') || 'gToH';

    if (!date) {
        return NextResponse.json({ error: 'Date parameter required (DD-MM-YYYY)' }, { status: 400 });
    }

    try {
        let result;
        if (type === 'gToH') {
            result = await convertToHijri(date);
        } else {
            result = await convertToGregorian(date);
        }

        if (!result) {
            return NextResponse.json({ error: 'Conversion failed or returned no data' }, { status: 500 });
        }

        return NextResponse.json(result);
    } catch (err) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
