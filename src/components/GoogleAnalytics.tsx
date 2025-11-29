import Script from 'next/script'

const GA_MEASUREMENT_ID = 'G-Z4NM6X1HLH'

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={https://www.googletagmanager.com/gtag/js?id= + GA_MEASUREMENT_ID}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ' + GA_MEASUREMENT_ID + ', {
            page_path: window.location.pathname,
          });
        }
      </Script>
    </>
  )
}
