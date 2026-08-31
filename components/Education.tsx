'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiBook, FiExternalLink } from 'react-icons/fi';

type Edu = {
  title: string;
  org: string;
  link?: string;
  note?: string;
  year: string;
  degree?: string;
  group?: string;
};

const items: Edu[] = [
  {
    title: 'Bachelor of Science – BSc in Computer Science & Engineering',
    org: 'University of Liberal Arts Bangladesh (ULAB)',
    link: 'https://ulab.edu.bd/',
    note: '✓ Completed',
    degree: 'Bachelor\'s Degree',
    year: '2026',
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

function EducationCard({ item, index }: { item: Edu; index: number }) {
  const leftSide = index % 2 === 0;

  return (
    <li className="relative flex min-h-[160px] items-center">
      {/* Node */}
      <div className="timeline-node pointer-events-none" style={{ background: '#06b6d4' }}>
        <div className="absolute inset-0 rounded-full" style={{
          boxShadow: '0 0 0 6px rgba(6,182,212,0.12), 0 0 16px rgba(6,182,212,0.25)',
        }} />
        <div className="absolute inset-0 rounded-full bg-cyan-500 opacity-20 animate-ping" />
      </div>

      {/* Connector */}
      <div
        className="hidden md:block absolute top-1/2 h-[1px]"
        style={{
          background: 'linear-gradient(90deg, rgba(6,182,212,0.4), transparent)',
          left: leftSide ? 'auto' : '50%',
          right: leftSide ? '50%' : 'auto',
          transform: 'translateY(-50%)',
          width: '64px',
        }}
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 24, x: leftSide ? -20 : 20 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className={[
          'glass-card-hover glass-premium relative w-full md:w-[44%] p-5 rounded-2xl group',
          leftSide ? 'md:mr-auto' : 'md:ml-auto',
        ].join(' ')}
      >
        {/* Top */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex-shrink-0">
              <FiBook size={15} />
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-[14.5px] leading-tight">{item.title}</h3>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener"
                  className="text-[12px] text-cyan-400 hover:text-cyan-300 underline-animate flex items-center gap-1 mt-0.5 transition-colors"
                >
                  {item.org} <FiExternalLink size={10} />
                </a>
              ) : (
                <span className="text-[12px] text-cyan-400 block mt-0.5">{item.org}</span>
              )}
              {item.group && (
                <span className="text-[11px] text-slate-600 block mt-0.5">{item.group}</span>
              )}
            </div>
          </div>

          <div className="flex-shrink-0 text-right">
            <div className="text-[11px] text-slate-500 font-medium">{item.year}</div>
          </div>
        </div>

        {/* Badges */}
        <div className="mt-3 flex flex-wrap gap-2">
          {item.degree && (
            <span className="text-[11px] px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-medium">
              {item.degree}
            </span>
          )}
          {item.note && (
            <span className="text-[11px] px-2.5 py-1 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 font-medium">
              {item.note}
            </span>
          )}
        </div>

        {/* Glow */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
          style={{ background: 'radial-gradient(600px at 50% 0%, rgba(6,182,212,0.05), transparent 60%)' }} />
      </motion.div>
    </li>
  );
}

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 65%', 'end 25%'] });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="education" className="relative py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />
            Academic Background
          </div>
          <h2 className="section-title-premium">
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div ref={ref} className="relative mt-12 max-w-4xl mx-auto">
          <div className="timeline-line hidden md:block" />
          <motion.div
            style={{ scaleY: lineScaleY, transformOrigin: 'top' }}
            className="pointer-events-none hidden md:block absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2"
            aria-hidden
          >
            <div className="h-full w-full" style={{
              background: 'linear-gradient(180deg, #06b6d4, #8b5cf6)',
              boxShadow: '0 0 8px rgba(6,182,212,0.3)',
            }} />
          </motion.div>

          <ul className="space-y-12 md:space-y-16">
            {items.map((item, i) => (
              <EducationCard key={i} item={item} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
