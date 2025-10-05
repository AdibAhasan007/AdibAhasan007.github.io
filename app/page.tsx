import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Articles from "@/components/Articles";
import ResumeCTA from "@/components/ResumeCTA";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="stack container-pad max-w-6xl mx-auto">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Articles />
      <ResumeCTA />
      <Contact />
    </main>
  );
}
