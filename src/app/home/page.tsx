import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'
import FeatureList from '@/components/FeatureList'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PixelTech - Administration réseau & Système en Guadeloupe | Bouillante',
  description: 'PixelTech Antilles - Expert en administration réseau et système en Guadeloupe. Infogérance, support technique, dépannage informatique. Basé à Bouillante, intervention rapide. Solutions open source professionnelles.',
  keywords: 'PixelTech, PixelTech Antilles, Pixeltech, Pixeltech Antilles, administration réseau, infogérance, support technique, dépannage informatique, Guadeloupe, Bouillante, virtualisation, monitoring, Zabbix, GLPI, open source',
  alternates: {
    canonical: '/home',
  },
  openGraph: {
    title: 'PixelTech - Administration réseau & Système en Guadeloupe',
    description: 'Expert en administration réseau et système. Infogérance, support technique, dépannage informatique. Bouillante, Guadeloupe.',
    url: 'https://pixeltech-antilles.com/home',
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="relative theme-hero text-white py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-500/5 to-transparent"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="gradient-text">Administration</span> réseau &<br />
                <span className="gradient-text">Système</span>
              </h1>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
                <strong>PixelTech Antilles</strong>, votre partenaire IT de confiance en Guadeloupe. 
                Je vous accompagne pour <strong className="text-sky-400">sécuriser</strong>, <strong className="text-sky-400">optimiser</strong> et <strong className="text-sky-400">faire évoluer</strong> votre infrastructure informatique. 
                Réactivité et solutions adaptées à vos besoins.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link 
                href="/contact" 
                className="inline-block theme-button enhanced-button px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                Demander un devis
              </Link>
              <Link 
                href="/services" 
                className="inline-block bg-transparent border-2 border-sky-400/50 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-sky-400/10 hover:border-sky-400 transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/20"
              >
                Nos services
              </Link>
            </div>
          </div>
        </section>

        <section className="section-padding theme-bg">
          <div className="container mx-auto px-4">
            <SectionHeader 
              title="Nos services"
              description="Des solutions IT qui vous font gagner du temps, réduisent vos coûts et sécurisent votre activité"
            />
            
            <div className="grid md:grid-cols-2 grid-gap-improved mb-20 max-w-5xl mx-auto">
              <div className="theme-card enhanced-card card-elevated p-10 md:p-12 rounded-2xl border-2 border-primary/20 hover:border-primary/40">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-xl mb-8 flex items-center justify-center shadow-lg shadow-primary/30 icon-hover">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-5 theme-text">Administration réseau & système</h3>
                <p className="theme-text mb-6 text-base md:text-lg leading-relaxed">
                  <strong>Libérez-vous des soucis informatiques</strong> : je prends en charge la gestion complète de votre infrastructure réseau. 
                  Vous vous concentrez sur votre cœur de métier, je m'occupe de la technique. 
                  Je m'adapte à vos logiciels existants ou vous propose les solutions les plus adaptées à vos besoins et votre budget, 
                  avec une préférence pour l'open source quand c'est pertinent.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="theme-card-alt rounded-lg p-4 md:p-5 opacity-80 hover:opacity-100 transition-opacity">
                    <p className="text-sm md:text-base font-semibold text-primary mb-2">Infogérance complète</p>
                    <p className="text-xs md:text-sm theme-text-secondary">Surveillance 24/7, maintenance préventive, interventions rapides. Vous avez un seul interlocuteur pour tout.</p>
                  </div>
                  <div className="theme-card-alt rounded-lg p-4 md:p-5 opacity-80 hover:opacity-100 transition-opacity">
                    <p className="text-sm md:text-base font-semibold text-primary mb-2">Sécurité renforcée</p>
                    <p className="text-xs md:text-sm theme-text-secondary">Protection contre les cyberattaques, sauvegardes automatiques, plan de reprise. Vos données sont protégées.</p>
                  </div>
                </div>
                <FeatureList 
                  items={[
                    'Virtualisation (VMware, Proxmox)',
                    'Windows Server & Microsoft 365',
                    'Containers (Docker)',
                    'Monitoring temps réel (Zabbix)',
                    'Documentation complète de votre réseau'
                  ]}
                  variant="bullet"
                />
              </div>

              <div className="theme-card enhanced-card card-elevated p-10 md:p-12 rounded-2xl border-2 border-primary/20 hover:border-primary/40">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-xl mb-8 flex items-center justify-center shadow-lg shadow-primary/30 icon-hover">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-5 theme-text">Support technique</h3>
                <p className="theme-text mb-6 text-base md:text-lg leading-relaxed">
                  <strong>Un problème ? Je vous aide rapidement</strong> : configuration de votre box internet, 
                  résolution de bugs, optimisation de votre ordinateur. 
                  <strong className="text-primary"> La plupart des dépannages peuvent être effectués à distance</strong> avec des logiciels sécurisés, 
                  sans déplacement donc moins de coûts. Intervention sur site à Basse-Terre/Bouillante si nécessaire. 
                  Réparation matérielle sur devis.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="theme-card-alt rounded-lg p-4 md:p-5 opacity-80 hover:opacity-100 transition-opacity">
                    <p className="text-sm md:text-base font-semibold text-primary mb-2">Dépannage à distance</p>
                    <p className="text-xs md:text-sm theme-text-secondary">La plupart des problèmes peuvent être résolus à distance avec des logiciels sécurisés. Pas de déplacement = moins de coûts et intervention plus rapide.</p>
                  </div>
                  <div className="theme-card-alt rounded-lg p-4 md:p-5 opacity-80 hover:opacity-100 transition-opacity">
                    <p className="text-sm md:text-base font-semibold text-primary mb-2">Dépannage rapide</p>
                    <p className="text-xs md:text-sm theme-text-secondary">Réponse sous 24h, intervention rapide. Vous ne restez pas bloqué longtemps.</p>
                  </div>
                  <div className="theme-card-alt rounded-lg p-4 md:p-5 opacity-80 hover:opacity-100 transition-opacity">
                    <p className="text-sm md:text-base font-semibold text-primary mb-2">Configuration box & Wi-Fi</p>
                    <p className="text-xs md:text-sm theme-text-secondary">Mise en place de votre connexion internet, optimisation du signal Wi-Fi, sécurisation de votre réseau.</p>
                  </div>
                </div>
                <FeatureList 
                  items={[
                    'Résolution problèmes logiciels',
                    'Optimisation & nettoyage système',
                    'Formation à l\'utilisation',
                    'Conseil & audit technique'
                  ]}
                  variant="bullet"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary via-primary-dark to-primary rounded-2xl p-10 md:p-12 text-white shadow-2xl shadow-primary/20 relative overflow-hidden card-elevated">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent"></div>
              <div className="relative z-10">
                <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold mb-8">Pourquoi me choisir ?</h3>
                  <p className="text-white/90 mb-8 text-lg leading-relaxed">
                    <strong>Un interlocuteur unique</strong> qui comprend vos besoins, que vous soyez particulier ou PME. 
                    Je travaille en étroite collaboration avec vous pour trouver les meilleures solutions, 
                    adaptées à votre budget et à vos contraintes. Réactivité et transparence garanties.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <strong className="block">Réactivité</strong>
                        <span className="text-sm text-white/80">Réponse rapide, intervention sous 24h en général</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <strong className="block">Solutions économiques</strong>
                        <span className="text-sm text-white/80">Solutions adaptées à votre budget (open source quand pertinent), dépannage à distance sans frais de déplacement, devis transparents</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <strong className="block">Expertise locale</strong>
                        <span className="text-sm text-white/80">Connaissance des enjeux guadeloupéens, proximité</span>
                      </div>
                    </div>
                  </div>
                  </div>
                <div className="glass rounded-2xl p-8 backdrop-blur-lg border border-white/20 hover:border-white/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                  <h4 className="font-bold text-xl mb-4">Disponibilité</h4>
                  <p className="text-white/90 mb-4 text-lg">
                    Réponse rapide, disponible pour vos urgences
                  </p>
                  <p className="text-sm text-white/80">
                    Intervention sur site à <strong>Bouillante et environs</strong> ou à distance pour toute la Guadeloupe
                  </p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-br from-primary/5 via-white to-primary/5" aria-labelledby="team-title">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 id="team-title" className="text-4xl md:text-5xl font-bold mb-6 theme-text">Notre équipe</h2>
                <p className="text-lg theme-text max-w-2xl mx-auto">
                  Une équipe organisée et efficace pour vous offrir le meilleur service
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 grid-gap-improved mb-12">
                <div className="theme-card enhanced-card card-elevated rounded-2xl p-10 md:p-12 border-2 border-primary/20">
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mr-6 shadow-lg shadow-primary/30 transform transition-transform duration-300 hover:scale-110 hover:rotate-3">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold theme-text">Expert IT</h3>
                      <p className="text-sm theme-text-secondary">Administration réseau & système</p>
                    </div>
                  </div>
                  <p className="theme-text">
                    Votre interlocuteur principal pour toutes vos questions techniques. 
                    Spécialisé en infrastructure, virtualisation, cloud et sécurité.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-primary via-primary-dark to-primary rounded-2xl p-10 shadow-2xl shadow-primary/30 border-2 border-primary/40 hover:shadow-primary/40 transition-all duration-500 text-white relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-6 right-6 z-10">
                    <span className="glass text-white text-xs font-bold px-4 py-2 rounded-full border border-white/30 animate-pulse-glow">
                      BETA
                    </span>
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center mr-6 shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Pixel (PixelAgent)</h3>
                        <p className="text-sm text-white/90">Assistant de direction IA - Innovation en cours</p>
                      </div>
                    </div>
                  <p className="text-white/90 mb-4">
                    <strong>Modernisation numérique en action</strong> : Les agents IA représentent l'avenir du numérique. 
                    Pixel fait partie de cette démarche de modernisation. Cet assistant de direction intelligent est actuellement en <strong>version de test</strong> et 
                    participe activement à l'amélioration de notre réactivité et de notre efficacité opérationnelle.
                  </p>
                  <div className="bg-white/10 rounded-lg p-4 mb-4 border border-white/20">
                    <p className="text-xs text-white/90 italic">
                      ⚠️ Version de test : Pixel peut occasionnellement commettre de petites erreurs. 
                      Nous travaillons activement à son amélioration continue. C'est l'innovation en action !
                    </p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Traitement et suivi des demandes de devis</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Gestion administrative et organisation</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Optimisation des processus internes</span>
                    </div>
                  </div>
                  </div>
                </div>
              </div>

              <div className="theme-card backdrop-blur rounded-xl p-6 text-center opacity-90">
                <p className="theme-text">
                  <strong className="text-primary">Une organisation tournée vers l'avenir</strong> : 
                  notre expert IT se concentre sur vos besoins techniques, tandis que Pixel (PixelAgent), 
                  notre innovation en cours de développement, gère l'administratif en arrière-plan. 
                  Nous investissons dans les technologies d'aujourd'hui pour vous offrir le service de demain.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="theme-bg-alt section-padding" aria-labelledby="approach-title">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 id="approach-title" className="text-4xl md:text-5xl font-bold mb-12 text-center">Mon approche</h2>
              <div className="grid md:grid-cols-2 grid-gap-improved mb-16">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Valeurs & Engagement</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold theme-text mb-2">Transparence</p>
                      <p className="theme-text-secondary text-sm">
                        Devis clairs, pas de surprises. Je vous explique chaque étape et vous conseille les meilleures solutions pour votre budget.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold theme-text mb-2">Proximité</p>
                      <p className="theme-text-secondary text-sm">
                        Basé en Guadeloupe, je comprends les spécificités locales. Un interlocuteur unique, disponible et réactif.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold theme-text mb-2">Indépendance</p>
                      <p className="theme-text-secondary text-sm">
                        Pas de partenariats imposés. Je choisis les meilleures solutions pour vous, avec une préférence pour l'open source pour réduire vos coûts.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Expertise & Compétences</h3>
                  <p className="theme-text mb-4">
                    Spécialisé en <strong>administration réseau et système</strong>, je maîtrise la virtualisation (VMware, Proxmox), 
                    Windows Server, Microsoft 365, Docker, Linux, le cloud, le monitoring (Zabbix) et la gestion de parc (GLPI). 
                    Expérience en administration réseau et support technique, gestion d'incidents et support applications métiers. 
                    Je peux également développer des outils et scripts sur mesure pour vos besoins spécifiques.
                  </p>
                  <p className="theme-text mb-4">
                    <strong>Multi-marques</strong> : je peux gérer toutes les technologies selon vos besoins existants, 
                    sans vous imposer de changement inutile.
                  </p>
                  <p className="theme-text">
                    <strong>Documentation complète</strong> : je documente votre infrastructure (schémas réseau, procédures) 
                    pour que vous puissiez comprendre et maintenir votre système.
                  </p>
                </div>
              </div>
              
              <div className="bg-primary/5 rounded-xl p-8 border-2 border-primary/20">
                <h3 className="text-2xl font-semibold mb-4 text-primary text-center">Évolution & Innovation</h3>
                <p className="theme-text text-center mb-6 max-w-2xl mx-auto">
                  Pour accompagner encore mieux les entreprises guadeloupéennes, je développe des solutions de 
                  <strong> formation</strong> (informatique, IA, développement) et des <strong>agents IA</strong> 
                  pour automatiser vos tâches répétitives. Ces services seront disponibles prochainement.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

