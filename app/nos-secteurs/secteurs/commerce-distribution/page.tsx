import { PageBanner } from '@/components/page-banner'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Store, Target, BarChart3, FileText, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function CommerceDistributionPage() {
  return (
    <div className="flex flex-col">
      {/* Page Banner */}
      <PageBanner
        title="Commerce & distribution"
        subtitle="Remettre de la clarté dans un environnement en tension"
        description="Entre la hausse des coûts, l'évolution des modes de consommation et la concurrence numérique, les commerçants et distributeurs vivent une transformation silencieuse."
        backgroundImage="/images/banners/Secteurs_Advalis.jpg"
      />

      <div className="py-20">
        <div className="container mx-auto px-4">
          
          {/* Introduction */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-8">
                Leur énergie se disperse entre gestion quotidienne, adaptation aux règles et survie économique. 
                Peu ont le temps de s'arrêter pour relire leurs chiffres, ajuster leur modèle et redonner du sens à leurs décisions.
              </p>
              <p className="text-lg text-muted-foreground">
                <strong>Advalis</strong> intervient là où la confusion s'installe : pour aider à y voir clair, 
                simplifier la gestion et retrouver une stabilité durable.
              </p>
            </div>
          </section>

          {/* Comment nous accompagnons */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-advalis-heading font-bold mb-4">
                Comment nous accompagnons nos clients
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Nous travaillons aux côtés des gérants, indépendants et responsables de points de vente pour :
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>Clarifier</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Les coûts, les marges et la rentabilité réelle pour y voir clair dans vos chiffres.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>Simplifier</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    La gestion administrative, comptable et fiscale pour alléger votre charge mentale.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>Anticiper</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Les périodes sensibles pour mieux piloter la trésorerie et éviter les surprises.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Store className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>Recentrer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    L'activité sur ce qui crée réellement de la valeur pour votre commerce.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <blockquote className="border-l-4 border-green-500 pl-6 italic text-lg max-w-3xl mx-auto">
                "Le commerce repose sur des fondations simples : confiance, rigueur et cohérence. Nous aidons à les restaurer."
              </blockquote>
            </div>
          </section>

          {/* Nos capacités */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-advalis-heading font-bold mb-4">
                Nos capacités
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">1. Diagnostic d'activité</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Analyse des coûts, des ventes et des écarts pour identifier les leviers d'équilibre.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">2. Gestion & obligations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Appui URSSAF, TVA, impôts, formalités et simplification du suivi administratif.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">3. Pilotage de la trésorerie</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Outils simples de prévision, suivi des flux, équilibre entre rentrées et charges.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">4. Relance & repositionnement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Aide à la décision, plan de redressement, accompagnement à la relance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Approche */}
          <section className="mb-16">
            <div className="bg-muted/30 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-advalis-heading font-bold mb-4">
                Une approche réaliste et engagée
              </h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
                Nous croyons que chaque commerce local mérite un accompagnement de qualité, à hauteur de son engagement.
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Advalis, c'est le conseil sans costume inutile : concret, structuré et tourné vers la réussite durable.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-muted/50 rounded-lg p-8">
              <h2 className="text-2xl font-advalis-heading font-bold mb-4">
                Prêt à clarifier votre commerce ?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Échangeons sur votre situation et découvrons ensemble comment Advalis peut vous accompagner 
                dans la clarification et la structuration de votre activité commerciale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Échangeons ensemble
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
          </section>

        </div>
      </div>
    </div>
  )
}
