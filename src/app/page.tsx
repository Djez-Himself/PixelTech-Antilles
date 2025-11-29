import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Site en construction - PixelTech',
  description: 'Site en phase beta. Accédez à la version en cours de développement de PixelTech, expert en administration réseau et système en Guadeloupe.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function Construction() {
  return (
    <div className="min-h-screen flex items-center justify-center theme-bg relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
          <defs>
            <pattern id="grid-construction" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-construction)" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-sky-500/5"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10 max-w-3xl">
        <div className="mb-8 animate-fade-in-up">
          <Image 
            src="/logos/logo.png" 
            alt="PixelTech" 
            width={200} 
            height={60}
            className="mx-auto h-16 w-auto"
            priority
          />
        </div>
        
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Site en construction</span>
          </h1>
          <div className="inline-block bg-sky-500/20 border-2 border-sky-400 rounded-full px-6 py-2 mb-6">
            <span className="text-sky-400 font-semibold text-lg">Phase Beta</span>
          </div>
        </div>
        
        <div className="mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl md:text-2xl theme-text-secondary mb-4 max-w-2xl mx-auto">
            Nous travaillons activement sur notre nouveau site web.
          </p>
          <p className="text-lg theme-text-secondary max-w-xl mx-auto">
            Le site est actuellement en <strong className="text-sky-400">phase beta</strong> et peut encore évoluer.
            Vous pouvez accéder à la version en cours de développement ci-dessous.
          </p>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Link 
            href="/home" 
            className="inline-block theme-button enhanced-button px-12 py-5 rounded-xl font-semibold text-xl transition-all duration-300 shadow-lg shadow-primary/30"
          >
            Accéder au site
          </Link>
        </div>
        
        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-sm theme-text-secondary">
            <strong className="text-primary">PixelTech</strong> - Administration réseau & Système en Guadeloupe
          </p>
        </div>
      </div>
    </div>
  )
}
