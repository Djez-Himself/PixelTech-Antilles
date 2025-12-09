import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import TarifsTabs from '@/components/TarifsTabs'
import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tarifs - PixelTech | Tarification transparente pour services IT en Guadeloupe',
  description: 'Tarifs transparents pour services IT en Guadeloupe : dépannage informatique (30-90€), administration réseau PME (80-800€/mois), support technique. Devis gratuit, forfaits adaptés. Bouillante.',
  keywords: 'PixelTech, PixelTech Antilles, Pixeltech, tarifs informatique, prix dépannage, tarifs support technique, devis informatique, Guadeloupe, Bouillante',
  alternates: {
    canonical: '/tarifs',
  },
  openGraph: {
    title: 'Tarifs - PixelTech | Tarification transparente',
    description: 'Tarifs transparents pour dépannage informatique, administration réseau et support technique. Bouillante, Guadeloupe.',
    url: 'https://pixeltech-antilles.com/tarifs',
  },
}

const forfaitsParticuliers = [
  {
    name: 'Diagnostic & remise en route',
    description: "1h d'intervention + diagnostic + nettoyage rapide + conseils.",
    price: '40 € sur place • 30 € en télé-assistance'
  },
  {
    name: 'Forfait Sécurité / Nettoyage',
    description: 'Désinfection, mises à jour, sauvegarde basique (≈1h30).',
    price: '70–90 € TTC'
  },
  {
    name: 'Intervention express',
    description: 'Dépannage rapide à distance (<30 min).',
    price: '20–30 €'
  },
  {
    name: 'Cours d\'informatique à domicile',
    description: '1h de formation personnalisée : smartphone, ordinateur, logiciels. Crédit d\'impôt 50%.',
    price: '35–50 €'
  }
]

const forfaitsPME = [
  {
    name: 'Intervention ponctuelle (4h)',
    description: 'Pour une mise au propre ou une action ciblée.',
    price: '280–350 € TTC (dégressif selon volume)'
  },
  {
    name: 'Maintenance mensuelle (Pack TPE)',
    description: '3h/mois + supervision + 1 intervention prioritaire.',
    price: '80–150 € / mois'
  },
  {
    name: 'Infogérance / Pack Pro',
    description: 'Monitoring permanent des systèmes, sauvegarde, patch management, intervention rapide pendant les heures ouvrables.',
    price: '300–800 € / mois'
  }
]

export default function Tarifs() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <PageHero 
          title="Tarifs" 
          subtitle="Tarification transparente et adaptée à vos besoins"
          id="tarifs-hero-title"
        />

        <section className="section-padding">
          <div className="container mx-auto px-4">
            <Breadcrumb items={[
              { label: 'Accueil', href: '/' },
              { label: 'Tarifs' }
            ]} />
            <div className="max-w-4xl mx-auto mb-16">
              <div className="theme-card rounded-xl p-6 md:p-8 border-2 border-primary/30 mb-8">
                <p className="theme-text text-center text-base font-semibold mb-2">
                  ⚠️ Tarifs indicatifs
                </p>
                <p className="theme-text-secondary text-center text-sm">
                  Les tarifs affichés sont donnés à titre indicatif. 
                  <strong className="text-primary"> Un devis gratuit</strong> sera établi pour vous proposer un tarif précis adapté à vos besoins.
                </p>
              </div>
              <div className="theme-card-alt rounded-xl p-4 border-2 border-primary/20 mb-4">
                <p className="theme-text-secondary text-center text-sm">
                  <strong className="text-primary">Je travaille au forfait</strong>, pas à l'heure. 
                  Le prix est fixé à l'avance selon votre demande, pas selon le temps réel passé.
                </p>
              </div>
              <p className="theme-text-secondary text-center text-sm">
                💡 <strong>Astuce</strong> : Le dépannage à distance permet d'économiser les frais de déplacement ! 
                <Link href="/services" className="text-primary hover:underline font-medium ml-1">Découvrez tous nos services</Link>
              </p>
            </div>

            {/* Onglets Tarifs avec React state */}
            <TarifsTabs particuliers={forfaitsParticuliers} pme={forfaitsPME} />

            {/* Frais de déplacement */}
            <div className="mb-12 mt-16">
              <h2 className="text-3xl font-bold mb-6 text-center theme-text">Frais de déplacement</h2>
              <div className="theme-card rounded-xl p-6 border-2 border-primary/20">
                <p className="theme-text-secondary mb-6 text-center text-sm">
                  Les frais de déplacement varient selon la zone d'intervention. 
                  <strong className="text-primary"> Le dépannage à distance permet d'éviter ces frais.</strong>
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <article className="theme-card-alt rounded-lg p-4 text-center">
                    <h4 className="font-semibold mb-2 text-primary">Zone principale</h4>
                    <p className="text-sm theme-text-secondary mb-2">Bouillante et environs</p>
                    <p className="text-lg font-bold text-primary">Gratuit</p>
                  </article>
                  <article className="theme-card-alt rounded-lg p-4 text-center">
                    <h4 className="font-semibold mb-2 text-primary">Zone secondaire</h4>
                    <p className="text-sm theme-text-secondary mb-2">Grande-Terre proche</p>
                    <p className="text-lg font-bold text-primary">15–20 €</p>
                  </article>
                  <article className="theme-card-alt rounded-lg p-4 text-center">
                    <h4 className="font-semibold mb-2 text-primary">Zone éloignée</h4>
                    <p className="text-sm theme-text-secondary mb-2">Autres zones</p>
                    <p className="text-lg font-bold text-primary">30–50 €</p>
                  </article>
                </div>
              </div>
            </div>

            {/* Prestations spécifiques */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-center theme-text">Prestations spécifiques</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <article className="theme-card-alt rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-primary">Configuration Box & Wi-Fi</h4>
                  <p className="text-sm theme-text-secondary mb-2">Installation et optimisation</p>
                  <p className="text-lg font-bold text-primary">50 €</p>
                  <p className="text-xs theme-text-secondary mt-1">+ Frais de déplacement</p>
                </article>
                <article className="theme-card-alt rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-primary">Configuration à l'atelier</h4>
                  <p className="text-sm theme-text-secondary mb-2">Récupération du matériel possible</p>
                  <p className="text-lg font-bold text-primary">Sur devis</p>
                  <p className="text-xs theme-text-secondary mt-1">Selon la prestation</p>
                </article>
                <article className="theme-card-alt rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-primary">Formation utilisateurs</h4>
                  <p className="text-sm theme-text-secondary mb-2">À domicile ou entreprise</p>
                  <p className="text-lg font-bold text-primary">50 €/h</p>
                  <p className="text-xs theme-text-secondary mt-1">+ Frais de déplacement</p>
                </article>
                <article className="theme-card-alt rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-primary">Audit technique</h4>
                  <p className="text-sm theme-text-secondary mb-2">Analyse de votre infrastructure</p>
                  <p className="text-lg font-bold text-primary">Sur devis</p>
                  <p className="text-xs theme-text-secondary mt-1">Selon la complexité</p>
                </article>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary to-primary-dark rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Devis personnalisé gratuit</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Chaque projet est unique. Contactez-moi pour un devis adapté à vos besoins et votre budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact?type=devis" 
                  className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                  aria-label="Demander un devis personnalisé"
                >
                  Demander un devis
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                  aria-label="Me contacter pour plus d'informations"
                >
                  Me contacter
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
