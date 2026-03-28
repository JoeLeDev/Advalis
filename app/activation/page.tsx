import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { KairosCheckoutButton } from '@/components/kairos-checkout-button'
import { CALENDLY_APPEL_DECOUVERTE } from '@/config/activation-sessions'
import {
  ArrowRight,
  Check,
  CircleDot,
  Compass,
  Layers,
  Rocket,
  Scale,
  Search,
  Sparkles,
  UserCheck,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kairos — Structuration & direction de projet | Advalis',
  description:
    'Un temps de travail conçu pour clarifier, structurer et faire avancer un projet avec méthode. Kairos : formats collectif et privé.',
  alternates: {
    canonical: '/activation',
  },
}

export default function ActivationKairosPage() {
  const stripeReady = Boolean(process.env.STRIPE_SECRET_KEY)
  const checkoutFondation = stripeReady && Boolean(process.env.STRIPE_PRICE_KAIROS_FONDATION)
  const checkoutDirection = stripeReady && Boolean(process.env.STRIPE_PRICE_KAIROS_DIRECTION)

  return (
    <div className="relative min-h-screen bg-[#f7f8fa] text-slate-900">
      {/* Hero — image + overlay navy */}
      <section className="relative flex min-h-[min(85vh,52rem)] items-center justify-center overflow-hidden">
        <Image
          src="/images/banners/Acceuil_Advalis.jpg"
          alt=""
          role="presentation"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 via-[#0a1628]/65 to-[#0a1628]/88"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center md:px-10 md:py-28">
          <span className="inline-flex items-center rounded-full border border-[#d4af37]/40 bg-[#d4af37]/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#f0d78c] md:text-sm">
            Kairos — Structuration &amp; direction de projet
          </span>
          <h1 className="mt-8 font-kairos text-3xl font-semibold leading-[1.15] tracking-tight text-white md:text-5xl lg:text-[3.25rem]">
            Passez d’une idée à un projet structuré
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white md:text-xl">
            Un temps de travail conçu pour clarifier, structurer et faire avancer un projet avec méthode.
          </p>
          <div className="mt-10">
            <a
              href="#offres"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0a1628] px-8 py-4 text-base font-semibold text-white shadow-lg ring-1 ring-white/15 transition hover:bg-[#152238] hover:ring-white/25"
            >
              Choisir mon format
              <ArrowRight className="h-5 w-5" aria-hidden />
            </a>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <h2 className="font-kairos text-2xl font-semibold leading-snug text-[#0a1628] md:text-3xl">
          Une vision ne suffit pas
        </h2>
        <ul className="mt-8 space-y-4 text-lg leading-relaxed text-slate-800 md:text-xl">
          <li className="flex gap-3">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-800">
              <Check className="h-4 w-4 stroke-[3]" aria-hidden />
            </span>
            <span>Les projets qui avancent ne sont pas forcément les meilleurs.</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-800">
              <Check className="h-4 w-4 stroke-[3]" aria-hidden />
            </span>
            <span>Ce sont ceux qui sont structurés.</span>
          </li>
        </ul>
        <p className="mt-8 text-lg leading-relaxed text-slate-700 md:text-xl">
          Kairos est conçu pour transformer une vision en projet structuré et exploitable.
        </p>
      </section>

      {/* Ce que Kairos apporte */}
      <section className="border-y border-slate-200/80 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0a1628] text-[#d4af37]">
              <Sparkles className="h-7 w-7" />
            </div>
            <h2 className="mt-6 font-kairos text-2xl font-semibold text-[#0a1628] md:text-3xl">
              Ce que Kairos vous apporte
            </h2>
            <p className="mt-4 text-lg font-semibold text-slate-900">Kairos n’est pas une formation.</p>
            <p className="mt-2 text-slate-600">C’est un temps de travail structuré pour :</p>
          </div>
          <ul className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            {(
              [
                { text: 'Clarifier votre projet', Icon: Search },
                { text: 'Poser une base cohérente', Icon: Layers },
                { text: 'Prendre des décisions utiles', Icon: Scale },
                { text: 'Avancer concrètement', Icon: Rocket },
              ] as const
            ).map(({ text, Icon }) => (
              <li
                key={text}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-[#fafbfc] px-5 py-4 text-base font-medium text-slate-800 shadow-sm"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-900 text-[#d4af37]">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Deux formats */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-kairos text-2xl font-semibold text-[#0a1628] md:text-3xl">
            <span className="mr-2 inline-block" aria-hidden>
              ⚖️
            </span>
            Deux formats, selon votre besoin
          </h2>
          <ul className="mt-6 space-y-3 text-slate-600 md:text-lg">
            <li className="flex items-start justify-center gap-3">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-800">
                <Check className="h-4 w-4 stroke-[3]" aria-hidden />
              </span>
              <span className="text-left">Structurer une base solide</span>
            </li>
            <li className="flex items-start justify-center gap-3">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-800">
                <Check className="h-4 w-4 stroke-[3]" aria-hidden />
              </span>
              <span className="text-left">Ou avancer avec des décisions claires</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Offres */}
      <section id="offres" className="mx-auto max-w-7xl px-6 pb-16 md:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
          {/* Fondation — carte claire */}
          <div className="flex h-full flex-col rounded-[28px] border border-slate-200/90 bg-white p-8 shadow-[0_25px_50px_-12px_rgba(15,23,42,0.12)] md:p-10">
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-2xl">👥</div>
              <span className="rounded-full bg-[#0a1628] px-3 py-1 text-xs font-semibold text-white md:text-sm">
                Max 8 personnes
              </span>
            </div>
            <h3 className="mt-5 font-kairos text-2xl font-semibold text-[#0a1628] md:text-3xl">
              <span className="mr-2 text-slate-400" aria-hidden>
                🔹
              </span>
              KAIROS — Fondation (Collectif)
            </h3>
            <p className="mt-1 text-sm font-medium text-slate-500">Format collectif</p>
            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">Offre de lancement</p>
              <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-xl font-semibold text-slate-400 line-through md:text-2xl">249€</span>
                <span className="text-5xl font-bold tracking-tight text-[#0a1628]">149€</span>
                <span className="w-full text-lg text-slate-500 sm:w-auto sm:pl-1">— 4h30 (groupe)</span>
              </div>
            </div>
            <p className="mt-4 text-base font-medium text-slate-800">
              Pour structurer une base claire et avancer avec méthode
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-slate-500">Concrètement, vous allez :</p>
            <ul className="mt-4 space-y-3 text-base leading-relaxed text-slate-800">
              {[
                'Mettre de l’ordre dans votre idée',
                'Comprendre ce qui fonctionne réellement',
                'Structurer un projet cohérent',
                'Définir vos premières actions',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-800">
                    <CircleDot className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl border border-sky-100 bg-sky-50/80 p-5">
              <p className="text-sm font-semibold text-sky-900">Ce format est fait pour vous si :</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-800 md:text-base">
                {[
                  'Votre projet est encore flou',
                  'Vous avez besoin de clarté',
                  'Vous voulez construire une base solide',
                  'Vous préférez avancer avec un cadre guidé',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-sky-700 shadow-sm">
                      <UserCheck className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <KairosCheckoutButton
              offer="fondation"
              checkoutEnabled={checkoutFondation}
              className="mt-8 flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[#0a1628] px-6 py-4 text-base font-semibold text-white transition hover:-translate-y-1 hover:bg-[#152238] hover:shadow-lg lg:mt-auto"
            >
              <span aria-hidden>🎯</span>
              Réserver ma place MAINTENANT
            </KairosCheckoutButton>
          </div>

          {/* Direction — carte sombre + or */}
          <div
            className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[#d4af37]/30 bg-gradient-to-br from-[#0b1420] via-[#0f172a] to-[#1a2332] p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] md:p-10"
            style={{ colorScheme: 'dark' }}
          >
            <div className="absolute right-6 top-6 z-10 rounded-md bg-gradient-to-r from-[#e8c468] to-[#c9a227] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#0a1628] shadow-md md:text-sm">
              Recommandé
            </div>
            <div className="flex min-h-0 flex-1 flex-col pt-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#e8c468]">
                <Compass className="h-8 w-8" />
              </div>
              <h3 className="mt-5 font-kairos text-2xl font-semibold text-white md:text-3xl">
                <span className="mr-2 text-slate-500" aria-hidden>
                  🔹
                </span>
                KAIROS — Direction (Privé)
              </h3>
              <p className="mt-1 text-sm font-medium text-slate-400">Format privé</p>
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wide text-[#e8c468]/90">Offre de lancement</p>
                <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-xl font-semibold text-slate-500 line-through md:text-2xl">399€</span>
                  <span className="text-5xl font-bold tracking-tight text-[#e8c468]">299€</span>
                  <span className="w-full text-lg text-slate-400 sm:w-auto sm:pl-1">— 4h30 (individuel)</span>
                </div>
              </div>
              <p className="mt-4 text-base font-medium text-slate-100">
                Pour structurer sérieusement et prendre des décisions concrètes
              </p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-slate-500">
                Concrètement, nous allons :
              </p>
              <ul className="mt-4 space-y-3 text-base leading-relaxed text-slate-100">
                {[
                  'Analyser votre situation',
                  'Travailler votre offre',
                  'Définir votre cible',
                  'Poser un positionnement clair',
                  'Structurer votre activité',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#e8c468]">
                      <CircleDot className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-sm font-semibold text-[#e8c468]">Ce format est fait pour vous si :</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-200 md:text-base">
                  {[
                    'Vous avez déjà une idée sérieuse',
                    'Vous voulez aller plus vite',
                    'Vous avez besoin de prendre des décisions',
                    'Vous voulez structurer un projet viable',
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#e8c468]">
                        <UserCheck className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <KairosCheckoutButton
                offer="direction"
                checkoutEnabled={checkoutDirection}
                className="mt-8 flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#e8c468] to-[#c9a227] px-6 py-4 text-base font-semibold text-[#0a1628] shadow-lg transition hover:-translate-y-1 hover:brightness-105 lg:mt-auto"
              >
                <span aria-hidden>🎯</span>
                Réserver ma session MAINTENANT
              </KairosCheckoutButton>
            </div>
          </div>
        </div>
      </section>

      {/* Aide au choix des formats */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-2xl rounded-[28px] border border-slate-200 bg-[#fafbfc] p-8 text-center shadow-md md:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#b8962e]">
            <span className="mr-1.5" aria-hidden>
              💡
            </span>
            Besoin d’aide pour choisir ?
          </p>
          <p className="mt-4 text-lg font-medium text-[#0a1628]">Vous hésitez entre les deux formats ?</p>
          <p className="mt-3 flex items-start justify-center gap-3 text-base text-slate-600">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-800">
              <Check className="h-4 w-4 stroke-[3]" aria-hidden />
            </span>
            <span className="max-w-md text-left">Planifions un échange rapide pour clarifier votre situation.</span>
          </p>
          <Link
            href={CALENDLY_APPEL_DECOUVERTE}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0a1628] px-8 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#152238] hover:shadow-lg"
          >
            <span aria-hidden>🎯</span>
            Planifier un échange (20 min)
          </Link>
        </div>
      </section>

      {/* Ce moment peut tout changer */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 lg:py-20">
          <h2 className="font-kairos text-center text-2xl font-semibold text-[#0a1628] md:text-3xl">
            Ce moment peut tout changer
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-slate-700 md:text-lg">
            <p>
              Vous pouvez continuer à avancer seul, tester, ajuster, recommencer. Ou vous pouvez structurer votre
              projet correctement, <span className="font-semibold text-slate-900">une fois pour toutes</span>.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-800">
                  <Check className="h-4 w-4 stroke-[3]" aria-hidden />
                </span>
                <span>En quelques heures, vous posez un cadre clair.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-800">
                  <Check className="h-4 w-4 stroke-[3]" aria-hidden />
                </span>
                <span>Vous prenez des décisions que vous repoussez depuis des semaines.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-800">
                  <Check className="h-4 w-4 stroke-[3]" aria-hidden />
                </span>
                <span>Vous repartez avec quelque chose de concret.</span>
              </li>
            </ul>
            <p className="flex gap-3 text-slate-600">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-800">
                <Check className="h-4 w-4 stroke-[3]" aria-hidden />
              </span>
              <span>La différence ne se fait pas sur le temps que vous passez.</span>
            </p>
            <p className="flex gap-3 text-slate-600">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-800">
                <Check className="h-4 w-4 stroke-[3]" aria-hidden />
              </span>
              <span>Elle se fait sur la clarté avec laquelle vous avancez.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Le format */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <h2 className="text-center font-kairos text-2xl font-semibold text-[#0a1628] md:text-3xl">Le format</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600 md:text-lg">
            Un temps volontairement court et structuré :
          </p>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
            {[
              { title: 'Clarifier votre projet', icon: CircleDot },
              { title: 'Structurer une base solide', icon: Layers },
              { title: 'Prendre des décisions concrètes', icon: Compass },
            ].map(({ title, icon: Icon }) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-200 bg-[#fafbfc] p-8 text-center shadow-sm"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a1628] text-[#d4af37]">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-5 text-lg font-semibold text-[#0a1628]">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 lg:px-12">
        <div className="rounded-[28px] border border-[#d4af37]/25 bg-gradient-to-br from-[#0a1628] via-[#0f172a] to-[#1e293b] p-10 text-center shadow-2xl md:p-12">
          <h2 className="font-kairos text-2xl font-semibold text-white md:text-4xl">
            Votre projet n’a pas besoin de plus d’hésitation
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            Il a besoin de clarté, de structure et de décisions.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:justify-center">
            <KairosCheckoutButton
              offer="fondation"
              checkoutEnabled={checkoutFondation}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-[#0a1628] transition hover:bg-slate-100 hover:-translate-y-1 hover:shadow-lg"
            >
              Réserver ma place (collectif)
            </KairosCheckoutButton>
            <KairosCheckoutButton
              offer="direction"
              checkoutEnabled={checkoutDirection}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#d4af37]/50 bg-transparent px-8 py-4 text-base font-semibold text-[#e8c468] transition hover:bg-white/5 hover:-translate-y-1 hover:shadow-lg"
            >
              Réserver ma session (privé)
            </KairosCheckoutButton>
          </div>
        </div>
      </section>
    </div>
  )
}
