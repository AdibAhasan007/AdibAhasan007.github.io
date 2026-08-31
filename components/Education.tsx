'use client';

import { motion } from 'framer-motion';
import { FiBook, FiExternalLink, FiAward, FiCheck } from 'react-icons/fi';
import GlitchText from './GlitchText';
import TiltCard3D from './TiltCard3D';

type Edu = {
  title: string;
  org: string;
  link?: string;
  note?: string;
  year: string;
  degree?: string;
  group?: string;
};

const EDUCATION_DATA: Edu[] = [
  {
    title: 'Bachelor of Science – BSc in Computer Science & Engineering',
    org: 'University of Liberal Arts Bangladesh (ULAB)',
    link: 'https://ulab.edu.bd/',
    note: 'COMPLETED // 2025',
    degree: "Bachelor's Degree",
    year: '2025',
  },
  {
    title: 'Higher Secondary Certificate (HSC)',
    org: 'Northern College Bangladesh',
    degree: 'Science Division',
    group: 'Group: Science',
    year: '2020',
  },
  {
    title: 'Secondary School Certificate (SSC)',
    org: 'Laurel International College',
    degree: 'Science Division',
    group: 'Group: Science',
    year: '2016',
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-20 overflow-hidden">
      <div className="relative z-10 max-w-[1680px] mx-auto px-4 sm:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="cyber-tag mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping inline-block" />
            05 // ACADEMIC RECORD
          </div>
          <h2 className="cyber-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            ACADEMIC <GlitchText text="BACKGROUND" as="span" className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-green-400" />
          </h2>
          <p className="mt-4 font-mono text-xs sm:text-sm text-slate-400">
            [ VERIFIED EDUCATIONAL CREDENTIALS &amp; FOUNDATIONAL COMPUTER SCIENCE ]
          </p>
        </motion.div>

        {/* Education Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {EDUCATION_DATA.map((edu, idx) => (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <TiltCard3D maxTilt={10} className="h-full">
                <div className="cyber-card p-6 sm:p-7 rounded-2xl hud-corner flex flex-col justify-between group hover:border-cyan-400/60 h-full">
                  <div>
                    {/* Year Header */}
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-cyan-500/20">
                      <span className="px-3 py-1 rounded-md bg-[#02040a] border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold">
                        CLASS OF {edu.year}
                      </span>
                      <FiBook className="text-cyan-400 group-hover:scale-110 transition-transform duration-200" size={18} />
                    </div>

                    {/* Degree Title */}
                    <h3 className="font-orbitron text-sm sm:text-base font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors">
                      {edu.title}
                    </h3>

                    {/* Institution */}
                    <div className="mt-2.5 font-mono text-xs sm:text-sm text-slate-300">
                      {edu.link ? (
                        <a
                          href={edu.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
                        >
                          <span>{edu.org}</span>
                          <FiExternalLink size={12} />
                        </a>
                      ) : (
                        <span>{edu.org}</span>
                      )}
                    </div>

                    {/* Group info if any */}
                    {edu.group && (
                      <p className="font-mono text-xs text-slate-400 mt-2">
                        {edu.group}
                      </p>
                    )}
                  </div>

                  {/* Badges */}
                  <div className="mt-6 pt-4 border-t border-cyan-500/15 flex flex-wrap items-center gap-2">
                    {edu.degree && (
                      <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-[11px]">
                        {edu.degree}
                      </span>
                    )}
                    {edu.note && (
                      <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 font-mono text-[11px] font-semibold flex items-center gap-1">
                        <FiCheck size={12} />
                        {edu.note}
                      </span>
                    )}
                  </div>
                </div>
              </TiltCard3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
