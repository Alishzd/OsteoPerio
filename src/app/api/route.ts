import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ ok: true, service: 'osteoperio-consultation-endpoint' });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, patientType, phone, location } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
    }

    return NextResponse.json({
      ok: true,
      received: {
        name,
        email,
        patientType: patientType || 'patient',
        phone: phone || '',
        location: location || '',
      },
      note: 'Connect this route to your real clinic inbox or CRM before launch.',
    });
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body' }, { status: 400 });
  }
}
