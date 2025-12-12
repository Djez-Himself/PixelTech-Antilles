'use client'

import Script from 'next/script'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const GA_MEASUREMENT_ID = 'G-Z4NM6X1HLH'

export default function GoogleAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Tracking des changements de page (pour Next.js App Router)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('config', GA_MEASUREMENT_ID, {
        page_path: pathname,
      })
    }
  }, [pathname])

  useEffect(() => {
    // Tracking du scroll depth (profondeur de scroll)
    let scrollDepth25 = false
    let scrollDepth50 = false
    let scrollDepth75 = false
    let scrollDepth100 = false

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100

      if (scrollPercent >= 25 && !scrollDepth25) {
        scrollDepth25 = true
        if (typeof window !== 'undefined' && (window as any).gtag) {
          ;(window as any).gtag('event', 'scroll', {
            event_category: 'Engagement',
            event_label: '25%',
            value: 25,
          })
        }
      }
      if (scrollPercent >= 50 && !scrollDepth50) {
        scrollDepth50 = true
        if (typeof window !== 'undefined' && (window as any).gtag) {
          ;(window as any).gtag('event', 'scroll', {
            event_category: 'Engagement',
            event_label: '50%',
            value: 50,
          })
        }
      }
      if (scrollPercent >= 75 && !scrollDepth75) {
        scrollDepth75 = true
        if (typeof window !== 'undefined' && (window as any).gtag) {
          ;(window as any).gtag('event', 'scroll', {
            event_category: 'Engagement',
            event_label: '75%',
            value: 75,
          })
        }
      }
      if (scrollPercent >= 100 && !scrollDepth100) {
        scrollDepth100 = true
        if (typeof window !== 'undefined' && (window as any).gtag) {
          ;(window as any).gtag('event', 'scroll', {
            event_category: 'Engagement',
            event_label: '100%',
            value: 100,
          })
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            send_page_view: true,
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure',
          });
        `}
      </Script>
    </>
  )
}
