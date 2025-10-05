'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type Item = {
  role: string;
  org: string;
  link?: string;
  bullets: string[];
  period: string;
};

const items: Item[] = [
  {
    role: 'Python Developer Intern',
    org: 'HRSoft BD',
    link: 'https://hrsoftbd.com/',
    bullets: [
      'Build practical tools with clean, maintainable Python.',
      'Support data-driven features and automation in production.',
    ],
    period: '25 Sept 2025 – Present',
  },
  {
    role: 'Co-founder & CEO',
    org: 'Trinity Property Ventures Bangladesh',
    bullets: [
      'Blend technology and business for innovative real estate solutions.',
      'Drive product direction and value delivery.',
    ],
    period: '2024 – Present',
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 60%', 'end 20%'],
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="section-wrapper mb-28 md:mb-36">
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold"
      >
        Experience
      </motion.h2>

      <div ref={ref} className="relative mt-10 max-w-6xl mx-auto">
        {/* Center track */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 rounded bg-white/10" />
        {/* Scroll-linked fill */}
        <motion.div
          style={{ scaleY: lineScaleY, transformOrigin: 'top' }}
          className="pointer-events-none absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 rounded bg-indigo-400/80"
        />

        <ul className="space-y-10 md:space-y-16">
          {items.map((item, i) => (
            <ExperienceItem key={i} item={item} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function ExperienceItem({ item, index }: { item: Item; index: number }) {
  const leftSide = index % 2 === 0;

  return (
    <li className="relative flex min-h-[140px] md:min-h-[160px] items-center">
      {/* Node in the center */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="relative block h-3 w-3 rounded-full bg-indigo-400 shadow-[0_0_0_6px_rgba(99,102,241,0.12)]">
          <span className="absolute inset-0 h-3 w-3 rounded-full animate-ping-slow bg-indigo-400/50" />
        </span>
      </div>

      {/* Connector stub from center to card */}
      <div
        className="hidden md:block absolute top-1/2 h-[2px] bg-white/15"
        style={{
          left: '50%',
          transform: `translateY(-50%) ${leftSide ? 'translateX(-100%)' : ''}`,
          width: '56px', // elegant stub
        }}
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 16, x: leftSide ? -12 : 12 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className={[
          'shine relative w-full md:w-[42%] rounded-2xl bg-[rgb(20,25,34)]/85 p-5 ring-1 ring-white/5 transition-shadow',
          'hover:shadow-[0_20px_40px_-20px_rgba(99,102,241,.35)]',
          leftSide ? 'md:mr-auto md:text-right' : 'md:ml-auto',
        ].join(' ')}
        onMouseMove={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          const r = el.getBoundingClientRect();
          const x = ((e.clientX - r.left) / r.width - 0.5) * 6;
          const y = ((e.clientY - r.top) / r.height - 0.5) * 6;
          el.style.setProperty('--mx', `${x}px`);
          el.style.setProperty('--my', `${y}px`);
          el.style.transform = `translate(var(--mx), var(--my))`;
        }}
        onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.transform = '')}
      >
        <div
          className={[
            'flex items-start gap-3',
            leftSide ? 'md:flex-row-reverse' : 'md:flex-row',
          ].join(' ')}
        >
          <div className="grow">
            <h3 className="text-[15px] font-semibold text-slate-100">{item.role}</h3>
            <div className="text-[13px] text-indigo-300">
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener" className="hover:underline">
                  {item.org}
                </a>
              ) : (
                item.org
              )}
            </div>

            <ul
              className={[
                'mt-3 list-disc space-y-1 text-[13px] text-slate-300/90',
                leftSide ? 'md:pr-4 md:pl-0 pr-0 pl-4' : 'md:pl-4 md:pr-0 pl-0 pr-4',
              ].join(' ')}
            >
              {item.bullets.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: leftSide ? -10 : 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.05 * i }}
                >
                  {b}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Date badge */}
          <motion.span
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 220, damping: 16, delay: 0.1 }}
            className="whitespace-nowrap rounded-full bg-indigo-500/10 px-3 py-1 text-[11px] text-indigo-300 ring-1 ring-indigo-400/20"
          >
            {item.period}
          </motion.span>
        </div>
      </motion.div>
    </li>
  );
}
