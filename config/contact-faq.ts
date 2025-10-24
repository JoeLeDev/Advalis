export interface ContactFAQItem {
  id: string;
  question: string;
  answer: string;
}

export const contactFaqItems: ContactFAQItem[] = [
  {
    id: "delai-reponse",
    question: "Quel est votre délai de réponse ?",
    answer: "Nous nous engageons à vous répondre dans les 24h ouvrées suivant votre demande."
  },
  {
    id: "premier-echange-gratuit",
    question: "Proposez-vous un premier échange gratuit ?",
    answer: "Oui, nous proposons un premier échange de 30 minutes pour comprendre vos enjeux."
  },
  {
    id: "tpe-independants",
    question: "Travaillez-vous avec des TPE et indépendants ?",
    answer: "Oui, nous sommes spécialisés dans l'accompagnement des TPE, artisans, indépendants et associations."
  },
  {
    id: "tarifs-adaptes",
    question: "Proposez-vous des tarifs adaptés ?",
    answer: "Nous croyons que le conseil doit être accessible. Nos tarifs sont transparents et adaptés à votre structure."
  }
];

export const contactInfo = {
  email: "contact@advalis.fr",
  phone: "01 85 09 72 43",
  emailResponse: "Réponse sous 24h",
  phoneAvailability: "Disponible du lundi au samedi"
};

export const contactReasons = [
  {
    title: "Clarté avant tout",
    description: "Un accompagnement transparent et compréhensible"
  },
  {
    title: "Une méthode éprouvée", 
    description: "Des outils et processus qui ont fait leurs preuves"
  },
  {
    title: "Un partenaire de terrain",
    description: "Présent à vos côtés dans l'action"
  },
  {
    title: "Un conseil humain",
    description: "Une relation de confiance et d'écoute"
  },
  {
    title: "Une vision durable",
    description: "Un accompagnement qui vise l'autonomie"
  }
];

export const contactSectors = [
  { value: "industrie", label: "Industrie" },
  { value: "grande-consommation", label: "Grande Consommation" },
  { value: "distribution", label: "Distribution" },
  { value: "luxe", label: "Luxe" },
  { value: "services", label: "Services" },
  { value: "energie", label: "Énergie" },
  { value: "tech", label: "Tech & Innovation" },
  { value: "associations", label: "Associations" },
  { value: "autre", label: "Autre" }
];

export const contactExpertises = [
  { value: "strategie", label: "Stratégie & Business Models" },
  { value: "transformation", label: "Transformation Organisationnelle" },
  { value: "capital-humain", label: "Capital Humain & Engagement" },
  { value: "performance", label: "Performance & Opérations" },
  { value: "innovation", label: "Innovation & Digital" },
  { value: "finance", label: "Finance & Contrôle de Gestion" },
  { value: "autre", label: "Autre" }
];
