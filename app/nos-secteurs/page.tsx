import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PageBanner } from '@/components/page-banner'
import Link from 'next/link'
import { ArrowRight, Building2, Users, Target, Lightbulb, ShoppingCart, Factory, Sparkles } from 'lucide-react'

export default function NosSecteursPage() {
  return (
    <div className="flex flex-col">
      {/* Page Banner */}
      <PageBanner
        title="Nos secteurs de référence"
        subtitle="Des équipes expertes des grands enjeux stratégiques"
        description="Nous comprenons les spécificités de votre métier pour vous proposer des solutions adaptées."
        backgroundImage="/images/banners/placeholder.svg"
      />

      <div className="py-20">
        <div className="container mx-auto px-4">

        {/* Secteurs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="expertise-card">
            <CardHeader>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Building2 className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl">Industrie</CardTitle>
              <CardDescription className="text-base">
                Accompagnement des industriels dans leur transformation digitale et leur transition énergétique
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Enjeux clés :</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Transformation digitale et industrie 4.0</li>
                    <li>• Transition énergétique et décarbonation</li>
                    <li>• Optimisation des chaînes de production</li>
                    <li>• Gestion des risques et conformité</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Nos services :</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Stratégie de transformation digitale</li>
                    <li>• Optimisation opérationnelle</li>
                    <li>• Gestion de la supply chain</li>
                    <li>• Accompagnement RSE</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="expertise-card">
            <CardHeader>
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl">Grande Consommation</CardTitle>
              <CardDescription className="text-base">
                Expertise dans l'évolution des modes de consommation et l'adaptation des business models
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Enjeux clés :</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Évolution des comportements consommateurs</li>
                    <li>• Digitalisation de la distribution</li>
                    <li>• Durabilité et économie circulaire</li>
                    <li>• Innovation produit et packaging</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Nos services :</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Stratégie de marque et positionnement</li>
                    <li>• Transformation commerciale</li>
                    <li>• Innovation et R&D</li>
                    <li>• Performance opérationnelle</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="expertise-card">
            <CardHeader>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <ShoppingCart className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl">Distribution</CardTitle>
              <CardDescription className="text-base">
                Accompagnement des distributeurs dans leur transformation omnicanale et leur optimisation logistique
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Enjeux clés :</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Transformation omnicanale</li>
                    <li>• Optimisation de l'expérience client</li>
                    <li>• Efficacité logistique</li>
                    <li>• Gestion des données clients</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Nos services :</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Stratégie omnicanale</li>
                    <li>• Optimisation des réseaux</li>
                    <li>• Transformation digitale</li>
                    <li>• Data analytics et CRM</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="expertise-card">
            <CardHeader>
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-6">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl">Luxe</CardTitle>
              <CardDescription className="text-base">
                Expertise dans l'univers du luxe : savoir-faire artisanal, exclusivité et expérience client premium
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Enjeux clés :</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Préservation du savoir-faire artisanal</li>
                    <li>• Digitalisation sans dénaturer</li>
                    <li>• Durabilité et responsabilité</li>
                    <li>• Expérience client exceptionnelle</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Nos services :</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Stratégie de marque luxe</li>
                    <li>• Excellence opérationnelle</li>
                    <li>• Transformation digitale adaptée</li>
                    <li>• Développement international</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Secteurs supplémentaires */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-semibold mb-2">Services</h3>
            <p className="text-sm text-muted-foreground">Conseil, audit, formation</p>
          </Card>

          <Card className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Factory className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-semibold mb-2">Énergie</h3>
            <p className="text-sm text-muted-foreground">Transition énergétique</p>
          </Card>

          <Card className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-semibold mb-2">Tech & Innovation</h3>
            <p className="text-sm text-muted-foreground">Startups, scale-ups</p>
          </Card>

          <Card className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-semibold mb-2">Associations</h3>
            <p className="text-sm text-muted-foreground">ONG, fondations</p>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-advalis-heading font-bold mb-4">
            Votre secteur n'est pas listé ?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Notre approche transversale nous permet de nous adapter à tous les secteurs. 
            Contactez-nous pour échanger sur les spécificités de votre domaine d'activité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Échangeons
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
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
