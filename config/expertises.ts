export interface Expertise {
  id: string
  title: string
  description: string
  icon?: string
}

export const expertises: Expertise[] = [
  {
    id: "gestion-administrative",
    title: "Gestion administrative & conformité",
    description: "Sécuriser les démarches et fiabiliser le suivi."
  },
  {
    id: "organisation-financiere",
    title: "Organisation financière & pilotage",
    description: "Donner de la visibilité et du sens aux chiffres."
  },
  {
    id: "creation-developpement",
    title: "Création & développement d'activité",
    description: "Structurer et accompagner la croissance."
  },
  {
    id: "structuration-relance",
    title: "Structuration & relance",
    description: "Restaurer la cohérence et redynamiser l'activité."
  },
  {
    id: "conseil-digital",
    title: "Conseil digital & outils de gestion",
    description: "Digitaliser avec justesse et efficacité."
  }
]

export const getExpertiseById = (id: string): Expertise | undefined => {
  return expertises.find(expertise => expertise.id === id)
}

export const getExpertisesByCategory = (category?: string): Expertise[] => {
  if (!category) return expertises
  // Pour l'instant, toutes les expertises sont dans la même catégorie
  return expertises
}
