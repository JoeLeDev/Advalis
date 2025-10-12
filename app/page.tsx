import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PageBanner } from '@/components/page-banner'
import Link from 'next/link'
import { ArrowRight, Target, Building2, FileText, Users, Lightbulb, UtensilsCrossed, ShoppingBag, Heart, Palette, Briefcase, Store } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <PageBanner
        title="Advalis"
        subtitle="Le lien entre la rigueur d'un cabinet et la réalité d'un entrepreneur"
        description="Un accompagnement exigeant mais humain, fait pour clarifier, structurer et faire grandir ce qui mérite de durer."
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
              Un accompagnement sur-mesure pour structurer, piloter et développer votre activité
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="expertise-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Accompagnement à la création & au développement</CardTitle>
                <CardDescription>
                  De l'idée au lancement : structurer votre projet, valider votre modèle et construire les bases solides pour démarrer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/nos-expertises/creation-developpement">
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
                <CardTitle>Structuration & relance d'activité</CardTitle>
                <CardDescription>
                  Clarifier, organiser et relancer : remettre de l'ordre, retrouver de la visibilité et repartir sur des bases saines
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/nos-expertises/structuration-relance">
                    En savoir plus
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="expertise-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Conseil digital & outils de gestion</CardTitle>
                <CardDescription>
                  Choisir et déployer les bons outils pour gagner en efficacité, sans se perdre dans la technologie
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/nos-expertises/conseil-digital">
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
              Nous accompagnons ceux qui font vivre les territoires
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="expertise-card">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">Service & conseil</CardTitle>
              </CardHeader>
            </Card>

            <Card className="expertise-card">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Store className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">Commerce & distribution</CardTitle>
              </CardHeader>
            </Card>

            <Card className="expertise-card">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <UtensilsCrossed className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">Restauration & artisanat</CardTitle>
              </CardHeader>
            </Card>

            <Card className="expertise-card">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">Économie sociale & associative</CardTitle>
              </CardHeader>
            </Card>

            <Card className="expertise-card">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">Professionnels du bien-être & du soin</CardTitle>
              </CardHeader>
            </Card>

            <Card className="expertise-card">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">Culture, création & production</CardTitle>
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

      {/* Notre Engagement Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-advalis-heading font-bold mb-4">
                Notre engagement
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                Chez <strong>Advalis</strong>, nous nous engageons à être <strong>plus qu'un cabinet de conseil</strong> : un <strong>allié de terrain</strong>, fiable et impliqué, au service des dirigeants qui veulent avancer sereinement.
              </p>
              
              <p className="text-lg leading-relaxed">
                Notre promesse est simple : <strong>vous accompagner avec exigence, clarté et loyauté</strong>, sans jamais vous perdre dans le jargon ou les formules creuses.
              </p>
              
              <p className="text-lg leading-relaxed">
                Nous croyons que le conseil ne doit pas être un luxe réservé aux grandes structures, mais un <strong>levier accessible</strong> à ceux qui font vivre les territoires — artisans, restaurateurs, associations, indépendants, porteurs de projet.
              </p>

              <div className="bg-background rounded-lg p-6 my-8">
                <h3 className="font-semibold text-xl mb-4 text-foreground">Nous travaillons selon quatre principes constants :</h3>
                <ol className="space-y-3 list-none">
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">1.</span>
                    <div>
                      <strong className="text-foreground">Transparence totale</strong> — sur nos méthodes, nos tarifs et nos limites.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">2.</span>
                    <div>
                      <strong className="text-foreground">Proximité réelle</strong> — un contact humain, disponible et à l'écoute.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">3.</span>
                    <div>
                      <strong className="text-foreground">Rigueur professionnelle</strong> — chaque accompagnement repose sur des bases solides, documentées et cohérentes.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">4.</span>
                    <div>
                      <strong className="text-foreground">Progression durable</strong> — notre but n'est pas de vous assister, mais de vous rendre autonome, structuré et confiant.
                    </div>
                  </li>
                </ol>
              </div>

              <blockquote className="border-l-4 border-primary pl-6 italic text-lg">
                En d'autres termes, nous ne faisons pas à votre place :
                nous <strong>marchons à vos côtés</strong>, jusqu'à ce que vous puissiez avancer sans nous.
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-advalis-heading font-bold mb-4">
              Pourquoi nous choisir ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Clarté avant tout</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Une méthode éprouvée</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Un partenaire de terrain</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Un conseil humain</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Une vision durable</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-advalis-heading font-bold mb-4">
              Inspirations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des regards, analyses et pistes de réflexion sur le pilotage, la gestion et la structuration des activités
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="expertise-card">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center">
                  <Target className="h-16 w-16 text-blue-500/50" />
                </div>
                <div className="text-sm text-primary font-semibold mb-2">Structurer</div>
                <CardTitle className="text-lg">
                  Avant d'aller plus vite, allez plus clair
                </CardTitle>
                <CardDescription>
                  Comment la clarté structurelle évite 80% des erreurs de gestion ?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/articles/clarte-structurelle">
                    Lire l'article
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="expertise-card">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-4 flex items-center justify-center">
                  <Building2 className="h-16 w-16 text-green-500/50" />
                </div>
                <div className="text-sm text-primary font-semibold mb-2">Piloter</div>
                <CardTitle className="text-lg">
                  Micro-entreprise : la simplicité qui peut coûter cher
                </CardTitle>
                <CardDescription>
                  Les limites cachées d'un régime qu'on croit sans risques
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/articles/micro-entreprise-limites">
                    Lire l'article
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="expertise-card">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg mb-4 flex items-center justify-center">
                  <Lightbulb className="h-16 w-16 text-purple-500/50" />
                </div>
                <div className="text-sm text-primary font-semibold mb-2">Innover et se digitaliser</div>
                <CardTitle className="text-lg">
                  Digitaliser, oui. Mais intelligemment
                </CardTitle>
                <CardDescription>
                  Comment choisir ses outils sans se noyer dans la technologie ?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/articles/digitaliser-intelligemment">
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
