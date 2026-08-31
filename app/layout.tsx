// app/layout.tsx
import '../styles/globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'
import Navbar from '@/components/Navbar'
import ToasterClient from '@/components/ToasterClient'
import Footer from '@/components/Footer'
import AnimatedCursor from '@/components/AnimatedCursor'
import ScrollProgress from '@/components/ScrollProgress'

// ---- SEO constants ----
const SITE_URL = 'https://adibahasanchowdhury.vercel.app'
const SITE_NAME = 'Adib Ahasan Chowdhury — AI Engineer & Software Developer'
const SITE_DESC =
  'AI Engineer & Software Developer at IYLMA Innovation Limited | Python Backend Developer | CSE Graduate from ULAB | Co-founder & CEO of Trinity Property Ventures Bangladesh | Django REST, FastAPI, PostgreSQL specialist.'

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
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Adib Ahasan Chowdhury' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@AdibAhasan',
    creator: '@AdibAhasan',
    title: SITE_NAME,
    description: SITE_DESC,
    images: ['/og.png'],
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
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${SITE_URL}#person`,
        name: 'Adib Ahasan Chowdhury',
        alternateName: ['Adib Ahasan', 'Adib'],
        url: SITE_URL,
        image: `${SITE_URL}/adib.jpg`,
        jobTitle: 'Python Developer Intern',
        worksFor: { '@type': 'Organization', name: 'HRSoft BD', url: 'https://hrsoftbd.com/' },
        alumniOf: [
          { '@type': 'CollegeOrUniversity', name: 'University of Liberal Arts Bangladesh (ULAB)', url: 'https://ulab.edu.bd/' },
          { '@type': 'EducationalOrganization', name: 'Northern College Bangladesh (NCB)', url: 'https://ncb.edu.bd/' }
        ],
        sameAs: [
          'https://www.facebook.com/Pranto.Adib',
          'https://www.instagram.com/pranto.adib',
          'https://x.com/AdibAhasan',
          'https://www.linkedin.com/in/adib-ahasan-chowdhury-41178213b/',
          'https://github.com/AdibAhasan007',
          'https://bio.link/adibpranto',
        ],
        email: 'mailto:pranto7@gmail.com',
        address: { '@type': 'PostalAddress', addressLocality: 'Dhaka', addressCountry: 'BD' },
        description: SITE_DESC,
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESC,
        inLanguage: 'en',
        publisher: { '@id': `${SITE_URL}#person` },
      },
      {
        '@type': 'Organization',
        name: 'Trinity Property Ventures Bangladesh',
        url: 'https://www.facebook.com/profile.php?id=61571774847324',
        founder: { '@id': `${SITE_URL}#person` },
      }
    ]
  }

  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Noise texture overlay */}
        <div className="noise-overlay" aria-hidden />
        {/* Custom cursor */}
        <AnimatedCursor />
        {/* Scroll progress bar */}
        <ScrollProgress />
        {/* Navbar */}
        <Navbar />
        <ToasterClient />
        <div className="container-pad mx-auto max-w-6xl pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
