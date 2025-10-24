import { PageBanner } from '@/components/page-banner'

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="flex flex-col">
      <PageBanner
        title="Politique de confidentialité"
        subtitle="Protection de vos données personnelles"
        backgroundImage="/images/banners/Politique.jpg"
      />

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">1. Introduction</h2>
            <p>
              Advalis Conseil s&apos;engage à protéger votre vie privée et vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles lorsque vous visitez notre site web ou utilisez nos services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 mt-12">2. Responsable du traitement</h2>
            <p>
              Le responsable du traitement de vos données personnelles est :
            </p>
            <ul>
              <li><strong>Raison sociale :</strong> Advalis Conseil</li>
              <li><strong>Adresse :</strong> [Adresse complète]</li>
              <li><strong>Email :</strong> <a href="mailto:contact@advalis-conseil.fr" className="text-primary hover:underline">contact@advalis-conseil.fr</a></li>
              <li><strong>Téléphone :</strong> +33 1 23 45 67 89</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 mt-12">3. Données collectées</h2>
            <p>
              Nous collectons les données personnelles suivantes :
            </p>
            <ul>
              <li><strong>Données d&apos;identification :</strong> nom, prénom, adresse email, numéro de téléphone</li>
              <li><strong>Données de navigation :</strong> adresse IP, cookies, pages visitées</li>
              <li><strong>Données professionnelles :</strong> entreprise, fonction, secteur d&apos;activité</li>
              <li><strong>Données de communication :</strong> messages, demandes de contact</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 mt-12">4. Finalités du traitement</h2>
            <p>
              Vos données personnelles sont traitées pour les finalités suivantes :
            </p>
            <ul>
              <li>Répondre à vos demandes de contact et d&apos;information</li>
              <li>Vous fournir nos services de conseil</li>
              <li>Améliorer notre site web et nos services</li>
              <li>Respecter nos obligations légales</li>
              <li>Vous envoyer des communications marketing (avec votre consentement)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 mt-12">5. Base légale du traitement</h2>
            <p>
              Le traitement de vos données personnelles est basé sur :
            </p>
            <ul>
              <li><strong>Votre consentement</strong> pour les communications marketing</li>
              <li><strong>L&apos;exécution d&apos;un contrat</strong> pour la fourniture de nos services</li>
              <li><strong>Notre intérêt légitime</strong> pour l&apos;amélioration de nos services</li>
              <li><strong>Le respect d&apos;obligations légales</strong> pour certaines données</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 mt-12">6. Conservation des données</h2>
            <p>
              Vos données personnelles sont conservées pendant les durées suivantes :
            </p>
            <ul>
              <li><strong>Données de contact :</strong> 3 ans après le dernier contact</li>
              <li><strong>Données clients :</strong> 5 ans après la fin de la relation contractuelle</li>
              <li><strong>Données de navigation :</strong> 13 mois maximum</li>
              <li><strong>Données comptables :</strong> 10 ans (obligation légale)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 mt-12">7. Partage des données</h2>
            <p>
              Vos données personnelles ne sont pas vendues, louées ou partagées avec des tiers, sauf dans les cas suivants :
            </p>
            <ul>
              <li>Avec votre consentement explicite</li>
              <li>Pour respecter une obligation légale</li>
              <li>Avec nos prestataires techniques (sous contrat de confidentialité)</li>
              <li>En cas de fusion ou d&apos;acquisition de notre entreprise</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 mt-12">8. Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul>
              <li><strong>Droit d&apos;accès :</strong> obtenir une copie de vos données</li>
              <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
              <li><strong>Droit d&apos;effacement :</strong> supprimer vos données</li>
              <li><strong>Droit à la limitation :</strong> restreindre le traitement</li>
              <li><strong>Droit à la portabilité :</strong> récupérer vos données</li>
              <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement</li>
              <li><strong>Droit de retrait du consentement :</strong> à tout moment</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 mt-12">9. Sécurité des données</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre :
            </p>
            <ul>
              <li>L&apos;accès non autorisé</li>
              <li>La divulgation non autorisée</li>
              <li>La modification non autorisée</li>
              <li>La destruction non autorisée</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 mt-12">10. Cookies</h2>
            <p>
              Notre site utilise des cookies pour :
            </p>
            <ul>
              <li>Améliorer votre expérience de navigation</li>
              <li>Analyser l&apos;utilisation du site</li>
              <li>Personnaliser le contenu</li>
            </ul>
            <p>
              Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 mt-12">11. Transferts internationaux</h2>
            <p>
              Vos données personnelles sont traitées au sein de l&apos;Union Européenne. En cas de transfert vers un pays tiers, nous nous assurons que des garanties appropriées sont mises en place.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 mt-12">12. Mineurs</h2>
            <p>
              Notre site n&apos;est pas destiné aux mineurs de moins de 16 ans. Nous ne collectons pas sciemment de données personnelles de mineurs.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 mt-12">13. Modifications de la politique</h2>
            <p>
              Cette politique de confidentialité peut être modifiée à tout moment. Les modifications importantes vous seront notifiées par email ou via notre site web.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 mt-12">14. Contact et réclamations</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, contactez-nous :
            </p>
            <ul>
              <li><strong>Email :</strong> <a href="mailto:contact@advalis-conseil.fr" className="text-primary hover:underline">contact@advalis-conseil.fr</a></li>
              <li><strong>Téléphone :</strong> +33 1 23 45 67 89</li>
            </ul>
            <p>
              Vous avez également le droit d&apos;introduire une réclamation auprès de la CNIL (Commission Nationale de l&apos;Informatique et des Libertés) si vous estimez que vos droits ne sont pas respectés.
            </p>

            <p className="text-sm text-muted-foreground mt-8">
              <em>Dernière mise à jour : 19 octobre 2025</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
