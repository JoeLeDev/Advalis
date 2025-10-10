import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PageBanner } from '@/components/page-banner'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'

export default function ArticlesPage() {
  const articles = [
    {
      id: 1,
      title: "L'économie circulaire : un défi stratégique pour les entreprises",
      excerpt: "Comment intégrer les principes de l'économie circulaire dans votre modèle économique pour créer de la valeur tout en préservant les ressources.",
      category: "Stratégie",
      readTime: "8 min",
      date: "15 Janvier 2024",
      image: "bg-gradient-to-br from-blue-100 to-blue-200"
    },
    {
      id: 2,
      title: "Transformation digitale : les clés du succès",
      excerpt: "Guide pratique pour réussir votre transformation digitale et tirer parti des nouvelles technologies dans votre organisation.",
      category: "Transformation",
      readTime: "12 min",
      date: "8 Janvier 2024",
      image: "bg-gradient-to-br from-green-100 to-green-200"
    },
    {
      id: 3,
      title: "Leadership et quête de sens au travail",
      excerpt: "Comment créer un environnement de travail porteur de sens et développer un leadership inspirant pour vos équipes.",
      category: "Capital Humain",
      readTime: "10 min",
      date: "2 Janvier 2024",
      image: "bg-gradient-to-br from-purple-100 to-purple-200"
    },
    {
      id: 4,
      title: "Innovation et disruption : anticiper les changements",
      excerpt: "Stratégies pour identifier les signaux faibles et anticiper les disruptions dans votre secteur d'activité.",
      category: "Innovation",
      readTime: "15 min",
      date: "28 Décembre 2023",
      image: "bg-gradient-to-br from-amber-100 to-amber-200"
    },
    {
      id: 5,
      title: "Performance opérationnelle : mesurer pour améliorer",
      excerpt: "Mise en place d'indicateurs pertinents et optimisation continue de vos processus pour améliorer vos performances.",
      category: "Opérations",
      readTime: "9 min",
      date: "20 Décembre 2023",
      image: "bg-gradient-to-br from-red-100 to-red-200"
    },
    {
      id: 6,
      title: "Gestion de crise : préparer et réagir efficacement",
      excerpt: "Méthodologie pour anticiper les crises et mettre en place des plans de contingence robustes dans votre organisation.",
      category: "Risques",
      readTime: "11 min",
      date: "12 Décembre 2023",
      image: "bg-gradient-to-br from-indigo-100 to-indigo-200"
    }
  ]

  const categories = ["Tous", "Stratégie", "Transformation", "Capital Humain", "Innovation", "Opérations", "Risques"]

  return (
    <div className="flex flex-col">
      {/* Page Banner */}
      <PageBanner
        title="Nos articles & ressources"
        subtitle="Insights et analyses pour éclairer vos décisions stratégiques"
        description="Découvrez nos réflexions sur les enjeux contemporains du management et de la transformation."
        backgroundImage="/images/banners/placeholder.svg"
      />

      <div className="py-20">
        <div className="container mx-auto px-4">

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
