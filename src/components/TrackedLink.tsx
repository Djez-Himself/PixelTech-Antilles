'use client'

import Link from 'next/link'
import { trackCTA, trackInternalLink } from '@/lib/analytics'

type TrackedLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
  ariaLabel?: string
  ctaName?: string
  location?: string
}

export default function TrackedLink({
  href,
  children,
  className,
  ariaLabel,
  ctaName,
  location = 'Unknown',
}: TrackedLinkProps) {
  const handleClick = () => {
    if (ctaName) {
      trackCTA(ctaName, location)
    } else {
      trackInternalLink(href)
    }
  }

  return (
    <Link
      href={href}
      className={className}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      {children}
    </Link>
  )
}
