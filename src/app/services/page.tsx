import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services - PixelTech | Administration réseau & Support technique en Guadeloupe',
  description: 'Infogérance, administration réseau, support technique et dépannage informatique pour PME et particuliers. Bouillante, Guadeloupe. Solutions open source professionnelles.',
  keywords: 'infogérance, administration réseau, support technique, dépannage informatique, Guadeloupe, Bouillante, virtualisation, monitoring, Zabbix, GLPI',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Services - PixelTech | Administration réseau & Support technique',
    description: 'Infogérance, administration réseau, support technique et dépannage informatique pour PME et particuliers. Bouillante, Guadeloupe.',
    url: 'https://pixeltech-antilles.com/services',
  },
}

export default function Services() {
  const services = [
    {
      title: 'Administration réseau & système',
      description: 'Je prends en charge la gestion complète de votre infrastructure réseau pour que vous puissiez vous concentrer sur votre activité. Infogérance, sécurité, virtualisation et cloud. Je m\'adapte à vos logiciels existants ou vous propose les solutions les plus adaptées à vos besoins et votre budget, avec une préférence pour l\'open source quand c\'est pertinent. Documentation complète de votre réseau pour une traçabilité totale.',
      features: [
        'Infogérance & maintenance informatique',
        'Configuration serveurs Linux/Windows Server',
        'Windows Server & Microsoft 365',
        'Virtualisation (VMware, Proxmox)',
        'Containers (Docker)',
        'Gestion cloud & migration',
        'Sécurité informatique & cybersécurité',
        'Sécurisation réseau & firewall',
        'Monitoring avec Zabbix (open source)',
        'Gestion de parc avec GLPI (open source)',
        'Documentation réseau complète (cartes, schémas)',
        'Gestion Active Directory / LDAP',
        'Support applications métiers (Sage, Office 365)',
        'Sauvegarde & plan de reprise d\'activité',
        'Développement d\'outils & scripts sur mesure'
      ],
      target: 'PME'
    },
    {
      title: 'Support technique',
      description: 'Un problème informatique ? Je vous aide rapidement. Configuration de votre box internet et Wi-Fi, résolution de bugs, optimisation de votre ordinateur, formation à l\'utilisation. La plupart des dépannages peuvent être effectués à distance avec des logiciels sécurisés, sans déplacement donc moins de coûts. Intervention sur site dans la zone Basse-Terre/Bouillante si nécessaire. Réponse sous 24h en général. Réparation matérielle sur devis.',
      features: [
        'Dépannage à distance (sans déplacement, moins de coûts)',
        'Dépannage logiciel & système',
        'Support à distance ou sur site',
        'Configuration & optimisation',
        'Formation utilisateurs',
        'Résolution de problèmes réseau',
        'Conseil & audit technique'
      ],
      target: 'Particuliers & PME'
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="theme-hero text-white py-12" aria-labelledby="services-hero-title">
          <div className="container mx-auto px-4">
            <h1 id="services-hero-title" className="text-4xl font-bold">Nos services</h1>
            <p className="text-white/90 mt-2">Solutions adaptées à vos besoins</p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div key={index} className="theme-card card-elevated border-2 border-primary/20 rounded-xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-300 group" role="article">
                  <div className="flex items-start justify-between mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">{service.title}</h2>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                      {service.target}
                    </span>
                  </div>
                  <p className="theme-text mb-8 text-lg md:text-xl leading-relaxed">{service.description}</p>
                  
                  {service.title === 'Administration réseau & système' && (
                    <div className="mb-8 space-y-5">
                      <div className="theme-card-alt rounded-lg p-5 md:p-6 hover:border-primary/40 transition-all">
                        <h4 className="font-semibold text-primary mb-2">Infogérance complète</h4>
                        <p className="text-sm theme-text mb-3">
                          Surveillance 24/7 de votre infrastructure, maintenance préventive, interventions rapides en cas de problème. 
                          Vous avez un seul interlocuteur pour tout gérer. Monitoring avec Zabbix pour anticiper les pannes.
                        </p>
                        <ul className="text-sm theme-text-secondary space-y-1">
                          <li>• Surveillance continue de vos serveurs et équipements réseau</li>
                          <li>• Alertes automatiques en cas d'anomalie</li>
                          <li>• Maintenance préventive pour éviter les pannes</li>
                          <li>• Reporting régulier de l'état de votre infrastructure</li>
                        </ul>
                      </div>
                      
                      <div className="theme-card-alt rounded-lg p-4">
                        <h4 className="font-semibold text-primary mb-2">Virtualisation & Cloud</h4>
                        <p className="text-sm theme-text mb-3">
                          Optimisation de vos serveurs (VMware, Proxmox selon vos besoins), migration vers le cloud, 
                          réduction des coûts matériels. Containers Docker pour une meilleure performance.
                        </p>
                        <ul className="text-sm theme-text-secondary space-y-1">
                          <li>• Virtualisation de vos serveurs physiques (économie d'énergie et matériel)</li>
                          <li>• Migration progressive vers le cloud selon vos besoins</li>
                          <li>• Optimisation des ressources pour réduire vos coûts</li>
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
                  
                  {service.title === 'Support technique' && (
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
                  
                  <div className="border-t theme-border pt-4">
                    <p className="text-sm font-semibold theme-text mb-3">Détails techniques :</p>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="theme-text text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-gradient-to-r from-primary to-primary-dark rounded-xl p-10 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Services à venir</h3>
              <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
                Formations (informatique générale, IA, développement) et développement d'agents IA 
                pour automatiser vos tâches répétitives et chronophages.
              </p>
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
                  <h4 className="font-bold text-lg mb-2">Formations</h4>
                  <p className="text-white/90 text-sm">
                    Informatique, Intelligence Artificielle, Développement web
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
                  <h4 className="font-bold text-lg mb-2">Agents IA</h4>
                  <p className="text-white/90 text-sm">
                    Automatisation de tâches répétitives pour votre entreprise
                  </p>
                </div>
              </div>
              <Link 
                href="/contact" 
                className="inline-block theme-button px-8 py-3 rounded-lg font-semibold transition"
              >
                Être informé en avant-première
              </Link>
            </div>
            
            <div className="mt-12 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 border-2 border-primary/20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">Outils & Technologies</h3>
                <p className="text-sm theme-text-secondary max-w-2xl mx-auto">
                  Indépendant et multi-marques : je m'adapte à vos logiciels existants ou vous propose les solutions les plus adaptées. 
                  Je peux gérer toutes les marques et technologies selon vos besoins, avec une préférence pour l'open source quand c'est pertinent.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6">
                <div className="theme-card rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold mb-3 text-primary">Virtualisation</h4>
                  <ul className="space-y-2 text-sm theme-text">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      <strong>VMware</strong> - Virtualisation professionnelle
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      <strong>Proxmox</strong> - Virtualisation open source
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      <strong>Docker</strong> - Containers
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Gestion de machines virtuelles
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Migration & optimisation VMs
                    </li>
                  </ul>
                </div>
                <div className="theme-card rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold mb-3 text-primary">Cloud & Infrastructure</h4>
                  <ul className="space-y-2 text-sm theme-text">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Infogérance & maintenance
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Migration vers le cloud
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Architecture cloud scalable
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Solutions open source cloud
                    </li>
                  </ul>
                </div>
                <div className="theme-card rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold mb-3 text-primary">Sécurité Informatique</h4>
                  <ul className="space-y-2 text-sm theme-text">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Protection contre cybermenaces
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Sécurisation réseau & firewall
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Audit de sécurité
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Sauvegarde & plan de reprise
                    </li>
                  </ul>
                </div>
                <div className="theme-card rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold mb-3 text-primary">Monitoring & Supervision</h4>
                  <ul className="space-y-2 text-sm theme-text">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      <strong>Zabbix</strong> - Monitoring infrastructure
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Alertes & tableaux de bord
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Suivi performance en temps réel
                    </li>
                  </ul>
                </div>
                <div className="theme-card rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold mb-3 text-primary">Gestion de Parc IT</h4>
                  <ul className="space-y-2 text-sm theme-text">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      <strong>GLPI</strong> - Gestion parc & tickets
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Inventaire automatique
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Helpdesk & suivi interventions
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 theme-card rounded-lg p-6 shadow-sm max-w-4xl mx-auto">
                <h4 className="font-semibold mb-3 text-primary">Documentation Réseau</h4>
                <p className="theme-text text-sm mb-3">
                  Création de documentation complète de votre infrastructure :
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-sm theme-text">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    Schémas réseau (topologie)
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    Cartes réseau détaillées
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    Inventaire équipements
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    Procédures & guides
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 theme-bg-alt rounded-xl p-8 border-2 border-primary/20">
              <h3 className="text-2xl font-bold mb-6 text-center text-primary">Zone d'intervention</h3>
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="theme-card rounded-lg p-6 text-center border-2 border-primary/30">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-primary">Zone principale</h4>
                    <p className="theme-text font-semibold mb-2">Bouillante</p>
                    <p className="theme-text-secondary text-sm">et ses environs proches</p>
                  </div>
                  <div className="theme-card rounded-lg p-6 text-center border-2 border-primary/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/80 to-primary-dark/80 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-primary">Zone étendue</h4>
                    <p className="theme-text font-semibold mb-2">Basse-Terre</p>
                    <p className="theme-text-secondary text-sm">et communes proches</p>
                  </div>
                  <div className="theme-card rounded-lg p-6 text-center border-2 border-primary/10">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/60 to-primary-dark/60 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-primary">Autres zones</h4>
                    <p className="theme-text font-semibold mb-2">Toute la Guadeloupe</p>
                    <p className="theme-text-secondary text-sm">sur devis selon les besoins</p>
                  </div>
                </div>
                <div className="theme-card rounded-lg p-6 bg-primary/5 border border-primary/20">
                  <p className="theme-text text-center mb-3">
                    <strong className="text-primary">📍 Basé à Bouillante</strong>, je privilégie les interventions dans ma zone principale pour une meilleure réactivité.
                  </p>
                  <p className="theme-text-secondary text-sm text-center">
                    Pour les dépannages sur site, la zone principale (Bouillante et environs) permet une intervention rapide avec des frais de déplacement réduits. 
                    Les interventions dans d'autres zones de Guadeloupe sont possibles selon vos besoins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

