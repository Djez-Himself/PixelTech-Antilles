'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState, useEffect } from 'react'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [requestType, setRequestType] = useState<'contact' | 'devis'>('contact')
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())
    
    const emailTo = requestType === 'devis' 
      ? 'devis@pixeltech-antilles.com' 
      : 'contact@pixeltech-antilles.com'
    
    const web3formsKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '18fd716d-2f87-4ff3-9392-ef5a7387dd0d'
    
    if (!web3formsKey || web3formsKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      setStatus('error')
      setErrorMessage('Configuration manquante : veuillez configurer la clé Web3Forms. Obtenez une clé gratuite sur https://web3forms.com')
      return
    }
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: web3formsKey,
          subject: `${requestType === 'devis' ? '[DEVIS]' : '[CONTACT]'} ${data.subject}`,
          from_name: data.name as string,
          email: data.email as string,
          message: `Type de demande: ${requestType === 'devis' ? 'Demande de devis' : 'Contact général'}\n\nMessage:\n${data.message}`,
          to_email: emailTo,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus('success')
        form.reset()
        setRequestType('contact') // Réinitialiser le type
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setErrorMessage(result.message || 'Erreur lors de l\'envoi. Veuillez réessayer ou me contacter directement par email.')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('Erreur de connexion. Veuillez réessayer ou me contacter directement par email.')
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="theme-hero text-white py-12" aria-labelledby="contact-hero-title">
          <div className="container mx-auto px-4">
            <h1 id="contact-hero-title" className="text-4xl font-bold">Contact</h1>
            <p className="text-white/90 mt-2">Discutons de votre projet</p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="theme-card card-elevated rounded-lg p-8 md:p-10 shadow-sm">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="requestType" className="block text-sm font-medium theme-text mb-2">
                    Type de demande *
                  </label>
                  <select
                    id="requestType"
                    name="requestType"
                    value={requestType}
                    onChange={(e) => setRequestType(e.target.value as 'contact' | 'devis')}
                    required
                    className="w-full px-4 py-2 theme-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent theme-bg theme-text"
                  >
                    <option value="contact">Contact général</option>
                    <option value="devis">Demande de devis</option>
                  </select>
                  <p className="text-xs theme-text-secondary mt-1">
                    {requestType === 'devis' 
                      ? 'Votre demande sera envoyée à devis@pixeltech-antilles.com'
                      : 'Votre demande sera envoyée à contact@pixeltech-antilles.com'}
                  </p>
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium theme-text mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 theme-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent theme-bg theme-text"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium theme-text mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 theme-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent theme-bg theme-text"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium theme-text mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 theme-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent theme-bg theme-text"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium theme-text mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-2 theme-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent theme-bg theme-text"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full theme-button px-6 py-3 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' && (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  )}
                  {status === 'success' && (
                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {status === 'loading' ? 'Envoi en cours...' : status === 'success' ? 'Message envoyé !' : 'Envoyer'}
                </button>
              </form>

              {/* Messages de statut */}
              {status === 'success' && (
                <div className="mt-4 p-4 bg-green-500/20 border-2 border-green-500/40 rounded-lg">
                  <p className="text-green-400 text-sm text-center">
                    ✓ Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
                  </p>
                </div>
              )}
              {status === 'error' && errorMessage && (
                <div className="mt-4 p-4 bg-red-500/20 border-2 border-red-500/40 rounded-lg">
                  <p className="text-red-400 text-sm text-center">
                    ✗ {errorMessage}
                  </p>
                </div>
              )}
              {status === 'loading' && (
                <div className="mt-4 p-4 bg-sky-500/20 border-2 border-sky-500/40 rounded-lg">
                  <p className="text-sky-400 text-sm text-center">
                    ⏳ Envoi de votre message en cours...
                  </p>
                </div>
              )}
            </div>

            <div className="mt-12 theme-bg-alt rounded-xl p-8 border-2 border-primary/20">
              <h3 className="text-2xl font-bold mb-6 text-center text-primary">Autres moyens de contact</h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-6">
                <div className="theme-card rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-3">
                    <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <h4 className="font-semibold text-primary">Contact général</h4>
                  </div>
                  <p className="theme-text-secondary text-sm mb-3">
                    Pour toute question ou demande d'information, n'hésitez pas à me contacter.
                  </p>
                  <a 
                    href="mailto:contact@pixeltech-antilles.com" 
                    className="text-primary hover:text-sky-400 hover:underline font-medium text-sm break-all transition-colors inline-flex items-center gap-2"
                  >
                    <span>contact@pixeltech-antilles.com</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                <div className="theme-card rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-3">
                    <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <h4 className="font-semibold text-primary">Demande de devis</h4>
                  </div>
                  <p className="theme-text-secondary text-sm mb-3">
                    Pour une demande de devis personnalisé, envoyez-moi un email avec les détails de votre projet.
                  </p>
                  <a 
                    href="mailto:devis@pixeltech-antilles.com" 
                    className="text-primary hover:text-sky-400 hover:underline font-medium text-sm break-all transition-colors inline-flex items-center gap-2"
                  >
                    <span>devis@pixeltech-antilles.com</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <div className="theme-card rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-3">
                    <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <h4 className="font-semibold text-primary">Intervention rapide</h4>
                  </div>
                  <p className="theme-text-secondary text-sm mb-3">
                    Pour une urgence ou une intervention rapide, contactez-moi par email. 
                    Je peux intervenir rapidement dans la zone Bouillante et environs.
                  </p>
                  <p className="theme-text-secondary text-xs opacity-75 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Réponse sous 24h en général
                  </p>
                </div>
                <div className="theme-card rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-3">
                    <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <h4 className="font-semibold text-primary">Zone d'intervention</h4>
                  </div>
                  <p className="theme-text-secondary text-sm mb-2">
                    <strong className="text-primary">📍 Zone principale :</strong> Bouillante et ses environs
                  </p>
                  <p className="theme-text-secondary text-sm mb-2">
                    <strong className="text-primary">Zone étendue :</strong> Basse-Terre et communes proches
                  </p>
                  <p className="theme-text-secondary text-sm">
                    Interventions possibles dans toute la Guadeloupe selon les besoins (sur devis).
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

