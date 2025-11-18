import { PageBanner } from '@/components/page-banner'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Tag, ArrowRight } from 'lucide-react'
import { Article, getPublishedArticles } from '@/config/articles'

interface BlogArticleProps {
  article: Article
}

export function BlogArticleComponent({ article }: BlogArticleProps) {
  // Récupérer tous les articles publiés
  const publishedArticles = getPublishedArticles()
  const currentIndex = publishedArticles.findIndex(a => a.id === article.id)
  
  // Article précédent et suivant
  const previousArticle = currentIndex > 0 ? publishedArticles[currentIndex - 1] : null
  const nextArticle = currentIndex < publishedArticles.length - 1 ? publishedArticles[currentIndex + 1] : null

  return (
    <div className="flex flex-col">
      {/* Page Banner */}
      <PageBanner
        title={article.title}
        subtitle={article.subtitle}
        backgroundImage={article.backgroundImage}
      />

      {/* Article Content */}
      <article className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Publié le {article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{article.readTime} de lecture</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4" />
              <span>{article.category}</span>
            </div>
          </div>

          {/* Back to Articles */}
          <div className="mb-12">
            <Button
              asChild
              className="group bg-accentSoft text-accentSoft-foreground border-none hover:bg-accentSoft/90 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <Link href="/articles" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Retour aux articles
              </Link>
            </Button>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {article.content?.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold mb-6 mt-8 text-gray-900">{section.title}</h2>
                
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}

                {section.quote && (
                  <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-lg">
                    <p>{section.quote}</p>
                  </blockquote>
                )}

                {index < (article.content?.sections.length || 0) - 1 && (
                  <hr className="my-12 border-gray-200" />
                )}
              </div>
            ))}

            {/* Call to Action */}
            {article.content?.cta && (
              <div className="bg-muted/30 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">{article.content.cta.title}</h3>
                <p className="text-lg mb-6">
                  {article.content.cta.description}
                </p>
                <Button
                  size="lg"
                  asChild
                  className="group bg-accentSoft text-accentSoft-foreground border-none hover:bg-accentSoft/90 hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <Link href={article.content.cta.buttonLink} className="flex items-center justify-center">
                    {article.content.cta.buttonText}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            )}

          </div>

          {/* Navigation to other articles */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="text-center sm:text-left">
                {previousArticle ? (
                  <>
                    <p className="text-sm text-muted-foreground mb-2">Article précédent</p>
                    <Link href={`/articles/${previousArticle.slug}`} className="text-primary hover:underline font-medium">
                      {previousArticle.title}
                    </Link>
                  </>
                ) : (
                  <>
                    <p className="text-sm text-muted-foreground mb-2">Article précédent</p>
                    <Link href="/articles" className="text-primary hover:underline font-medium">
                      Retour aux articles
                    </Link>
                  </>
                )}
              </div>
              <div className="text-center sm:text-right">
                {nextArticle ? (
                  <>
                    <p className="text-sm text-muted-foreground mb-2">Article suivant</p>
                    <Link href={`/articles/${nextArticle.slug}`} className="text-primary hover:underline font-medium">
                      {nextArticle.title}
                    </Link>
                  </>
                ) : (
                  <>
                    <p className="text-sm text-muted-foreground mb-2">Article suivant</p>
                    <Link href="/articles" className="text-primary hover:underline font-medium">
                      Voir tous les articles
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>

        </div>
      </article>
    </div>
  )
}
