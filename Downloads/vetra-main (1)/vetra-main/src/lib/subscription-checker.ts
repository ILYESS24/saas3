/**
 * Subscription Checker
 * Vérifie les limites d'abonnement avant d'autoriser des actions
 */

import { createServerSupabaseClient } from './supabase-server';
import { SUBSCRIPTION_LIMITS, PlanType, canPerformAction, getLimitExceededMessage } from './subscription-limits';

export interface UsageStats {
  projects: number;
  contentItems: number;
  aiAgents: number;
  aiGenerations: {
    text: number;
    image: number;
    video: number;
  };
  apiCalls: number;
  storage: number; // en MB
}

/**
 * Récupère le plan actif d'un utilisateur
 */
export async function getUserPlan(userId: string): Promise<PlanType> {
  const supabase = await createServerSupabaseClient();
  
  // Vérifier d'abord dans la table subscriptions
  const { data: subscription } = await supabase
    .from('subscriptions')
    .select('plan')
    .eq('user_id', userId)
    .eq('status', 'active')
    .single();

  if (subscription?.plan) {
    return subscription.plan as PlanType;
  }

  // Sinon, vérifier dans user_profiles
  const { data: profile } = await supabase
    .from('user_profiles')
    .select('plan')
    .eq('id', userId)
    .single();

  return (profile?.plan as PlanType) || 'basic';
}

/**
 * Récupère les statistiques d'usage d'un utilisateur
 */
export async function getUserUsage(userId: string): Promise<UsageStats> {
  const supabase = await createServerSupabaseClient();
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  // Compter les projets
  const { count: projectsCount } = await supabase
    .from('projects')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', userId);

  // Compter les éléments de contenu créés ce mois
  const { count: contentCount } = await supabase
    .from('content_items')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', userId)
    .gte('created_at', startOfMonth.toISOString());

  // Compter les agents IA
  const { count: agentsCount } = await supabase
    .from('ai_agents')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', userId);

  // Compter les générations AI ce mois (depuis analytics)
  const { data: analytics } = await supabase
    .from('analytics')
    .select('event_type, event_data')
    .eq('user_id', userId)
    .gte('created_at', startOfMonth.toISOString())
    .in('event_type', ['ai_text_generation', 'ai_image_generation', 'ai_video_generation', 'api_call']);

  let textGenerations = 0;
  let imageGenerations = 0;
  let videoGenerations = 0;
  let apiCalls = 0;

  analytics?.forEach((item) => {
    if (item.event_type === 'ai_text_generation') {
      textGenerations++;
    } else if (item.event_type === 'ai_image_generation') {
      imageGenerations++;
    } else if (item.event_type === 'ai_video_generation') {
      videoGenerations++;
    } else if (item.event_type === 'api_call') {
      apiCalls++;
    }
  });

  // Calculer le stockage (approximation basée sur les fichiers)
  const { data: contentItems } = await supabase
    .from('content_items')
    .select('metadata')
    .eq('user_id', userId);

  let storage = 0;
  contentItems?.forEach((item) => {
    const metadata = item.metadata as any;
    if (metadata?.fileSize) {
      storage += metadata.fileSize / (1024 * 1024); // Convertir en MB
    }
  });

  return {
    projects: projectsCount || 0,
    contentItems: contentCount || 0,
    aiAgents: agentsCount || 0,
    aiGenerations: {
      text: textGenerations,
      image: imageGenerations,
      video: videoGenerations,
    },
    apiCalls: apiCalls,
    storage: Math.round(storage),
  };
}

/**
 * Vérifie si un utilisateur peut créer un projet
 */
export async function canCreateProject(userId: string): Promise<{ allowed: boolean; message?: string }> {
  const plan = await getUserPlan(userId);
  const usage = await getUserUsage(userId);
  const limits = SUBSCRIPTION_LIMITS[plan];

  if (!canPerformAction(usage.projects, limits.projects)) {
    return {
      allowed: false,
      message: getLimitExceededMessage('projets', limits.projects, plan),
    };
  }

  return { allowed: true };
}

/**
 * Vérifie si un utilisateur peut créer un élément de contenu
 */
export async function canCreateContent(userId: string): Promise<{ allowed: boolean; message?: string }> {
  const plan = await getUserPlan(userId);
  const usage = await getUserUsage(userId);
  const limits = SUBSCRIPTION_LIMITS[plan];

  if (!canPerformAction(usage.contentItems, limits.contentItems)) {
    return {
      allowed: false,
      message: getLimitExceededMessage('éléments de contenu', limits.contentItems, plan),
    };
  }

  return { allowed: true };
}

/**
 * Vérifie si un utilisateur peut créer un agent IA
 */
export async function canCreateAgent(userId: string): Promise<{ allowed: boolean; message?: string }> {
  const plan = await getUserPlan(userId);
  const usage = await getUserUsage(userId);
  const limits = SUBSCRIPTION_LIMITS[plan];

  if (!canPerformAction(usage.aiAgents, limits.aiAgents)) {
    return {
      allowed: false,
      message: getLimitExceededMessage('agents IA', limits.aiAgents, plan),
    };
  }

  return { allowed: true };
}

/**
 * Vérifie si un utilisateur peut générer du contenu AI (texte, image, vidéo)
 */
export async function canGenerateAI(
  userId: string,
  type: 'text' | 'image' | 'video'
): Promise<{ allowed: boolean; message?: string }> {
  const plan = await getUserPlan(userId);
  const usage = await getUserUsage(userId);
  const limits = SUBSCRIPTION_LIMITS[plan];

  const currentUsage = usage.aiGenerations[type];
  const limit = limits.aiGenerations[type];

  if (!canPerformAction(currentUsage, limit)) {
    return {
      allowed: false,
      message: getLimitExceededMessage(`générations ${type}`, limit, plan),
    };
  }

  return { allowed: true };
}

/**
 * Vérifie si un utilisateur peut faire un appel API
 */
export async function canMakeAPICall(userId: string): Promise<{ allowed: boolean; message?: string }> {
  const plan = await getUserPlan(userId);
  const usage = await getUserUsage(userId);
  const limits = SUBSCRIPTION_LIMITS[plan];

  if (!canPerformAction(usage.apiCalls, limits.apiCalls)) {
    return {
      allowed: false,
      message: getLimitExceededMessage('appels API', limits.apiCalls, plan),
    };
  }

  return { allowed: true };
}

/**
 * Enregistre une génération AI dans les analytics
 */
export async function trackAIGeneration(
  userId: string,
  type: 'text' | 'image' | 'video',
  metadata?: any
): Promise<void> {
  const supabase = await createServerSupabaseClient();
  
  await supabase.from('analytics').insert({
    user_id: userId,
    event_type: `ai_${type}_generation`,
    event_data: { type, ...metadata },
    created_at: new Date().toISOString(),
  } as any);
}

/**
 * Enregistre un appel API dans les analytics
 */
export async function trackAPICall(userId: string, endpoint: string): Promise<void> {
  const supabase = await createServerSupabaseClient();
  
  await supabase.from('analytics').insert({
    user_id: userId,
    event_type: 'api_call',
    event_data: { endpoint, timestamp: new Date().toISOString() },
    created_at: new Date().toISOString(),
  } as any);
}

