import Image from 'next/image'

export default function PausePage() {
  return (
    <main className="pause-page">
      <div className="pause-orb pause-orb-one" aria-hidden="true" />
      <div className="pause-orb pause-orb-two" aria-hidden="true" />

      <div className="pause-content">
        <div className="pause-brand">
          <Image
            src="/logos/logo.png"
            alt="PixelTech Antilles"
            width={260}
            height={130}
            priority
            className="pause-logo"
          />
          <span className="pause-brand-name">PIXELTECH <span>ANTILLES</span></span>
        </div>

        <div className="pause-status">
          <span className="pause-status-dot" />
          ACTIVITÉ TEMPORAIREMENT SUSPENDUE
        </div>

        <div className="pause-icon" aria-hidden="true">
          <svg viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="1.5" opacity=".35" />
            <path d="M25 22V42M39 22V42" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>

        <h1>Nous faisons une petite pause.</h1>
        <p className="pause-lead">
          PixelTech Antilles suspend temporairement ses activités.
        </p>
        <p className="pause-message">
          Merci à toutes celles et ceux qui nous ont accordé leur confiance.
          Cette pause est temporaire : nous espérons avoir le plaisir de vous
          retrouver prochainement.
        </p>

        <div className="pause-divider" />

        <p className="pause-location">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="12" cy="10" r="2.3" stroke="currentColor" strokeWidth="1.6" />
          </svg>
          GUADELOUPE · ANTILLES
        </p>
      </div>

      <footer className="pause-footer">
        <span>PIXELTECH ANTILLES</span>
        <span>Solutions informatiques · Guadeloupe</span>
      </footer>
    </main>
  )
}
