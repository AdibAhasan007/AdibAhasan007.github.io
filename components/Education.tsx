'use client'
import { motion } from 'framer-motion'

const edu = [
  {
    title: 'B.Sc. in Computer Science & Engineering (Graduated)',
    org: 'University of Liberal Arts Bangladesh (ULAB)',
    orgUrl: 'https://ulab.edu.bd/',
    period: '2021 – 2025',
    tag: '✓ Graduated',
  },
  {
    title: 'Higher Secondary Certificate (HSC)',
    org: 'Northern College Bangladesh',
    period: '2020',
  },
  {
    title: 'Secondary School Certificate (SSC)',
    org: 'Laurel International College',
    period: '2016',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="section-title mb-6">Education</h2>

        <ol className="relative mt-8 border-s border-slate-300 dark:border-slate-800">
          {edu.map((item, i) => (
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
                {item.orgUrl ? (
                  <a href={item.orgUrl} target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400">
                    {item.org}
                  </a>
                ) : (
                  <div className="subtle">{item.org}</div>
                )}
                {item.tag && <div className="mt-2 text-green-600 dark:text-green-400 text-sm">{item.tag}</div>}
              </motion.div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
