'use client'

import { useState } from 'react'
import type { Forfait } from '@/types/services'

type TarifsTabsProps = {
  particuliers: Forfait[]
  pme: Forfait[]
}

export default function TarifsTabs({ particuliers, pme }: TarifsTabsProps) {
  const [tab, setTab] = useState<'particuliers' | 'pme'>('particuliers')

  return (
    <>
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        <button
          type="button"
          onClick={() => setTab('particuliers')}
          className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all ${
            tab === 'particuliers' ? 'bg-primary text-white border-primary' : 'border-primary/30 theme-text-secondary'
          }`}
          aria-pressed={tab === 'particuliers'}
        >
          Particuliers
        </button>
        <button
          type="button"
          onClick={() => setTab('pme')}
          className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all ${
            tab === 'pme' ? 'bg-primary text-white border-primary' : 'border-primary/30 theme-text-secondary'
          }`}
          aria-pressed={tab === 'pme'}
        >
          PME / TPE
        </button>
      </div>

      <div className="space-y-12">
        {tab === 'particuliers' && (
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center theme-text">Offres particuliers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {particuliers.map((forfait, idx) => (
                <article key={idx} className="theme-card card-elevated rounded-xl p-5 border-2 border-primary/20">
                  <h3 className="text-lg font-bold mb-2 text-primary">{forfait.name}</h3>
                  <p className="text-sm theme-text-secondary mb-3">{forfait.description}</p>
                  <p className="text-sm font-semibold text-primary">{forfait.price}</p>
                </article>
              ))}
            </div>
            <p className="text-xs theme-text-secondary text-center mt-4">
              Matériel/licences non inclus. Crédit d&apos;impôt 50% possible sur certaines prestations à domicile.
            </p>
          </div>
        )}

        {tab === 'pme' && (
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center theme-text">Offres PME / TPE</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {pme.map((forfait, idx) => (
                <article key={idx} className="theme-card card-elevated rounded-xl p-5 border-2 border-primary/20">
                  <h3 className="text-lg font-bold mb-2 text-primary">{forfait.name}</h3>
                  <p className="text-sm theme-text-secondary mb-3">{forfait.description}</p>
                  <p className="text-sm font-semibold text-primary">{forfait.price}</p>
                </article>
              ))}
            </div>
            <p className="text-xs theme-text-secondary text-center mt-4">
              Tarifs à affiner selon le périmètre (nombre de postes/serveurs, sites, contraintes de sécurité, temps de réponse).
            </p>
          </div>
        )}
      </div>
    </>
  )
}
