'use client'
import { motion } from 'framer-motion'

const exp = [
  {
    title: 'Python Developer Intern',
    org: 'HRSoft BD',
    orgUrl: 'https://hrsoftbd.com/',
    period: '25 Sept 2025 – Present',
    bullets: [
      'Build practical tools with clean, maintainable Python.',
      'Support data-driven features and automation in production.',
    ],
  },
  {
    title: 'Co-founder & CEO',
    org: 'Trinity Property Ventures Bangladesh',
    orgUrl: '#',
    period: '—',
    bullets: [
      'Blend technology and business for innovative real estate solutions.',
      'Drive product direction and value delivery.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="section-title mb-6">Experience</h2>

        <ol className="relative mt-8 border-s border-slate-300 dark:border-slate-800">
          {exp.map((item, i) => (
            <li key={i} className="ms-8 mb-8">
              <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 bg-[var(--card)]"></span>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="card p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold">{item.title}</h3>
                  <span className="badge">{item.period}</span>
                </div>
                <a href={item.orgUrl} target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400">
                  {item.org}
                </a>
                <ul className="mt-3 list-disc ps-5 subtle">
                  {item.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </motion.div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
