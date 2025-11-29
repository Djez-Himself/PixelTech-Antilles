import { ReactNode } from 'react'
import FeatureList from './FeatureList'

interface Highlight {
  title: string
  description: string
}

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  features?: string[]
  highlights?: Highlight[]
  target?: string
  className?: string
}

export default function ServiceCard({
  icon,
  title,
  description,
  features = [],
  highlights = [],
  target,
  className = ''
}: ServiceCardProps) {
  return (
    <div className={`theme-card enhanced-card card-elevated p-10 md:p-12 rounded-2xl border-2 border-primary/20 hover:border-primary/40 ${className}`}>
      {target && (
        <div className="flex justify-end mb-4">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
            {target}
          </span>
        </div>
      )}
      
      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-xl mb-8 flex items-center justify-center shadow-lg shadow-primary/30 icon-hover">
        {icon}
      </div>
      
      <h3 className="text-2xl md:text-3xl font-bold mb-5 theme-text">{title}</h3>
      <p className="theme-text mb-6 text-base md:text-lg leading-relaxed">{description}</p>
      
      {highlights.length > 0 && (
        <div className="space-y-4 mb-6">
          {highlights.map((highlight, index) => (
            <div key={index} className="theme-card-alt rounded-lg p-4 md:p-5 opacity-80 hover:opacity-100 transition-opacity">
              <p className="text-sm md:text-base font-semibold text-primary mb-2">{highlight.title}</p>
              <p className="text-xs md:text-sm theme-text-secondary">{highlight.description}</p>
            </div>
          ))}
        </div>
      )}
      
      {features.length > 0 && (
        <FeatureList items={features} variant="bullet" />
      )}
    </div>
  )
}

