import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import FeatureList from '@/components/FeatureList'
import ServicesTabs from '@/components/ServicesTabs'
import Link from 'next/link'
import type { Metadata } from 'next'
import type { Service } from '@/types/services'

export const metadata: Metadata = {
  title: 'Services - PixelTech | Administration réseau & Support technique en Guadeloupe',
  description: 'PixelTech Antilles - Services d\'infogérance, administration réseau, support technique et dépannage informatique pour PME et particuliers. Bouillante, Guadeloupe. Solutions open source professionnelles.',
  keywords: 'PixelTech, PixelTech Antilles, Pixeltech, Pixeltech Antilles, infogérance, administration réseau, support technique, dépannage informatique, Guadeloupe, Bouillante, virtualisation, monitoring, Zabbix, GLPI',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Services - PixelTech | Administration réseau & Support technique',
    description: 'Infogérance, administration réseau, support technique et dépannage informatique pour PME et particuliers. Bouillante, Guadeloupe.',
    url: 'https://pixeltech-antilles.com/services',
  },
}

export default function Services() {
  const services: Service[] = [
    {
      title: 'Administration réseau & système',
      subtitle: 'Pour les PME et entreprises',
      description: 'Je prends en charge la gestion complète de votre infrastructure réseau pour que vous puissiez vous concentrer sur votre activité. Infogérance, sécurité, virtualisation. Je m\'adapte à vos logiciels existants ou vous propose les solutions les plus adaptées à vos besoins et votre budget.',
      icon: 'building',
      packages: [
        {
          name: 'Intervention ponctuelle (4h)',
          price: '280–350 € TTC (dégressif selon volume)',
          detail: 'Idéal pour une mise au propre ou une action ciblée.'
        },
        {
          name: 'Maintenance mensuelle (Pack TPE)',
          price: '80–150 € / mois',
          detail: '3h/mois + supervision + 1 intervention prioritaire.'
        },
        {
          name: 'Infogérance / Pack Pro',
          price: '300–800 € / mois',
          detail: 'Supervision 24/7, sauvegarde, patch management, engagement de réponse sous 24h.'
        }
      ],
      features: [
        'Infogérance & maintenance informatique 24/7',
        'Configuration serveurs Linux/Windows Server',
        'Virtualisation (VMware, Proxmox) - économie d\'énergie',
        'Sécurité informatique & protection contre les cybermenaces',
        'Monitoring avec Zabbix - surveillance en temps réel',
        'Sauvegarde automatique & plan de reprise d\'activité',
        'Gestion de parc informatique avec GLPI',
        'Documentation complète de votre réseau',
        'Support applications métiers (Sage, Office 365)',
        'Migration vers Microsoft 365 & solutions hébergées'
      ],
      benefits: [
        'Plus de temps pour votre cœur de métier',
        'Réduction des coûts informatiques',
        'Sécurité renforcée de vos données',
        'Intervention rapide en cas de problème'
      ]
    },
    {
      title: 'Support technique & dépannage',
      subtitle: 'Pour les particuliers',
      description: 'Un problème informatique ? Je vous aide rapidement. La plupart des dépannages peuvent être effectués à distance avec des logiciels sécurisés, sans déplacement donc moins de coûts. Intervention sur site si nécessaire.',
      icon: 'wrench',
      packages: [
        {
          name: 'Diagnostic & remise en route',
          price: '40 € sur place • 30 € en télé-assistance',
          detail: '1h d’intervention + diagnostic + nettoyage rapide + conseils.'
        },
        {
          name: 'Forfait Sécurité / Nettoyage',
          price: '70–90 € TTC',
          detail: 'Désinfection, mises à jour, sauvegarde basique (≈1h30).'
        },
        {
          name: 'Intervention express (télé-assistance <30 min)',
          price: '20–30 €',
          detail: 'Pour les petits dépannages rapides à distance.'
        },
        {
          name: 'Pack Senior / Formation',
          price: '35–50 €',
          detail: '1h de cours + prise en main smartphone/ordinateur (crédit d’impôt possible).'
        }
      ],
      features: [
        'Dépannage à distance (sans frais de déplacement)',
        'Configuration box internet & Wi-Fi',
        'Résolution de problèmes logiciels & système',
        'Nettoyage & optimisation ordinateurs',
        'Installation & configuration de logiciels',
        'Formation à l\'utilisation informatique',
        'Conseil & audit de votre configuration',
        'Réparation matérielle sur devis'
      ],
      benefits: [
        'Intervention rapide (réponse sous 24h)',
        'Économie sur les frais de déplacement',
        'Logiciels sécurisés pour l\'assistance à distance',
        'Formation pour éviter les problèmes futurs'
      ]
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <PageHero 
          title="Nos services" 
          subtitle="Solutions adaptées à vos besoins"
          id="services-hero-title"
        />

        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 theme-text">Nos services en détail</h2>
              <p className="text-lg theme-text-secondary max-w-2xl mx-auto">
                Des solutions adaptées à chaque besoin, particuliers ou entreprises
              </p>
            </div>

            <ServicesTabs services={services} />

            <div className="mt-16 bg-gradient-to-r from-primary to-primary-dark rounded-xl p-10 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Services à venir</h3>
              <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
                Formations (informatique générale, IA, développement) et développement d'agents IA 
                pour automatiser vos tâches répétitives et chronophages.
              </p>
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
                  <h4 className="font-bold text-lg mb-2">Formations</h4>
                  <p className="text-white/90 text-sm">
                    Informatique, Intelligence Artificielle, Développement web
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
                  <h4 className="font-bold text-lg mb-2">Agents IA</h4>
                  <p className="text-white/90 text-sm">
                    Automatisation de tâches répétitives pour votre entreprise
                  </p>
                </div>
              </div>
              <Link 
                href="/contact" 
                className="inline-block theme-button px-8 py-3 rounded-lg font-semibold transition"
                aria-label="Être informé en avant-première des nouvelles formations et services IA"
              >
                Être informé en avant-première
              </Link>
            </div>
            
            <div className="mt-12 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 border-2 border-primary/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-3 text-primary">Technologies & Outils</h3>
                <p className="text-sm theme-text-secondary max-w-2xl mx-auto">
                  Je m'adapte à vos logiciels existants ou vous propose les meilleures solutions.
                  Indépendant et multi-marques, avec une préférence pour l'open source.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-6">
                <div className="theme-card rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold mb-3 text-primary">Virtualisation</h4>
                  <ul className="space-y-2 text-sm theme-text">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      VMware & Proxmox
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Docker (containers)
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Migration vers Microsoft 365
                    </li>
                  </ul>
                </div>
                <div className="theme-card rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold mb-3 text-primary">Systèmes</h4>
                  <ul className="space-y-2 text-sm theme-text">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Windows Server
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Linux (Ubuntu, Debian)
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Microsoft 365
                    </li>
                  </ul>
                </div>
                <div className="theme-card rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold mb-3 text-primary">Sécurité</h4>
                  <ul className="space-y-2 text-sm theme-text">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Firewall & antivirus
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Sauvegarde automatique
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Audit de sécurité
                    </li>
                  </ul>
                </div>
                <div className="theme-card rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold mb-3 text-primary">Monitoring</h4>
                  <ul className="space-y-2 text-sm theme-text">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      <strong>Zabbix</strong> (open source)
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Alertes temps réel
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Rapports automatiques
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 theme-card rounded-lg p-6 shadow-sm max-w-4xl mx-auto">
                <h4 className="font-semibold mb-3 text-primary">Documentation & Formation</h4>
                <p className="theme-text text-sm mb-3">
                  Pour une gestion autonome de votre système :
                </p>
                <ul className="grid md:grid-cols-2 gap-3 text-sm theme-text">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    Guides d'utilisation personnalisés
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    Formation à l'administration système
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    Procédures de maintenance
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    Support et accompagnement
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 theme-card rounded-xl p-8 border-2 border-primary/20 bg-white/50">
              <h3 className="text-2xl font-bold mb-4 text-primary text-center">Options & extras</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="theme-card-alt rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">Déplacement</h4>
                  <p className="text-sm theme-text-secondary">Gratuit jusqu&apos;à une zone proche, puis 15–30 € au-delà (selon distance).</p>
                </div>
                <div className="theme-card-alt rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">Pièces & licences</h4>
                  <p className="text-sm theme-text-secondary">Facturation au coût réel + marge fixe (10–20%). Matériel non inclus dans les forfaits.</p>
                </div>
                <div className="theme-card-alt rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">Hors horaires</h4>
                  <p className="text-sm theme-text-secondary">Majoration 25–50% pour nuit/week-end ou urgence critique.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 theme-bg-alt rounded-xl p-8 border-2 border-primary/20">
              <h3 className="text-2xl font-bold mb-6 text-center text-primary">Zone d'intervention</h3>
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="theme-card rounded-lg p-6 text-center border-2 border-primary/30">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-primary">Zone principale</h4>
                    <p className="theme-text font-semibold mb-2">Bouillante</p>
                    <p className="theme-text-secondary text-sm">et ses environs proches</p>
                  </div>
                  <div className="theme-card rounded-lg p-6 text-center border-2 border-primary/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/80 to-primary-dark/80 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-primary">Zone étendue</h4>
                    <p className="theme-text font-semibold mb-2">Basse-Terre</p>
                    <p className="theme-text-secondary text-sm">et communes proches</p>
                  </div>
                  <div className="theme-card rounded-lg p-6 text-center border-2 border-primary/10">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/60 to-primary-dark/60 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-primary">Autres zones</h4>
                    <p className="theme-text font-semibold mb-2">Toute la Guadeloupe</p>
                    <p className="theme-text-secondary text-sm">sur devis selon les besoins</p>
                  </div>
                </div>
                <div className="theme-card rounded-lg p-6 bg-primary/5 border border-primary/20">
                  <p className="theme-text text-center mb-3">
                    <strong className="text-primary">📍 Basé à Bouillante</strong>, je privilégie les interventions dans ma zone principale pour une meilleure réactivité.
                  </p>
                  <p className="theme-text-secondary text-sm text-center">
                    Pour les dépannages sur site, la zone principale (Bouillante et environs) permet une intervention rapide avec des frais de déplacement réduits. 
                    Les interventions dans d'autres zones de Guadeloupe sont possibles selon vos besoins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

