import { Target, BarChart3, RefreshCw, Lightbulb, Heart } from 'lucide-react'

export interface Article {
  id: number
  title: string
  excerpt: string
  subtitle?: string
  category: string
  readTime: string
  date: string
  image: string
  backgroundImage?: string
  icon: any
  color: string
  slug?: string
  content?: {
    sections: {
      title: string
      paragraphs: string[]
      quote?: string
    }[]
    cta: {
      title: string
      description: string
      buttonText: string
      buttonLink: string
    }
  }
  published?: boolean
}

export const articles: Article[] = [
  // STRUCTURER
  {
    id: 1,
    title: "Le poids invisible de la charge mentale du dirigeant",
    subtitle: "Pourquoi structurer, c'est aussi se libérer intérieurement",
    excerpt: "Pourquoi structurer, c'est aussi se libérer intérieurement. Comprendre comment une bonne organisation peut alléger la charge mentale du dirigeant.",
    category: "Structurer",
    readTime: "8 min",
    date: "15 Janvier 2025",
    image: "bg-gradient-to-br from-gray-100 to-gray-200",
    backgroundImage: "/images/Articles/Structurer.jpg",
    icon: Target,
    color: "from-gray-500 to-gray-600",
    slug: "charge-mentale-dirigeant",
    content: {
      sections: [
        {
          title: "Entreprendre, c'est porter bien plus qu'un projet",
          paragraphs: [
            "Derrière chaque entreprise, il y a un homme ou une femme qui porte bien plus qu'un chiffre d'affaires.",
            "Il y a des responsabilités, des décisions à prendre, des urgences à gérer, des doutes à apaiser.",
            "Être dirigeant, c'est souvent avancer seul, sans toujours pouvoir dire à quel point le poids devient lourd.",
            "Beaucoup finissent par s'y habituer.",
            "Ils travaillent sans relâche, empilent les tâches, repoussent les questions d'organisation à plus tard.",
            "Mais peu à peu, la charge mentale s'installe : mails non lus, relances oubliées, déclarations à faire \"demain\", tableaux à mettre à jour \"quand il y aura le temps\".",
            "Et sans qu'on s'en rende compte, la tête devient une salle de réunion permanente."
          ],
          quote: "Selon une étude récente, plus de 70 % des dirigeants de petites structures déclarent se sentir \"épuisés mentalement\" par le poids administratif et la complexité de la gestion quotidienne."
        },
        {
          title: "Structurer, ce n'est pas se compliquer la vie",
          paragraphs: [
            "On pense souvent que se structurer, c'est ajouter de la rigidité.",
            "En réalité, c'est tout l'inverse : structurer, c'est créer de l'espace.",
            "C'est poser à plat ce qui encombre l'esprit pour retrouver de la clarté, de la maîtrise et du souffle.",
            "Une bonne organisation administrative ou financière ne sert pas qu'à \"être en règle\".",
            "Elle sert à retrouver de la sérénité et à redonner de la visibilité.",
            "Quand tout est clair — les échéances, les charges, les priorités — la tête respire à nouveau.",
            "Et c'est là que les vraies décisions peuvent émerger : celles qui font grandir l'entreprise."
          ],
          quote: "Une structure claire améliore non seulement la tranquillité d'esprit, mais aussi la performance : les dirigeants structurés gagnent jusqu'à 30 % de temps dans leur gestion hebdomadaire."
        },
        {
          title: "L'équilibre intérieur du dirigeant passe aussi par la structure extérieure",
          paragraphs: [
            "Il existe un lien profond entre la clarté d'une entreprise et la paix intérieure de celui qui la dirige.",
            "Un système brouillon génère du stress.",
            "Une organisation claire, elle, libère l'énergie et favorise la concentration sur l'essentiel.",
            "Chez Advalis, nous voyons souvent cette transformation : un dirigeant épuisé retrouve de la motivation simplement parce qu'il sait enfin où il en est.",
            "Ce n'est pas de la magie — c'est de la méthode.",
            "Clarifier les priorités, mettre de l'ordre, déléguer ce qui pèse… ce sont des actes simples, mais profondément libérateurs.",
            "Nos accompagnements s'appuient sur des outils de gestion éprouvés, des audits structurants et un suivi personnalisé.",
            "L'objectif : transformer la gestion quotidienne en un levier de stabilité, d'efficacité et de croissance durable."
          ]
        },
        {
          title: "Clarifier, c'est aussi retrouver la paix",
          paragraphs: [
            "Structurer, ce n'est pas seulement améliorer la performance d'une entreprise.",
            "C'est offrir à celui qui la porte la possibilité de respirer, de penser plus haut, plus loin.",
            "Parce qu'un dirigeant libéré intérieurement conduit une entreprise plus claire, plus saine et plus durable.",
            "Et c'est tout l'enjeu de notre démarche : poser un regard global, clarifier l'existant et reconstruire une base saine grâce à l'Audit 360 Advalis ou à nos packs de structuration sur mesure.",
            "Chez Advalis, nous croyons que la clarté est la première étape vers la liberté — et qu'aider un entrepreneur à se structurer, c'est aussi lui permettre de retrouver la paix dans son travail."
          ]
        }
      ],
      cta: {
        title: "💬 Envie d'alléger votre charge mentale ?",
        description: "Échangeons sur votre situation et voyons ensemble comment structurer votre activité pour vous libérer l'esprit.",
        buttonText: "Échangeons ensemble",
        buttonLink: "/contact"
      }
    },
    published: true
  },
  {
    id: 2,
    title: "Pourquoi 70 % des porteurs de projets échouent à cause de l'administratif",
    subtitle: "Pourquoi l'administratif n'est pas une corvée, mais un socle",
    excerpt: "Près de sept entrepreneurs sur dix n'atteignent pas la troisième année. Derrière ce constat, une cause souvent négligée : le désordre administratif et financier.",
    category: "Structurer",
    readTime: "8 min",
    date: "25 Janvier 2025",
    image: "bg-gradient-to-br from-gray-100 to-gray-200",
    icon: Target,
    color: "from-gray-500 to-gray-600",
    slug: "pourquoi-70-pourcent-echouent-administratif",
    backgroundImage: "/images/Articles/Structurer.jpg",
    content: {
      sections: [
        {
          title: "Un constat silencieux mais constant",
          paragraphs: [
            "Chaque année, des milliers de porteurs de projets se lancent avec enthousiasme, convaincus par la solidité de leur idée, leur savoir-faire ou leur passion. Pourtant, près de sept sur dix n'atteignent pas la troisième année d'activité.",
            "Les causes évoquées sont souvent les mêmes : manque de clients, trésorerie fragile, stratégie floue. Mais derrière ces symptômes se cache une racine plus profonde : le désordre administratif et financier.",
            "L'administratif n'est pas une formalité périphérique ; c'est la structure invisible qui soutient tout projet. Lorsqu'elle vacille, les décisions se brouillent, les délais s'allongent, la confiance s'érode. Beaucoup d'entreprises ne s'essoufflent pas faute d'idée, mais faute de cadre."
          ]
        },
        {
          title: "L'administratif : première cause d'épuisement, non de démotivation",
          paragraphs: [
            "Le découragement des créateurs d'entreprise ne vient pas d'un manque d'envie, mais d'un trop-plein de complexité.",
            "Déclarations URSSAF, impôts, TVA, contrats, obligations légales : les tâches s'accumulent, souvent sans méthode. Ce n'est pas la quantité de travail qui épuise, mais l'absence de repères clairs pour la gérer.",
            "Sans organisation, le dirigeant agit dans l'urgence permanente ; chaque échéance devient une source de stress, chaque oubli un risque. Peu à peu, l'énergie se disperse, la vision se rétrécit et la gestion prend le pas sur la stratégie."
          ],
          quote: "Ce n'est pas la charge qui pèse, mais le désordre qui la rend lourde."
        },
        {
          title: "Quand le désordre devient la première source d'échec",
          paragraphs: [
            "Chez Advalis, nous observons souvent le même schéma : les entrepreneurs qui échouent n'ont pas manqué de courage, mais de visibilité.",
            "Un statut mal choisi, une facture oubliée, une mauvaise compréhension des seuils : et c'est tout l'équilibre du projet qui s'effondre.",
            "L'administration française, dense et mouvante, exige une rigueur que peu de créateurs possèdent spontanément. Cette rigueur ne s'improvise pas : elle se construit, s'organise et s'acquiert avec le bon accompagnement.",
            "C'est précisément là qu'intervient Advalis : offrir un cadre clair, lisible et durable à ceux qui portent un projet, pour qu'ils puissent bâtir sur des bases solides."
          ]
        },
        {
          title: "Structurer, c'est se libérer",
          paragraphs: [
            "Beaucoup d'entrepreneurs se lancent pour gagner en liberté. Mais sans structure, cette liberté devient vite un piège.",
            "Organiser, planifier, anticiper : ce ne sont pas des contraintes, mais les conditions d'une autonomie réelle.",
            "Structurer, c'est transformer la confusion en sérénité.",
            "C'est permettre au porteur de projet de concentrer son énergie sur son activité, et non sur les formalités qui l'encombrent.",
            "Une gestion claire n'est pas une option : c'est le premier acte de lucidité entrepreneuriale."
          ]
        },
        {
          title: "L'appui Advalis : restaurer la visibilité et la confiance",
          paragraphs: [
            "Notre rôle n'est pas de tout faire à la place des dirigeants, mais de leur transmettre la méthode, les outils et le cadre nécessaires pour piloter avec assurance.",
            "Un projet se renforce lorsqu'il devient maîtrisable.",
            "Nous aidons chaque porteur à remettre de la clarté là où le désordre s'est installé : documents, échéances, statuts, flux, tableaux de bord.",
            "Peu à peu, la gestion redevient fluide, les décisions plus sereines et la confiance renaît."
          ],
          quote: "Ce que l'on comprend, on le maîtrise. Ce que l'on structure, on le fait durer."
        },
        {
          title: "En conclusion",
          paragraphs: [
            "L'échec entrepreneurial n'est pas une fatalité.",
            "Mais tant que l'administratif restera perçu comme une corvée plutôt que comme un socle, beaucoup continueront de s'épuiser avant d'avoir pu construire.",
            "Chez Advalis, nous croyons qu'une entreprise se bâtit d'abord sur la clarté : celle des chiffres, des choix et des priorités.",
            "Et que le vrai accompagnement n'est pas de simplifier à la place du dirigeant, mais de lui apprendre à voir, comprendre et structurer avec exigence."
          ]
        }
      ],
      cta: {
        title: "💬 Prêt à structurer votre projet ?",
        description: "Échangeons sur votre situation et découvrons ensemble comment mettre de l'ordre dans votre gestion pour retrouver sérénité et efficacité.",
        buttonText: "Échangeons ensemble",
        buttonLink: "/contact"
      }
    },
    published: true
  },
  {
    id: 3,
    title: "Advalis Web : digitaliser la structure, pas la complexité",
    subtitle: "Notre vision d'un numérique au service de la clarté",
    excerpt: "Notre vision d'un numérique au service de la clarté. Digitaliser sans clarifier, c'est ajouter de la complexité à la confusion.",
    category: "Se digitaliser",
    readTime: "6 min",
    date: "20 Janvier 2025",
    image: "bg-gradient-to-br from-gray-100 to-gray-200",
    backgroundImage: "/images/Articles/Digitaliser.jpg",
    icon: Target,
    color: "from-gray-500 to-gray-600",
    slug: "advalis-web-digitaliser-structure",
    content: {
      sections: [
        {
          title: "Le numérique n'est pas une fin, mais un moyen",
          paragraphs: [
            "La digitalisation s'est imposée comme un passage obligé pour toutes les entreprises.",
            "Outils, plateformes, automatisations, CRM, applications... le marché regorge de solutions promettant de tout simplifier.",
            "Mais dans la réalité, beaucoup d'entrepreneurs se retrouvent plus perdus qu'avant.",
            "Trop de logiciels, trop de comptes, trop d'informations dispersées.",
            "Le dirigeant, censé gagner du temps, finit par en perdre.",
            "Ce n'est pas la technologie qui pose problème — c'est la manière dont elle est intégrée."
          ],
          quote: "Digitaliser sans clarifier, c'est ajouter de la complexité à la confusion."
        },
        {
          title: "Revenir à l'essentiel : la structure avant l'outil",
          paragraphs: [
            "Avant de choisir un logiciel ou une plateforme, il faut poser une question simple :",
            "Qu'ai-je vraiment besoin de suivre, d'automatiser ou de partager ?",
            "Nous voyons trop souvent des outils installés avant même d'avoir défini le cadre de gestion.",
            "Résultat : des systèmes coûteux, mal utilisés et déconnectés du quotidien de l'entreprise.",
            "Notre démarche est inverse :",
            "1. Clarifier la structure existante — comprendre comment l'activité fonctionne, où sont les points de friction, quelles tâches consomment trop de temps.",
            "2. Simplifier les processus — avant de les numériser.",
            "3. Sélectionner les bons outils — uniquement ceux qui renforcent la clarté, la traçabilité et la cohérence du travail."
          ],
          quote: "Une bonne digitalisation commence toujours par une bonne organisation."
        },
        {
          title: "Le numérique au service de la clarté",
          paragraphs: [
            "Digitaliser, ce n'est pas automatiser pour automatiser.",
            "C'est mettre la technologie au service de la lisibilité : savoir où on en est, réduire les erreurs, fluidifier la communication interne et gagner en réactivité.",
            "Nos solutions Advalis Web s'inscrivent dans cette logique :",
            "- des sites vitrine conçus pour structurer la présence et la crédibilité d'une activité,",
            "- des tableaux de suivi intelligents connectés à Notion, Sheets ou CRM,",
            "- des automatisations simples qui libèrent du temps sans brouiller les priorités.",
            "Tout est pensé pour renforcer la cohérence globale du pilotage, pas pour empiler les outils."
          ],
          quote: "Un outil bien choisi n'est pas celui qui fait tout, mais celui qui fait bien ce qui compte."
        },
        {
          title: "Une approche humaine du digital",
          paragraphs: [
            "Notre conviction est simple : le numérique n'a de sens que s'il libère l'humain.",
            "Un entrepreneur épuisé par ses outils perd l'essence même de son métier.",
            "Un entrepreneur appuyé par un système clair, lui, retrouve de la visibilité et du contrôle.",
            "Avec Advalis Web, nous accompagnons les indépendants, TPE et associations à chaque étape :",
            "- diagnostic digital et fonctionnel,",
            "- mise en place de solutions adaptées,",
            "- transfert d'autonomie et formation légère à l'usage.",
            "L'objectif : une digitalisation sobre, claire et durable, au service d'une structure plus fluide et d'un dirigeant plus serein."
          ]
        },
        {
          title: "Advalis Web, la technologie à visage humain",
          paragraphs: [
            "Digitaliser ne doit pas signifier déshumaniser.",
            "Nous croyons à un numérique intégré, mesuré et conscient, capable de renforcer la performance sans trahir la simplicité.",
            "Chez Advalis, le digital n'est pas un produit, c'est un prolongement de notre vision :"
          ],
          quote: "Clarifier. Structurer. Faire grandir."
        }
      ],
      cta: {
        title: "💬 Envie d'un système digital clair et utile ?",
        description: "Découvrez Advalis Web et faisons le point ensemble sur votre environnement numérique.",
        buttonText: "Découvrir Advalis Web",
        buttonLink: "/contact"
      }
    },
    published: true
  },
  {
    id: 5,
    title: "Clarifier, structurer, faire grandir : la mission d'Advalis",
    subtitle: "Remettre de la méthode là où règne la complexité",
    excerpt: "L'écosystème entrepreneurial regorge d'aides et de dispositifs censés simplifier la vie des dirigeants. Pourtant, cette profusion finit souvent par produire l'effet inverse : la confusion.",
    category: "Structurer",
    readTime: "8 min",
    date: "28 Janvier 2025",
    image: "bg-gradient-to-br from-gray-100 to-gray-200",
    icon: Target,
    color: "from-gray-500 to-gray-600",
    slug: "mission-advalis-clarifier-structurer-grandir",
    backgroundImage: "/images/Articles/Structurer.jpg",
    content: {
      sections: [
        {
          title: "Un écosystème devenu illisible",
          paragraphs: [
            "L'écosystème entrepreneurial regorge d'aides, de règles et de dispositifs censés simplifier la vie des dirigeants.",
            "Pourtant, cette profusion d'informations finit souvent par produire l'effet inverse : la confusion.",
            "Les dirigeants passent un temps considérable à chercher, comparer, vérifier.",
            "Chaque décision — création de statut, embauche, trésorerie, fiscalité — devient une source d'incertitude.",
            "Et plus le cadre se brouille, plus le risque de désorganisation s'accroît."
          ],
          quote: "La complexité n'est pas toujours un signe d'évolution. Parfois, elle empêche simplement d'avancer."
        },
        {
          title: "Notre mission : remettre de la clarté dans la gestion",
          paragraphs: [
            "Advalis est né d'une conviction simple : l'organisation n'est pas une contrainte, c'est un langage de clarté.",
            "Un langage que nous aidons chaque dirigeant à comprendre et à maîtriser.",
            "Notre mission consiste à traduire la complexité administrative et financière en actions concrètes, compréhensibles et mesurables.",
            "Nous intervenons là où le flou s'est installé : dans les chiffres, les priorités, les obligations ou les outils.",
            "Clarifier, c'est permettre au dirigeant de savoir où il en est.",
            "Structurer, c'est transformer cette clarté en système durable.",
            "Faire grandir, enfin, c'est donner les moyens de progresser sans se perdre dans la complexité."
          ]
        },
        {
          title: "Clarifier : redonner une vision d'ensemble",
          paragraphs: [
            "Beaucoup d'entreprises fonctionnent sans réel tableau de bord, sans distinction claire entre ce qui est urgent et ce qui est essentiel.",
            "Notre premier rôle est donc d'éclairer : poser un diagnostic précis, visualiser les flux, distinguer l'essentiel du superflu.",
            "Quand le dirigeant voit, il comprend. Et quand il comprend, il retrouve sa capacité à décider."
          ]
        },
        {
          title: "Structurer : transformer la clarté en méthode",
          paragraphs: [
            "Une fois la vision restaurée, encore faut-il la rendre durable.",
            "Structurer, c'est définir un cadre, des outils, un rythme.",
            "C'est établir des repères simples : documents partagés, automatisations légères, plan de trésorerie, échéancier clair.",
            "Nous ne cherchons pas à multiplier les procédures, mais à rendre la gestion fluide et cohérente.",
            "Une structure claire devient alors un socle.",
            "Et c'est sur ce socle que peut s'appuyer la croissance."
          ],
          quote: "Une bonne structure n'alourdit pas, elle allège. Elle donne au dirigeant l'assurance d'avancer sans craindre l'oubli."
        },
        {
          title: "Faire grandir : créer un élan durable",
          paragraphs: [
            "Une fois la structure posée, le dirigeant retrouve une ressource rare : le temps.",
            "Le temps de réfléchir, d'innover, de faire évoluer son activité.",
            "C'est dans cet espace que la croissance redevient naturelle.",
            "Advalis accompagne cette phase avec méthode : pilotage, indicateurs, projection financière, simplification administrative.",
            "Notre rôle n'est pas de faire à la place, mais de permettre de mieux faire."
          ]
        },
        {
          title: "Une approche pragmatique et humaine",
          paragraphs: [
            "Le conseil, pour nous, n'est pas une posture, mais une présence.",
            "Nous avançons aux côtés des dirigeants, au plus près de leur réalité.",
            "Chaque mission Advalis repose sur l'écoute, la rigueur et l'adaptation à la vie réelle des structures que nous accompagnons."
          ],
          quote: "Clarifier, structurer, faire grandir : trois étapes, un même cap. Offrir aux dirigeants de proximité le droit à une gestion claire, humaine et durable."
        }
      ],
      cta: {
        title: "💬 Découvrez notre approche",
        description: "Échangeons sur votre situation et découvrons ensemble comment Advalis peut vous accompagner dans la clarification et la structuration de votre activité.",
        buttonText: "Échangeons ensemble",
        buttonLink: "/contact"
      }
    },
    published: true
  },

  // PILOTER
  {
    id: 6,
    title: "Comment savoir si votre entreprise est en train de stagner",
    excerpt: "Aider le lecteur à diagnostiquer les signes d'essoufflement de son activité.",
    category: "Piloter",
    readTime: "11 min",
    date: "20 Janvier 2024",
    image: "bg-gradient-to-br from-blue-100 to-blue-200",
    icon: BarChart3,
    color: "from-blue-500 to-blue-600",
    slug: "comment-savoir-entreprise-stagne",
    backgroundImage: "/images/Articles/Piloter.jpg",
    published: true
  },
  {
    id: 7,
    title: "Micro-entreprise : les erreurs fréquentes à éviter",
    excerpt: "Article éducatif sur l'URSSAF, TVA, régime fiscal, plafond, déduction, etc.",
    category: "Piloter",
    readTime: "14 min",
    date: "18 Janvier 2024",
    image: "bg-gradient-to-br from-blue-100 to-blue-200",
    icon: BarChart3,
    color: "from-blue-500 to-blue-600",
    slug: "micro-entreprise-erreurs-frequentes-eviter",
    backgroundImage: "/images/Articles/Piloter.jpg",
    published: true
  },

  // RELANCER
  {
    id: 8,
    title: "Quand faut-il relancer ou restructurer son activité",
    excerpt: "Montrer qu'un accompagnement stratégique peut sauver une activité en perte de vitesse.",
    category: "Relancer",
    readTime: "13 min",
    date: "16 Janvier 2024",
    image: "bg-gradient-to-br from-orange-100 to-orange-200",
    icon: RefreshCw,
    color: "from-orange-500 to-orange-600",
    slug: "quand-relancer-restructurer-activite",
    backgroundImage: "/images/Articles/Relancer.jpg",
    published: true
  },

  // REGARDS HUMAINS
  {
    id: 9,
    title: "Les manipulations dans l'entrepreneuriat moderne",
    excerpt: "Dénoncer les promesses irréalistes des formations en ligne et le marketing du rêve.",
    category: "Regards humains",
    readTime: "15 min",
    date: "14 Janvier 2024",
    image: "bg-gradient-to-br from-pink-100 to-pink-200",
    icon: Heart,
    color: "from-pink-500 to-pink-600",
    slug: "manipulations-entrepreneuriat-moderne",
    backgroundImage: "/images/Articles/Regard_humains.jpg",
    published: true
  },
  {
    id: 10,
    title: "Entreprendre, ce n'est pas fuir : c'est construire",
    excerpt: "Rappeler qu'on ne crée pas une entreprise pour \"s'échapper\" mais pour bâtir quelque chose de solide.",
    category: "Regards humains",
    readTime: "9 min",
    date: "12 Janvier 2024",
    image: "bg-gradient-to-br from-pink-100 to-pink-200",
    icon: Heart,
    color: "from-pink-500 to-pink-600",
    slug: "entreprendre-ce-nest-pas-fuir-construire",
    backgroundImage: "/images/Articles/Regard_humains.jpg",
    published: true
  },
  {
    id: 11,
    title: "Association loi 1901 : tout comprendre avant de se lancer",
    excerpt: "Vulgariser le statut associatif, ses enjeux et ses erreurs fréquentes.",
    category: "Regards humains",
    readTime: "16 min",
    date: "10 Janvier 2024",
    image: "bg-gradient-to-br from-pink-100 to-pink-200",
    icon: Heart,
    color: "from-pink-500 to-pink-600",
    slug: "association-loi-1901-tout-comprendre",
    backgroundImage: "/images/Articles/Regard_humains.jpg",
    published: true
  }
]

export const categories = ["Tous", "Structurer", "Piloter", "Relancer", "Se digitaliser", "Regards humains"]

export const categoryDescriptions = {
  "Structurer": "Poser des bases solides. Clarifier ce qui est flou. Mettre de l'ordre avant d'accélérer.",
  "Piloter": "Comprendre ses chiffres, voir plus loin, prendre les bonnes décisions.",
  "Relancer": "Quand tout semble s'essouffler, il est temps de revoir le fond, pas seulement la forme.",
  "Se digitaliser": "Utiliser les bons outils pour gagner du temps, automatiser et mieux piloter.",
  "Regards humains": "Replacer l'humain au cœur de la gestion et du conseil."
}

export const getArticleById = (id: number): Article | undefined => {
  return articles.find(article => article.id === id)
}

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug)
}

export const getArticlesByCategory = (category: string): Article[] => {
  if (category === "Tous") return articles
  return articles.filter(article => article.category === category)
}

export const getPublishedArticles = (): Article[] => {
  return articles.filter(article => article.published !== false)
}
