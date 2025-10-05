'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure we only read theme on the client to avoid SSR mismatch
  useEffect(() => setMounted(true), [])

  const isDark = mounted && resolvedTheme === 'dark'

  return (
    <button
      aria-label="Toggle dark mode"
      className="px-3 py-1 rounded-lg border border-slate-300 dark:border-slate-700"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {/* Render stable placeholder until mounted to avoid text mismatch */}
      {!mounted ? '…' : isDark ? '🌙' : '🌞'}
    </button>
  )
}
