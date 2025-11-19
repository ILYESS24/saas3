/**
 * Subscription Limits Configuration
 * Définit les limites pour chaque plan d'abonnement
 */

export type PlanType = 'basic' | 'starter' | 'pro';

export interface SubscriptionLimits {
  projects: number; // Nombre maximum de projets
  contentItems: number; // Nombre maximum d'éléments de contenu par mois
  aiAgents: number; // Nombre maximum d'agents IA
  aiGenerations: {
    text: number; // Générations de texte par mois
    image: number; // Générations d'images par mois
    video: number; // Générations de vidéos par mois
  };
  apiCalls: number; // Appels API par mois
  storage: number; // Stockage en MB
  teamMembers?: number; // Nombre de membres d'équipe (Pro uniquement)
}

export const SUBSCRIPTION_LIMITS: Record<PlanType, SubscriptionLimits> = {
  basic: {
    projects: 2,
    contentItems: 50,
    aiAgents: 0,
    aiGenerations: {
      text: 100,
      image: 20,
      video: 5,
    },
    apiCalls: 1000,
    storage: 500, // 500 MB
  },
  starter: {
    projects: 5,
    contentItems: 200,
    aiAgents: 2,
    aiGenerations: {
      text: 500,
      image: 100,
      video: 20,
    },
    apiCalls: 10000,
    storage: 5000, // 5 GB
  },
  pro: {
    projects: -1, // -1 = illimité
    contentItems: -1, // -1 = illimité
    aiAgents: -1, // -1 = illimité
    aiGenerations: {
      text: -1, // -1 = illimité
      image: -1, // -1 = illimité
      video: -1, // -1 = illimité
    },
    apiCalls: -1, // -1 = illimité
    storage: -1, // -1 = illimité
    teamMembers: 10,
  },
};

/**
 * Vérifie si une valeur dépasse la limite
 */
export function isWithinLimit(current: number, limit: number): boolean {
  if (limit === -1) return true; // Illimité
  return current < limit;
}

/**
 * Vérifie si une action peut être effectuée
 */
export function canPerformAction(
  current: number,
  limit: number,
  increment: number = 1
): boolean {
  if (limit === -1) return true; // Illimité
  return current + increment <= limit;
}

/**
 * Obtient le message d'erreur pour une limite dépassée
 */
export function getLimitExceededMessage(
  resource: string,
  limit: number,
  plan: PlanType
): string {
  if (limit === -1) return '';
  
  const planName = plan.charAt(0).toUpperCase() + plan.slice(1);
  return `Vous avez atteint la limite de ${limit} ${resource} avec le plan ${planName}. Passez au plan supérieur pour continuer.`;
}

