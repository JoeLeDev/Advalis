export interface FAQItem {
  id: string
  question: string
  answer: string
  category?: string
}

export const faqItems: FAQItem[] = [

  {
    id: "delai-reponse",
    question: "Quel est votre délai de réponse ?  ",
    answer: "Nous répondons sous 12 heures ouvrées, du lundi au samedi. Lorsqu’une analyse est nécessaire, nous vous en informons dès la première réponse."
  },

  {
    id: "premier-echange-gratuit",
    question: "Proposez-vous un premier échange gratuit ?",
    answer: "Oui. Le premier échange est offert et sans engagement. Il permet de comprendre votre situation et de vous orienter vers la solution la plus adaptée avant tout accompagnement."
  },

  {
    id: "accompagnement-independants-associations",
    question: "Accompagnez-vous les indépendants ou les associations ?",
    answer: "Oui. Nous travaillons aussi bien avec des indépendants qu’avec des associations loi 1901, pour les aider à clarifier leur organisation et structurer leurs démarches."
  },

  {
    id: "tarifs-adaptes",
    question: "Proposez-vous des tarifs adaptés ?",
    answer: "Oui. Nos honoraires sont ajustés à la taille et à la réalité économique de chaque activité. Notre priorité : rendre le conseil accessible, sans complexité inutile."
  },
  {
    id: "retard-justificatifs",
    question: "Et si je suis en retard pour mes justificatifs ?",
    answer: "Pas de panique. On s'adapte à votre rythme, et on vous relance si besoin. Le but, c'est d'avancer sans pression."
  },
  {
    id: "cabinet-expertise-comptable",
    question: "Est-ce que vous êtes un cabinet d'expertise comptable ?",
    answer: "Non. Nous faisons du suivi administratif, financier et organisationnel. Nous ne faisons pas de bilan comptable, mais nous vous aidons à mieux piloter votre activité au quotidien."
  },
  {
    id: "abonnement",
    question: "Comment se passe l'abonnement ?",
    answer: "Vous choisissez la fréquence (mensuelle, trimestrielle ou annuelle) et vous bénéficiez d'un suivi régulier via WhatsApp, téléphone ou mail. Tout est sans engagement."
  },
  {
    id: "commencer-sans-payer",
    question: "Puis-je commencer sans payer tout de suite ?",
    answer: "Oui. Le Pack Starter est un accompagnement à prix unique pour faire le point, poser les bases et décider ensuite."
  },
  {
    id: "aide-paie",
    question: "Vous aidez sur la paie aussi ?",
    answer: "Oui, notamment pour comprendre les bulletins, prévoir les charges, ou préparer des paiements."
  },
  {
    id: "proprietaire-site",
    question: "Est-ce que je serai propriétaire de mon site ?",
    answer: "Oui. Le site t'appartient entièrement. Tu disposes d'un accès total, et tu peux le modifier, transférer ou exporter quand tu veux."
  },
  {
    id: "base-site",
    question: "Sur quelle base le site est-il créé ?",
    answer: "Nous utilisons des plateformes modernes et simples (comme WordPress, Wix ou Webflow, selon ton besoin), afin que tu puisses modifier toi-même ton contenu sans coder."
  },
  {
    id: "mettre-a-jour-site",
    question: "Est-ce que je peux mettre à jour mon site moi-même ?",
    answer: "Oui. Nous t'apprenons à modifier ton texte, tes images et tes pages. Une courte formation personnalisée est incluse dans le pack."
  },
  {
    id: "ne-veux-pas-moccuper",
    question: "Et si je ne veux pas m'en occuper ?",
    answer: "Tu peux choisir notre option de maintenance (39 €/mois). Nous nous occupons des mises à jour, ajustements, sécurité, et modifications simples."
  },
  {
    id: "temps-site",
    question: "Combien de temps faut-il pour avoir un site ?",
    answer: "En moyenne, entre 7 et 15 jours après validation du contenu et du design. Nous travaillons rapidement, mais toujours avec soin."
  },
  {
    id: "payer-plusieurs-fois",
    question: "Puis-je payer en plusieurs fois ?",
    answer: "Oui, le paiement peut se faire jusqu'à 10 fois via nos partenaires (ex. PayPal, Alma ou Stripe). Tu peux donc étaler ton investissement sur plusieurs mois sans blocage. N'hésitez pas à nous contacter."
  },
  {
    id: "sites-ecommerce",
    question: "Proposez-vous aussi des sites e-commerce ?",
    answer: "Oui, en option. Idéal si tu veux vendre en ligne tes produits, formations ou services."
  }
]

export const getFAQById = (id: string): FAQItem | undefined => {
  return faqItems.find(item => item.id === id)
}

export const getFAQsByCategory = (category?: string): FAQItem[] => {
  if (!category) return faqItems
  return faqItems.filter(item => item.category === category)
}
