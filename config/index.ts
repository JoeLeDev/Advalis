// Export all configurations from a central point
export * from './expertises'
export * from './articles'
export * from './secteurs'

// Site metadata
export const siteConfig = {
  name: "Advalis Conseil",
  description: "Cabinet de conseil spécialisé dans l'accompagnement des structures de proximité",
  url: "https://advalis-conseil.fr",
  ogImage: "/images/og-image.jpg",
  links: {
    twitter: "https://twitter.com/advalisconseil",
    linkedin: "https://linkedin.com/company/advalis-conseil",
    email: "contact@advalis-conseil.fr"
  }
}

// Navigation configuration
export const navigationConfig = {
  main: [
    {
      title: "Accueil",
      href: "/"
    },
    {
      title: "Nous découvrir",
      href: "/nous-decouvrir"
    },
    {
      title: "Nos expertises",
      href: "/nos-expertises"
    },
    {
      title: "Nos secteurs",
      href: "/nos-secteurs"
    },
    {
      title: "Articles",
      href: "/articles"
    },
    {
      title: "Contact",
      href: "/contact"
    }
  ]
}

// Footer configuration
export const footerConfig = {
  sections: [
    {
      title: "Advalis",
      links: [
        { title: "À propos", href: "/a-propos" },
        { title: "Nos valeurs", href: "/nos-valeurs" },
        { title: "Nous découvrir", href: "/nous-decouvrir" }
      ]
    },
    {
      title: "Services",
      links: [
        { title: "Nos expertises", href: "/nos-expertises" },
        { title: "Nos secteurs", href: "/nos-secteurs" },
        { title: "Tarifs", href: "/pricing" }
      ]
    },
    {
      title: "Ressources",
      links: [
        { title: "Articles", href: "/articles" },
        { title: "FAQ", href: "/faq" },
        { title: "Contact", href: "/contact" }
      ]
    }
  ],
  legal: [
    { title: "Mentions légales", href: "/mentions-legales" },
    { title: "Politique de confidentialité", href: "/politique-confidentialite" },
    { title: "CGV", href: "/cgv" }
  ]
}
