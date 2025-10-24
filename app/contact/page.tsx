"use client";

import { useState } from "react";
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PageBanner } from '@/components/page-banner'
import { Mail, Phone, MapPin, Clock, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'
import { contactFaqItems, contactInfo, contactReasons, contactSectors, contactExpertises } from '@/config/contact-faq'

export default function ContactPage() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  // Sélection ciblée des questions/réponses pour la FAQ du contact
  const desiredFaqIds = [
    "delai-reponse",
    "retard-justificatifs",
    "accompagnement-independants-associations",
    "tarifs-adaptes",
    "cabinet-expertise-comptable",
  ] as const;

  // Surcharges de contenu (prioritaires) + éléments manquants non présents dans la config
  const faqOverrides: Partial<Record<string, { question: string; answer: string }>> = {
    "delai-reponse": {
      question: "Quel est votre délai de réponse ?",
      answer:
        "Nous répondons sous 12 heures ouvrées, du lundi au samedi. Lorsqu’une analyse est nécessaire, nous vous en informons dès la première réponse.",
    },
    "retard-justificatifs": {
      question: "Et si je suis en retard pour mes justificatifs ?",
      answer:
        "Pas de panique. On s'adapte à votre rythme, et on vous relance si besoin. Le but, c'est d'avancer sans pression.",
    },
    "accompagnement-independants-associations": {
      question: "Accompagnez-vous les indépendants ou les associations ?",
      answer:
        "Oui. Nous travaillons aussi bien avec des indépendants qu’avec des associations loi 1901, pour les aider à clarifier leur organisation et structurer leurs démarches.",
    },
    "tarifs-adaptes": {
      question: "Proposez-vous des tarifs adaptés ?",
      answer:
        "Oui. Nos honoraires sont ajustés à la taille et à la réalité économique de chaque activité. Notre priorité : rendre le conseil accessible, sans complexité inutile.",
    },
    "cabinet-expertise-comptable": {
      question: "Est-ce que vous êtes un cabinet d'expertise comptable ?",
      answer:
        "Non. Nous faisons du suivi administratif, financier et organisationnel. Nous ne faisons pas de bilan comptable, mais nous vous aidons à mieux piloter votre activité au quotidien.",
    },
  };

  const selectedFaqItems = desiredFaqIds
    .map((id) => {
      const base = contactFaqItems.find((i) => i.id === id);
      const override = faqOverrides[id as string];
      if (base) return { ...base, ...(override ?? {}) };
      if (override) return { id, ...override } as { id: string; question: string; answer: string };
      return null;
    })
    .filter(Boolean) as { id: string; question: string; answer: string }[];

  return (
    <div className="flex flex-col">
      {/* Page Banner */}
      <PageBanner
        title="Contactez-nous"
        subtitle="Prêt à transformer votre organisation ?"
        description=" Échangeons sur votre situation et ensemble, trouvons la voie la plus claire pour faire avancer votre activité."
        backgroundImage="/images/banners/Contact_Advalis.jpg"
      />

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Échangeons sur votre projet</CardTitle>
                <CardDescription>
                  Remplissez ce formulaire et nous vous recontacterons dans les 24h.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Entreprise / Organisation
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="sector" className="block text-sm font-medium mb-2">
                      Secteur d&apos;activité
                    </label>
                    <select
                      id="sector"
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Sélectionnez un secteur</option>
                      {contactSectors.map((sector) => (
                        <option key={sector.value} value={sector.value}>
                          {sector.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="expertise" className="block text-sm font-medium mb-2">
                      Domaine d&apos;expertise d&apos;intérêt
                    </label>
                    <select
                      id="expertise"
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Sélectionnez un domaine</option>
                      {contactExpertises.map((expertise) => (
                        <option key={expertise.value} value={expertise.value}>
                          {expertise.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Votre message *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Décrivez brièvement vos enjeux et vos besoins..."
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Envoyer le message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Nos coordonnées</CardTitle>
                  <CardDescription>
                    Plusieurs façons de nous contacter
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-muted-foreground">{contactInfo.email}</p>
                      <p className="text-sm text-muted-foreground">{contactInfo.emailResponse}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Téléphone</h4>
                      <p className="text-muted-foreground">{contactInfo.phone}</p>
                      <p className="text-sm text-muted-foreground">{contactInfo.phoneAvailability}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="bg-muted/50 rounded-lg p-8">
            <h2 className="text-2xl font-advalis-heading font-bold mb-6 text-center">
              Questions fréquentes
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-0">
                {selectedFaqItems.map((item, index) => (
                  <div 
                    key={item.id}
                    className="border-b border-gray-200 last:border-b-0"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full py-6 px-0 text-left flex items-center justify-between hover:bg-gray-50 transition-all duration-300 group"
                    >
                      <h3 className="text-lg font-bold text-gray-800 pr-4 group-hover:text-blue-600 transition-colors duration-300">
                        {item.question}
                      </h3>
                      <div className="flex-shrink-0">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          openItem === index 
                            ? 'bg-blue-100 text-blue-600 scale-110' 
                            : 'bg-gray-100 text-gray-600 hover:scale-105 hover:bg-blue-50'
                        }`}>
                          {openItem === index ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </div>
                      </div>
                    </button>
                    
                    {openItem === index && (
                      <div className="pb-6 pr-12 transition-all duration-300 ease-in-out">
                        <p className="text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}