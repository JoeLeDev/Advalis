import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PageBanner } from '@/components/page-banner'
import Link from 'next/link'
import { ArrowRight, Building2, Users, Target, Lightbulb, ShoppingCart, Factory, Sparkles, Briefcase, Store, UtensilsCrossed, Heart, Palette } from 'lucide-react'
import { getActiveSecteurs } from '@/config/secteurs'

export default function NosSecteursPage() {
  return (
    <div className="flex flex-col">
      {/* Page Banner */}
      <PageBanner
        title="Secteurs d'intervention"
        subtitle="Nous accompagnons ceux qui font vivre les territoires"
        description="Artisans, restaurateurs, associations, indépendants, porteurs de projet : nous comprenons vos réalités et vos enjeux."
        backgroundImage="/images/banners/Secteurs_Advalis.jpg"
      />

      <div className="py-20">
        <div className="container mx-auto px-4">

        {/* Secteurs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="expertise-card">
            <CardHeader>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl">Service & conseil</CardTitle>
              <CardDescription className="text-base">
                Accompagnement des professionnels du service dans leur structuration et leur développement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Enjeux clés :</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Structuration de l&apos;offre de services</li>
                    <li>• Tarification et positionnement</li>
                    <li>• Gestion de la relation client</li>
                    <li>• Développement commercial</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Notre accompagnement :</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Clarification de votre offre</li>
                    <li>• Mise en place d&apos;outils de gestion</li>
                    <li>• Stratégie de développement</li>
                    <li>• Optimisation administrative</li>
                  </ul>
                </div>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/secteurs/service-conseil">
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="expertise-card">
            <CardHeader>
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-6">
                <Store className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl">Commerce & distribution</CardTitle>
              <CardDescription className="text-base">
                Soutien aux commerces de proximité et aux distributeurs dans leur adaptation et leur croissance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Enjeux clés :</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Gestion des stocks et approvisionnement</li>
                    <li>• Relation client et fidélisation</li>
                    <li>• Présence digitale (e-commerce, réseaux)</li>
                    <li>• Optimisation de la rentabilité</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Notre accompagnement :</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Pilotage financier et trésorerie</li>
                    <li>• Stratégie omnicanale</li>
                    <li>• Outils de gestion adaptés</li>
                    <li>• Accompagnement digital</li>
                  </ul>
                </div>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/secteurs/commerce-distribution">
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="expertise-card">
            <CardHeader>
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-6">
                <UtensilsCrossed className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl">Restauration & artisanat</CardTitle>
              <CardDescription className="text-base">
                Accompagnement des artisans et restaurateurs dans la structuration et la pérennisation de leur activité
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Enjeux clés :</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Gestion des coûts et des marges</li>
                    <li>• Organisation du travail et planning</li>
                    <li>• Conformité réglementaire</li>
                    <li>• Développement et visibilité</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Notre accompagnement :</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Structuration administrative</li>
                    <li>• Suivi de la rentabilité</li>
                    <li>• Optimisation des processus</li>
                    <li>• Stratégie de développement</li>
                  </ul>
                </div>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/secteurs/restauration-artisanat">
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="expertise-card">
            <CardHeader>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl">Économie sociale & associative</CardTitle>
              <CardDescription className="text-base">
                Soutien aux associations, ONG et structures de l'ESS dans leur organisation et leur impact
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Enjeux clés :</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Gouvernance et organisation</li>
                    <li>• Recherche de financements</li>
                    <li>• Mesure d'impact social</li>
                    <li>• Professionnalisation de la gestion</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Notre accompagnement :</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Structuration administrative</li>
                    <li>• Pilotage budgétaire</li>
                    <li>• Stratégie de développement</li>
                    <li>• Outils de reporting</li>
                  </ul>
                </div>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/secteurs/economie-sociale-associative">
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="expertise-card">
            <CardHeader>
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl">Professionnels du bien-être & du soin</CardTitle>
              <CardDescription className="text-base">
                Accompagnement des praticiens et structures du bien-être dans leur organisation et leur développement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Enjeux clés :</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Organisation des rendez-vous et planning</li>
                    <li>• Tarification et facturation</li>
                    <li>• Conformité et réglementation</li>
                    <li>• Visibilité et communication</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Notre accompagnement :</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Choix du statut adapté</li>
                    <li>• Mise en place d&apos;outils de gestion</li>
                    <li>• Suivi financier et fiscal</li>
                    <li>• Stratégie de développement</li>
                  </ul>
                </div>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/secteurs/bien-etre-soin">
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="expertise-card">
            <CardHeader>
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-6">
                <Palette className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl">Culture, création & production</CardTitle>
              <CardDescription className="text-base">
                Soutien aux créateurs, artistes et structures culturelles dans leur structuration et leur viabilité
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Enjeux clés :</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Modèle économique et sources de revenus</li>
                    <li>• Gestion de projets et production</li>
                    <li>• Recherche de financements et subventions</li>
                    <li>• Propriété intellectuelle</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Notre accompagnement :</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Structuration juridique et fiscale</li>
                    <li>• Gestion administrative</li>
                    <li>• Budgétisation de projets</li>
                    <li>• Stratégie de développement</li>
                  </ul>
                </div>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/secteurs/culture-creation-production">
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-advalis-heading font-bold mb-4">
            Votre secteur n&apos;est pas listé ?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Notre approche transversale nous permet de nous adapter à tous les secteurs. 
            Contactez-nous pour échanger sur les spécificités de votre domaine d&apos;activité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hover:scale-105 transition-transform duration-300" asChild>
              <Link href="/contact">
                Échangeons
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="hover:scale-105 transition-transform duration-300" asChild>
              <Link href="/nos-expertises">
                Découvrir nos expertises
              </Link>
            </Button>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
