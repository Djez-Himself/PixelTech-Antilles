interface SectionHeaderProps {
  title: string
  description?: string
  centered?: boolean
  className?: string
}

export default function SectionHeader({ 
  title, 
  description, 
  centered = true,
  className = '' 
}: SectionHeaderProps) {
  const containerClasses = centered 
    ? 'text-center mb-16 md:mb-20' 
    : 'mb-12 md:mb-16'
  
  return (
    <div className={`${containerClasses} ${className}`}>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6">{title}</h2>
      {description && (
        <p className="theme-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}

