import { NextRequest, NextResponse } from 'next/server';
import { getAuthenticatedUser } from '@/lib/supabase-server-api';
import { canCreateAgent } from '@/lib/subscription-checker';

export async function GET(request: NextRequest) {
  try {
    const { user, supabase } = await getAuthenticatedUser(request);

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { data, error } = await (supabase as any)
      .from('ai_agents')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json({ agents: data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { user, supabase } = await getAuthenticatedUser(request);

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Vérifier les limites d'abonnement
    const limitCheck = await canCreateAgent(user.id);
    if (!limitCheck.allowed) {
      return NextResponse.json(
        { 
          error: limitCheck.message || 'Limite d\'agents IA atteinte',
          code: 'SUBSCRIPTION_LIMIT_EXCEEDED'
        },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { name, description, type, config } = body;

    if (!name || !type) {
      return NextResponse.json(
        { error: 'Name and type are required' },
        { status: 400 }
      );
    }

    const { data, error } = await (supabase as any)
      .from('ai_agents')
      .insert({
        user_id: user.id,
        name,
        description,
        type,
        config: config || {},
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ agent: data }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

