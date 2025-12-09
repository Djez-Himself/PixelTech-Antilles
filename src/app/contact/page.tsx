'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Breadcrumb from '@/components/Breadcrumb'
import { useState, useEffect } from 'react'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

type FieldErrors = {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export default function Contact() {
  const [requestType, setRequestType] = useState<'contact' | 'devis'>('contact')
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [messageLength, setMessageLength] = useState<number>(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })


  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Le nom est requis'
        if (value.trim().length < 2) return 'Le nom doit contenir au moins 2 caractères'
        return undefined
      case 'email':
        if (!value.trim()) return 'L\'email est requis'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return 'Format d\'email invalide'
        return undefined
      case 'subject':
        if (!value.trim()) return 'Le sujet est requis'
        if (value.trim().length < 3) return 'Le sujet doit contenir au moins 3 caractères'
        return undefined
      case 'message':
        if (!value.trim()) return 'Le message est requis'
        if (value.trim().length < 10) return 'Le message doit contenir au moins 10 caractères'
        return undefined
      default:
        return undefined
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const error = validateField(name, value)
    setFieldErrors(prev => ({ ...prev, [name]: error }))
  }

  // Charger le brouillon depuis localStorage au montage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('contactFormDraft')
      if (saved) {
        try {
          const draft = JSON.parse(saved)
          setFormData(draft)
          setMessageLength(draft.message?.length || 0)
        } catch (e) {
          // Ignorer les erreurs de parsing
        }
      }
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    
    // Mettre à jour le state local
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Sauvegarder dans localStorage
    if (typeof window !== 'undefined') {
      const newData = { ...formData, [name]: value }
      localStorage.setItem('contactFormDraft', JSON.stringify(newData))
    }
    
    // Compteur de caractères pour le message
    if (name === 'message') {
      setMessageLength(value.length)
    }
    
    // Effacer l'erreur si le champ est corrigé
    if (fieldErrors[name as keyof FieldErrors]) {
      const error = validateField(name, value)
      setFieldErrors(prev => ({ ...prev, [name]: error }))
    }
  }

  // Suggestions de sujets selon le type de demande
  const getSubjectSuggestions = (): string[] => {
    if (requestType === 'devis') {
      return [
        'Devis pour maintenance informatique',
        'Devis pour infogérance PME',
        'Devis pour dépannage urgent',
        'Devis pour formation informatique',
        'Devis pour intervention sur site'
      ]
    }
    return [
      'Question sur vos services',
      'Demande d\'information',
      'Problème technique',
      'Demande de conseil',
      'Autre demande'
    ]
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')
    setFieldErrors({})

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())

    // Validation de tous les champs
    const errors: FieldErrors = {}
    Object.keys(data).forEach(key => {
      if (key !== 'website' && key !== 'requestType') {
        const error = validateField(key, data[key] as string)
        if (error) errors[key as keyof FieldErrors] = error
      }
    })

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      setStatus('error')
      setErrorMessage('Veuillez corriger les erreurs dans le formulaire')
      return
    }
    
    // Protection honeypot : si le champ caché est rempli, c'est un bot
    const honeypot = formData.get('website') as string
    if (honeypot && honeypot.trim() !== '') {
      // Bot détecté : on rejette silencieusement sans envoyer
      setStatus('idle')
      // On simule un succès pour ne pas révéler la protection
      form.reset()
      setRequestType('contact')
      return
    }
    
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
        setFormData({ name: '', email: '', subject: '', message: '' })
        setMessageLength(0)
        
        // Nettoyer le brouillon sauvegardé
        if (typeof window !== 'undefined') {
          localStorage.removeItem('contactFormDraft')
        }
        
        // Tracking Google Analytics pour conversion
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'form_submit', {
            event_category: 'Contact',
            event_label: requestType === 'devis' ? 'Demande de devis' : 'Contact général',
            value: 1
          })
        }
        
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
        <PageHero 
          title="Contact" 
          subtitle="Discutons de votre projet"
          id="contact-hero-title"
        />

        <section className="section-padding">
          <div className="container mx-auto px-4 max-w-2xl">
            <Breadcrumb items={[
              { label: 'Accueil', href: '/' },
              { label: 'Contact' }
            ]} />
            <div className="theme-card card-elevated rounded-lg p-8 md:p-10 shadow-sm">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Honeypot : champ caché pour détecter les bots */}
                <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true">
                  <label htmlFor="website">Ne pas remplir ce champ</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                
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
                    value={formData.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Votre nom complet"
                    autoComplete="name"
                    className={`w-full px-4 py-2 theme-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent theme-bg theme-text transition-colors ${
                      fieldErrors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                    }`}
                  />
                  {fieldErrors.name && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {fieldErrors.name}
                    </p>
                  )}
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
                    value={formData.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="votre.email@exemple.com"
                    autoComplete="email"
                    className={`w-full px-4 py-2 theme-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent theme-bg theme-text transition-colors ${
                      fieldErrors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                    }`}
                  />
                  {fieldErrors.email && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {fieldErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium theme-text mb-2">
                    Sujet *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder={requestType === 'devis' ? 'Ex: Devis pour maintenance informatique' : 'Ex: Question sur vos services'}
                      list="subject-suggestions"
                      className={`w-full px-4 py-2 theme-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent theme-bg theme-text transition-colors ${
                        fieldErrors.subject ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                      }`}
                    />
                    <datalist id="subject-suggestions">
                      {getSubjectSuggestions().map((suggestion, index) => (
                        <option key={index} value={suggestion} />
                      ))}
                    </datalist>
                  </div>
                  {fieldErrors.subject && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {fieldErrors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="message" className="block text-sm font-medium theme-text">
                      Message *
                    </label>
                    <span className={`text-xs transition-colors ${
                      messageLength < 10 
                        ? 'text-red-400' 
                        : messageLength > 1000 
                        ? 'text-yellow-400' 
                        : 'theme-text-secondary'
                    }`}>
                      {messageLength} / 1000 caractères
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder={requestType === 'devis' 
                      ? 'Décrivez votre projet, vos besoins et vos contraintes. Plus de détails = devis plus précis !' 
                      : 'Décrivez votre demande ou votre question. Je vous répondrai dans les plus brefs délais.'}
                    maxLength={1000}
                    className={`w-full px-4 py-2 theme-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent theme-bg theme-text transition-colors resize-y ${
                      fieldErrors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                    }`}
                  ></textarea>
                  {fieldErrors.message && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {fieldErrors.message}
                    </p>
                  )}
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

              {/* Messages de statut avec aria-live pour l'accessibilité */}
              <div aria-live="polite" aria-atomic="true" className="sr-only">
                {status === 'success' && 'Message envoyé avec succès'}
                {status === 'error' && `Erreur: ${errorMessage}`}
                {status === 'loading' && 'Envoi en cours'}
              </div>
              
              {status === 'success' && (
                <div className="mt-4 p-4 bg-green-500/20 border-2 border-green-500/40 rounded-lg animate-fade-in">
                  <p className="text-green-400 text-sm text-center flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
                  </p>
                </div>
              )}
              {status === 'error' && errorMessage && (
                <div className="mt-4 p-4 bg-red-500/20 border-2 border-red-500/40 rounded-lg animate-fade-in">
                  <p className="text-red-400 text-sm text-center flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errorMessage}
                  </p>
                </div>
              )}
              {status === 'loading' && (
                <div className="mt-4 p-4 bg-sky-500/20 border-2 border-sky-500/40 rounded-lg">
                  <p className="text-sky-400 text-sm text-center flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi de votre message en cours...
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
                    <strong className="text-primary">Zone principale :</strong> Bouillante et ses environs
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

