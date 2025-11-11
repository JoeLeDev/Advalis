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
              <p className="text-lg text-muted-foreground mt-4">
                Notre accompagnement n'est pas théorique : il se vit au rythme de l'entreprise, avec des solutions concrètes, 
                adaptées à la réalité du terrain.
              </p>
            </div>
          </section>

          {/* Comment nous accompagnons */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 mt-8 text-gray-900">Comment nous accompagnons nos clients</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Nous travaillons aux côtés des gérants, indépendants et responsables de points de vente pour :
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>Clarifier</strong> les coûts, les marges et la rentabilité réelle.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>Simplifier</strong> la gestion administrative, comptable et fiscale.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>Anticiper</strong> les périodes sensibles pour mieux piloter la trésorerie.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                <strong>Recentrer</strong> l'activité sur ce qui crée réellement de la valeur.
              </p>
              <blockquote className="border-l-4 border-green-500 pl-6 italic text-lg mb-8">
                "Le commerce repose sur des fondations simples : confiance, rigueur et cohérence. Nous aidons à les restaurer."
              </blockquote>
            </div>
          </section>

          {/* Nos capacités */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 mt-8 text-gray-900">Nos capacités</h2>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>1. Diagnostic d'activité</strong><br/>
                Analyse des coûts, des ventes et des écarts pour identifier les leviers d'équilibre.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>2. Gestion & obligations</strong><br/>
                Appui URSSAF, TVA, impôts, formalités et simplification du suivi administratif.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>3. Pilotage de la trésorerie</strong><br/>
                Outils simples de prévision, suivi des flux, équilibre entre rentrées et charges.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                <strong>4. Relance & repositionnement</strong><br/>
                Aide à la décision, plan de redressement, accompagnement à la relance.
              </p>
            </div>
          </section>

          {/* Approche */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 mt-8 text-gray-900">Une approche réaliste et engagée</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Nous croyons que chaque commerce local mérite un accompagnement de qualité, à hauteur de son engagement.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
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
                    Découvrir nos savoir-faire
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
