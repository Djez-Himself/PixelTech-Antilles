import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="theme-footer py-8 mt-16" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PixelTech</h3>
            <p className="theme-footer-text">
              Solutions informatiques professionnelles pour votre entreprise.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 theme-footer-title">Liens</h4>
            <ul className="space-y-2 theme-footer-text">
              <li><Link href="/home" className="theme-footer-link">Accueil</Link></li>
              <li><Link href="/services" className="theme-footer-link">Services</Link></li>
              <li><Link href="/tarifs" className="theme-footer-link">Tarifs</Link></li>
              <li><Link href="/a-propos" className="theme-footer-link">À propos</Link></li>
              <li><Link href="/contact" className="theme-footer-link">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 theme-footer-title">Contact</h4>
            <ul className="space-y-2 theme-footer-text">
              <li>📍 Bouillante, Guadeloupe (971)</li>
              <li>Zone principale : Bouillante et environs</li>
              <li className="pt-2">
                <a href="mailto:contact@pixeltech-antilles.com" className="theme-footer-link underline block">
                  contact@pixeltech-antilles.com
                </a>
              </li>
              <li>
                <a href="mailto:devis@pixeltech-antilles.com" className="theme-footer-link underline block">
                  devis@pixeltech-antilles.com
                </a>
              </li>
              <li className="pt-2">
                <Link href="/contact" className="theme-footer-link underline">
                  Formulaire de contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="theme-footer-border mt-8 pt-8 text-center theme-footer-text">
          <p>&copy; {currentYear} PixelTech. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

