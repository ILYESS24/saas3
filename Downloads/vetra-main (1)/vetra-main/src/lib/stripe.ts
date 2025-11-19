import Stripe from 'stripe';

// Use a placeholder key during build if not set (will fail at runtime if not configured)
const stripeSecretKey = process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder';

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2025-11-17.clover',
  typescript: true,
});

// Stripe Price IDs - Replace with your actual Stripe Price IDs
export const STRIPE_PRICES = {
  basic: {
    monthly: process.env.STRIPE_BASIC_PRICE_ID || 'price_basic_monthly',
    yearly: process.env.STRIPE_BASIC_YEARLY_PRICE_ID || 'price_basic_yearly',
  },
  starter: {
    monthly: process.env.STRIPE_STARTER_PRICE_ID || 'price_starter_monthly',
    yearly: process.env.STRIPE_STARTER_YEARLY_PRICE_ID || 'price_starter_yearly',
  },
  pro: {
    monthly: process.env.STRIPE_PRO_PRICE_ID || 'price_pro_monthly',
    yearly: process.env.STRIPE_PRO_YEARLY_PRICE_ID || 'price_pro_yearly',
  },
} as const;

export type PlanType = 'basic' | 'starter' | 'pro';
export type BillingPeriod = 'monthly' | 'yearly';

