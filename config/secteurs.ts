export interface Secteur {
  id: string
  title: string
  description: string
  icon: string
  color: string
  slug: string
  active?: boolean
}

export const secteurs: Secteur[] = [
  {
    id: "services-conseil",
    title: "Services & conseil",
    description: "Accompagnement des professionnels du service dans leur structuration et leur développement.",
    icon: "S&C",
    color: "from-blue-500 to-blue-600",
    slug: "services-conseil",
    active: true
  },
  {
    id: "commerce-distribution",
    title: "Commerce & distribution",
    description: "Soutien aux commerces de proximité et aux distributeurs dans leur adaptation et leur croissance.",
    icon: "C&D",
    color: "from-green-500 to-green-600",
    slug: "commerce-distribution",
    active: true
  },
  {
    id: "restauration-artisanat",
    title: "Restauration & artisanat",
    description: "Accompagnement des artisans et restaurateurs dans la structuration et la pérennisation de leur activité.",
    icon: "R&A",
    color: "from-orange-500 to-orange-600",
    slug: "restauration-artisanat",
    active: true
  },
  {
    id: "economie-sociale",
    title: "Économie sociale",
    description: "Soutien aux structures de l'économie sociale et solidaire dans leur gestion et leur développement.",
    icon: "E&S",
    color: "from-purple-500 to-purple-600",
    slug: "economie-sociale",
    active: true
  },
  {
    id: "bien-etre-sante",
    title: "Bien-être & santé",
    description: "Accompagnement des professionnels du bien-être et de la santé dans leur organisation et leur croissance.",
    icon: "B&S",
    color: "from-pink-500 to-pink-600",
    slug: "bien-etre-sante",
    active: true
  },
  {
    id: "culture-creation",
    title: "Culture & création",
    description: "Soutien aux acteurs culturels et créatifs dans la structuration de leurs projets et activités.",
    icon: "C&C",
    color: "from-amber-500 to-amber-600",
    slug: "culture-creation",
    active: true
  }
]

export const getSecteurById = (id: string): Secteur | undefined => {
  return secteurs.find(secteur => secteur.id === id)
}

export const getSecteurBySlug = (slug: string): Secteur | undefined => {
  return secteurs.find(secteur => secteur.slug === slug)
}

export const getActiveSecteurs = (): Secteur[] => {
  return secteurs.filter(secteur => secteur.active !== false)
}

export const getSecteursByCategory = (category?: string): Secteur[] => {
  if (!category) return getActiveSecteurs()
  // Pour l'instant, tous les secteurs sont dans la même catégorie
  return getActiveSecteurs()
}
