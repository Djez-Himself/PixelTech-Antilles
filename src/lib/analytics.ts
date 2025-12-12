/**
 * Utilitaires pour le tracking Google Analytics
 */

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: Record<string, any>
    ) => void
  }
}

/**
 * Track un événement Google Analytics
 */
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

/**
 * Track un clic sur un CTA (Call To Action)
 */
export const trackCTA = (ctaName: string, location: string) => {
  trackEvent('click', 'CTA', `${ctaName} - ${location}`)
}

/**
 * Track une conversion (soumission de formulaire, etc.)
 */
export const trackConversion = (conversionType: string, value?: number) => {
  trackEvent('conversion', 'Conversion', conversionType, value)
}

/**
 * Track un clic sur un lien externe
 */
export const trackExternalLink = (url: string) => {
  trackEvent('click', 'External Link', url)
}

/**
 * Track un clic sur un lien interne
 */
export const trackInternalLink = (path: string) => {
  trackEvent('click', 'Internal Link', path)
}
