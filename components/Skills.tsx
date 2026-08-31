'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  FaPython, FaJava, FaDocker, FaGithub, FaHtml5, FaCss3Alt,
} from 'react-icons/fa';
import {
  SiTypescript, SiJavascript, SiDjango, SiFastapi, SiNextdotjs, SiReact,
  SiPostgresql, SiMysql, SiPytorch, SiTensorflow, SiScikitlearn, SiNumpy,
  SiPandas, SiGit, SiLinux, SiJupyter, SiVercel, SiGooglecloud,
  SiPytest,
} from 'react-icons/si';

type Skill = { name: string; icon: React.ReactNode; color: string };
type Category = { id: string; label: string; emoji: string; skills: Skill[] };

const CATEGORIES: Category[] = [
  {
    id: 'languages',
    label: 'Languages',
    emoji: '💻',
    skills: [
      { name: 'Python',       icon: <FaPython size={26} />,      color: '#3b82f6' },
      { name: 'JavaScript',   icon: <SiJavascript size={26} />,  color: '#eab308' },
      { name: 'TypeScript',   icon: <SiTypescript size={26} />,  color: '#06b6d4' },
      { name: 'Java',         icon: <FaJava size={26} />,        color: '#f97316' },
      { name: 'HTML',         icon: <FaHtml5 size={26} />,       color: '#ef4444' },
      { name: 'CSS',          icon: <FaCss3Alt size={26} />,     color: '#6366f1' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & APIs',
    emoji: '⚙️',
    skills: [
      { name: 'Django REST',  icon: <SiDjango size={26} />,      color: '#22c55e' },
      { name: 'FastAPI',      icon: <SiFastapi size={26} />,     color: '#06b6d4' },
      { name: 'REST APIs',    icon: <SiFastapi size={26} />,     color: '#8b5cf6' },
      { name: 'Next.js',      icon: <SiNextdotjs size={26} />,   color: '#ffffff' },
      { name: 'React',        icon: <SiReact size={26} />,       color: '#06b6d4' },
    ],
  },
  {
    id: 'database',
    label: 'Databases',
    emoji: '🗄️',
    skills: [
      { name: 'PostgreSQL',   icon: <SiPostgresql size={26} />,  color: '#3b82f6' },
      { name: 'MySQL',        icon: <SiMysql size={26} />,       color: '#f97316' },
      { name: 'SQL',          icon: <SiPostgresql size={26} />,  color: '#94a3b8' },
    ],
  },
  {
    id: 'ml',
    label: 'Data Science & ML',
    emoji: '🤖',
    skills: [
      { name: 'NumPy',        icon: <SiNumpy size={26} />,       color: '#06b6d4' },
      { name: 'Pandas',       icon: <SiPandas size={26} />,      color: '#6366f1' },
      { name: 'Scikit-learn', icon: <SiScikitlearn size={26} />, color: '#f59e0b' },
      { name: 'TensorFlow',   icon: <SiTensorflow size={26} />,  color: '#f97316' },
      { name: 'PyTorch',      icon: <SiPytorch size={26} />,     color: '#ef4444' },
      { name: 'Jupyter',      icon: <SiJupyter size={26} />,     color: '#f59e0b' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Cloud',
    emoji: '🛠️',
    skills: [
      { name: 'Git',          icon: <SiGit size={26} />,         color: '#f97316' },
      { name: 'GitHub',       icon: <FaGithub size={26} />,      color: '#ffffff' },
      { name: 'Docker',       icon: <FaDocker size={26} />,      color: '#06b6d4' },
      { name: 'Linux',        icon: <SiLinux size={26} />,       color: '#f59e0b' },
      { name: 'Pytest',       icon: <SiPytest size={26} />,      color: '#22c55e' },
      { name: 'Google Cloud', icon: <SiGooglecloud size={26} />, color: '#ef4444' },
      { name: 'Vercel',       icon: <SiVercel size={26} />,      color: '#ffffff' },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('languages');
  const active = CATEGORIES.find((c) => c.id === activeTab)!;

  return (
    <section id="skills" className="relative py-8">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block" />
            Technical Stack
          </div>
          <h2 className="section-title-premium">
            Skills &amp; <span className="gradient-text">Expertise</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base max-w-xl">
            Skilled in Python, Django REST Framework, FastAPI, REST API development, Git/GitHub,
            PostgreSQL, MySQL, unit testing fundamentals, and backend development practices.
          </p>
        </motion.div>

        {/* Tab bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 flex flex-wrap gap-2"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-250 ${
                activeTab === cat.id
                  ? 'text-white'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {activeTab === cat.id && (
                <motion.span
                  layoutId="skill-tab"
                  className="absolute inset-0 rounded-xl bg-indigo-500/20 border border-indigo-500/30"
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                />
              )}
              <span className="relative">{cat.emoji}</span>
              <span className="relative">{cat.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-4"
          >
            {active.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06, type: 'spring', stiffness: 300, damping: 20 }}
                className="skill-badge group glow-ring"
              >
                <span
                  className="transition-transform group-hover:scale-110 duration-300"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </span>
                <span className="text-[11.5px] font-medium text-slate-300 text-center leading-tight">
                  {skill.name}
                </span>
                <div
                  className="absolute inset-0 rounded-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at 50% 40%, ${skill.color}18, transparent 70%)`,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Core competencies strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 glass-premium rounded-2xl p-6"
        >
          <h3 className="font-display font-semibold text-white text-[15px] mb-4">Core Competencies</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'Backend Development', detail: 'Django REST Framework, FastAPI, REST API Development, API Design' },
              { label: 'Database', detail: 'PostgreSQL, MySQL, SQL Querying, Basic Database Design' },
              { label: 'CS Fundamentals', detail: 'Data Structures, Algorithms, OOP, Problem Solving, System Analysis' },
              { label: 'Testing & Debugging', detail: 'Pytest, Unit Testing Fundamentals, Bug Fixing, Debugging' },
              { label: 'Frontend Familiarity', detail: 'HTML, CSS, Next.js Basics, React Basics' },
              { label: 'Tools & Platforms', detail: 'Git, GitHub, Docker, Basic CI/CD, VS Code, MS Office' },
            ].map((item) => (
              <div key={item.label} className="flex gap-3">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-400/60 flex-shrink-0" />
                <div>
                  <span className="text-[13px] font-semibold text-slate-300">{item.label}:</span>{' '}
                  <span className="text-[12.5px] text-slate-500">{item.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Marquee strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 relative overflow-hidden"
        >
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10"
            style={{ background: 'linear-gradient(90deg, var(--bg-base), transparent)' }} />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10"
            style={{ background: 'linear-gradient(-90deg, var(--bg-base), transparent)' }} />

          <div className="flex animate-marquee gap-6 w-max">
            {[...CATEGORIES.flatMap(c => c.skills), ...CATEGORIES.flatMap(c => c.skills)].map((s, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.07] whitespace-nowrap">
                <span style={{ color: s.color }} className="text-sm">{s.icon}</span>
                <span className="text-xs text-slate-400 font-medium">{s.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
