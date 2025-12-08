'use client'

import { useState } from 'react'
import FeatureList from './FeatureList'
import type { Service } from '@/types/services'

export default function ServicesTabs({ services }: { services: Service[] }) {
  const [tab, setTab] = useState<'pme' | 'particuliers'>('pme')

  const pmeServices = services.filter((s) => s.title === 'Administration réseau & système')
  const partServices = services.filter((s) => s.title.includes('Support technique'))

  const renderServiceCard = (service: Service, key: string | number) => (
    <div
      key={key}
      className="theme-card card-elevated border-2 border-primary/20 rounded-xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-300 group"
      role="article"
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
        <div className="flex-1 mb-4 md:mb-0">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
              {service.icon === 'building' ? (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )}
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">{service.title}</h2>
              <p className="text-sm theme-text-secondary font-semibold">{service.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      <p className="theme-text mb-8 text-lg md:text-xl leading-relaxed">{service.description}</p>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-primary">Les avantages :</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {service.benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="theme-text text-sm">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {service.packages && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-primary">Forfaits conseillés</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {service.packages.map((pack, idx) => (
              <div key={idx} className="theme-card-alt rounded-lg p-4 border border-primary/20 hover:border-primary/40 transition-all">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold theme-text">{pack.name}</h4>
                  <span className="text-sm font-bold text-primary">{pack.price}</span>
                </div>
                <p className="text-sm theme-text-secondary">{pack.detail}</p>
              </div>
            ))}
          </div>
          {service.title === 'Support technique & dépannage' && (
            <p className="text-xs theme-text-secondary mt-3">
              Matériel/licences non inclus. Crédit d&apos;impôt 50% possible sur certaines prestations à domicile (particuliers).
            </p>
          )}
        </div>
      )}

      {service.title === 'Administration réseau & système' && (
        <div className="mb-8 space-y-5">
          <div className="theme-card-alt rounded-lg p-5 md:p-6 hover:border-primary/40 transition-all">
            <h4 className="font-semibold text-primary mb-2">Infogérance complète</h4>
            <p className="text-sm theme-text mb-3">
              Monitoring permanent de votre infrastructure (outils actifs 24/7), maintenance préventive, intervention rapide pendant les heures ouvrables. 
              Vous avez un seul interlocuteur pour tout gérer. Surveillance avec Zabbix pour anticiper les pannes.
            </p>
            <ul className="text-sm theme-text-secondary space-y-1">
              <li>• Monitoring permanent de vos serveurs et équipements réseau (alertes automatiques 24/7)</li>
              <li>• Alertes automatiques en cas d'anomalie</li>
              <li>• Maintenance préventive pour éviter les pannes</li>
              <li>• Reporting régulier de l'état de votre infrastructure</li>
            </ul>
          </div>

          <div className="theme-card-alt rounded-lg p-4">
            <h4 className="font-semibold text-primary mb-2">Virtualisation & Hébergement</h4>
            <p className="text-sm theme-text mb-3">
              Optimisation de vos serveurs (VMware, Proxmox selon vos besoins), migration vers des solutions hébergées, 
              réduction des coûts matériels. Containers Docker pour une meilleure performance.
            </p>
            <ul className="text-sm theme-text-secondary space-y-1">
              <li>• Virtualisation de vos serveurs physiques (économie d'énergie et matériel)</li>
              <li>• Migration vers Microsoft 365 (Exchange Online, SharePoint, Teams)</li>
              <li>• Configuration de sauvegardes externalisées</li>
              <li>• Conseil pour le choix d'hébergeurs adaptés à vos besoins</li>
              <li>• Containers Docker pour des applications isolées et performantes</li>
            </ul>
          </div>

          <div className="theme-card-alt rounded-lg p-4">
            <h4 className="font-semibold text-primary mb-2">Sécurité & Sauvegarde</h4>
            <p className="text-sm theme-text mb-3">
              Protection contre les cybermenaces, sécurisation de votre réseau, sauvegardes automatiques, 
              plan de reprise d'activité. Vos données sont protégées.
            </p>
            <ul className="text-sm theme-text-secondary space-y-1">
              <li>• Configuration de firewall et sécurisation réseau</li>
              <li>• Protection contre virus, ransomware et intrusions</li>
              <li>• Sauvegardes automatiques quotidiennes</li>
              <li>• Plan de reprise d'activité en cas de sinistre</li>
            </ul>
          </div>

          <div className="theme-card-alt rounded-lg p-4">
            <h4 className="font-semibold text-primary mb-2">Documentation & Gestion de parc</h4>
            <p className="text-sm theme-text mb-3">
              Documentation complète de votre réseau (schémas, cartes, inventaire), 
              gestion de parc avec GLPI, suivi des interventions. Vous savez toujours où en est votre infrastructure.
            </p>
            <ul className="text-sm theme-text-secondary space-y-1">
              <li>• Schémas réseau détaillés (topologie complète)</li>
              <li>• Cartes réseau avec adresses IP et équipements</li>
              <li>• Inventaire automatique de votre parc informatique</li>
              <li>• Procédures et guides pour votre équipe</li>
            </ul>
          </div>
        </div>
      )}

      {service.title.includes('Support technique') && (
        <div className="mb-6 space-y-4">
          <div className="bg-primary/10 border-2 border-primary/30 rounded-lg p-4">
            <h4 className="font-semibold text-primary mb-2">Dépannage à distance</h4>
            <p className="text-sm theme-text mb-3">
              <strong>La plupart des problèmes peuvent être résolus à distance</strong> avec des logiciels sécurisés de prise en main à distance. 
              Pas de déplacement nécessaire = <strong className="text-primary">moins de coûts</strong> pour vous et <strong className="text-primary">intervention plus rapide</strong>. 
              Idéal pour les problèmes logiciels, configuration, optimisation, ou formation.
            </p>
            <ul className="text-sm theme-text-secondary space-y-1">
              <li>• Résolution de problèmes sans déplacement</li>
              <li>• Économie sur les frais de déplacement</li>
              <li>• Intervention plus rapide (pas d'attente de rendez-vous)</li>
              <li>• Logiciels sécurisés et chiffrés</li>
              <li>• Support pour Windows, Linux, Mac</li>
            </ul>
          </div>

          <div className="theme-card-alt rounded-lg p-4">
            <h4 className="font-semibold text-primary mb-2">Configuration Box Internet & Wi-Fi</h4>
            <p className="text-sm theme-text mb-3">
              Mise en place de votre connexion internet, configuration de votre box, optimisation du signal Wi-Fi, 
              sécurisation de votre réseau domestique ou professionnel.
            </p>
            <ul className="text-sm theme-text-secondary space-y-1">
              <li>• Configuration complète de votre box (Orange, SFR, Free, etc.)</li>
              <li>• Optimisation du signal Wi-Fi (portée, débit, canaux)</li>
              <li>• Sécurisation de votre réseau (changement mot de passe, cryptage)</li>
              <li>• Partage de fichiers et imprimantes sur le réseau</li>
            </ul>
          </div>

          <div className="theme-card-alt rounded-lg p-4">
            <h4 className="font-semibold text-primary mb-2">Dépannage & Optimisation</h4>
            <p className="text-sm theme-text mb-3">
              Résolution de problèmes logiciels, optimisation de votre ordinateur, nettoyage système, 
              récupération de données si possible. Possibilité de récupérer votre matériel pour configuration à l'atelier si nécessaire.
            </p>
            <ul className="text-sm theme-text-secondary space-y-1">
              <li>• Résolution de bugs et erreurs système</li>
              <li>• Nettoyage et optimisation (fichiers temporaires, registre)</li>
              <li>• Installation et configuration de logiciels</li>
              <li>• Mise à jour système et sécurité</li>
              <li>• Configuration à l'atelier (récupération du matériel possible)</li>
            </ul>
          </div>

          <div className="theme-card-alt rounded-lg p-4">
            <h4 className="font-semibold text-primary mb-2">Formation & Conseil</h4>
            <p className="text-sm theme-text mb-3">
              Formation à l'utilisation de vos outils, conseil pour optimiser votre workflow, 
              audit de votre configuration actuelle.
            </p>
            <ul className="text-sm theme-text-secondary space-y-1">
              <li>• Formation à l'utilisation de Windows, Linux, logiciels métier</li>
              <li>• Conseils pour améliorer votre productivité</li>
              <li>• Audit de votre configuration actuelle</li>
              <li>• Recommandations d'équipements adaptés à vos besoins</li>
            </ul>
          </div>
        </div>
      )}

      <div className="border-t theme-border pt-6">
        <h3 className="text-lg font-semibold mb-4 text-primary">Ce que je propose :</h3>
        <FeatureList items={service.features} variant="check" columns={1} />
      </div>
    </div>
  )

  return (
    <>
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        <button
          type="button"
          onClick={() => setTab('pme')}
          className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all ${
            tab === 'pme' ? 'bg-primary text-white border-primary' : 'border-primary/30 theme-text-secondary'
          }`}
        >
          PME / Entreprises
        </button>
        <button
          type="button"
          onClick={() => setTab('particuliers')}
          className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all ${
            tab === 'particuliers' ? 'bg-primary text-white border-primary' : 'border-primary/30 theme-text-secondary'
          }`}
        >
          Particuliers
        </button>
      </div>

      <div className="space-y-16">
        {tab === 'pme' && pmeServices.map((s, idx) => renderServiceCard(s, idx))}
        {tab === 'particuliers' && partServices.map((s, idx) => renderServiceCard(s, `p-${idx}`))}
      </div>
    </>
  )
}
