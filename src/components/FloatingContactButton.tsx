'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function FloatingContactButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Afficher le bouton après un scroll de 300px
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Link
      href="/contact"
      className={`fixed bottom-6 right-6 z-50 bg-primary text-white p-4 rounded-full shadow-2xl shadow-primary/50 hover:bg-primary-dark transition-all duration-300 flex items-center gap-2 group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      } md:hidden`}
      aria-label="Contacter PixelTech"
    >
      <svg 
        className="w-6 h-6" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
        />
      </svg>
      <span className="font-semibold text-sm whitespace-nowrap hidden group-hover:inline-block transition-all">
        Contact
      </span>
    </Link>
  )
}
