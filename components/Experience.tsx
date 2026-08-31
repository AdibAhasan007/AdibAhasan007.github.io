'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiBriefcase, FiExternalLink } from 'react-icons/fi';

type Item = {
  role: string;
  org: string;
  link?: string;
  type: string;
  bullets: string[];
  period: string;
  current?: boolean;
  location?: string;
};

const items: Item[] = [
  {
    role: 'AI Engineer & Software Developer',
    org: 'IYLMA Innovation Limited',
    type: 'Full-time',
    location: 'Dhaka, Bangladesh',
    bullets: [
      'Develop and maintain software applications using Python and modern software development practices.',
      'Work on backend logic, feature implementation, debugging, and system improvement.',
      'Assist in building AI-based software solutions and internal software products.',
      'Collaborate with team members to analyse requirements and deliver functional software solutions.',
      'Support testing, issue identification, documentation, and software quality improvement before deployment.',
    ],
    period: 'Jan 1, 2026 – Jul 31, 2026',
    current: true,
  },
  {
    role: 'Software Engineering Intern – Python',
    org: 'HRSoft BD',
    link: 'https://hrsoftbd.com/',
    type: 'Internship',
    location: 'Dhaka, Bangladesh',
    bullets: [
      'Built and maintained Python-based backend services and REST APIs using Django REST Framework and FastAPI.',
      'Assisted in writing clean, testable, and maintainable backend code.',
      'Worked with PostgreSQL/MySQL database queries and basic database design tasks.',
      'Used Git and GitHub for version control and collaborative software development.',
      'Practised unit testing with pytest and supported bug fixing in backend systems.',
    ],
    period: 'Sep 25, 2025 – Dec 25, 2025',
    current: false,
  },
  {
    role: 'Co-founder & CEO',
    org: 'Trinity Property Ventures Bangladesh',
    link: 'https://www.facebook.com/profile.php?id=61571774847324',
    type: 'Entrepreneurship',
    location: 'Dhaka, Bangladesh',
    bullets: [
      'Blend technology and business to create innovative real estate solutions.',
      'Drive product direction, team strategy, and value delivery.',
      'Lead digital marketing and technology integration efforts.',
    ],
    period: '2024 – Present',
    current: true,
  },
];

function ExperienceCard({ item, index }: { item: Item; index: number }) {
  const leftSide = index % 2 === 0;

  return (
    <li className="relative flex min-h-[200px] items-center">
      {/* Timeline node */}
      <div className="timeline-node pointer-events-none" style={{ background: item.current ? '#6366f1' : '#94a3b8' }}>
        <div className="absolute inset-0 rounded-full" style={{
          boxShadow: item.current
            ? '0 0 0 6px rgba(99,102,241,0.15), 0 0 20px rgba(99,102,241,0.3)'
            : '0 0 0 6px rgba(148,163,184,0.1)',
        }} />
        {item.current && (
          <div className="absolute inset-0 rounded-full bg-indigo-500 opacity-20 animate-ping" />
        )}
      </div>

      {/* Connector stub */}
      <div
        className="hidden md:block absolute top-1/2 h-[1px]"
        style={{
          background: `linear-gradient(90deg, ${item.current ? 'rgba(99,102,241,0.4)' : 'rgba(148,163,184,0.2)'}, transparent)`,
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
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className={[
          'glass-card-hover glass-premium relative w-full md:w-[44%] p-5 rounded-2xl group',
          leftSide ? 'md:mr-auto' : 'md:ml-auto',
        ].join(' ')}
      >
        {/* Top row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className={`flex items-center justify-center w-9 h-9 rounded-xl border flex-shrink-0 ${
              item.current
                ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'
                : 'bg-slate-500/10 border-slate-500/20 text-slate-400'
            }`}>
              <FiBriefcase size={15} />
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-[15px] leading-tight">{item.role}</h3>
              <div className="flex items-center gap-1.5 mt-0.5">
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener"
                    className="text-[12.5px] text-indigo-400 hover:text-indigo-300 underline-animate flex items-center gap-1 transition-colors"
                  >
                    {item.org} <FiExternalLink size={10} />
                  </a>
                ) : (
                  <span className="text-[12.5px] text-indigo-400">{item.org}</span>
                )}
                {item.location && (
                  <span className="text-[11px] text-slate-600">· {item.location}</span>
                )}
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 text-right">
            {item.current && (
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-2 py-0.5 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Current
              </span>
            )}
            <div className="text-[11px] text-slate-500 mt-1 font-medium leading-tight">{item.period}</div>
          </div>
        </div>

        {/* Type badge */}
        <span className="inline-block tag mb-3">{item.type}</span>

        {/* Bullets */}
        <ul className="space-y-1.5">
          {item.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-[12.5px] text-slate-400 leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400/60 flex-shrink-0" />
              {b}
            </li>
          ))}
        </ul>

        {/* Hover glow */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
          style={{ background: 'radial-gradient(600px at 50% 0%, rgba(99,102,241,0.06), transparent 60%)' }} />
      </motion.div>
    </li>
  );
}

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 65%', 'end 25%'] });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="relative py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block" />
            Career Path
          </div>
          <h2 className="section-title-premium">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div ref={ref} className="relative mt-12 max-w-4xl mx-auto">
          {/* Ghost line */}
          <div className="timeline-line hidden md:block" />
          {/* Scroll fill */}
          <motion.div
            style={{ scaleY: lineScaleY, transformOrigin: 'top' }}
            className="pointer-events-none hidden md:block absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2"
            aria-hidden
          >
            <div className="h-full w-full" style={{
              background: 'linear-gradient(180deg, #6366f1, #06b6d4, #8b5cf6)',
              boxShadow: '0 0 8px rgba(99,102,241,0.4)',
            }} />
          </motion.div>

          <ul className="space-y-14 md:space-y-24">
            {items.map((item, i) => (
              <ExperienceCard key={i} item={item} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
