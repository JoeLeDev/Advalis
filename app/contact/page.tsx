import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PageBanner } from '@/components/page-banner'
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Page Banner */}
      <PageBanner
        title="Contactez-nous"
        subtitle="Prêt à transformer votre organisation ?"
        description="Échangeons sur vos enjeux et découvrons ensemble comment nos expertises peuvent répondre à vos besoins."
        backgroundImage="/images/banners/placeholder.svg"
      />

      <div className="py-20">
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
                    Secteur d'activité
                  </label>
                  <select
                    id="sector"
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Sélectionnez un secteur</option>
                    <option value="industrie">Industrie</option>
                    <option value="grande-consommation">Grande Consommation</option>
                    <option value="distribution">Distribution</option>
                    <option value="luxe">Luxe</option>
                    <option value="services">Services</option>
                    <option value="energie">Énergie</option>
                    <option value="tech">Tech & Innovation</option>
                    <option value="associations">Associations</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="expertise" className="block text-sm font-medium mb-2">
                    Domaine d'expertise d'intérêt
                  </label>
                  <select
                    id="expertise"
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Sélectionnez un domaine</option>
                    <option value="strategie">Stratégie & Business Models</option>
                    <option value="transformation">Transformation Organisationnelle</option>
                    <option value="capital-humain">Capital Humain & Engagement</option>
                    <option value="performance">Performance & Opérations</option>
                    <option value="innovation">Innovation & Digital</option>
                    <option value="finance">Finance & Contrôle de Gestion</option>
                    <option value="autre">Autre</option>
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
                    <p className="text-muted-foreground">contact@advalis.fr</p>
                    <p className="text-sm text-muted-foreground">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Téléphone</h4>
                    <p className="text-muted-foreground">06 98 96 39 96</p>
                    <p className="text-sm text-muted-foreground">Disponible du lundi au vendredi</p>
                  </div>
                </div>

              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pourquoi nous choisir ?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Clarté avant tout</strong> : Un accompagnement transparent et compréhensible</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Une méthode éprouvée</strong> : Des outils et processus qui ont fait leurs preuves</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Un partenaire de terrain</strong> : Présent à vos côtés dans l'action</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Un conseil humain</strong> : Une relation de confiance et d'écoute</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Une vision durable</strong> : Un accompagnement qui vise l'autonomie</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-advalis-heading font-bold mb-6 text-center">
            Questions fréquentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Quel est votre délai de réponse ?</h3>
              <p className="text-sm text-muted-foreground">
                Nous nous engageons à vous répondre dans les 24h ouvrées suivant votre demande.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Proposez-vous un premier échange gratuit ?</h3>
              <p className="text-sm text-muted-foreground">
                Oui, nous proposons un premier échange de 30 minutes pour comprendre vos enjeux.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Travaillez-vous avec des TPE et indépendants ?</h3>
              <p className="text-sm text-muted-foreground">
                Oui, nous sommes spécialisés dans l'accompagnement des TPE, artisans, indépendants et associations.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Proposez-vous des tarifs adaptés ?</h3>
              <p className="text-sm text-muted-foreground">
                Nous croyons que le conseil doit être accessible. Nos tarifs sont transparents et adaptés à votre structure.
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
