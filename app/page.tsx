import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import Articles from '@/components/Articles'
import ResumeCTA from '@/components/ResumeCTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Page(){
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Articles />
      <ResumeCTA />
      <Contact />
      <Footer />
    </main>
  )
}
