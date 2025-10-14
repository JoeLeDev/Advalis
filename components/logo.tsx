import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  variant?: 'full' | 'icon' | 'text'
  className?: string
  href?: string
}

export function Logo({ variant = 'full', className, href = '/' }: LogoProps) {
  const logoContent = (
    <div className={cn("flex items-center space-x-3", className)}>
      {variant === 'full' && (
        <Image
          src="/images/logos/logo-advalis-conseil.png"
          alt="Advalis Conseil"
          width={180}
          height={60}
          className="h-24 w-auto"
          priority
        />
      )}

      {variant === 'icon' && (
        <Image
          src="/images/logos/logo-ad-icon.png"
          alt="Advalis"
          width={40}
          height={40}
          className="h-10 w-10"
          priority
        />
      )}

      {variant === 'text' && (
        <div className="flex flex-col">
          <span className="text-xl font-bold text-foreground leading-none">Advalis</span>
        </div>
      )}
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {logoContent}
      </Link>
    )
  }

  return logoContent
}
