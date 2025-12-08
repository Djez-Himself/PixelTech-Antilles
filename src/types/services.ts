export type Service = {
  title: string
  subtitle: string
  description: string
  icon: 'building' | 'wrench'
  packages?: { name: string; price: string; detail: string }[]
  benefits: string[]
  features: string[]
}

export type Forfait = {
  name: string
  description: string
  price: string
  note?: string
}
