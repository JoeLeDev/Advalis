import type { Metadata } from 'next'
import Link from 'next/link'
import { activationSessions, activationSessionsEmptyMessage } from '@/config/activation-sessions'
import {
  AlertTriangle,
  ArrowRight,
  Calendar,
  CircleDot,
  Compass,
  Layers,
  Rocket,
  Scale,
  Search,
  Sparkles,
  Target,
  UserCheck,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kairos — Structuration & direction de projet | Advalis',
  description:
    'Passez d’une idée floue à un projet structuré. Kairos : un temps de travail pour clarifier, structurer et décider. Formats collectif ou privé.',
  alternates: {
    canonical: '/activation',
  },
}

export default function ActivationKairosPage() {
  return (
    <div className="relative min-h-screen text-foreground">
      {/* Fond global : mesh léger (accent site + gris bleuté) */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[#f4f7fb]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_110%_85%_at_50%_-25%,hsl(var(--accent-soft)/0.65),transparent_52%),radial-gradient(ellipse_70%_55%_at_100%_30%,hsl(var(--accent-warm)/0.35),transparent_50%),radial-gradient(ellipse_65%_50%_at_0%_85%,hsl(var(--accent-soft)/0.28),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-background/80"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/40 bg-white/25 backdrop-blur-[2px]">
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-accentSoft-foreground/15 bg-accentSoft/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accentSoft-foreground md:text-sm">
              Kairos — Structuration &amp; direction de projet
            </span>
            <h1 className="mt-6 font-advalis-heading text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Passez d’une idée floue à un projet structuré et concret
            </h1>
            <p className="mt-5 text-lg text-muted-foreground md:text-xl">
              Un temps de travail pour clarifier, structurer et avancer avec une direction claire.
            </p>
          </div>
        </div>
      </section>

      {/* Reconnaissance */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="rounded-3xl border border-accentWarm/40 bg-accentWarm/30 p-8 md:p-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accentWarm text-accentWarm-foreground">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-bold text-accentWarm-foreground md:text-2xl">
              Si vous vous reconnaissez là-dedans
            </h2>
          </div>
          <ul className="mt-8 space-y-4 text-base leading-relaxed text-accentWarm-foreground/95 md:text-lg">
            {[
              'Vous avez une idée en tête, mais vous n’arrivez pas à la structurer concrètement',
              'Vous avancez, mais sans réelle direction',
              'Vous commencez plusieurs choses sans aller au bout',
              'Vous sentez que votre projet pourrait être plus clair, plus solide',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accentWarm-foreground/70" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Ce que Kairos apporte */}
      <section className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accentSoft text-accentSoft-foreground">
              <Sparkles className="h-7 w-7" />
            </div>
            <h2 className="mt-6 font-advalis-heading text-2xl font-bold md:text-3xl">Ce que Kairos vous apporte</h2>
            <p className="mt-4 text-lg font-semibold text-foreground">Kairos n’est pas une formation.</p>
            <p className="mt-2 text-muted-foreground">C’est un temps de travail structuré pour :</p>
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
                className="flex items-center gap-3 rounded-2xl border border-border/80 bg-card px-5 py-4 text-base font-medium shadow-sm"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accentSoft/80 text-accentSoft-foreground">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Intro 2 niveaux */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-advalis-heading text-2xl font-bold md:text-3xl">Deux niveaux, selon votre avancement</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Tous les projets ne nécessitent pas la même approche. Certains ont besoin de poser des bases. D’autres ont
            besoin d’aller plus vite et de trancher.
          </p>
        </div>
      </section>

      {/* Offres */}
      <section id="offres" className="mx-auto max-w-7xl px-6 pb-16 md:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Fondation */}
          <div className="flex flex-col rounded-[28px] border border-border bg-card p-8 shadow-xl md:p-10">
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-2xl">👥</div>
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground md:text-sm">
                Max 8 personnes
              </span>
            </div>
            <h3 className="mt-5 text-2xl font-bold md:text-3xl">Kairos — Fondation</h3>
            <p className="mt-1 text-sm font-medium text-muted-foreground">Format collectif</p>
            <div className="mt-6 flex flex-wrap items-baseline gap-2">
              <span className="text-5xl font-bold tracking-tight text-foreground">149€</span>
              <span className="text-lg text-muted-foreground">— 4h30 (groupe)</span>
            </div>
            <p className="mt-4 text-base font-medium text-foreground">
              Pour structurer une base claire et avancer avec méthode
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-muted-foreground">Concrètement, vous allez :</p>
            <ul className="mt-4 space-y-3 text-base leading-relaxed">
              {[
                'Mettre de l’ordre dans votre idée',
                'Comprendre ce qui fonctionne réellement',
                'Structurer un projet cohérent',
                'Définir vos premières actions',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accentSoft text-accentSoft-foreground">
                    <CircleDot className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl bg-accentSoft/40 p-5">
              <p className="text-sm font-semibold text-accentSoft-foreground">Ce format est fait pour vous si :</p>
              <ul className="mt-3 space-y-2 text-sm text-foreground/90 md:text-base">
                {[
                  'Votre projet est encore flou',
                  'Vous avez besoin de clarté',
                  'Vous voulez construire une base solide',
                  'Vous préférez avancer avec un cadre guidé',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accentSoft/80 text-accentSoft-foreground">
                      <UserCheck className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/contact"
              className="mt-8 flex w-full items-center justify-center rounded-2xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition hover:opacity-95"
            >
              Réserver ma place
            </Link>
          </div>

          {/* Direction */}
          <div className="relative flex flex-col rounded-[28px] border-2 border-accentSoft-foreground/25 bg-gradient-to-b from-card to-accentSoft/20 p-8 shadow-xl md:p-10">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accentSoft px-5 py-1.5 text-xs font-bold uppercase tracking-wide text-accentSoft-foreground shadow-md md:text-sm">
              Recommandé
            </div>
            <div className="pt-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accentSoft-foreground/10 text-accentSoft-foreground">
                <Compass className="h-8 w-8" />
              </div>
              <h3 className="mt-5 text-2xl font-bold md:text-3xl">Kairos — Direction</h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">Format privé</p>
              <div className="mt-6 flex flex-wrap items-baseline gap-2">
                <span className="text-5xl font-bold tracking-tight text-accentSoft-foreground">299€</span>
                <span className="text-lg text-muted-foreground">— 4h30 (individuel)</span>
              </div>
              <p className="mt-4 text-base font-medium text-foreground">
                Pour structurer sérieusement et prendre des décisions concrètes
              </p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-muted-foreground">Concrètement, nous allons :</p>
              <ul className="mt-4 space-y-3 text-base leading-relaxed">
                {[
                  'Analyser votre situation',
                  'Travailler votre offre',
                  'Définir votre cible',
                  'Poser un positionnement clair',
                  'Structurer votre activité',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accentSoft-foreground/15 text-accentSoft-foreground">
                      <CircleDot className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl border border-border bg-card/80 p-5">
                <p className="text-sm font-semibold text-accentSoft-foreground">Ce format est fait pour vous si :</p>
                <ul className="mt-3 space-y-2 text-sm text-foreground/90 md:text-base">
                  {[
                    'Vous avez déjà une idée sérieuse',
                    'Vous voulez aller plus vite',
                    'Vous avez besoin de prendre des décisions',
                    'Vous voulez structurer un projet viable',
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accentSoft-foreground/10 text-accentSoft-foreground">
                        <UserCheck className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 rounded-2xl bg-muted/50 p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Résultat :</p>
                <ul className="mt-3 space-y-2 text-base">
                  {[
                    'Une offre claire et vendable',
                    'Une direction précise',
                    'Des décisions prises',
                    'Vos prochaines actions définies',
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <Target className="mt-0.5 h-5 w-5 shrink-0 text-accentSoft-foreground" strokeWidth={2} aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/contact"
                className="mt-8 flex w-full items-center justify-center rounded-2xl bg-accentSoft px-6 py-4 text-base font-semibold text-accentSoft-foreground transition hover:opacity-95"
              >
                Réserver ma session
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Prochaines sessions */}
      <section id="sessions" className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accentWarm/50 text-accentWarm-foreground">
            <Calendar className="h-7 w-7" />
          </div>
          <h2 className="mt-6 font-advalis-heading text-2xl font-bold md:text-3xl">Prochaines sessions</h2>
          <p className="mt-3 text-lg font-medium text-foreground">Sélectionnez votre date :</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl gap-4">
          {activationSessions.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-border bg-card/60 px-6 py-8 text-center text-muted-foreground">
              {activationSessionsEmptyMessage}
            </p>
          ) : (
            activationSessions.map((session) => (
              <Link
                key={session.id}
                href={session.bookingHref ?? '/contact'}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card px-6 py-5 shadow-sm transition hover:border-accentSoft-foreground/30 hover:shadow-md"
              >
                <span className="text-left font-medium md:text-lg">
                  <span className="text-muted-foreground">{session.label} —</span> le {session.dateLabel}
                </span>
                <span className="flex items-center gap-2 text-sm font-semibold text-accentSoft-foreground md:text-base">
                  Cliquez pour réserver
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))
          )}
        </div>
      </section>

      {/* Le format */}
      <section className="border-y border-border/60 bg-gradient-to-br from-accentSoft/15 via-background to-accentWarm/15">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <h2 className="text-center font-advalis-heading text-2xl font-bold md:text-3xl">Le format</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground md:text-lg">
            Un temps volontairement court et structuré :
          </p>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
            {[
              { title: 'Clarifier', icon: CircleDot },
              { title: 'Structurer', icon: Layers },
              { title: 'Décider', icon: Compass },
            ].map(({ title, icon: Icon }) => (
              <div
                key={title}
                className="rounded-3xl border border-border/80 bg-card p-8 text-center shadow-sm"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-5 text-xl font-bold">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 lg:px-12">
        <div className="rounded-[28px] border border-accentSoft-foreground/20 bg-gradient-to-br from-primary to-slate-900 p-10 text-center text-primary-foreground shadow-2xl md:p-12">
          <h2 className="font-advalis-heading text-2xl font-bold md:text-4xl">
            Votre projet n’a pas besoin de plus d’hésitation
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/85 md:text-lg">
            Il a besoin de clarté, de structure et de décisions.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-accentSoft px-8 py-4 text-base font-semibold text-accentSoft-foreground transition hover:opacity-95"
            >
              Réserver ma place (collectif)
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-primary-foreground/25 bg-primary-foreground/10 px-8 py-4 text-base font-semibold text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/20"
            >
              Réserver ma session (privé)
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
