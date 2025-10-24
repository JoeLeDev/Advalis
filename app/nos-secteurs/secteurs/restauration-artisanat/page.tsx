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
            <div className="text-center mb-12">
              <h2 className="text-3xl font-advalis-heading font-bold mb-4">
                Comment nous accompagnons nos clients
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle>Mettre à plat</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Les coûts et la rentabilité pour y voir clair dans votre activité.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle>Alléger</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    La charge administrative et les formalités pour vous libérer du temps.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle>Stabiliser</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    La trésorerie et les obligations sociales pour retrouver la sérénité.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle>Accompagner</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    La relance ou la transmission avec méthode et bienveillance.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <blockquote className="border-l-4 border-orange-500 pl-6 italic text-lg max-w-3xl mx-auto">
                "La simplicité n'est pas une faiblesse : c'est ce qui permet de durer."
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
                  <CardTitle className="text-lg">1. Diagnostic global</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Analyse des charges, marges, dettes et flux de trésorerie.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">2. Structuration administrative</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Organisation des documents, échéances, process internes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">3. Conformité & paie</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Appui sur les contrats, bulletins, obligations sociales et fiscales.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">4. Plan d'action</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Relance d'activité, recentrage et accompagnement dans les périodes charnières.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Approche */}
          <section className="mb-16">
            <div className="bg-muted/30 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-advalis-heading font-bold mb-4">
                Une aide à taille humaine
              </h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
                Nous travaillons avec la même exigence que ceux que nous accompagnons : précision, discipline, constance.
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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
