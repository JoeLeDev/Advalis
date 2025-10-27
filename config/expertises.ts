export interface Expertise {
  id: string
  title: string
  description: string
  subtitle?: string
  icon?: string
  image?: string
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
    title: "Gestion administrative & conformité",
    subtitle: "Sécuriser les démarches et fiabiliser le suivi.",
    description: "Chaque dirigeant le sait : les obligations administratives ne créent pas de chiffre d'affaires… mais elles assurent la stabilité.",
    image: "/images/Expertises/Gestion administrative.jpeg",
    content: {
      presentation: "Chaque dirigeant le sait : les obligations administratives ne créent pas de chiffre d'affaires… mais elles assurent la stabilité. Elles protègent l'entreprise, rassurent les partenaires, et évitent les blocages. Pourtant, mal gérées, elles deviennent une source d'inquiétude et de perte de temps. Chez Advalis, nous aidons les dirigeants à reprendre la main sur ce qu'ils subissaient. Nous transformons le désordre administratif en structure claire, et les obligations en leviers de sérénité.",
      interventions: [
        {
          title: "Mise en ordre",
          description: "Audit et régularisation des documents."
        },
        {
          title: "Suivi des obligations",
          description: "Gestion URSSAF, impôts et charges sociales."
        },
        {
          title: "Structuration",
          description: "Organisation des échéances et de l'archivage."
        },
        {
          title: "Interface",
          description: "Gestion directe des échanges avec les administrations."
        }
      ],
      approach: {
        quote: "Nous ne traitons pas des papiers. Nous construisons des fondations.",
        description: "Nous croyons que la rigueur est un service rendu à la liberté. Notre rôle n'est pas de complexifier, mais de simplifier sans négliger. Chez Advalis, nous apportons clarté, structure et méthode, pour qu'aucune démarche ne devienne une charge. Parce qu'une entreprise claire avance toujours plus loin."
      },
      result: {
        title: "Ce que vous gagnez :",
        benefits: [
          "Une base administrative saine",
          "Des démarches suivies, sans stress",
          "Une organisation qui soutient la croissance"
        ],
        summary: "Clarté. Fiabilité. Sérénité."
      },
      cta: {
        title: "Besoin de remettre de l'ordre dans vos démarches ?",
        description: "Un diagnostic rapide suffit souvent à retrouver de la clarté.",
        buttonText: "Échangeons simplement",
        buttonLink: "/contact"
      }
    }
  },
  {
    id: "organisation-financiere",
    title: "Organisation financière & pilotage",
    subtitle: "Donner de la visibilité et du sens aux chiffres.",
    description: "Les chiffres ne sont pas une contrainte : ils sont la voix de l'entreprise.",
    image: "/images/Expertises/Organisation financière.jpg",
    content: {
      presentation: "Les chiffres ne sont pas une contrainte : ils sont la voix de l'entreprise. Ils disent ce qui fonctionne, ce qui s'essouffle, et où diriger ses efforts. Encore faut-il savoir les écouter. Chez Advalis, nous faisons parler les chiffres. Nous les transformons en repères simples, en tableaux clairs, et en leviers de décision. Notre approche repose sur un principe : mieux comprendre pour mieux piloter.",
      interventions: [
        {
          title: "Analyse des flux",
          description: "Lecture des marges, coûts et trésorerie."
        },
        {
          title: "Outils de pilotage",
          description: "Création d'outils de suivi adaptés à votre taille."
        },
        {
          title: "Suivi régulier",
          description: "Mise à jour mensuelle des indicateurs clés."
        },
        {
          title: "Dialogue comptable",
          description: "Interface claire avec l'expert-comptable."
        }
      ],
      approach: {
        quote: "Un chiffre n'est utile que s'il éclaire une décision.",
        description: "Nous simplifions sans déformer. Nos outils ne sont pas des tableaux complexes, mais des boussoles. Chez Advalis, la donnée devient un langage clair, au service du dirigeant. Parce que piloter, c'est comprendre avant d'agir."
      },
      result: {
        title: "Vous gagnez :",
        benefits: [
          "Une vision précise et fiable de votre activité",
          "Des décisions alignées avec la réalité",
          "Un sentiment de maîtrise financière retrouvé"
        ],
        summary: "Lucidité. Anticipation. Sérénité."
      },
      cta: {
        title: "Besoin d'y voir clair dans vos chiffres ?",
        description: "Un regard extérieur suffit souvent à remettre de la cohérence.",
        buttonText: "Échangeons simplement",
        buttonLink: "/contact"
      }
    }
  },
  {
    id: "creation-developpement",
    title: "Création & développement d'activité",
    subtitle: "Structurer et accompagner la croissance.",
    description: "Créer une activité, ce n'est pas seulement déposer un statut : c'est poser des fondations.",
    image: "/images/Expertises/Accompagnement.jpg",
    content: {
      presentation: "Créer une activité, ce n'est pas seulement déposer un statut : c'est poser des fondations. Derrière chaque projet, il y a une vision, une énergie, et souvent un peu d'incertitude. Le rôle d'Advalis, c'est de transformer cette énergie en trajectoire claire. Nous accompagnons les créateurs, indépendants et dirigeants d'association dans leurs premières décisions : celles qui structurent, sécurisent et orientent le projet sur la durée.",
      interventions: [
        {
          title: "Création",
          description: "Formalités de création et accompagnement global."
        },
        {
          title: "Choix du statut",
          description: "Micro, réel, société ou association — choix expliqué et raisonné."
        },
        {
          title: "Planification",
          description: "Définition des étapes administratives, fiscales et sociales."
        },
        {
          title: "Mise en route",
          description: "Mise en place des outils de gestion et de suivi adaptés."
        }
      ],
      approach: {
        quote: "Créer, c'est bâtir avant de grandir.",
        description: "Nous aidons à structurer, sans freiner l'élan. Notre accompagnement repose sur la lucidité : comprendre les implications avant d'agir, clarifier avant de signer. Chez Advalis, chaque projet mérite un cadre solide, à la hauteur de sa vision. Parce qu'une activité bien fondée traverse le temps."
      },
      result: {
        title: "Ce que vous obtenez :",
        benefits: [
          "Des fondations claires et conformes",
          "Des choix de statut cohérents",
          "Un démarrage fluide et maîtrisé"
        ],
        summary: "Vision. Structure. Confiance."
      },
      cta: {
        title: "Vous démarrez une activité ?",
        description: "Un bon départ, c'est une base claire et solide.",
        buttonText: "Échangeons simplement",
        buttonLink: "/contact"
      }
    }
  },
  {
    id: "structuration-relance",
    title: "Structuration & relance",
    subtitle: "Restaurer la cohérence et redynamiser l'activité.",
    description: "Même les entreprises les plus stables peuvent s'essouffler.",
    image: "/images/Expertises/Structuration.jpg",
    content: {
      presentation: "Même les entreprises les plus stables peuvent s'essouffler. Ce n'est pas une faiblesse, mais un signal : celui qu'il faut retrouver du sens et du cadre. Chez Advalis, nous intervenons là où la charge a pris le dessus sur la vision. Nous aidons les dirigeants à reprendre le contrôle, à remettre de la structure dans l'action, et de la clarté dans les priorités.",
      interventions: [
        {
          title: "Diagnostic",
          description: "Analyse complète de la situation et des blocages."
        },
        {
          title: "Réorganisation",
          description: "Repriorisation des chantiers, clarification des rôles."
        },
        {
          title: "Pilotage",
          description: "Mise en place d'outils de suivi simples et lisibles."
        },
        {
          title: "Accompagnement",
          description: "Appui humain et stratégique du dirigeant."
        }
      ],
      approach: {
        quote: "Relancer, ce n'est pas recommencer. C'est réapprendre à avancer.",
        description: "Nous agissons avec méthode et lucidité. Pas de recette toute faite, mais une reconstruction fondée sur la clarté, l'écoute et la structure. Chez Advalis, nous restaurons la cohérence avant de relancer la performance. Parce qu'une entreprise lucide avance plus loin qu'une entreprise pressée."
      },
      result: {
        title: "Vous retrouvez :",
        benefits: [
          "Une direction claire et partagée",
          "Une équipe recentrée sur l'essentiel",
          "Un rythme maîtrisé et porteur"
        ],
        summary: "Clarté. Recentrage. Élan."
      },
      cta: {
        title: "Votre activité tourne, mais n'avance plus ?",
        description: "Un regard extérieur suffit souvent à relancer l'élan.",
        buttonText: "Échangeons simplement",
        buttonLink: "/contact"
      }
    }
  },
  {
    id: "conseil-digital",
    title: "Conseil digital & outils de gestion",
    subtitle: "Digitaliser avec justesse et efficacité.",
    description: "La digitalisation n'est pas un luxe, c'est une condition de clarté.",
    image: "/images/Expertises/Conseil digital.jpg",
    content: {
      presentation: "La digitalisation n'est pas un luxe, c'est une condition de clarté. Mais l'outil ne remplace jamais la méthode : il doit la servir. Chez Advalis, nous aidons les dirigeants à choisir, organiser et maîtriser leurs outils numériques. Notre approche allie pédagogie, pragmatisme et sobriété technologique : le bon outil, pour la bonne raison.",
      interventions: [
        {
          title: "Analyse des besoins",
          description: "Étude des process existants et des objectifs."
        },
        {
          title: "Choix des outils",
          description: "Sélection d'outils adaptés (CRM, facturation, pilotage)."
        },
        {
          title: "Automatisation",
          description: "Centralisation et automatisation des tâches répétitives."
        },
        {
          title: "Formation & suivi",
          description: "Accompagnement à la prise en main et à l'autonomie digitale."
        }
      ],
      approach: {
        quote: "La technologie n'a de valeur que si elle simplifie.",
        description: "Nous ne digitalisons pas pour moderniser, mais pour structurer. Chaque outil mis en place doit alléger le quotidien, pas le complexifier. Chez Advalis, la technologie est un levier de clarté, pas une fin en soi. Parce que la simplicité bien pensée est la forme la plus haute d'efficacité."
      },
      result: {
        title: "Vous gagnez :",
        benefits: [
          "Du temps et une vision centralisée",
          "Une meilleure organisation interne",
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
  // Pour l'instant, toutes les expertises sont dans la même catégorie
  return expertises
}
