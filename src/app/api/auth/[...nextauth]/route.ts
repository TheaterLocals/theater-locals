export const dynamic = 'force-dynamic';

import type { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const { handlers } = await import('@/lib/auth');
    return handlers.GET(req);
  } catch {
    return new Response(JSON.stringify({ error: 'Auth not available' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { handlers } = await import('@/lib/auth');
    return handlers.POST(req);
  } catch {
    return new Response(JSON.stringify({ error: 'Auth not available' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
