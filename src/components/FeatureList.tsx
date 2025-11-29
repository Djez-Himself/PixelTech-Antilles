interface FeatureListProps {
  items: string[]
  variant?: 'bullet' | 'check'
  columns?: 1 | 2
  className?: string
}

export default function FeatureList({ 
  items, 
  variant = 'bullet', 
  columns = 1,
  className = '' 
}: FeatureListProps) {
  const baseClasses = columns === 2 
    ? 'grid md:grid-cols-2 gap-3' 
    : 'space-y-3'
  
  const textSize = 'text-sm md:text-base theme-text-secondary'

  return (
    <ul className={`${baseClasses} ${textSize} ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-center list-item-animate">
          {variant === 'check' ? (
            <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          ) : (
            <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
          )}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

