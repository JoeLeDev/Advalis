import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageBanner } from "@/components/page-banner";

export default function AProposPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <PageBanner 
        title="À Propos"
        subtitle="Découvrez nos valeurs et notre vision pour l'accompagnement des entrepreneurs"
        backgroundImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Nos Valeurs Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-4xl font-bold text-center mb-8">Nos valeurs</h2>
            
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
              <h3 className="text-3xl font-bold mb-8">Ce en quoi on croit</h3>
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
              <h3 className="text-3xl font-bold mb-6">Pourquoi on est là</h3>
              <p className="text-lg mb-6">
                Pour aider les indépendants, les porteurs de projet et les oubliés du système à retrouver :
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <h4 className="text-2xl font-bold text-blue-600 mb-2">Confiance</h4>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <h4 className="text-2xl font-bold text-blue-600 mb-2">Vision</h4>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <h4 className="text-2xl font-bold text-blue-600 mb-2">Structure</h4>
                </div>
              </div>
            </div>

            {/* Notre posture */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold mb-8">Notre posture</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 border border-gray-200 rounded-lg">
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Concrets</h4>
                  <p>pas de promesses vagues, que du réalisable.</p>
                </div>
                <div className="p-6 border border-gray-200 rounded-lg">
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Bienveillants</h4>
                  <p>on accompagne sans juger.</p>
                </div>
                <div className="p-6 border border-gray-200 rounded-lg">
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Curieux</h4>
                  <p>on apprend chaque jour pour mieux aider.</p>
                </div>
                <div className="p-6 border border-gray-200 rounded-lg">
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Investis</h4>
                  <p>ce n&apos;est pas juste un service, c&apos;est un engagement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Vision Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">🧭</span>
              <h2 className="text-4xl font-bold">Notre vision</h2>
            </div>
            
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-xl leading-relaxed mb-6">
                Chez Advalis, nous croyons qu&apos;un projet ne tient pas seulement à une idée ou à un statut juridique, mais à une personne.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                Nous accompagnons ceux qui portent : les indépendants, les micro-entrepreneurs, les porteurs d&apos;initiatives, les bâtisseurs silencieux — ceux qui avancent souvent seuls, mais qui ne devraient pas l&apos;être.
              </p>
              <p className="text-xl leading-relaxed mb-8">
                Notre vision, c&apos;est celle d&apos;un accompagnement lucide et humain, qui éclaire les démarches sans les complexifier, qui stabilise sans brider, et qui respecte autant l&apos;élan du cœur que les réalités du terrain.
              </p>
            </div>

            {/* Ce que nous voulons */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold mb-8">Nous voulons que chacun puisse :</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <div className="text-4xl mb-4">💡</div>
                  <h4 className="text-xl font-bold text-blue-600 mb-3">comprendre ce qu&apos;il fait</h4>
                </div>
                <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <div className="text-4xl mb-4">🎯</div>
                  <h4 className="text-xl font-bold text-blue-600 mb-3">savoir où il va</h4>
                </div>
                <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <div className="text-4xl mb-4">🕊️</div>
                  <h4 className="text-xl font-bold text-blue-600 mb-3">et rester libre de grandir à son rythme</h4>
                </div>
              </div>
            </div>

            {/* Notre approche */}
            <div className="mb-12">
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h4 className="text-2xl font-bold mb-4">Advalis, c&apos;est une structure d&apos;appui, pas une tour de contrôle.</h4>
                    <p className="text-lg text-gray-600 mb-4">
                      Nous marchons à côté, pas au-dessus.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-6xl mb-4">🤝</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Notre conviction */}
            <div className="mb-12">
              <div className="text-center p-8 bg-blue-600 text-white rounded-xl">
                <p className="text-2xl font-medium leading-relaxed">
                  Et nous croyons que dans le bon cadre, les bonnes choses naissent, prennent forme, et tiennent debout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <span className="text-2xl">📌</span>
            <p className="text-lg text-gray-600 mt-2">
              Découvrez nos offres d&apos;accompagnement → Tableau Comparatif
            </p>
          </div>
          <Link href="/pricing">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              Voir nos offres d&apos;accompagnement
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

