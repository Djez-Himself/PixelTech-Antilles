interface PageHeroProps {
  title: string
  subtitle?: string
  id?: string
}

export default function PageHero({ title, subtitle, id }: PageHeroProps) {
  return (
    <section className="theme-hero text-white py-12" aria-labelledby={id}>
      <div className="container mx-auto px-4">
        <h1 id={id} className="text-4xl font-bold">{title}</h1>
        {subtitle && <p className="text-white/90 mt-2">{subtitle}</p>}
      </div>
    </section>
  )
}

