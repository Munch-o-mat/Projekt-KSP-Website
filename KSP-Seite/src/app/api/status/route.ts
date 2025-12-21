import { NextResponse } from 'next/server';
import clientPromise from '@/lib/db';

export async function GET() {
    try {
        const client = await clientPromise;
        // Pinging the database to check connection
        await client.db('admin').command({ ping: 1 });

        return NextResponse.json({
            status: 'success',
            message: 'Connected to MongoDB successfully!'
        });
    } catch (e) {
        console.error(e);
        return NextResponse.json({
            status: 'error',
            message: 'Failed to connect to database',
            error: errorMessage(e)
        }, { status: 500 });
    }
}

function errorMessage(e: unknown) {
    if (e instanceof Error) return e.message;
    return String(e);
}
