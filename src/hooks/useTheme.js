import { useState, useEffect } from 'react'

/**
 * useTheme — manages dark/light mode.
 * Persists the user's preference to localStorage and syncs
 * the 'dark' class on <html> for Tailwind's darkMode: 'class'.
 */
export function useTheme() {
  const [dark, setDark] = useState(() => {
    // Check localStorage first, then system preference
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  const toggleTheme = () => setDark(prev => !prev)

  return { dark, toggleTheme }
}
