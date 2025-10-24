import { ReactNode } from 'react'

interface PageBannerProps {
  title: string
  subtitle?: string
  description?: string
  backgroundImage?: string
  children?: ReactNode
}

export function PageBanner({ 
  title, 
  subtitle, 
  description, 
  backgroundImage = "/images/banners/placeholder.svg",
  children 
}: PageBannerProps) {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          {subtitle && (
            <p className="text-white/80 text-lg mb-4 font-light">
              {subtitle}
            </p>
          )}
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          
          {description && (
            <p className="text-white/90 text-xl md:text-2xl max-w-3xl leading-relaxed">
              {description}
            </p>
          )}
          
          {children && (
            <div className="mt-8">
              {children}
            </div>
          )}
        </div>
      </div>
      
      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-primary/20 to-transparent" />
    </section>
  )
}
