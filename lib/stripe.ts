import Stripe from 'stripe'

let stripe: Stripe | null = null

export function getStripe(): Stripe {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY est manquant')
  }
  if (!stripe) {
    stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  }
  return stripe
}

export function getSiteBaseUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '')
  if (explicit) return explicit
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  return 'http://localhost:3000'
}
