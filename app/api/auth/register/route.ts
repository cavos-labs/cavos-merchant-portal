import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { deployWallet } from 'cavos-service-sdk';

const supabase = createClient(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_ANON_KEY || ''
);

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 });
    }
    const { data, error } = await supabase.auth.signUp({ email, password });
    const wallet = await deployWallet('mainnet', process.env.CAVOS_API_KEY || "");
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json({ user: data.user, session: data.session });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Internal server error' }, { status: 500 });
  }
} 