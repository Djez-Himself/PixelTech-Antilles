import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PixelTech - Administration réseau & Système en Guadeloupe | Bouillante',
  description: 'PixelTech Antilles - Expert en administration réseau et système en Guadeloupe. Infogérance, support technique, dépannage informatique. Basé à Bouillante, intervention rapide. Solutions open source professionnelles.',
  keywords: 'PixelTech, PixelTech Antilles, Pixeltech, Pixeltech Antilles, administration réseau, infogérance, support technique, dépannage informatique, Guadeloupe, Bouillante, virtualisation, monitoring, Zabbix, GLPI, open source',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'PixelTech - Administration réseau & Système en Guadeloupe',
    description: 'Expert en administration réseau et système. Infogérance, support technique, dépannage informatique. Bouillante, Guadeloupe.',
    url: 'https://pixeltech-antilles.com',
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative theme-hero text-white py-20 overflow-hidden">
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
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="gradient-text">Expert IT</span> en Guadeloupe
              </h1>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
                <strong>PixelTech Antilles</strong> - Votre partenaire informatique de confiance.
                Administration réseau, support technique, dépannage. Réactivité et solutions adaptées.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link
                href="/contact"
                className="inline-block theme-button enhanced-button px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                aria-label="Demander un devis gratuit pour vos besoins informatiques"
              >
                Demander un devis gratuit
              </Link>
              <Link
                href="/services"
                className="inline-block bg-transparent border-2 border-sky-400/50 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-sky-400/10 hover:border-sky-400 transition-all duration-300"
                aria-label="Découvrir nos services informatiques"
              >
                Nos services
              </Link>
            </div>
          </div>
        </section>

        {/* Services principaux */}
        <section className="section-padding theme-bg">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 theme-text">Nos services</h2>
              <p className="text-lg theme-text-secondary max-w-2xl mx-auto">
                Deux solutions adaptées à vos besoins : particuliers ou entreprises
              </p>
            </div>
        
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Service PME */}
              <article className="theme-card enhanced-card card-elevated p-8 rounded-2xl border-2 border-primary/20 hover:border-primary/40 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/30">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 theme-text">Pour les entreprises</h3>
                <p className="theme-text mb-6 text-base leading-relaxed">
                  <strong>Administration réseau & système complète</strong> : infogérance, sécurité, monitoring permanent.
                  Je gère vos serveurs, votre réseau et vos sauvegardes au quotidien pour que vous restiez concentrés sur votre activité.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">PME & Entreprises</span>
                  </div>
                  <p className="text-sm theme-text-secondary">Réponse sous 24h • Intervention rapide • Solutions sur mesure</p>
                </div>
                <Link 
                  href="/services#pme"
                  className="inline-block theme-button px-6 py-3 rounded-lg font-semibold transition"
                  aria-label="Découvrir nos services pour les entreprises et PME"
                >
                  En savoir plus
                </Link>
              </article>
        
              {/* Service Particuliers */}
              <article className="theme-card enhanced-card card-elevated p-8 rounded-2xl border-2 border-primary/20 hover:border-primary/40 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/30">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 theme-text">Pour les particuliers</h3>
                <p className="theme-text mb-6 text-base leading-relaxed">
                  <strong>Support technique & dépannage</strong> : ordinateur, internet, Wi-Fi, logiciels.
                  Résolution rapide de vos problèmes informatiques, à distance ou sur site.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">Particuliers</span>
                  </div>
                  <p className="text-sm theme-text-secondary">Dépannage à distance • Réponse rapide • Tarifs transparents</p>
                </div>
                <Link
                  href="/services#particuliers"
                  className="inline-block theme-button px-6 py-3 rounded-lg font-semibold transition"
                  aria-label="Découvrir nos services de dépannage pour particuliers"
                >
                  En savoir plus
                </Link>
              </article>
            </div>

            {/* Avantages */}
            <div className="mt-16 bg-gradient-to-r from-primary via-primary-dark to-primary rounded-2xl p-8 md:p-10 text-white shadow-2xl shadow-primary/20">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Pourquoi me choisir ?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">Réactivité</h4>
                  <p className="text-white/90 text-sm">Réponse sous 24h, intervention rapide</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">Transparence</h4>
                  <p className="text-white/90 text-sm">Devis gratuits, tarifs clairs, pas de surprise</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">Expertise locale</h4>
                  <p className="text-white/90 text-sm">Basé en Guadeloupe, connaissance du territoire</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding theme-bg-alt">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 theme-text">Prêt à résoudre vos problèmes informatiques ?</h2>
            <p className="text-lg theme-text-secondary mb-8 max-w-2xl mx-auto">
              Contactez-moi pour un devis gratuit et sans engagement. Réponse rapide garantie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block theme-button enhanced-button px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-primary/30"
                aria-label="Demander un devis gratuit"
              >
                Demander un devis gratuit
              </Link>
              <Link
                href="/tarifs"
                className="inline-block theme-button enhanced-button px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-primary/30"
                aria-label="Consulter nos tarifs"
              >
                Voir les tarifs
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
