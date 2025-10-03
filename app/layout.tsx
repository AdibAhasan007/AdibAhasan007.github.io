import '../styles/globals.css'
import { Poppins } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/Navbar'
import ToasterClient from '@/components/ToasterClient'

const poppins = Poppins({ subsets: ['latin'], weight: ['300','400','500','600','700','800'] })

export const metadata = {
  title: 'Adib Ahasan Chowdhury – Portfolio',
  description: 'CSE graduate, Python Developer Intern at HRSoft BD, Co-founder & CEO of Trinity Property Ventures BD.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <ToasterClient />
          <div className="container-pad mx-auto max-w-6xl pt-20">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
