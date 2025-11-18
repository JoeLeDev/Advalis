import { PageBanner } from '@/components/page-banner'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Palette, Target, FileText, BarChart3, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function CultureCreationProductionPage() {
  return (
    <div className="flex flex-col">
      {/* Page Banner */}
      <PageBanner
        title="Culture, création & production"
        subtitle="Donner un cadre à la liberté créative"
        description="Les artistes, créateurs et entrepreneurs culturels vivent dans un équilibre fragile : inspiration d'un côté, exigences administratives de l'autre."
        backgroundImage="/images/banners/Secteurs_Advalis.jpg"
      />

      <div className="py-20">
        <div className="container mx-auto px-4">
          
          {/* Introduction */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-8">
                Créer, c'est dialoguer avec l'imprévisible ; gérer, c'est ancrer ce mouvement dans la durée.
              </p>
              <p className="text-lg text-muted-foreground">
                Beaucoup peinent à concilier les deux.
              </p>
              <p className="text-lg text-muted-foreground mt-4">
                <strong>Advalis</strong> accompagne ces acteurs pour structurer leur activité, 
                formaliser leurs projets et sécuriser leurs démarches, sans jamais altérer leur liberté artistique.
              </p>
              <p className="text-lg text-muted-foreground mt-4">
                Notre approche valorise la créativité tout en lui donnant les fondations nécessaires pour durer.
              </p>
            </div>
          </section>

          {/* Comment nous accompagnons */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 mt-8 text-gray-900">Comment nous accompagnons nos clients</h2>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>Organiser</strong> la gestion administrative et financière.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>Clarifier</strong> la relation entre création, statut et revenus.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>Accompagner</strong> les projets collectifs, collaborations et financements.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                <strong>Apporter</strong> une méthode souple, adaptée au rythme de la création.
              </p>
              <blockquote className="border-l-4 border-amber-500 pl-6 italic text-lg mb-8">
                "La liberté s'exprime pleinement quand elle repose sur une base solide."
              </blockquote>
            </div>
          </section>

          {/* Nos capacités */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 mt-8 text-gray-900">Nos capacités</h2>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>1. Structuration d'activité</strong><br/>
                Définition du cadre juridique, administratif et fiscal adapté à votre activité créative.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>2. Gestion de projet</strong><br/>
                Planification, budget, contrats et suivi des partenaires pour vos projets culturels.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>3. Suivi financier</strong><br/>
                Outils de gestion des revenus et dépenses liés aux projets et à l'activité créative.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                <strong>4. Développement & partenariats</strong><br/>
                Aide à la mise en réseau et à la recherche de soutiens pour développer votre activité.
              </p>
            </div>
          </section>

          {/* Approche */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 mt-8 text-gray-900">Un accompagnement respectueux et lucide</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Advalis croit que la rigueur n'est pas l'ennemie de la création, mais sa condition d'équilibre.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Nous offrons un cadre clair pour permettre aux idées de s'épanouir pleinement.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-muted/50 rounded-lg p-8">
              <h2 className="text-2xl font-advalis-heading font-bold mb-4">
                Prêt à structurer votre créativité ?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Échangeons sur votre situation et découvrons ensemble comment Advalis peut vous accompagner 
                dans la structuration et le développement de votre activité culturelle ou créative.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Échangeons ensemble
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  asChild
                  className="group bg-accentSoft text-accentSoft-foreground border-none hover:bg-accentSoft/90 hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <Link href="/nos-expertises" className="flex items-center justify-center">
                    Découvrir nos savoir-faire
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
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
