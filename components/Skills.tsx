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
import { FiCode, FiLayers, FiCpu, FiCheckCircle } from 'react-icons/fi';
import GlitchText from './GlitchText';
import TiltCard3D from './TiltCard3D';

type Skill = { name: string; icon: React.ReactNode; color: string; level: string };
type Category = { id: string; label: string; icon: React.ReactNode; skills: Skill[] };

const CATEGORIES: Category[] = [
  {
    id: 'backend',
    label: 'Backend & APIs',
    icon: <FiLayers size={14} />,
    skills: [
      { name: 'Django REST',  icon: <SiDjango size={32} />,      color: '#00ff66', level: 'ADVANCED' },
      { name: 'FastAPI',      icon: <SiFastapi size={32} />,     color: '#00f0ff', level: 'EXPERT' },
      { name: 'REST API Dev', icon: <FiCode size={32} />,        color: '#bd00ff', level: 'EXPERT' },
      { name: 'Next.js',      icon: <SiNextdotjs size={32} />,   color: '#ffffff', level: 'INTERMEDIATE' },
      { name: 'React',        icon: <SiReact size={32} />,       color: '#00d2ff', level: 'INTERMEDIATE' },
    ],
  },
  {
    id: 'languages',
    label: 'Languages',
    icon: <FiCode size={14} />,
    skills: [
      { name: 'Python',       icon: <FaPython size={32} />,      color: '#00f0ff', level: 'EXPERT' },
      { name: 'JavaScript',   icon: <SiJavascript size={32} />,  color: '#ffd700', level: 'ADVANCED' },
      { name: 'TypeScript',   icon: <SiTypescript size={32} />,  color: '#00d2ff', level: 'PROFICIENT' },
      { name: 'Java',         icon: <FaJava size={32} />,        color: '#ff7700', level: 'PROFICIENT' },
      { name: 'HTML5',        icon: <FaHtml5 size={32} />,       color: '#ff3300', level: 'ADVANCED' },
      { name: 'CSS3',         icon: <FaCss3Alt size={32} />,     color: '#0080ff', level: 'ADVANCED' },
    ],
  },
  {
    id: 'database',
    label: 'Databases & SQL',
    icon: <FiLayers size={14} />,
    skills: [
      { name: 'PostgreSQL',   icon: <SiPostgresql size={32} />,  color: '#00d2ff', level: 'EXPERT' },
      { name: 'MySQL',        icon: <SiMysql size={32} />,       color: '#ff9900', level: 'ADVANCED' },
      { name: 'SQL Querying', icon: <SiPostgresql size={32} />,  color: '#00ff66', level: 'ADVANCED' },
      { name: 'Schema Design',icon: <FiLayers size={32} />,      color: '#bd00ff', level: 'EXPERT' },
    ],
  },
  {
    id: 'ml',
    label: 'Data Science & AI',
    icon: <FiCpu size={14} />,
    skills: [
      { name: 'NumPy',        icon: <SiNumpy size={32} />,       color: '#00d2ff', level: 'ADVANCED' },
      { name: 'Pandas',       icon: <SiPandas size={32} />,      color: '#bd00ff', level: 'ADVANCED' },
      { name: 'Scikit-learn', icon: <SiScikitlearn size={32} />, color: '#ffaa00', level: 'ADVANCED' },
      { name: 'TensorFlow',   icon: <SiTensorflow size={32} />,  color: '#ff7700', level: 'ADVANCED' },
      { name: 'PyTorch',      icon: <SiPytorch size={32} />,     color: '#ff0055', level: 'PROFICIENT' },
      { name: 'Jupyter',      icon: <SiJupyter size={32} />,     color: '#ff9900', level: 'EXPERT' },
    ],
  },
  {
    id: 'tools',
    label: 'DevOps & Testing',
    icon: <FiLayers size={14} />,
    skills: [
      { name: 'Git & GitHub', icon: <FaGithub size={32} />,      color: '#ffffff', level: 'EXPERT' },
      { name: 'Docker',       icon: <FaDocker size={32} />,      color: '#00f0ff', level: 'ADVANCED' },
      { name: 'Linux OS',     icon: <SiLinux size={32} />,       color: '#ffd700', level: 'ADVANCED' },
      { name: 'Pytest',       icon: <SiPytest size={32} />,      color: '#00ff66', level: 'EXPERT' },
      { name: 'CI/CD Basics', icon: <SiGit size={32} />,         color: '#ff7700', level: 'PROFICIENT' },
      { name: 'Google Cloud', icon: <SiGooglecloud size={32} />, color: '#ff3300', level: 'INTERMEDIATE' },
      { name: 'Vercel',       icon: <SiVercel size={32} />,      color: '#ffffff', level: 'ADVANCED' },
    ],
  },
];

