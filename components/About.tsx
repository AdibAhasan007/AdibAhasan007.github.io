'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { FiCode, FiBriefcase, FiDatabase, FiCpu } from 'react-icons/fi';

/* ── Counter ─────────────────────────────── */
function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const dur = 2000;
    const step = 16;
    const steps = dur / step;
    const inc = target / steps;
    let cur = 0;
    const id = setInterval(() => {
      cur += inc;
      if (cur >= target) { setCount(target); clearInterval(id); }
      else setCount(Math.floor(cur));
    }, step);
    return () => clearInterval(id);
  }, [inView, target]);

  return (
    <span ref={ref} className="stat-number gradient-text">
      {count}{suffix}
    </span>
  );
}

const HIGHLIGHTS = [
  { icon: <FiCode size={20} />, title: 'Backend Development', desc: 'Django REST Framework, FastAPI, REST APIs, and Python backend systems.' },
  { icon: <FiCpu size={20} />, title: 'AI Engineering', desc: 'Building AI-based software solutions and intelligent internal products.' },
  { icon: <FiDatabase size={20} />, title: 'Databases', desc: 'PostgreSQL, MySQL — SQL querying, schema design, and optimization.' },
  { icon: <FiBriefcase size={20} />, title: 'Entrepreneurship', desc: 'Co-founded Trinity Property Ventures, merging tech with real estate.' },
];

const STATS = [
  { target: 2, suffix: '+', label: 'Years Experience' },
  { target: 10, suffix: '+', label: 'Projects Built' },
  { target: 5, suffix: '+', label: 'Articles Written' },
  { target: 2, suffix: '', label: 'Companies' },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-8">
      {/* Ambient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 w-80 h-80 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-40 w-96 h-96 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block" />
            Who I Am
          </div>
          <h2 className="section-title-premium">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="glass-premium p-8 rounded-2xl relative overflow-hidden">
              {/* Animated conic border */}
              <motion.div
                aria-hidden
                className="absolute -inset-[1px] rounded-2xl"
                style={{
                  background: 'conic-gradient(from 0deg, #6366f1, #06b6d4, #8b5cf6, #6366f1)',
                  filter: 'blur(12px)',
                  opacity: 0.2,
                  zIndex: -1,
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />

              {/* Avatar row */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl overflow-hidden ring-2 ring-indigo-500/30 flex-shrink-0">
                  <img src="/adib.jpg" alt="Adib" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg leading-tight">Adib Ahasan Chowdhury</h3>
                  <p className="text-indigo-400 text-sm mt-0.5">AI Engineer &amp; Software Developer</p>
                </div>
              </div>

              <div className="space-y-4 text-base text-slate-400 leading-relaxed">
                <p>
                  I'm a <span className="font-semibold text-white">Computer Science &amp; Engineering graduate from ULAB</span> with
                  hands-on experience in Python-based software development, backend API development,
                  AI-related software solutions, debugging, and software documentation.
                </p>
                <p>
                  Currently working as an{' '}
                  <span className="font-semibold text-indigo-400">AI Engineer &amp; Software Developer</span> at{' '}
                  <span className="font-semibold text-white">IYLMA Innovation Limited</span>, with previous internship
                  experience as a Software Engineering Intern – Python at{' '}
                  <span className="font-semibold text-cyan-400">HRSoft BD</span>.
                </p>
                <p>
                  I'm also the Co-founder &amp; CEO of{' '}
                  <span className="font-semibold text-violet-400">Trinity Property Ventures Bangladesh</span>, combining
                  technology and entrepreneurial vision to create innovative real estate solutions.
                </p>
              </div>

              {/* Divider */}
              <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {/* Skills highlight strip */}
              <div className="flex flex-wrap gap-2 mb-5">
                {['Django REST', 'FastAPI', 'Python', 'PostgreSQL', 'Docker', 'TypeScript'].map((skill) => (
                  <span key={skill} className="tag text-[11px]">{skill}</span>
                ))}
              </div>

              {/* Location + status */}
              <div className="flex flex-wrap gap-3">
                <span className="flex items-center gap-2 text-xs text-slate-400 bg-white/[0.04] border border-white/[0.07] rounded-full px-3 py-1.5">
                  📍 Dhaka, Bangladesh
                </span>
                <span className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-400/[0.08] border border-emerald-400/20 rounded-full px-3 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Open to opportunities
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Highlights + Stats */}
          <div className="space-y-6">
            {/* Highlights grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {HIGHLIGHTS.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="glass-card-hover glass p-5 rounded-xl group cursor-default"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-3 transition-colors group-hover:bg-indigo-500/20">
                    {h.icon}
                  </span>
                  <h4 className="font-display font-semibold text-white text-[14px] mb-1">{h.title}</h4>
                  <p className="text-[12px] text-slate-500 leading-relaxed">{h.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-4 gap-3"
            >
              {STATS.map((s, i) => (
                <div key={i} className="stat-card">
                  <Counter target={s.target} suffix={s.suffix} />
                  <p className="text-[11px] text-slate-500 mt-1 leading-tight">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
