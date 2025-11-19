import { NextRequest, NextResponse } from 'next/server';
import { getAuthenticatedUser } from '@/lib/supabase-server-api';
import { canCreateContent } from '@/lib/subscription-checker';

export async function GET(request: NextRequest) {
  try {
    const { user, supabase } = await getAuthenticatedUser(request);

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const projectId = searchParams.get('project_id');

    let query = (supabase as any)
      .from('content_items')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (type) {
      query = query.eq('type', type);
    }

    if (projectId) {
      query = query.eq('project_id', projectId);
    }

    const { data, error } = await query;

    if (error) throw error;

    return NextResponse.json({ content: data });
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
    const limitCheck = await canCreateContent(user.id);
    if (!limitCheck.allowed) {
      return NextResponse.json(
        { 
          error: limitCheck.message || 'Limite de contenu atteinte',
          code: 'SUBSCRIPTION_LIMIT_EXCEEDED'
        },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { type, title, content, project_id, metadata, storage_url } = body;

    if (!type) {
      return NextResponse.json(
        { error: 'Type is required' },
        { status: 400 }
      );
    }

    const { data, error } = await (supabase as any)
      .from('content_items')
      .insert({
        user_id: user.id,
        project_id: project_id || null,
        type,
        title,
        content,
        metadata: metadata || {},
        storage_url: storage_url || null,
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ content: data }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

