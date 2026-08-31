// app/layout.tsx
import '../styles/globals.css'
import { Inter, Orbitron, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import Navbar from '@/components/Navbar'
import ToasterClient from '@/components/ToasterClient'
import Footer from '@/components/Footer'
import CyberCursor from '@/components/CyberCursor'
import ScrollProgress from '@/components/ScrollProgress'
import SmoothScroll from '@/components/SmoothScroll'

// ---- SEO constants ----
const SITE_URL = 'https://adibahasanchowdhury.vercel.app'
const SITE_NAME = 'Adib Ahasan Chowdhury | AI Engineer & Software Developer'
const SITE_DESC =
  'Software Engineer & AI Specialist | Former AI Engineer & Software Developer at IYLMA Innovation Limited | CSE Graduate from ULAB | Co-founder & CEO of Trinity Property Ventures Bangladesh | Django REST, FastAPI, PostgreSQL specialist.'


export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: SITE_DESC,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: SITE_NAME,
    siteName: SITE_NAME,
    description: SITE_DESC,
    images: [{ url: '/adib.jpg', width: 1200, height: 630, alt: 'Adib Ahasan Chowdhury' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@AdibAhasan',
    creator: '@AdibAhasan',
    title: SITE_NAME,
    description: SITE_DESC,
    images: ['/adib.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
  robots: { index: true, follow: true },
  applicationName: SITE_NAME,
  authors: [{ name: 'Adib Ahasan Chowdhury', url: SITE_URL }],
  category: 'Portfolio',
  referrer: 'origin-when-cross-origin',
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const orbitron = Orbitron({
  variable: '--font-orbitron',
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Adib Ahasan Chowdhury',
    jobTitle: 'AI Engineer & Software Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'IYLMA Innovation Limited',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'University of Liberal Arts Bangladesh (ULAB)',
    },
    url: SITE_URL,
    sameAs: [
      'https://github.com/AdibAhasan007',
      'https://www.linkedin.com/in/adib-ahasan-chowdhury-41178213b/',
      'https://x.com/AdibAhasan',
      'https://medium.com/@pranto7',
    ],
  }

  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${orbitron.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#02040a] text-slate-100 antialiased overflow-x-hidden relative font-sans">
        {/* Lenis Smooth Scroll */}
        <SmoothScroll />

        {/* Global futuristic background layers */}
        <div className="cyber-grid-bg" aria-hidden="true" />
        <div className="cyber-stars-bg" aria-hidden="true" />
        <div className="crt-overlay" aria-hidden="true" />

        {/* Ambient Top & Bottom Neon Plasma Orbs */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed top-0 left-1/4 -translate-y-1/2 w-[700px] h-[450px] rounded-full opacity-20 blur-[130px] z-0"
          style={{ background: 'radial-gradient(circle, #00f0ff 0%, #bd00ff 70%, transparent 100%)' }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none fixed bottom-0 right-1/4 translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-15 blur-[120px] z-0"
          style={{ background: 'radial-gradient(circle, #bd00ff 0%, #00ff66 80%, transparent 100%)' }}
        />

        {/* Top Scroll Laser Indicator */}
        <ScrollProgress />

        {/* Interactive Cyber Reticle Cursor */}
        <CyberCursor />

        {/* Futuristic HUD Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Futuristic Cyber Footer */}
        <Footer />

        {/* Interactive Notifications */}
        <ToasterClient />
      </body>
    </html>
  )
}
