'use client';

import { motion } from 'framer-motion';
import { FiBriefcase, FiExternalLink, FiTerminal, FiCheckCircle } from 'react-icons/fi';
import GlitchText from './GlitchText';
import TiltCard3D from './TiltCard3D';

type ExpItem = {
  role: string;
  org: string;
  link?: string;
  type: string;
  period: string;
  location: string;
  current?: boolean;
  bullets: string[];
  techStack: string[];
};

const EXPERIENCES: ExpItem[] = [
  {
    role: 'AI Engineer & Software Developer',
    org: 'IYLMA Innovation Limited',
    type: 'Full-time Position (Completed)',
    period: 'Jan 1, 2026 – Jul 31, 2026',
    location: 'Dhaka, Bangladesh',
    current: false,
    bullets: [
      'Developed and maintained production software applications using Python and modern software engineering practices.',
      'Architected backend logic, feature implementation, system performance tuning, and active debugging.',
      'Assisted in building AI-based software solutions, neural model integrations, and internal software tools.',
      'Collaborated with cross-functional engineering teams to analyse business requirements and deliver reliable software.',
      'Drove rigorous testing, issue identification, documentation, and continuous software quality improvement before deployment.',
    ],
    techStack: ['Python', 'AI Systems', 'Backend APIs', 'System Architecture', 'Testing'],
  },
  {
    role: 'Co-founder & CEO',
    org: 'Trinity Property Ventures Bangladesh',
    link: 'https://www.facebook.com/profile.php?id=61571774847324',
    type: 'Entrepreneurship & Tech',
    period: '2024 – Present',
    location: 'Dhaka, Bangladesh',
    current: true,
    bullets: [
      'Combine cutting-edge software technology and business leadership to deliver modern prop-tech real estate solutions.',
      'Steer product roadmap, technology integrations, team operations, and client value delivery.',
      'Spearhead digital marketing platforms, client dashboards, and operational automation.',
    ],
    techStack: ['Leadership', 'PropTech', 'Product Strategy', 'Tech Integration'],
  },
  {
    role: 'Software Engineering Intern – Python',
    org: 'HRSOFT BD',
    link: 'https://hrsoftbd.com/',
    type: 'Engineering Internship (Completed)',
    period: 'Sep 25, 2025 – Dec 25, 2025',
    location: 'Dhaka, Bangladesh',
    current: false,
    bullets: [
      'Built and maintained Python-based backend services and high-throughput REST APIs using Django REST Framework and FastAPI.',
      'Authored clean, testable, and maintainable backend code adhering to clean architecture standards.',
      'Designed and optimized PostgreSQL and MySQL database queries, relational schemas, and indexing.',
      'Utilized Git and GitHub for collaborative version control and team code reviews.',
      'Implemented automated unit testing with pytest and resolved critical backend bugs.',
    ],
    techStack: ['Python', 'Django REST', 'FastAPI', 'PostgreSQL', 'MySQL', 'Pytest'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 overflow-hidden">
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
            04 // CAREER TELEMETRY
          </div>
          <h2 className="cyber-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            WORK <GlitchText text="EXPERIENCE" as="span" className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500" />
          </h2>
          <p className="mt-4 font-mono text-xs sm:text-sm text-slate-400">
            [ LOGGING PROFESSIONAL ROLES &amp; PRODUCTION ACHIEVEMENTS ]
          </p>
        </motion.div>

        {/* Cyber Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Laser Beam for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-purple-500 to-green-500 shadow-[0_0_12px_rgba(0,240,255,0.6)]" />

          <div className="space-y-12 md:space-y-16">
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={exp.role + exp.org}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  {/* Central Node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 z-20 items-center justify-center">
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center bg-[#02040a] ${
                      exp.current
                        ? 'border-emerald-400 shadow-[0_0_20px_#00ff66]'
                        : 'border-cyan-400 shadow-[0_0_15px_#00f0ff]'
                    }`}>
                      <span className={`w-2.5 h-2.5 rounded-full ${exp.current ? 'bg-emerald-400 animate-ping' : 'bg-cyan-400'}`} />
                    </div>
                  </div>

                  {/* Card Container with 3D Tilt */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.6 }}
                    className={`w-full md:w-[47%] ${
                      isEven ? 'md:mr-auto' : 'md:ml-auto'
                    }`}
                  >
                    <TiltCard3D maxTilt={10}>
                      <div className={`cyber-card p-6 sm:p-7 rounded-2xl hud-corner relative overflow-hidden ${
                        exp.current ? 'border-emerald-400/40 shadow-[0_0_30px_rgba(0,255,102,0.15)]' : ''
                      }`}>
                        {/* Top Header Row */}
                        <div className="flex flex-wrap items-start justify-between gap-2 pb-3 mb-4 border-b border-cyan-500/20">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-orbitron text-base sm:text-lg font-bold text-white leading-snug">
                                {exp.role}
                              </h3>
                            </div>
                            <div className="flex items-center gap-1.5 mt-1 font-mono text-xs text-cyan-400">
                              {exp.link ? (
                                <a
                                  href={exp.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1 hover:underline hover:text-cyan-300"
                                >
                                  <span>{exp.org}</span>
                                  <FiExternalLink size={12} />
                                </a>
                              ) : (
                                <span>{exp.org}</span>
                              )}
                              <span className="text-slate-500">· {exp.location}</span>
                            </div>
                          </div>

                          {exp.current ? (
                            <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 font-mono text-[10px] font-bold flex items-center gap-1.5 shadow-[0_0_10px_rgba(0,255,102,0.3)]">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              CURRENT // ACTIVE
                            </span>
                          ) : (
                            <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-mono text-[10px] font-semibold">
                              ✓ COMPLETED
                            </span>
                          )}
                        </div>

                        {/* Meta info tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-2.5 py-0.5 rounded-md bg-[#02040a] border border-cyan-500/20 font-mono text-[11px] text-cyan-300">
                            🗓️ {exp.period}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-md bg-[#02040a] border border-purple-500/20 font-mono text-[11px] text-purple-300">
                            ⚙️ {exp.type}
                          </span>
                        </div>

                        {/* Bullets */}
                        <ul className="space-y-2 mb-5">
                          {exp.bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                              <span className="text-cyan-400 font-mono text-xs mt-0.5">&gt;&gt;</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech Stack Pills */}
                        <div className="pt-3 border-t border-cyan-500/15 flex flex-wrap gap-1.5">
                          {exp.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 font-mono text-[11px]"
                            >
                              #{tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </TiltCard3D>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
