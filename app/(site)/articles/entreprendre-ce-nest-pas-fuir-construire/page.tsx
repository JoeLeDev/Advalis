import { BlogArticleComponent } from '@/components/blog-article'
import { getArticleBySlug } from '@/config/articles'

export default function EntreprendreCeNestPasFuirConstruirePage() {
  const article = getArticleBySlug('entreprendre-ce-nest-pas-fuir-construire')
  
  if (!article || !article.content) {
    return (
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-2xl font-bold">Article non trouvé</h1>
        <p className="text-muted-foreground">L&apos;article que vous recherchez n&apos;existe pas.</p>
      </div>
    )
  }

  return <BlogArticleComponent article={article} />
}
