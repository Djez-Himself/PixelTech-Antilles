import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tarifs - PixelTech | Tarification transparente pour services IT en Guadeloupe',
  description: 'Tarifs transparents pour dépannage informatique, administration réseau et support technique. Dépannage à distance 40€/h, sur site 50€/h. Bouillante, Guadeloupe.',
  keywords: 'tarifs informatique, prix dépannage, tarifs support technique, devis informatique, Guadeloupe, Bouillante',
  alternates: {
    canonical: '/tarifs',
  },
  openGraph: {
    title: 'Tarifs - PixelTech | Tarification transparente',
    description: 'Tarifs transparents pour dépannage informatique, administration réseau et support technique. Bouillante, Guadeloupe.',
    url: 'https://pixeltech-antilles.com/tarifs',
  },
}

export default function Tarifs() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="theme-hero text-white py-12" aria-labelledby="tarifs-hero-title">
          <div className="container mx-auto px-4">
            <h1 id="tarifs-hero-title" className="text-4xl font-bold">Tarifs</h1>
            <p className="text-white/90 mt-2">Tarification transparente et adaptée à vos besoins</p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-16">
              <div className="theme-card rounded-xl p-6 md:p-8 border-2 border-primary/30 mb-8">
                <p className="theme-text text-center text-base font-semibold mb-2">
                  ⚠️ Tarifs indicatifs
                </p>
                <p className="theme-text-secondary text-center text-sm">
                  Les tarifs ci-dessous sont donnés à titre indicatif pour vous donner une idée des prix. 
                  Le prix final peut varier selon la complexité de l'intervention, la durée réelle, 
                  et les spécificités de votre demande. <strong className="text-primary">Un devis gratuit</strong> sera établi 
                  pour chaque demande afin de vous proposer un tarif précis et adapté.
                </p>
              </div>
              <div className="theme-card-alt rounded-xl p-4 border-2 border-primary/20 mb-4">
                <p className="theme-text-secondary text-center text-sm">
                  <strong className="text-primary">Important</strong> : Les tarifs horaires indiqués sont dilués dans le prix final suivant l'intervention. 
                  Je ne travaille pas avec un chronomètre. Le prix final est un forfait adapté à votre demande, 
                  pas un calcul basé sur le temps réel passé.
                </p>
              </div>
              <p className="theme-text-secondary text-center text-sm">
                💡 <strong>Astuce</strong> : Le dépannage à distance permet d'économiser les frais de déplacement !
              </p>
            </div>

            {/* Support technique */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center theme-text">Support technique</h2>
              <div className="grid md:grid-cols-2 grid-gap-improved">
                <div className="theme-card card-elevated rounded-xl p-6 md:p-8 border-2 border-primary/20">
                  <h3 className="text-xl font-bold mb-4 text-primary">Dépannage à distance</h3>
                  <p className="theme-text-secondary text-sm mb-4">
                    La plupart des problèmes peuvent être résolus à distance, sans déplacement.
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="theme-text">Tarif horaire indicatif</span>
                      <span className="text-2xl font-bold text-primary">40 €</span>
                    </div>
                    <div className="pt-2 border-t theme-border">
                      <p className="text-xs theme-text-secondary">
                        ✓ Pas de frais de déplacement<br />
                        ✓ Intervention plus rapide<br />
                        ✓ Économique pour vous
                      </p>
                    </div>
                  </div>
                </div>

                <div className="theme-card rounded-xl p-6 border-2 border-primary/20">
                  <h3 className="text-xl font-bold mb-4 text-primary">Dépannage sur site</h3>
                  <p className="theme-text-secondary text-sm mb-4">
                    Intervention à votre domicile ou entreprise.
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="theme-text">Tarif horaire indicatif</span>
                      <span className="text-2xl font-bold text-primary">50 €</span>
                    </div>
                    <div className="pt-2 border-t theme-border">
                      <p className="text-xs theme-text-secondary">
                        + Frais de déplacement selon la zone<br />
                        Zone principale : Bouillante et environs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Administration réseau & système */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center theme-text">Administration réseau & système</h2>
              <div className="theme-card card-elevated rounded-xl p-6 md:p-8 border-2 border-primary/20">
                <p className="theme-text-secondary mb-6 text-center">
                  Solutions d'infogérance et d'administration réseau pour PME. Tarification adaptée à votre infrastructure.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-primary">Infogérance</h3>
                    <ul className="space-y-2 text-sm theme-text-secondary">
                      <li>• Surveillance 24/7</li>
                      <li>• Maintenance préventive</li>
                      <li>• Interventions rapides</li>
                      <li>• Monitoring (Zabbix)</li>
                    </ul>
                    <p className="mt-4 text-sm theme-text-secondary">À partir de</p>
                    <p className="text-lg font-bold text-primary">Sur devis</p>
                    <p className="text-xs theme-text-secondary mt-1">Selon la taille de l'infrastructure</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-primary">Prestations ponctuelles</h3>
                    <ul className="space-y-2 text-sm theme-text-secondary">
                      <li>• Configuration serveurs</li>
                      <li>• Virtualisation (VMware, Proxmox)</li>
                      <li>• Migration cloud</li>
                      <li>• Documentation réseau</li>
                    </ul>
                    <p className="mt-4 text-sm theme-text-secondary">Tarif horaire indicatif</p>
                    <p className="text-lg font-bold text-primary">50 €</p>
                    <p className="text-xs theme-text-secondary mt-1">+ Frais de déplacement si nécessaire</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Frais de déplacement */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-center theme-text">Frais de déplacement</h2>
              <div className="theme-card rounded-xl p-6 border-2 border-primary/20">
                <p className="theme-text-secondary mb-6 text-center text-sm">
                  Les frais de déplacement varient selon la zone d'intervention. 
                  <strong className="text-primary"> Le dépannage à distance permet d'éviter ces frais.</strong>
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="theme-card-alt rounded-lg p-4 text-center">
                    <h4 className="font-semibold mb-2 text-primary">Zone principale</h4>
                    <p className="text-sm theme-text-secondary mb-2">Bouillante et environs</p>
                    <p className="text-lg font-bold text-primary">20 €</p>
                  </div>
                  <div className="theme-card-alt rounded-lg p-4 text-center">
                    <h4 className="font-semibold mb-2 text-primary">Zone secondaire</h4>
                    <p className="text-sm theme-text-secondary mb-2">Grande-Terre proche</p>
                    <p className="text-lg font-bold text-primary">35 €</p>
                  </div>
                  <div className="theme-card-alt rounded-lg p-4 text-center">
                    <h4 className="font-semibold mb-2 text-primary">Zone éloignée</h4>
                    <p className="text-sm theme-text-secondary mb-2">Autres zones</p>
                    <p className="text-lg font-bold text-primary">50 €</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Prestations spécifiques */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-center theme-text">Prestations spécifiques</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="theme-card-alt rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-primary">Configuration Box & Wi-Fi</h4>
                  <p className="text-sm theme-text-secondary mb-2">Installation et optimisation</p>
                  <p className="text-lg font-bold text-primary">50 €</p>
                  <p className="text-xs theme-text-secondary mt-1">+ Frais de déplacement</p>
                </div>
                <div className="theme-card-alt rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-primary">Configuration à l'atelier</h4>
                  <p className="text-sm theme-text-secondary mb-2">Récupération du matériel possible</p>
                  <p className="text-lg font-bold text-primary">Sur devis</p>
                  <p className="text-xs theme-text-secondary mt-1">Selon la prestation</p>
                </div>
                <div className="theme-card-alt rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-primary">Formation utilisateurs</h4>
                  <p className="text-sm theme-text-secondary mb-2">À domicile ou entreprise</p>
                  <p className="text-lg font-bold text-primary">50 €/h</p>
                  <p className="text-xs theme-text-secondary mt-1">+ Frais de déplacement</p>
                </div>
                <div className="theme-card-alt rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-primary">Audit technique</h4>
                  <p className="text-sm theme-text-secondary mb-2">Analyse de votre infrastructure</p>
                  <p className="text-lg font-bold text-primary">Sur devis</p>
                  <p className="text-xs theme-text-secondary mt-1">Selon la complexité</p>
                </div>
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
                >
                  Demander un devis
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
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

