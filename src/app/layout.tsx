import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/components/Providers'
import StructuredData from '@/components/StructuredData'
import GoogleAnalytics from '@/components/GoogleAnalytics'

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
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" data-theme="dark">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body data-theme="dark">
        <GoogleAnalytics />
        <StructuredData />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

