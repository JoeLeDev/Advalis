import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PageBanner } from '@/components/page-banner'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'

export default function ArticlesPage() {
  const articles = [
    {
      id: 1,
      title: "Avant d'aller plus vite, allez plus clair",
      excerpt: "Comment la clarté structurelle évite 80% des erreurs de gestion ?",
      category: "Structurer",
      readTime: "8 min",
      date: "15 Janvier 2024",
      image: "bg-gradient-to-br from-blue-100 to-blue-200"
    },
    {
      id: 2,
      title: "Le vrai coût du désordre administratif",
      excerpt: "Pourquoi un suivi approximatif freine votre croissance sans que vous le réalisiez ?",
      category: "Structurer",
      readTime: "10 min",
      date: "10 Janvier 2024",
      image: "bg-gradient-to-br from-blue-100 to-blue-200"
    },
    {
      id: 3,
      title: "Micro-entreprise : la simplicité qui peut coûter cher",
      excerpt: "Les limites cachées d'un régime qu'on croit sans risques",
      category: "Piloter",
      readTime: "12 min",
      date: "5 Janvier 2024",
      image: "bg-gradient-to-br from-green-100 to-green-200"
    },
    {
      id: 4,
      title: "Relancer une activité sans s'épuiser",
      excerpt: "Diagnostic, plan d'action et recentrage : les trois étapes pour retrouver de l'élan",
      category: "Relancer",
      readTime: "15 min",
      date: "28 Décembre 2023",
      image: "bg-gradient-to-br from-orange-100 to-orange-200"
    },
    {
      id: 5,
      title: "Digitaliser, oui. Mais intelligemment",
      excerpt: "Comment choisir ses outils sans se noyer dans la technologie ?",
      category: "Innover et se digitaliser",
      readTime: "9 min",
      date: "20 Décembre 2023",
      image: "bg-gradient-to-br from-purple-100 to-purple-200"
    },
    {
      id: 6,
      title: "Entrepreneur, pas magicien",
      excerpt: "Trouvez la juste exigence entre ambition et réalité",
      category: "Regards humains",
      readTime: "7 min",
      date: "15 Décembre 2023",
      image: "bg-gradient-to-br from-pink-100 to-pink-200"
    },
    {
      id: 7,
      title: "L'accompagnement comme acte de confiance",
      excerpt: "Ce que signifie vraiment \"marcher à vos côtés\"",
      category: "Regards humains",
      readTime: "8 min",
      date: "10 Décembre 2023",
      image: "bg-gradient-to-br from-pink-100 to-pink-200"
    }
  ]

  const categories = ["Tous", "Structurer", "Piloter", "Relancer", "Innover et se digitaliser", "Regards humains"]

  return (
    <div className="flex flex-col">
      {/* Page Banner */}
      <PageBanner
        title="Inspirations"
        subtitle="Regards, analyses et pistes de réflexion"
        description="Chez Advalis, nous croyons que le conseil ne se limite pas aux chiffres ni aux outils. Il s'agit avant tout de comprendre, de réfléchir et de faire évoluer les pratiques."
        backgroundImage="/images/banners/placeholder.svg"
      />

      <div className="py-20">
        <div className="container mx-auto px-4">

        {/* Intro Text */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed">
            À travers cette page, nous partagons des <strong>regards, analyses et pistes de réflexion</strong> sur le pilotage, la gestion et la structuration des activités.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            Des articles pour <strong>inspirer</strong>, <strong>éclairer</strong> et <strong>accompagner</strong> ceux qui construisent leur projet au quotidien.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "Tous" ? "default" : "outline"}
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.map((article) => (
            <Card key={article.id} className="expertise-card">
              <CardHeader>
                <div className={`w-full h-48 ${article.image} rounded-lg mb-4`}></div>
                <div className="flex items-center gap-2 mb-2">
                  <Tag className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">{article.category}</span>
                </div>
                <CardTitle className="text-lg leading-tight">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </div>
                </div>
                <Button variant="outline" asChild className="w-full">
                  <Link href={`/articles/${article.id}`}>
                    Lire l'article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-muted/50 rounded-lg p-8 text-center mb-16">
          <h2 className="text-2xl font-advalis-heading font-bold mb-4">
            Restez informé de nos dernières publications
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Recevez nos articles et analyses directement dans votre boîte mail. 
            Des contenus exclusifs pour éclairer vos décisions stratégiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-2 rounded-md border border-input bg-background text-sm"
            />
            <Button>
              S'abonner
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-advalis-heading font-bold mb-4">
            Besoin d'un accompagnement personnalisé ?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nos articles vous inspirent ? Contactez-nous pour échanger sur vos enjeux 
            et découvrir comment nous pouvons vous accompagner concrètement.
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
