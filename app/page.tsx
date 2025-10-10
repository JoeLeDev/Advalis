import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PageBanner } from '@/components/page-banner'
import Link from 'next/link'
import { ArrowRight, Target, Building2, FileText, Users, Lightbulb } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <PageBanner
        title="Cabinet de conseil privé"
        subtitle="Accompagnement stratégique"
        description="Nous vous accompagnons dans votre transformation et votre croissance avec une approche globale et des solutions adaptées."
        backgroundImage="/images/banners/placeholder.svg"
      >
        <div className="flex flex-col sm:flex-row gap-4 text-white">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/nos-expertises">
              Découvrir nos expertises et services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-white" asChild>
            <Link href="/contact">
              Échangeons sur votre projet
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </PageBanner>

      {/* Nos Expertises Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-advalis-heading font-bold mb-4">
              Nos expertises et services  
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des savoir-faire clés pour transformer les modèles de demain
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="expertise-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Stratégie & Business Models</CardTitle>
                <CardDescription>
                  Définition de votre vision stratégique et optimisation de vos modèles économiques
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/nos-expertises/strategie">
                    En savoir plus
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="expertise-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Transformation Organisationnelle</CardTitle>
                <CardDescription>
                  Accompagnement du changement et optimisation des processus internes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/nos-expertises/transformation">
                    En savoir plus
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="expertise-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Capital Humain & Engagement</CardTitle>
                <CardDescription>
                  Développement des talents et renforcement de l'engagement collaborateur
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/nos-expertises/capital-humain">
                    En savoir plus
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nos Secteurs de Référence Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-advalis-heading font-bold mb-4">
              Nos secteurs de référence
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des équipes expertes des grands enjeux stratégiques des secteurs de notre économie
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="expertise-card">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">Industrie</CardTitle>
              </CardHeader>
            </Card>

            <Card className="expertise-card">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">Grande Consommation</CardTitle>
              </CardHeader>
            </Card>

            <Card className="expertise-card">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">Distribution</CardTitle>
              </CardHeader>
            </Card>

            <Card className="expertise-card">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">Luxe</CardTitle>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/nos-secteurs">
                Découvrir tous nos secteurs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-advalis-heading font-bold mb-4">
              Nos articles & ressources
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights et analyses pour éclairer vos décisions stratégiques
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="expertise-card">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4"></div>
                <CardTitle className="text-lg">
                  L'économie circulaire : un défi stratégique pour les entreprises
                </CardTitle>
                <CardDescription>
                  Comment intégrer les principes de l'économie circulaire dans votre modèle économique
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/articles/economie-circulaire">
                    Lire l'article
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="expertise-card">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-4"></div>
                <CardTitle className="text-lg">
                  Transformation digitale : les clés du succès
                </CardTitle>
                <CardDescription>
                  Guide pratique pour réussir votre transformation digitale
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/articles/transformation-digitale">
                    Lire l'article
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="expertise-card">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg mb-4"></div>
                <CardTitle className="text-lg">
                  Leadership et quête de sens au travail
                </CardTitle>
                <CardDescription>
                  Comment créer un environnement de travail porteur de sens
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/articles/leadership-sens">
                    Lire l'article
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/articles">
                Voir tous nos articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-advalis-heading font-bold mb-4">
              Prêt à transformer votre organisation ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contactez-nous pour échanger sur vos enjeux et découvrir comment nous pouvons vous accompagner.
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
      </section>
    </div>
  )
}
