import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TrackedLink from '@/components/TrackedLink'
import type { Metadata } from 'next'
import { SITE_PAUSED } from '@/lib/site-mode'

export const metadata: Metadata = {
  title: SITE_PAUSED ? 'PixelTech Antilles – Activité temporairement suspendue' : 'PixelTech - Administration réseau & Système en Guadeloupe | Bouillante',
  description: SITE_PAUSED ? 'PixelTech Antilles suspend temporairement ses activités. Merci pour votre confiance. Nous espérons vous retrouver prochainement.' : 'PixelTech Antilles - Expert en administration réseau et système en Guadeloupe. Infogérance, support technique, dépannage informatique. Basé à Bouillante, intervention rapide. Solutions open source professionnelles.',
  keywords: 'PixelTech, PixelTech Antilles, Pixeltech, Pixeltech Antilles, administration réseau, infogérance, support technique, dépannage informatique, Guadeloupe, Bouillante, virtualisation, monitoring, Zabbix, GLPI, open source',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: SITE_PAUSED ? 'PixelTech Antilles – Activité temporairement suspendue' : 'PixelTech - Administration réseau & Système en Guadeloupe',
    description: SITE_PAUSED ? 'PixelTech Antilles suspend temporairement ses activités. Merci pour votre confiance. Nous espérons vous retrouver prochainement.' : 'Expert en administration réseau et système. Infogérance, support technique, dépannage informatique. Bouillante, Guadeloupe.',
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
                <strong>PixelTech Antilles</strong> - Solutions informatiques complètes pour PME et particuliers en Guadeloupe. 
                Intervention rapide, tarifs transparents, service de qualité.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <TrackedLink
                href="/contact"
                className="inline-block theme-button enhanced-button px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                ariaLabel="Demander un devis gratuit pour vos besoins informatiques"
                ctaName="Demander un devis gratuit"
                location="Hero Section"
              >
                Demander un devis gratuit
              </TrackedLink>
              <TrackedLink
                href="/services"
                className="inline-block bg-transparent border-2 border-sky-400/50 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-sky-400/10 hover:border-sky-400 transition-all duration-300"
                ariaLabel="Découvrir nos services informatiques"
                ctaName="Nos services"
                location="Hero Section"
              >
                Nos services
              </TrackedLink>
            </div>
          </div>
        </section>

        {/* Services principaux */}
        <section className="section-padding theme-bg">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 theme-text">Nos services</h2>
              <p className="text-lg theme-text-secondary max-w-2xl mx-auto mb-4">
                Deux solutions adaptées à vos besoins : particuliers ou entreprises
              </p>
              <p className="text-sm theme-text-secondary">
                <Link href="/services" className="text-primary hover:underline font-medium">Voir tous nos services en détail</Link> • 
                <Link href="/tarifs" className="text-primary hover:underline font-medium ml-2">Consulter nos tarifs</Link>
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
                  Je gère votre infrastructure informatique : serveurs, réseau, sauvegardes. Vous choisissez la formule adaptée à vos besoins.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">PME & Entreprises</span>
                  </div>
                  <p className="text-sm theme-text-secondary">Réponse sous 24h • Devis gratuit • Intervention locale</p>
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
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">Réactivité</h4>
                  <p className="text-white/90 text-sm">Réponse sous 24h, intervention rapide</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">Transparence</h4>
                  <p className="text-white/90 text-sm">Devis gratuits, tarifs clairs, pas de surprise</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
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
              <TrackedLink
                href="/contact"
                className="inline-block theme-button enhanced-button px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-primary/30"
                ariaLabel="Demander un devis gratuit"
                ctaName="Demander un devis gratuit"
                location="CTA Section"
              >
                Demander un devis gratuit
              </TrackedLink>
              <TrackedLink
                href="/tarifs"
                className="inline-block theme-button enhanced-button px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-primary/30"
                ariaLabel="Consulter nos tarifs"
                ctaName="Voir les tarifs"
                location="CTA Section"
              >
                Voir les tarifs
              </TrackedLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
