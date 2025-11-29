import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/components/Providers'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: {
    default: 'PixelTech - Administration réseau & Système en Guadeloupe',
    template: '%s | PixelTech'
  },
  description: 'Infogérance, administration réseau et support technique pour PME et particuliers en Guadeloupe. Basé à Bouillante, intervention rapide. Solutions open source professionnelles.',
  keywords: ['administration réseau', 'infogérance', 'support technique', 'dépannage informatique', 'Guadeloupe', 'Bouillante', 'virtualisation', 'monitoring', 'Zabbix', 'GLPI', 'open source'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" data-theme="dark">
      <body data-theme="dark">
        <StructuredData />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

