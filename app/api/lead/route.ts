import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';

// Rate limiting (simple in-memory store - in production use Redis)
const rateLimitMap = new Map();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5;

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  const record = rateLimitMap.get(ip);
  
  if (now > record.resetTime) {
    record.count = 1;
    record.resetTime = now + windowMs;
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const headersList = headers();
    const forwarded = headersList.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown';

    // Apply rate limiting
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['fullName', 'email', 'company', 'role', 'vertical', 'teamSize', 'challenge', 'timeline', 'consent'];
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: 'Missing required fields', fields: missingFields },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate consent
    if (!body.consent) {
      return NextResponse.json(
        { error: 'Consent is required' },
        { status: 400 }
      );
    }

    // Log the submission (in production, integrate with CRM/Zapier/Airtable)
    console.log('New lead submission:', {
      timestamp: new Date().toISOString(),
      ip,
      data: {
        fullName: body.fullName,
        email: body.email,
        company: body.company,
        role: body.role,
        vertical: body.vertical,
        teamSize: body.teamSize,
        challenge: body.challenge,
        timeline: body.timeline,
        phone: body.phone || 'Not provided',
      }
    });

    // TODO: Integrate with your CRM/email service
    // Examples:
    // - Send to Zapier webhook
    // - Save to Airtable
    // - Send to HubSpot/Salesforce
    // - Send notification email

    return NextResponse.json(
      { success: true, message: 'Application submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}