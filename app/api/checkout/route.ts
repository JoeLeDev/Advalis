import { NextRequest, NextResponse } from 'next/server'
import { getSiteBaseUrl, getStripe } from '@/lib/stripe'

const OFFERS = ['fondation', 'direction'] as const
type Offer = (typeof OFFERS)[number]

function priceIdForOffer(offer: Offer): string | undefined {
  if (offer === 'fondation') return process.env.STRIPE_PRICE_KAIROS_FONDATION
  return process.env.STRIPE_PRICE_KAIROS_DIRECTION
}

export async function POST(request: NextRequest) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Paiement indisponible pour le moment. Utilisez la page Contact.' },
        { status: 503 }
      )
    }

    const body = await request.json()
    const offer = body?.offer as string | undefined

    if (!offer || !OFFERS.includes(offer as Offer)) {
      return NextResponse.json({ error: 'Offre non reconnue.' }, { status: 400 })
    }

    const priceId = priceIdForOffer(offer as Offer)
    if (!priceId?.startsWith('price_')) {
      return NextResponse.json(
        { error: 'Cette offre n’est pas encore configurée pour le paiement en ligne.' },
        { status: 503 }
      )
    }

    const base = getSiteBaseUrl()
    const stripe = getStripe()

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${base}/activation?checkout=success`,
      cancel_url: `${base}/activation?checkout=cancel`,
      metadata: { kairos_offer: offer },
      locale: 'fr',
    })

    if (!session.url) {
      return NextResponse.json({ error: 'Impossible de créer la session de paiement.' }, { status: 500 })
    }

    return NextResponse.json({ url: session.url })
  } catch (e) {
    console.error('checkout:', e)
    return NextResponse.json({ error: 'Une erreur est survenue. Réessayez plus tard.' }, { status: 500 })
  }
}
