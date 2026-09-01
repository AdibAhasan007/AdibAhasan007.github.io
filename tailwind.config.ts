import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-orbitron)', 'Orbitron', 'var(--font-space)', 'sans-serif'],
        orbitron: ['var(--font-orbitron)', 'Orbitron', 'sans-serif'],
        space: ['var(--font-space)', 'Space Grotesk', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      colors: {
        neon: {
          cyan: '#00F0FF',
          green: '#00FF66',
          purple: '#BD00FF',
          pink: '#FF007F',
          blue: '#0080FF',
          yellow: '#FFD700',
        },
        cyber: {
          950: '#02040a',
          900: '#050b18',
          850: '#091326',
          800: '#0d1d3a',
          card: 'rgba(5, 12, 28, 0.75)',
          glass: 'rgba(10, 22, 48, 0.65)',
          border: 'rgba(0, 240, 255, 0.18)',
          hover: 'rgba(0, 240, 255, 0.35)',
        },
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a'
        },
      },
      animation: {
        'ping-slow': 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite 1.5s',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'border-rotate': 'border-rotate 6s linear infinite',
        'gradient-x': 'gradient-x 4s ease infinite',
        'text-reveal': 'text-reveal 0.8s ease forwards',
        'fade-in-up': 'fade-in-up 0.6s ease forwards',
        'cursor-blink': 'cursor-blink 1s step-end infinite',
        'marquee': 'marquee 25s linear infinite',
        'scanline': 'scanline 8s linear infinite',
        'radar': 'radar 4s linear infinite',
        'glitch': 'glitch 1s linear infinite',
        'cyber-glow': 'cyber-glow 2.5s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)' },
          '50%': { boxShadow: '0 0 45px rgba(0, 240, 255, 0.7), 0 0 65px rgba(189, 0, 255, 0.3)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'border-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'text-reveal': {
          '0%': { clipPath: 'inset(0 100% 0 0)', opacity: '0' },
          '100%': { clipPath: 'inset(0 0% 0 0)', opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'cursor-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'cyber-glow': {
          '0%': { filter: 'drop-shadow(0 0 10px rgba(0, 240, 255, 0.5))' },
          '100%': { filter: 'drop-shadow(0 0 25px rgba(189, 0, 255, 0.8))' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundSize: {
        '200%': '200%',
        '300%': '300%',
      },
      scale: {
        '108': '1.08',
        '120': '1.20',
      },
      height: {
        'screen-svh': '100svh',
        'screen-dvh': '100dvh',
      },
      minHeight: {
        'screen-svh': '100svh',
        'screen-dvh': '100dvh',
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
    }
  },
  plugins: []
} satisfies Config
