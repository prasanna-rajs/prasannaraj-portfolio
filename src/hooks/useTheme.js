import { useEffect } from 'react'

/**
 * Permanent Dark Mode
 * Adds Tailwind's 'dark' class permanently.
 */

export function useTheme() {
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return {
    dark: true,
    toggleTheme: () => {},
  }
}
