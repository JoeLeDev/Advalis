import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PageBanner } from '@/components/page-banner'
import Link from 'next/link'
import { ArrowRight, Target, Building2, Users, TrendingUp, Lightbulb, BarChart3 } from 'lucide-react'

export default function NosExpertisesPage() {
  return (
    <div className="flex flex-col">
      {/* Page Banner */}
      <PageBanner
        title="Nos expertises"
        subtitle="Un accompagnement sur-mesure pour structurer, piloter et développer votre activité"
        description="Nous vous accompagnons avec exigence, clarté et loyauté pour faire grandir ce qui mérite de durer."
        backgroundImage="/images/banners/placeholder.svg"
      />

      <div className="py-20">
        <div className="container mx-auto px-4">

        {/* Expertises Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="expertise-card">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Accompagnement à la création & au développement</CardTitle>
              <CardDescription>
                De l'idée au lancement : structurer votre projet, valider votre modèle et construire les bases solides pour démarrer.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                <li>• Étude de faisabilité et validation du projet</li>
                <li>• Choix du statut juridique adapté</li>
                <li>• Business plan et prévisionnel financier</li>
                <li>• Mise en place des outils de gestion</li>
                <li>• Accompagnement au lancement</li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link href="/nos-expertises/creation-developpement">
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="expertise-card">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Structuration & relance d'activité</CardTitle>
              <CardDescription>
                Clarifier, organiser et relancer : remettre de l'ordre, retrouver de la visibilité et repartir sur des bases saines.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                <li>• Diagnostic de la situation actuelle</li>
                <li>• Réorganisation administrative et financière</li>
                <li>• Optimisation de la trésorerie</li>
                <li>• Plan d'action de redressement</li>
                <li>• Accompagnement au changement</li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link href="/nos-expertises/structuration-relance">
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="expertise-card">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Conseil digital & outils de gestion</CardTitle>
              <CardDescription>
                Choisir et déployer les bons outils pour gagner en efficacité, sans se perdre dans la technologie.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                <li>• Audit de vos besoins digitaux</li>
                <li>• Sélection d'outils adaptés à votre activité</li>
                <li>• Formation et accompagnement au déploiement</li>
                <li>• Automatisation des tâches répétitives</li>
                <li>• Optimisation de votre présence en ligne</li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link href="/nos-expertises/conseil-digital">
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-advalis-heading font-bold mb-4">
            Comment pouvons-nous vous accompagner ?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Chaque projet est unique. Contactez-nous pour échanger sur vos enjeux 
            et découvrir comment nos expertises peuvent répondre à vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Échangeons
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/nos-secteurs">
                Découvrir nos secteurs
              </Link>
            </Button>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
