import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - PixelTech | Demande de devis et support en Guadeloupe',
  description: 'Contactez PixelTech pour vos besoins en administration réseau et support technique. Formulaire de contact et demande de devis. Bouillante, Guadeloupe.',
  keywords: 'contact PixelTech, demande de devis, support technique Guadeloupe, dépannage informatique Bouillante',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact - PixelTech | Demande de devis et support',
    description: 'Contactez PixelTech pour vos besoins en administration réseau et support technique. Bouillante, Guadeloupe.',
    url: 'https://pixeltech-antilles.com/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

