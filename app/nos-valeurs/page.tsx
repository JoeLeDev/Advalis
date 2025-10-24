import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NosValeursPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-8">Nos valeurs</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-xl leading-relaxed mb-6">
                Chez Advalis, on ne se contente pas de classer des papiers.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                On accompagne des personnes, des parcours, des rêves.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                Nous savons que l&apos;administratif peut décourager.
              </p>
              <p className="text-xl leading-relaxed mb-8">
                Mais nous savons aussi qu&apos;il y a, derrière chaque projet, une personne qui veut s&apos;élever.
              </p>
              <p className="text-xl leading-relaxed font-medium">
                C&apos;est ce cœur-là qui nous pousse à agir.
              </p>
            </div>

            {/* Ce en quoi on croit */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8">Ce en quoi on croit</h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl mt-1">•</span>
                  <span>Que tout le monde mérite d&apos;y voir clair, même sans diplôme.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl mt-1">•</span>
                  <span>Qu&apos;on peut entreprendre sans se perdre.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl mt-1">•</span>
                  <span>Que l&apos;accompagnement ne doit pas être un luxe.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl mt-1">•</span>
                  <span>Qu&apos;on peut apprendre et réussir, même sans tout savoir au départ.</span>
                </li>
              </ul>
            </div>

            {/* Pourquoi on est là */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Pourquoi on est là</h2>
              <p className="text-lg mb-6">
                Pour aider les indépendants, les porteurs de projet et les oubliés du système à retrouver :
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">Confiance</h3>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">Vision</h3>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">Structure</h3>
                </div>
              </div>
            </div>

            {/* Notre posture */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8">Notre posture</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 border border-gray-200 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-blue-600">Concrets</h3>
                  <p>pas de promesses vagues, que du réalisable.</p>
                </div>
                <div className="p-6 border border-gray-200 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-blue-600">Bienveillants</h3>
                  <p>on accompagne sans juger.</p>
                </div>
                <div className="p-6 border border-gray-200 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-blue-600">Curieux</h3>
                  <p>on apprend chaque jour pour mieux aider.</p>
                </div>
                <div className="p-6 border border-gray-200 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-blue-600">Investis</h3>
                  <p>ce n&apos;est pas juste un service, c&apos;est un engagement.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center py-12">
              <div className="mb-6">
                <span className="text-2xl">📌</span>
                <p className="text-lg text-gray-600 mt-2">
                  Découvrez nos offres d&apos;accompagnement → Tableau Comparatif
                </p>
              </div>
              <Link href="/pricing">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Voir nos offres
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
