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
    subtitle: "Libérez-vous de la charge administrative et sécurisez votre activité.",
    description: "Les obligations administratives ne génèrent pas de chiffre d'affaires, mais elles assurent la stabilité et la pérennité.",
    image: "/images/Expertises/Gestion_administrative.jpeg",
    content: {
      presentation: "Libérez-vous de la charge administrative et sécurisez votre activité.",
      interventions: [
        { title: "Quand faire appel à nous ?", description: "Vous perdez du temps dans les démarches administratives." },
        { title: "Quand faire appel à nous ?", description: "Vous avez peur d'oublier une obligation ou une échéance." },
        { title: "Quand faire appel à nous ?", description: "Les documents s'accumulent ou sont mal organisés." },
        { title: "Quand faire appel à nous ?", description: "Vous souhaitez sécuriser votre situation (URSSAF, statuts, obligations)." },
        { title: "Ce que nous faisons", description: "Tri, classement et structuration de votre administratif." },
        { title: "Ce que nous faisons", description: "Mise en conformité de votre situation selon votre activité." },
        { title: "Ce que nous faisons", description: "Organisation simple de vos documents (physique et numérique)." },
        { title: "Ce que nous faisons", description: "Accompagnement sur les démarches clés, selon votre contexte." }
      ],
      approach: {
        quote: "Nous ne traitons pas des papiers. Nous construisons des fondations.",
        description: "La rigueur n'est pas une contrainte : c'est un service rendu à la liberté. Notre mission consiste à clarifier, structurer et fiabiliser, pour que les démarches cessent d'être une charge. Une entreprise bien organisée avance toujours plus sereinement."
      },
      result: {
        title: "Résultat",
        benefits: [
          "Moins de stress administratif",
          "Une situation claire et sécurisée",
          "Un administratif maîtrisable et à jour",
          "Plus de temps pour vous concentrer sur votre activité"
        ],
        summary: "Clarté. Fiabilité. Sérénité."
      },
      cta: {
        title: "Besoin de remettre de l'ordre dans vos démarches ?",
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
    subtitle: "Donnez du sens à vos chiffres pour mieux décider.",
    description: "Les chiffres ne sont pas une contrainte : ils sont la voix de l'entreprise.",
    image: "/images/Expertises/Organisation_financiere.jpg",
    content: {
      presentation: "Donnez du sens à vos chiffres pour mieux décider.",
      interventions: [
        { title: "Quand faire appel à nous ?", description: "Vous manquez de visibilité sur la situation financière de votre activité." },
        { title: "Quand faire appel à nous ?", description: "Vous avancez sans indicateurs clairs." },
        { title: "Quand faire appel à nous ?", description: "Les chiffres existent, mais vous ne savez pas les exploiter." },
        { title: "Quand faire appel à nous ?", description: "Vous avez besoin de repères pour décider plus sereinement." },
        { title: "Ce que nous faisons", description: "Mise en place d'indicateurs simples et lisibles." },
        { title: "Ce que nous faisons", description: "Construction d'un suivi financier adapté à votre activité." },
        { title: "Ce que nous faisons", description: "Aide à la lecture et à l'analyse de vos résultats." },
        { title: "Ce que nous faisons", description: "Clarification des priorités et des points de vigilance." }
      ],
      approach: {
        quote: "Un chiffre n'a de valeur que s'il éclaire une décision.",
        description: "Nous concevons des outils lisibles et pragmatiques, centrés sur la compréhension. La donnée devient un repère clair au service du dirigeant, pour piloter avec discernement et anticipation."
      },
      result: {
        title: "Résultat",
        benefits: [
          "Une vision claire de votre activité",
          "Des décisions plus rapides et plus justes",
          "Une meilleure anticipation",
          "Plus de confiance dans votre pilotage"
        ],
        summary: "Lucidité. Anticipation. Sérénité."
      },
      cta: {
        title: "Besoin d'y voir clair dans vos chiffres ?",
        description: "Un regard extérieur peut suffire à rétablir la cohérence.",
        buttonText: "Échangeons simplement",
        buttonLink: "/contact"
      }
    }
  },
  {
    id: "creation-developpement",
    badge: "Structuration",
    title: "Création & développement d'activité",
    subtitle: "Créer une activité, ce n'est pas seulement remplir des formalités : c'est poser des bases solides.",
    description: "Créer une activité, ce n'est pas seulement remplir des formalités : c'est bâtir des fondations solides.",
    image: "/images/Expertises/Accompagnement.jpg",
    content: {
      presentation: "Créer une activité, ce n'est pas seulement remplir des formalités : c'est poser des bases solides.",
      interventions: [
        { title: "Quand faire appel à nous ?", description: "Vous lancez une activité ou un nouveau projet." },
        { title: "Quand faire appel à nous ?", description: "Vous doutez de la structure choisie." },
        { title: "Quand faire appel à nous ?", description: "Vous souhaitez partir sur des bases claires et saines." },
        { title: "Quand faire appel à nous ?", description: "Vous voulez éviter les erreurs fréquentes du démarrage." },
        { title: "Ce que nous faisons", description: "Clarification de votre projet et de votre fonctionnement." },
        { title: "Ce que nous faisons", description: "Aide aux choix structurants (organisation, cadre, priorités)." },
        { title: "Ce que nous faisons", description: "Mise en place d'une structure adaptée à votre réalité." },
        { title: "Ce que nous faisons", description: "Accompagnement dans les premières étapes clés." }
      ],
      approach: {
        quote: "Créer, c'est bâtir avant de grandir.",
        description: "Nous aidons à transformer une idée en projet structuré. L'objectif : poser des bases solides sans freiner l'élan. Chez Advalis, chaque création mérite une architecture cohérente, gage de stabilité et de confiance."
      },
      result: {
        title: "Résultat",
        benefits: [
          "Un démarrage plus serein",
          "Une activité mieux structurée dès le départ",
          "Moins d'erreurs coûteuses",
          "Une trajectoire plus lisible"
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
    subtitle: "Redonner de la cohérence à une activité qui s'est complexifiée ou essoufflée.",
    description: "Même les structures les plus solides peuvent perdre en cohérence.",
    image: "/images/Expertises/Structuration.jpg",
    content: {
      presentation: "Redonner de la cohérence à une activité qui s'est complexifiée ou essoufflée.",
      interventions: [
        { title: "Quand faire appel à nous ?", description: "Votre activité stagne ou devient difficile à piloter." },
        { title: "Quand faire appel à nous ?", description: "Vous vous sentez dispersé ou débordé." },
        { title: "Quand faire appel à nous ?", description: "L'organisation actuelle ne suit plus votre réalité." },
        { title: "Quand faire appel à nous ?", description: "Vous avez besoin de remettre de l'ordre et du sens." },
        { title: "Ce que nous faisons", description: "Analyse globale de votre fonctionnement." },
        { title: "Ce que nous faisons", description: "Identification des points de blocage." },
        { title: "Ce que nous faisons", description: "Re-structuration des priorités et de l'organisation." },
        { title: "Ce que nous faisons", description: "Mise en place d'un cadre plus clair et plus cohérent." }
      ],
      approach: {
        quote: "Relancer, ce n'est pas recommencer. C'est réapprendre à avancer.",
        description: "Notre approche repose sur la méthode, l'écoute et la clarté. Pas de solutions toutes faites, mais une reconstruction lucide et durable. Chez Advalis, nous restaurons la cohérence avant de relancer la performance."
      },
      result: {
        title: "Résultat",
        benefits: [
          "Une activité plus lisible",
          "Moins de dispersion",
          "Une meilleure stabilité",
          "Un nouveau souffle opérationnel"
        ],
        summary: "Clarté. Recentrage. Élan."
      },
      cta: {
        title: "Votre activité tourne, mais n'avance plus ?",
        description: "Un regard extérieur peut suffire à redonner de l'élan.",
        buttonText: "Échangeons simplement",
        buttonLink: "/contact"
      }
    }
  },
  {
    id: "conseil-digital",
    badge: "Digital",
    title: "Conseil digital & outils de gestion",
    subtitle: "Des outils simples, utiles et adaptés — sans complexité inutile.",
    description: "La digitalisation n'est pas un luxe : c'est un levier de clarté et d'efficacité.",
    image: "/images/Expertises/Conseil_digital.jpg",
    content: {
      presentation: "Des outils simples, utiles et adaptés — sans complexité inutile.",
      interventions: [
        { title: "Quand faire appel à nous ?", description: "Vos outils actuels vous compliquent la vie." },
        { title: "Quand faire appel à nous ?", description: "Vous utilisez trop d'outils… ou pas les bons." },
        { title: "Quand faire appel à nous ?", description: "Vous perdez du temps dans des systèmes mal adaptés." },
        { title: "Ce que nous faisons", description: "Sélection et mise en place d'outils adaptés (Notion, Excel, Drive…)." },
        { title: "Ce que nous faisons", description: "Simplification de vos outils existants." },
        { title: "Ce que nous faisons", description: "Organisation de votre environnement digital." },
        { title: "Ce que nous faisons", description: "Automatisations légères quand cela apporte un réel gain." }
      ],
      approach: {
        quote: "La technologie n'a de valeur que si elle simplifie.",
        description: "Nous digitalisons avec méthode et discernement. Chaque outil mis en place doit libérer du temps et renforcer la cohérence interne. Chez Advalis, la technologie est un levier de simplicité au service de la performance."
      },
      result: {
        title: "Résultat",
        benefits: [
          "Des outils réellement utiles",
          "Moins de perte de temps",
          "Une organisation digitale claire et fluide",
          "Un quotidien plus simple"
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
