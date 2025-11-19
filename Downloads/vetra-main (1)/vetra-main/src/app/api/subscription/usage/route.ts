/**
 * GET /api/subscription/usage
 * Récupère les statistiques d'usage de l'utilisateur
 */
import { NextRequest, NextResponse } from 'next/server';
import { getAuthenticatedUser } from '@/lib/supabase-server-api';
import { getUserUsage, getUserPlan } from '@/lib/subscription-checker';
import { SUBSCRIPTION_LIMITS } from '@/lib/subscription-limits';

export async function GET(request: NextRequest) {
  try {
    const { user } = await getAuthenticatedUser(request);

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const plan = await getUserPlan(user.id);
    const usage = await getUserUsage(user.id);
    const limits = SUBSCRIPTION_LIMITS[plan];

    return NextResponse.json({
      plan,
      usage,
      limits,
      // Calculer les pourcentages d'utilisation
      usagePercentages: {
        projects: limits.projects === -1 ? 0 : Math.round((usage.projects / limits.projects) * 100),
        contentItems: limits.contentItems === -1 ? 0 : Math.round((usage.contentItems / limits.contentItems) * 100),
        aiAgents: limits.aiAgents === -1 ? 0 : Math.round((usage.aiAgents / limits.aiAgents) * 100),
        aiGenerations: {
          text: limits.aiGenerations.text === -1 ? 0 : Math.round((usage.aiGenerations.text / limits.aiGenerations.text) * 100),
          image: limits.aiGenerations.image === -1 ? 0 : Math.round((usage.aiGenerations.image / limits.aiGenerations.image) * 100),
          video: limits.aiGenerations.video === -1 ? 0 : Math.round((usage.aiGenerations.video / limits.aiGenerations.video) * 100),
        },
        apiCalls: limits.apiCalls === -1 ? 0 : Math.round((usage.apiCalls / limits.apiCalls) * 100),
        storage: limits.storage === -1 ? 0 : Math.round((usage.storage / limits.storage) * 100),
      },
    });
  } catch (error: any) {
    console.error('Usage stats error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch usage stats' },
      { status: 500 }
    );
  }
}

