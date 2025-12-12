import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StructuredData from '@/components/StructuredData'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import FloatingContactButton from '@/components/FloatingContactButton'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'PixelTech - Administration réseau & Système en Guadeloupe',
    template: '%s | PixelTech'
  },
  description: 'PixelTech Antilles - Expert en administration réseau et système en Guadeloupe. Infogérance, support technique et dépannage informatique pour PME et particuliers. Basé à Bouillante, intervention rapide. Solutions open source professionnelles.',
  keywords: ['PixelTech', 'PixelTech Antilles', 'Pixeltech', 'Pixeltech Antilles', 'administration réseau', 'infogérance', 'support technique', 'dépannage informatique', 'Guadeloupe', 'Bouillante', 'virtualisation', 'monitoring', 'Zabbix', 'GLPI', 'open source'],
  authors: [{ name: 'Benoit Paterne' }],
  creator: 'PixelTech',
  publisher: 'PixelTech',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://pixeltech-antilles.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://pixeltech-antilles.com',
    siteName: 'PixelTech',
    title: 'PixelTech - Administration réseau & Système en Guadeloupe',
    description: 'Expert en administration réseau et système. Infogérance, support technique, dépannage informatique. Bouillante, Guadeloupe.',
    images: [
      {
        url: '/logos/logo.png',
        width: 1200,
        height: 630,
        alt: 'PixelTech - Administration réseau & Système',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PixelTech - Administration réseau & Système en Guadeloupe',
    description: 'Expert en administration réseau et système. Infogérance, support technique, dépannage informatique. Bouillante, Guadeloupe.',
    images: ['/logos/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: [
      { url: '/favicon.ico' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" data-theme="dark" className={inter.variable}>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        {/* Favicons explicites pour Google Search */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body data-theme="dark" className={inter.className}>
        <GoogleAnalytics />
        <StructuredData />
        {children}
        <FloatingContactButton />
      </body>
    </html>
  )
}

