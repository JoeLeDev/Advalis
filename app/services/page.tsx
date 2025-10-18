import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageBanner } from "@/components/page-banner";

export default function ServicesPage() {
  const services = [
    {
      title: "Pack Starter",
      subtitle: "Un diagnostic complet pour faire le point",
      description: "Parfait pour les nouveaux entrepreneurs qui veulent comprendre leur situation et poser des bases solides.",
      features: [
        "Analyse de votre situation administrative actuelle",
        "Identification des points d'amélioration",
        "Mise en place d'outils de suivi simples",
        "Plan d'action personnalisé pour les 3 prochains mois",
        "Support par WhatsApp pendant 1 mois"
      ],
      price: "À partir de 97€",
      cta: "Choisir ce pack"
    },
    {
      title: "Pack Essentiel",
      subtitle: "Accompagnement mensuel pour gérer sereinement",
      description: "Idéal pour les entrepreneurs qui veulent un suivi régulier sans se prendre la tête avec l'administratif.",
      features: [
        "Suivi mensuel de votre activité",
        "Gestion des justificatifs et documents",
        "Préparation des déclarations (URSSAF, TVA)",
        "Tableaux de bord financiers personnalisés",
        "Support prioritaire WhatsApp et email",
        "Rappels automatiques pour les échéances"
      ],
      price: "À partir de 197€/mois",
      cta: "Choisir ce pack"
    },
    {
      title: "Pack Zen",
      subtitle: "Accompagnement complet pour développer votre activité",
      description: "Pour ceux qui veulent se concentrer sur leur cœur de métier pendant qu'on s'occupe de tout le reste.",
      features: [
        "Accompagnement hebdomadaire personnalisé",
        "Gestion complète de l'administratif",
        "Conseil stratégique pour le développement",
        "Préparation des documents légaux",
        "Support téléphonique prioritaire",
        "Accès à notre réseau de partenaires",
        "Formation aux outils de gestion"
      ],
      price: "À partir de 397€/mois",
      cta: "Choisir ce pack"
    }
  ];

  const additionalServices = [
    {
      icon: "📊",
      title: "Création de sites web",
      description: "Sites vitrines modernes et e-commerce pour développer votre présence en ligne.",
      details: [
        "Design responsive et moderne",
        "CMS simple à utiliser",
        "Formation incluse",
        "Hébergement et maintenance optionnels"
      ]
    },
    {
      icon: "📋",
      title: "Accompagnement création d'entreprise",
      description: "De l'idée au lancement, on vous guide dans toutes les étapes administratives.",
      details: [
        "Choix du statut juridique",
        "Démarches administratives",
        "Ouverture de compte professionnel",
        "Premières déclarations"
      ]
    },
    {
      icon: "💼",
      title: "Formation et conseil",
      description: "Apprenez à gérer votre activité comme un pro avec nos formations pratiques.",
      details: [
        "Formation aux outils comptables",
        "Gestion de la trésorerie",
        "Optimisation fiscale",
        "Sessions en groupe ou individuelles"
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageBanner 
        title="Nos Services"
        subtitle="Des solutions adaptées à chaque étape de votre parcours entrepreneurial"
        showLogo={true}
      />

      {/* Services principaux */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 animate-fade-in-up">Nos packs d'accompagnement</h2>
            <p className="text-xl text-gray-600 animate-fade-in-up animation-delay-200">
              Choisissez le niveau d'accompagnement qui correspond à vos besoins et à votre budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-lg hover-lift hover-glow animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-blue-600 text-white p-6">
                  <h3 className="text-2xl font-bold text-center">{service.title}</h3>
                  <p className="text-center opacity-90 mt-2">{service.subtitle}</p>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Ce qui est inclus :</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600 mb-4">{service.price}</p>
                    <Link href="/pricing">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        {service.cta}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services complémentaires */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 animate-fade-in-up">Services complémentaires</h2>
            <p className="text-xl text-gray-600 animate-fade-in-up animation-delay-200">
              Des solutions sur mesure pour tous vos besoins entrepreneuriaux.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover-lift transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 animate-float">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages détaillés */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 animate-fade-in-up">Ce que disent nos clients</h2>
            <p className="text-xl text-gray-600 animate-fade-in-up animation-delay-200">
              Des entrepreneurs qui ont transformé leur gestion administrative avec Advalis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl animate-fade-in-up animation-delay-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  LM
                </div>
                <div>
                  <h4 className="font-bold">Léo M.</h4>
                  <p className="text-sm text-gray-600">Développeur indépendant</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "J'avais du mal à suivre mes factures et mes revenus. Aujourd'hui j'ai un vrai tableau clair de ce que je gagne, je peux anticiper mes charges et je dors mieux !"
              </p>
              <div className="text-yellow-500">★★★★★</div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl animate-fade-in-up animation-delay-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  NE
                </div>
                <div>
                  <h4 className="font-bold">Nadia E.</h4>
                  <p className="text-sm text-gray-600">Coach bien-être</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "On a posé ensemble un vrai plan de développement. Je peux enfin envisager de recruter quelqu'un grâce à une gestion financière claire et des projections réalistes."
              </p>
              <div className="text-yellow-500">★★★★★</div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl animate-fade-in-up animation-delay-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  ST
                </div>
                <div>
                  <h4 className="font-bold">Sonia T.</h4>
                  <p className="text-sm text-gray-600">Présidente d'association</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Les papiers, c'était mon cauchemar. Maintenant je les reçois, je les envoie à Eitan, et c'est réglé. Je peux me concentrer sur mes missions associatives."
              </p>
              <div className="text-yellow-500">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA vers contact */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in-up">
            Prêt à transformer votre gestion administrative ?
          </h2>
          <p className="text-xl mb-8 opacity-90 animate-fade-in-up animation-delay-200">
            Remplissez notre formulaire de diagnostic en 2 minutes pour recevoir des conseils personnalisés.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
            <Link href="#contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                📋 Formulaire de diagnostic
              </Button>
            </Link>
            <a 
              href="https://bit.ly/44ePnAO" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                💬 WhatsApp direct
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
