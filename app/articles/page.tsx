'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PageBanner } from '@/components/page-banner'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import { useState } from 'react'
import { articles, categories, categoryDescriptions } from '@/config/articles'

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  
  const filteredArticles = selectedCategory === "Tous" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory)

  return (
    <div className="flex flex-col">
      {/* Page Banner */}
      <PageBanner
        title="Nos inspirations"
        subtitle="Regards, analyses et réflexions sur la gestion, la structure et la performance organisationnelle"
        description="Chez Advalis, nous croyons que le conseil ne se limite pas aux chiffres ni aux outils. Il s&apos;agit avant tout de comprendre, de réfléchir et de faire évoluer les pratiques."
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
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Category Description */}
        {selectedCategory !== "Tous" && (
          <div className="max-w-2xl mx-auto text-center mb-12">
            <blockquote className="text-lg text-muted-foreground italic border-l-4 border-primary pl-6">
              {categoryDescriptions[selectedCategory as keyof typeof categoryDescriptions]}
            </blockquote>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredArticles.map((article) => {
            const IconComponent = article.icon
            return (
              <Card key={article.id} className="expertise-card">
                <CardHeader>
                  <div className={`w-full h-48 ${article.image} rounded-lg mb-4 flex items-center justify-center relative`}>
                    <div className={`w-16 h-16 bg-gradient-to-br ${article.color} rounded-lg flex items-center justify-center`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
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
                    <Link href={`/articles/${article.slug || article.id}`}>
                      Lire l&apos;article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
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
              S&apos;abonner
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-advalis-heading font-bold mb-4">
            Besoin d&apos;un accompagnement personnalisé ?
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