const CORE_COMPETENCIES = [
  { title: 'Backend & API Engineering', desc: 'Django REST Framework, FastAPI, REST API Design, JWT Auth, Microservices Architecture' },
  { title: 'Database Optimization', desc: 'PostgreSQL, MySQL, Complex Queries, Indexing, Transactional Integrity, Query Tuning' },
  { title: 'CS Fundamentals & Logic', desc: 'Data Structures, Algorithms, OOP, Problem Solving, System Analysis & Software Architecture' },
  { title: 'Automated Testing & QA', desc: 'Pytest, Unit Testing Fundamentals, Debugging, Bug Fixing, Automated CI Testing Workflows' },
  { title: 'Containerization & Cloud', desc: 'Docker, Linux Environments, Version Control (Git/GitHub), Vercel & GCP Deployments' },
  { title: 'AI & Machine Learning', desc: 'Model Development, Feature Engineering, TensorFlow, PyTorch, Scikit-learn, Neural Systems' },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('backend');
  const active = CATEGORIES.find((c) => c.id === activeTab)!;

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      <div className="relative z-10 max-w-[1680px] mx-auto px-4 sm:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="cyber-tag mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping inline-block" />
            03 // TECHNICAL ARSENAL
          </div>
          <h2 className="cyber-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            SKILLS &amp; <GlitchText text="EXPERTISE" as="span" className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-500" />
          </h2>
          <p className="mt-4 font-mono text-xs sm:text-sm text-slate-400">
            [ INITIALIZING NEURAL SKILL MATRIX &amp; PRODUCTION STACK ]
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-10"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`relative flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 ${
                activeTab === cat.id
                  ? 'text-cyan-300 bg-[#061533] border border-cyan-400/60 shadow-[0_0_25px_rgba(0,240,255,0.35)]'
                  : 'text-slate-400 bg-[#030816]/80 border border-cyan-500/15 hover:text-cyan-400 hover:border-cyan-500/40'
              }`}
            >
              {activeTab === cat.id && (
                <motion.span
                  layoutId="active-skill-pill"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-transparent pointer-events-none"
                  transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                />
              )}
              <span className="relative z-10 text-cyan-400">{cat.icon}</span>
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Dynamic Skill Cards Grid with 3D Tilt */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6"
          >
            {active.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <TiltCard3D maxTilt={15}>
                  <div className="cyber-card p-5 sm:p-6 rounded-2xl flex flex-col items-center justify-center text-center group hover:border-cyan-400/70 hud-corner relative overflow-hidden h-full">
                    {/* Glowing Background Radial */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${skill.color}30 0%, transparent 70%)`,
                      }}
                    />

                    <span
                      className="mb-4 transition-transform duration-300 group-hover:scale-120 group-hover:drop-shadow-[0_0_15px_currentColor]"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </span>

                    <h3 className="font-orbitron text-xs sm:text-sm font-bold text-white tracking-wider mb-2">
                      {skill.name}
                    </h3>

                    <span
                      className="font-mono text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold"
                      style={{
                        background: `${skill.color}15`,
                        color: skill.color,
                        border: `1px solid ${skill.color}40`,
                      }}
                    >
                      {skill.level}
                    </span>
                  </div>
                </TiltCard3D>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Core Competencies HUD Terminal Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 cyber-card p-6 sm:p-10 rounded-2xl hud-corner"
        >
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-cyan-500/20">
            <div className="flex items-center gap-2.5 font-orbitron text-base sm:text-lg font-bold text-white tracking-wider">
              <FiCheckCircle className="text-cyan-400" />
              <span>CORE ARCHITECTURAL COMPETENCIES</span>
            </div>
            <span className="font-mono text-xs text-cyan-400/80 uppercase">VERIFIED // PRODUCTION READY</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CORE_COMPETENCIES.map((comp) => (
              <div
                key={comp.title}
                className="bg-[#02040a]/80 border border-cyan-500/15 rounded-xl p-5 hover:border-cyan-400/50 hover:bg-[#03091e] transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <h4 className="font-orbitron text-xs sm:text-sm font-bold text-cyan-300 tracking-wide">
                    {comp.title}
                  </h4>
                </div>
                <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed pl-4">
                  {comp.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Infinite Cyber Stream Marquee */}
        <div className="mt-14 relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-28 z-10 bg-gradient-to-r from-[#02040a] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-28 z-10 bg-gradient-to-l from-[#02040a] to-transparent" />

          <div className="flex animate-marquee gap-6 w-max">
            {[...CATEGORIES.flatMap(c => c.skills), ...CATEGORIES.flatMap(c => c.skills)].map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#030816] border border-cyan-500/20 text-slate-300 font-mono text-xs whitespace-nowrap"
              >
                <span style={{ color: s.color }}>{s.icon}</span>
                <span className="font-semibold">{s.name}</span>
                <span className="text-[10px] text-cyan-400/70">[{s.level}]</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
