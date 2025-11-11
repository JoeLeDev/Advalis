export interface Expertise {
  id: string
  title: string
  description: string
  subtitle?: string
  icon?: string
  image?: string
  badge?: string
  content?: {
    presentation: string
    interventions: {
      title: string
      description: string
    }[]
    approach: {
      quote: string
      description: string
    }
    result: {
      title: string
      benefits: string[]
      summary: string
    }
    cta: {
      title: string
      description: string
      buttonText: string
      buttonLink: string
    }
  }
}

export const expertises: Expertise[] = [
  {
    id: "gestion-administrative",
    badge: "Office management",
    title: "Gestion administrative & conformité",
    subtitle: "Sécuriser les démarches, fiabiliser le suivi.",
    description: "Les obligations administratives ne génèrent pas de chiffre d’affaires, mais elles assurent la stabilité et la pérennité.",
    image: "/images/Expertises/Gestion_administrative.jpeg",
    content: {
      presentation: "Les obligations administratives ne créent pas directement de valeur, mais elles garantissent la solidité de l’entreprise. Bien maîtrisées, elles deviennent un levier de sérénité et de confiance. Mal gérées, elles se transforment en source d’angoisse et de perte de temps. Chez Advalis, nous aidons les dirigeants à reprendre la main sur ces aspects souvent subis : nous transformons le désordre en clarté, et les contraintes en sécurité durable.",
      interventions: [
        { title: "Mise en ordre", description: "Audit et régularisation des documents essentiels." },
        { title: "Suivi des obligations", description: "Gestion des échéances URSSAF, impôts et charges sociales." },
        { title: "Structuration", description: "Organisation, archivage et automatisation des démarches." },
        { title: "Interface", description: "Gestion directe des échanges avec les administrations." }
      ],
      approach: {
        quote: "Nous ne traitons pas des papiers. Nous construisons des fondations.",
        description: "La rigueur n’est pas une contrainte : c’est un service rendu à la liberté. Notre mission consiste à clarifier, structurer et fiabiliser, pour que les démarches cessent d’être une charge. Une entreprise bien organisée avance toujours plus sereinement."
      },
      result: {
        title: "Vous gagnez :",
        benefits: [
          "Une base administrative solide",
          "Des obligations maîtrisées sans stress",
          "Une organisation claire et durable"
        ],
        summary: "Clarté. Fiabilité. Sérénité."
      },
      cta: {
        title: "Besoin de remettre de l’ordre dans vos démarches ?",
        description: "Un diagnostic rapide suffit souvent à retrouver de la visibilité et du calme.",
        buttonText: "Échangeons simplement",
        buttonLink: "/contact"
      }
    }
  },
  {
    id: "organisation-financiere",
    badge: "Finance",
    title: "Organisation financière & pilotage",
    subtitle: "Donner du sens et de la visibilité aux chiffres.",
    description: "Les chiffres ne sont pas une contrainte : ils sont la voix de l’entreprise.",
    image: "/images/Expertises/Organisation_financiere.jpg",
    content: {
      presentation: "Les chiffres ne sont pas des obstacles, mais des alliés. Ils racontent la vérité de l’entreprise : ses forces, ses fragilités, ses opportunités. Chez Advalis, nous aidons les dirigeants à les comprendre et à en faire un véritable outil de décision. Nous transformons les données brutes en indicateurs clairs et parlants, pour piloter avec lucidité et confiance.",
      interventions: [
        { title: "Analyse des flux", description: "Lecture des marges, coûts et trésorerie." },
        { title: "Outils de pilotage", description: "Création de tableaux de bord simples et adaptés." },
        { title: "Suivi régulier", description: "Actualisation mensuelle des indicateurs clés." },
        { title: "Dialogue comptable", description: "Interface fluide avec l’expert-comptable." }
      ],
      approach: {
        quote: "Un chiffre n’a de valeur que s’il éclaire une décision.",
        description: "Nous concevons des outils lisibles et pragmatiques, centrés sur la compréhension. La donnée devient un repère clair au service du dirigeant, pour piloter avec discernement et anticipation."
      },
      result: {
        title: "Vous obtenez :",
        benefits: [
          "Une vision claire et fiable de votre activité",
          "Des décisions alignées sur la réalité",
          "Un sentiment de maîtrise financière retrouvé"
        ],
        summary: "Lucidité. Anticipation. Sérénité."
      },
      cta: {
        title: "Besoin d’y voir clair dans vos chiffres ?",
        description: "Un regard extérieur peut suffire à rétablir la cohérence.",
        buttonText: "Échangeons simplement",
        buttonLink: "/contact"
      }
    }
  },
  {
    id: "creation-developpement",
    badge: "Structuration",
    title: "Création & développement d’activité",
    subtitle: "Structurer pour accompagner la croissance.",
    description: "Créer une activité, ce n’est pas seulement remplir des formalités : c’est bâtir des fondations solides.",
    image: "/images/Expertises/Accompagnement.jpg",
    content: {
      presentation: "Créer une activité, ce n’est pas seulement déposer un statut, c’est donner une forme durable à une vision. Derrière chaque projet, il y a une énergie à canaliser et des décisions structurantes à prendre. Chez Advalis, nous accompagnons les créateurs, indépendants et dirigeants d’association dans les étapes clés : choix du cadre, structuration, planification et mise en route.",
      interventions: [
        { title: "Création", description: "Accompagnement complet des formalités de création." },
        { title: "Choix du statut", description: "Analyse claire et raisonnée du régime le plus adapté." },
        { title: "Planification", description: "Définition des étapes fiscales, sociales et administratives." },
        { title: "Mise en route", description: "Implémentation des outils de gestion et de suivi." }
      ],
      approach: {
        quote: "Créer, c’est bâtir avant de grandir.",
        description: "Nous aidons à transformer une idée en projet structuré. L’objectif : poser des bases solides sans freiner l’élan. Chez Advalis, chaque création mérite une architecture cohérente, gage de stabilité et de confiance."
      },
      result: {
        title: "Vous obtenez :",
        benefits: [
          "Des fondations claires et conformes",
          "Des choix de statut cohérents",
          "Un lancement fluide et maîtrisé"
        ],
        summary: "Vision. Structure. Confiance."
      },
      cta: {
        title: "Vous démarrez une activité ?",
        description: "Un bon départ commence par un cadre solide et lisible.",
        buttonText: "Échangeons simplement",
        buttonLink: "/contact"
      }
    }
  },
  {
    id: "structuration-relance",
    badge: "Direction",
    title: "Structuration & relance",
    subtitle: "Retrouver du sens, du cadre et de l’élan.",
    description: "Même les structures les plus solides peuvent perdre en cohérence.",
    image: "/images/Expertises/Structuration.jpg",
    content: {
      presentation: "Aucune entreprise n’est à l’abri d’un essoufflement. Ce n’est pas une faiblesse, mais un signal : celui qu’il est temps de redonner du sens et de la direction. Chez Advalis, nous aidons les dirigeants à remettre de la clarté dans leur organisation, à rétablir les priorités et à relancer la dynamique collective.",
      interventions: [
        { title: "Diagnostic", description: "Analyse complète de la situation et des points de blocage." },
        { title: "Réorganisation", description: "Repriorisation des chantiers, clarification des rôles." },
        { title: "Pilotage", description: "Mise en place d’outils de suivi simples et efficaces." },
        { title: "Accompagnement", description: "Soutien humain et stratégique du dirigeant." }
      ],
      approach: {
        quote: "Relancer, ce n’est pas recommencer. C’est réapprendre à avancer.",
        description: "Notre approche repose sur la méthode, l’écoute et la clarté. Pas de solutions toutes faites, mais une reconstruction lucide et durable. Chez Advalis, nous restaurons la cohérence avant de relancer la performance."
      },
      result: {
        title: "Vous retrouvez :",
        benefits: [
          "Une direction claire et partagée",
          "Une équipe recentrée sur l’essentiel",
          "Un rythme soutenable et porteur"
        ],
        summary: "Clarté. Recentrage. Élan."
      },
      cta: {
        title: "Votre activité tourne, mais n’avance plus ?",
        description: "Un regard extérieur peut suffire à redonner de l’élan.",
        buttonText: "Échangeons simplement",
        buttonLink: "/contact"
      }
    }
  },
  {
    id: "conseil-digital",
    badge: "Digital",
    title: "Conseil digital & outils de gestion",
    subtitle: "Digitaliser avec justesse et efficacité.",
    description: "La digitalisation n’est pas un luxe : c’est un levier de clarté et d’efficacité.",
    image: "/images/Expertises/Conseil_digital.jpg",
    content: {
      presentation: "La digitalisation ne se résume pas à empiler des outils : elle consiste à choisir ceux qui simplifient et clarifient. Chez Advalis, nous accompagnons les dirigeants dans la sélection, l’organisation et la maîtrise de leurs solutions numériques. Notre approche repose sur la pédagogie, la mesure et la sobriété technologique.",
      interventions: [
        { title: "Analyse des besoins", description: "Étude approfondie des processus et objectifs." },
        { title: "Choix des outils", description: "Sélection raisonnée d’outils adaptés (CRM, facturation, pilotage)." },
        { title: "Automatisation", description: "Centralisation et automatisation des tâches répétitives." },
        { title: "Formation & suivi", description: "Accompagnement à la prise en main et à l’autonomie digitale." }
      ],
      approach: {
        quote: "La technologie n’a de valeur que si elle simplifie.",
        description: "Nous digitalisons avec méthode et discernement. Chaque outil mis en place doit libérer du temps et renforcer la cohérence interne. Chez Advalis, la technologie est un levier de simplicité au service de la performance."
      },
      result: {
        title: "Vous gagnez :",
        benefits: [
          "Du temps et une vision centralisée",
          "Une organisation plus fluide et connectée",
          "Une autonomie numérique durable"
        ],
        summary: "Simplicité. Structure. Performance."
      },
      cta: {
        title: "Vous souhaitez digitaliser votre gestion ?",
        description: "Faisons-le simplement, avec méthode et mesure.",
        buttonText: "Échangeons simplement",
        buttonLink: "/contact"
      }
    }
  }
]

export const getExpertiseById = (id: string): Expertise | undefined => {
  return expertises.find(expertise => expertise.id === id)
}

export const getExpertisesByCategory = (category?: string): Expertise[] => {
  if (!category) return expertises
  return expertises
}
