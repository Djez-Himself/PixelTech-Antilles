'use client'

import { createContext, useContext, useEffect, ReactNode } from 'react'

const ThemeContext = createContext<undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Appliquer le thème dark par défaut
    if (typeof window !== 'undefined') {
      document.body.setAttribute('data-theme', 'dark')
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  return (
    <ThemeContext.Provider value={undefined}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  return { theme: 'dark' as const }
}
