import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'À propos - PixelTech | Expert IT en Guadeloupe',
  description: 'Découvrez Benoit Paterne, expert en administration réseau et système basé à Bouillante, Guadeloupe. Parcours, compétences et valeurs. Solutions IT professionnelles.',
  keywords: 'expert IT Guadeloupe, administration réseau, Benoit Paterne, Bouillante, infogérance, support technique',
  alternates: {
    canonical: '/a-propos',
  },
  openGraph: {
    title: 'À propos - PixelTech | Expert IT en Guadeloupe',
    description: 'Découvrez Benoit Paterne, expert en administration réseau et système basé à Bouillante, Guadeloupe.',
    url: 'https://pixeltech-antilles.com/a-propos',
  },
}

export default function APropos() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="theme-hero text-white py-12" aria-labelledby="about-hero-title">
          <div className="container mx-auto px-4">
            <h1 id="about-hero-title" className="text-4xl font-bold">À propos</h1>
            <p className="text-white/90 mt-2">Qui suis-je et pourquoi me choisir ?</p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Présentation personnelle */}
              <div className="theme-card card-elevated rounded-xl p-8 md:p-10 mb-16 border-2 border-primary/20">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30 flex-shrink-0">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-3 theme-text">Benoit Paterne</h2>
                    <p className="text-xl text-primary mb-4">Expert en Administration Réseau & Système</p>
                    <p className="theme-text-secondary">
                      Basé à <strong className="text-primary">Bouillante, Guadeloupe</strong>, je vous accompagne dans la gestion et l'optimisation de votre infrastructure informatique. 
                      Spécialisé en administration réseau, virtualisation, cloud et sécurité, je mets mon expertise au service des PME et particuliers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Parcours et expertise */}
              <div className="grid md:grid-cols-2 grid-gap-improved mb-16">
                <div className="theme-card card-elevated rounded-xl p-8 md:p-10 border-2 border-primary/20">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Mon parcours</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold theme-text mb-2">Administration réseau & système</p>
                      <p className="theme-text-secondary text-sm">
                        Expérience en administration réseau et système, gestion d'infrastructures complexes, 
                        virtualisation et cloud. Expertise acquise sur le terrain avec des environnements variés.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold theme-text mb-2">Support technique</p>
                      <p className="theme-text-secondary text-sm">
                        Expérience en support technique, gestion d'incidents et support applications métiers. 
                        Accompagnement des utilisateurs et résolution de problèmes au quotidien.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold theme-text mb-2">Développement & automatisation</p>
                      <p className="theme-text-secondary text-sm">
                        Développement d'outils et scripts sur mesure pour automatiser vos processus et optimiser votre productivité.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="theme-card card-elevated rounded-xl p-8 md:p-10 border-2 border-primary/20">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Mes compétences</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-semibold theme-text">Virtualisation</p>
                        <p className="theme-text-secondary text-sm">VMware, Proxmox, Docker</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-semibold theme-text">Windows Server & Microsoft 365</p>
                        <p className="theme-text-secondary text-sm">Configuration, administration, migration</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-semibold theme-text">Monitoring & Gestion de parc</p>
                        <p className="theme-text-secondary text-sm">Zabbix, GLPI (open source)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-semibold theme-text">Linux & Cloud</p>
                        <p className="theme-text-secondary text-sm">Administration Linux, migration cloud</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-semibold theme-text">Sécurité & Cybersécurité</p>
                        <p className="theme-text-secondary text-sm">Sécurisation réseau, firewall, sauvegardes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Valeurs */}
              <div className="theme-card rounded-xl p-8 mb-12 border-2 border-primary/20">
                <h3 className="text-2xl font-bold mb-6 text-center text-primary">Mes valeurs</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="font-bold theme-text mb-2">Transparence</h4>
                    <p className="theme-text-secondary text-sm">
                      Devis clairs, pas de surprises. Je vous explique chaque étape et vous conseille les meilleures solutions pour votre budget.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h4 className="font-bold theme-text mb-2">Proximité</h4>
                    <p className="theme-text-secondary text-sm">
                      Basé en Guadeloupe, je comprends les spécificités locales. Un interlocuteur unique, disponible et réactif.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="font-bold theme-text mb-2">Indépendance</h4>
                    <p className="theme-text-secondary text-sm">
                      Pas de partenariats imposés. Je choisis les meilleures solutions pour vous, avec une préférence pour l'open source pour réduire vos coûts.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision et innovation */}
              <div className="bg-gradient-to-r from-primary via-primary-dark to-primary rounded-xl p-10 text-white shadow-2xl shadow-primary/20 relative overflow-hidden mb-12">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6 text-center">Ma vision</h3>
                  <p className="text-white/90 mb-6 text-lg text-center max-w-3xl mx-auto">
                    Je crois en une approche <strong>humaine et technique</strong> de l'informatique. 
                    Mon objectif est de vous libérer des contraintes techniques pour que vous puissiez vous concentrer sur votre cœur de métier.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-white/10 rounded-lg p-6 backdrop-blur border border-white/20">
                      <h4 className="font-bold text-lg mb-3">Innovation</h4>
                      <p className="text-white/90 text-sm">
                        J'investis dans les technologies d'avenir, comme l'IA (Pixel/PixelAgent), pour améliorer continuellement 
                        la qualité de service et la réactivité.
                      </p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-6 backdrop-blur border border-white/20">
                      <h4 className="font-bold text-lg mb-3">Évolution</h4>
                      <p className="text-white/90 text-sm">
                        Je développe des solutions de formation et d'automatisation pour accompagner les entreprises guadeloupéennes 
                        dans leur transformation numérique.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pourquoi me choisir */}
              <div className="theme-card rounded-xl p-8 border-2 border-primary/20">
                <h3 className="text-2xl font-bold mb-6 text-center text-primary">Pourquoi me choisir ?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold theme-text mb-1">Un interlocuteur unique</p>
                      <p className="theme-text-secondary text-sm">
                        Pas de multiples interlocuteurs, pas de service client impersonnel. Vous avez un contact direct avec moi, 
                        qui comprend vos besoins et votre contexte.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold theme-text mb-1">Solutions adaptées à votre budget</p>
                      <p className="theme-text-secondary text-sm">
                        Je privilégie l'open source quand c'est pertinent pour réduire vos coûts, sans compromettre la qualité. 
                        Je m'adapte à votre budget et vos contraintes.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold theme-text mb-1">Réactivité et disponibilité</p>
                      <p className="theme-text-secondary text-sm">
                        Réponse rapide, intervention sous 24h en général. Basé à Bouillante, je peux intervenir rapidement 
                        dans ma zone principale ou à distance pour toute la Guadeloupe.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold theme-text mb-1">Documentation complète</p>
                      <p className="theme-text-secondary text-sm">
                        Je documente votre infrastructure (schémas réseau, procédures) pour que vous puissiez comprendre 
                        et maintenir votre système. Transparence totale.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center mt-12">
                <Link 
                  href="/contact" 
                  className="inline-block theme-button enhanced-button px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
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

