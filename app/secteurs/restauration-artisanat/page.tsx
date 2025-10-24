import { PageBanner } from '@/components/page-banner'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { UtensilsCrossed, Target, FileText, BarChart3, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function RestaurationArtisanatPage() {
  return (
    <div className="flex flex-col">
      {/* Page Banner */}
      <PageBanner
        title="Restauration & artisanat"
        subtitle="Redonner de la respiration aux métiers manuels"
        description="Les artisans et restaurateurs exercent avec passion, mais souvent dans la précipitation. Entre la production, le personnel, les clients et la paperasse, la gestion devient un poids invisible."
        backgroundImage="/images/banners/Secteurs_Advalis.jpg"
      />

      <div className="py-20">
        <div className="container mx-auto px-4">
          
          {/* Introduction */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-8">
                Peu ont les moyens d'un service administratif dédié ; beaucoup se battent seuls pour rester à flot.
              </p>
              <p className="text-lg text-muted-foreground">
                <strong>Advalis</strong> leur apporte une aide pragmatique : un cadre clair, des outils concrets 
                et un accompagnement qui respecte leur rythme.
              </p>
              <p className="text-lg text-muted-foreground mt-4">
                Notre objectif : transformer la gestion en soutien, et non en contrainte.
              </p>
            </div>
          </section>

          {/* Comment nous accompagnons */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 mt-8 text-gray-900">Comment nous accompagnons nos clients</h2>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>Mettre à plat</strong> les coûts et la rentabilité pour y voir clair.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>Alléger</strong> la charge administrative et les formalités.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>Stabiliser</strong> la trésorerie et les obligations sociales.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                <strong>Accompagner</strong> la relance ou la transmission avec méthode.
              </p>
              <blockquote className="border-l-4 border-orange-500 pl-6 italic text-lg mb-8">
                "La simplicité n'est pas une faiblesse : c'est ce qui permet de durer."
              </blockquote>
            </div>
          </section>

          {/* Nos capacités */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 mt-8 text-gray-900">Nos capacités</h2>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>1. Diagnostic global</strong><br/>
                Analyse des charges, marges, dettes et flux de trésorerie.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>2. Structuration administrative</strong><br/>
                Organisation des documents, échéances, process internes.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>3. Conformité & paie</strong><br/>
                Appui sur les contrats, bulletins, obligations sociales et fiscales.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                <strong>4. Plan d'action</strong><br/>
                Relance d'activité, recentrage et accompagnement dans les périodes charnières.
              </p>
            </div>
          </section>

          {/* Approche */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 mt-8 text-gray-900">Une aide à taille humaine</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Nous travaillons avec la même exigence que ceux que nous accompagnons : précision, discipline, constance.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Notre mission est simple : que le dirigeant puisse enfin respirer.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-muted/50 rounded-lg p-8">
              <h2 className="text-2xl font-advalis-heading font-bold mb-4">
                Prêt à retrouver votre respiration ?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Échangeons sur votre situation et découvrons ensemble comment Advalis peut vous accompagner 
                dans la structuration et la simplification de votre activité artisanale ou de restauration.
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
