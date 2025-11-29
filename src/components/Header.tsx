'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="theme-header shadow-sm sticky top-0 z-50 theme-border-bottom" role="banner">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center" role="navigation" aria-label="Navigation principale">
        <Link href="/home" className="flex items-center gap-2" onClick={closeMenu}>
          <Image 
            src="/logos/logo.png" 
            alt="PixelTech - Administration réseau & Système en Guadeloupe" 
            width={150} 
            height={45}
            className="h-10 w-auto"
            priority
            loading="eager"
          />
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/home" className="theme-nav-link">
            Accueil
          </Link>
          <Link href="/services" className="theme-nav-link">
            Services
          </Link>
          <Link href="/tarifs" className="theme-nav-link">
            Tarifs
          </Link>
          <Link href="/a-propos" className="theme-nav-link">
            À propos
          </Link>
          <Link href="/contact" className="theme-nav-link">
            Contact
          </Link>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <button 
            onClick={toggleMenu}
            className="theme-text p-2 hover:bg-sky-500/10 rounded-lg transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>
      
      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden border-t theme-border bg-black/95 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <Link 
              href="/home" 
              className="block theme-nav-link py-3 px-4 rounded-lg hover:bg-sky-500/10 transition-colors"
              onClick={closeMenu}
            >
              Accueil
            </Link>
            <Link 
              href="/services" 
              className="block theme-nav-link py-3 px-4 rounded-lg hover:bg-sky-500/10 transition-colors"
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link 
              href="/tarifs" 
              className="block theme-nav-link py-3 px-4 rounded-lg hover:bg-sky-500/10 transition-colors"
              onClick={closeMenu}
            >
              Tarifs
            </Link>
            <Link 
              href="/a-propos" 
              className="block theme-nav-link py-3 px-4 rounded-lg hover:bg-sky-500/10 transition-colors"
              onClick={closeMenu}
            >
              À propos
            </Link>
            <Link 
              href="/contact" 
              className="block theme-nav-link py-3 px-4 rounded-lg hover:bg-sky-500/10 transition-colors"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

