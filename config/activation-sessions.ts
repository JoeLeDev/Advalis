/**
 * Prochaines sessions Kairos — page /activation
 *
 * Options sans authentification (pour ton client) :
 * 1. Ce fichier : modifier le tableau puis déployer (recommandé pour commencer).
 * 2. Fichier JSON dans /public (ex. public/data/sessions.json) + fetch : mise à jour sans
 *    rebuild si ton hébergeur sert les fichiers statiques à jour (FTP, etc.).
 * 3. Cal.com / Calendly / Tally : mettre l’URL complète dans `bookingHref` pour chaque session.
 * 4. Google Agenda en iframe ou lien : même principe, `bookingHref` vers l’URL publique.
 * 5. CMS headless (Sanity, etc.) : plus tard si besoin d’édition sans toucher au code.
 */

export type ActivationSession = {
  /** Identifiant stable (clé React, pas d’espaces) */
  id: string
  /** Libellé affiché à gauche, ex. "Session 1" */
  label: string
  /** Date au format libre affichée telle quelle, ex. "08.04.26" ou "mercredi 8 avril 2026" */
  dateLabel: string
  /**
   * Lien du bouton « réserver ». Par défaut : /contact
   * Exemple externe : Calendly, formulaire Tally, page événement, etc.
   */
  bookingHref?: string
}

export const activationSessions: ActivationSession[] = [
  { id: '2026-04-08', label: 'Session 1', dateLabel: '08.04.26' },
  { id: '2026-04-20', label: 'Session 2', dateLabel: '20.04.26' },
]

/** Message affiché si la liste est vide (dates à venir). */
export const activationSessionsEmptyMessage =
  'Les prochaines dates seront annoncées ici. Revenez bientôt ou écrivez-nous via la page Contact.'
