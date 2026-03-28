'use client'

import Link from 'next/link'
import { useState } from 'react'

type Offer = 'fondation' | 'direction'

type Props = {
  offer: Offer
  checkoutEnabled: boolean
  className?: string
  children: React.ReactNode
  fallbackHref?: string
}

export function KairosCheckoutButton({
  offer,
  checkoutEnabled,
  className,
  children,
  fallbackHref = '/contact',
}: Props) {
  const [loading, setLoading] = useState(false)

  if (!checkoutEnabled) {
    return (
      <Link href={fallbackHref} className={className}>
        {children}
      </Link>
    )
  }

  async function handleClick() {
    setLoading(true)
    const tab = window.open('about:blank', '_blank', 'noopener,noreferrer')
    if (!tab) {
      setLoading(false)
      window.alert(
        'Autorisez les pop-ups pour ce site afin d’ouvrir le paiement dans un nouvel onglet, ou réessayez.'
      )
      return
    }
    tab.opener = null
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ offer }),
      })
      const data = (await res.json()) as { url?: string; error?: string }
      if (!res.ok) {
        throw new Error(data.error || 'Erreur')
      }
      if (data.url) {
        tab.location.href = data.url
        return
      }
      throw new Error('Pas d’URL')
    } catch {
      tab.close()
      window.alert(
        'Impossible d’ouvrir le paiement pour le moment. Écrivez-nous via la page Contact ou réessayez plus tard.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <button type="button" className={className} onClick={handleClick} disabled={loading}>
      {loading ? 'Redirection…' : children}
    </button>
  )
}
