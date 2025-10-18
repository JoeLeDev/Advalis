import { Target, BarChart3, RefreshCw, Lightbulb, Heart } from 'lucide-react'

export interface Article {
  id: number
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  image: string
  icon: any
  color: string
  slug?: string
  content?: string
  published?: boolean
}

export const articles: Article[] = [
  // STRUCTURER
  {
    id: 1,
    title: "Pourquoi 70 % des porteurs de projets échouent à cause de l'administratif",
    excerpt: "Expliquer que la désorganisation administrative et financière est la première cause d'échec.",
    category: "Structurer",
    readTime: "12 min",
    date: "25 Janvier 2024",
    image: "bg-gradient-to-br from-gray-100 to-gray-200",
    icon: Target,
    color: "from-gray-500 to-gray-600",
    slug: "pourquoi-70-pourcent-echouent-administratif",
    published: true
  },
  {
    id: 2,
    title: "Clarifier, structurer, faire grandir : la mission d'Advalis",
    excerpt: "Article de positionnement sur la vision du cabinet et la philosophie \"Clarté – Structure – Humanité\".",
    category: "Structurer",
    readTime: "10 min",
    date: "22 Janvier 2024",
    image: "bg-gradient-to-br from-gray-100 to-gray-200",
    icon: Target,
    color: "from-gray-500 to-gray-600",
    slug: "mission-advalis-clarifier-structurer-grandir",
    published: true
  },

  // PILOTER
  {
    id: 3,
    title: "Comment savoir si votre entreprise est en train de stagner",
    excerpt: "Aider le lecteur à diagnostiquer les signes d'essoufflement de son activité.",
    category: "Piloter",
    readTime: "11 min",
    date: "20 Janvier 2024",
    image: "bg-gradient-to-br from-blue-100 to-blue-200",
    icon: BarChart3,
    color: "from-blue-500 to-blue-600",
    slug: "comment-savoir-entreprise-stagne",
    published: true
  },
  {
    id: 4,
    title: "Micro-entreprise : les erreurs fréquentes à éviter",
    excerpt: "Article éducatif sur l'URSSAF, TVA, régime fiscal, plafond, déduction, etc.",
    category: "Piloter",
    readTime: "14 min",
    date: "18 Janvier 2024",
    image: "bg-gradient-to-br from-blue-100 to-blue-200",
    icon: BarChart3,
    color: "from-blue-500 to-blue-600",
    slug: "micro-entreprise-erreurs-frequentes-eviter",
    published: true
  },

  // RELANCER
  {
    id: 5,
    title: "Quand faut-il relancer ou restructurer son activité",
    excerpt: "Montrer qu'un accompagnement stratégique peut sauver une activité en perte de vitesse.",
    category: "Relancer",
    readTime: "13 min",
    date: "16 Janvier 2024",
    image: "bg-gradient-to-br from-orange-100 to-orange-200",
    icon: RefreshCw,
    color: "from-orange-500 to-orange-600",
    slug: "quand-relancer-restructurer-activite",
    published: true
  },

  // REGARDS HUMAINS
  {
    id: 6,
    title: "Les manipulations dans l'entrepreneuriat moderne",
    excerpt: "Dénoncer les promesses irréalistes des formations en ligne et le marketing du rêve.",
    category: "Regards humains",
    readTime: "15 min",
    date: "14 Janvier 2024",
    image: "bg-gradient-to-br from-pink-100 to-pink-200",
    icon: Heart,
    color: "from-pink-500 to-pink-600",
    slug: "manipulations-entrepreneuriat-moderne",
    published: true
  },
  {
    id: 7,
    title: "Entreprendre, ce n'est pas fuir : c'est construire",
    excerpt: "Rappeler qu'on ne crée pas une entreprise pour \"s'échapper\" mais pour bâtir quelque chose de solide.",
    category: "Regards humains",
    readTime: "9 min",
    date: "12 Janvier 2024",
    image: "bg-gradient-to-br from-pink-100 to-pink-200",
    icon: Heart,
    color: "from-pink-500 to-pink-600",
    slug: "entreprendre-ce-nest-pas-fuir-construire",
    published: true
  },
  {
    id: 8,
    title: "Association loi 1901 : tout comprendre avant de se lancer",
    excerpt: "Vulgariser le statut associatif, ses enjeux et ses erreurs fréquentes.",
    category: "Regards humains",
    readTime: "16 min",
    date: "10 Janvier 2024",
    image: "bg-gradient-to-br from-pink-100 to-pink-200",
    icon: Heart,
    color: "from-pink-500 to-pink-600",
    slug: "association-loi-1901-tout-comprendre",
    published: true
  }
]

export const categories = ["Tous", "Structurer", "Piloter", "Relancer", "Digitaliser", "Regards humains"]

export const categoryDescriptions = {
  "Structurer": "Poser des bases solides. Clarifier ce qui est flou. Mettre de l'ordre avant d'accélérer.",
  "Piloter": "Comprendre ses chiffres, voir plus loin, prendre les bonnes décisions.",
  "Relancer": "Quand tout semble s'essouffler, il est temps de revoir le fond, pas seulement la forme.",
  "Digitaliser": "Utiliser les bons outils pour gagner du temps, automatiser et mieux piloter.",
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
