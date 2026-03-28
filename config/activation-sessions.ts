/**
 * Prochaines sessions Kairos — page /activation
 *
 * Les créneaux se réservent via Calendly (`bookingHref`). Le paiement des offres Fondation / Direction
 * reste sur Stripe (boutons sur la page).
 */

/** Calendly — créneaux sessions collectives */
export const CALENDLY_KAIROS_SESSION = 'https://calendly.com/advalis-service/30min'

/** Calendly — appel découverte / aide au choix du format */
export const CALENDLY_APPEL_DECOUVERTE = 'https://calendly.com/advalis-service/appel-decouverte-advalis'

export type ActivationSession = {
  /** Identifiant stable (clé React, pas d’espaces) */
  id: string
  /** Libellé affiché à gauche, ex. "Session 1" */
  label: string
  /** Date au format libre affichée telle quelle, ex. "08.04.26" ou "mercredi 8 avril 2026" */
  dateLabel: string
  /**
   * Lien du bouton « réserver » (Calendly, etc.)
   */
  bookingHref?: string
}

export const activationSessions: ActivationSession[] = [
  {
    id: '2026-04-08',
    label: 'Session 1',
    dateLabel: '08.04.26',
    bookingHref: CALENDLY_KAIROS_SESSION,
  },
  {
    id: '2026-04-20',
    label: 'Session 2',
    dateLabel: '20.04.26',
    bookingHref: CALENDLY_KAIROS_SESSION,
  },
]

/** Message affiché si la liste est vide (dates à venir). */
export const activationSessionsEmptyMessage =
  'Les prochaines dates seront annoncées ici. Revenez bientôt ou écrivez-nous via la page Contact.'
