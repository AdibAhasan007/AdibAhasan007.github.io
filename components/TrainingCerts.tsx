'use client';

import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiGlobe, FiCheck } from 'react-icons/fi';
import GlitchText from './GlitchText';
import TiltCard3D from './TiltCard3D';

type Training = {
  name: string;
  institute: string;
  location: string;
  duration: string;
  year: string;
  topics: string[];
};

type Certification = {
  name: string;
  org: string;
  date: string;
};

const TRAININGS: Training[] = [
  {
    name: 'Django REST Framework – DRF',
    institute: 'HrSoft Bangladesh',
    location: 'Dhaka, Bangladesh',
    duration: '24 Hours Intensive',
    year: '2025',
    topics: [
      'REST API Design',
      'Serializers & ViewSets',
      'JWT Authentication',
      'Pagination & Filters',
      'API Versioning',
      'Pytest Automation',
      'Backend Testing Fundamentals',
    ],
  },
];

const CERTIFICATIONS: Certification[] = [
  {
    name: 'Webinar on Renewable Energy and IEEE PES Day 2021',
    org: 'University of Liberal Arts Bangladesh (ULAB)',
    date: 'April 29, 2021',
  },
  {
    name: 'Skills for Career — Professional Development',
    org: 'University of Liberal Arts Bangladesh (ULAB)',
    date: 'February 1, 2021 – May 11, 2021',
  },
];

const LANGUAGES = [
  { name: 'Bangla (Native)', code: 'BN', level: 'NATIVE // PROFICIENT', progress: '100%', color: '#00ff66' },
  { name: 'English (Professional)', code: 'EN', level: 'PROFESSIONAL // WORKING', progress: '95%', color: '#00f0ff' },
  { name: 'Hindi (Conversational)', code: 'HI', level: 'CONVERSATIONAL // SPOKEN', progress: '80%', color: '#bd00ff' },
];

export default function TrainingCerts() {
  return (
    <section id="training" className="relative py-20 overflow-hidden">
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
            06 // PROFESSIONAL PROTOCOLS
          </div>
          <h2 className="cyber-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            TRAINING &amp; <GlitchText text="CERTIFICATIONS" as="span" className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500" />
          </h2>
          <p className="mt-4 font-mono text-xs sm:text-sm text-slate-400">
            [ SPECIALIZED BACKEND TRAINING, IEEE CREDENTIALS &amp; LINGUISTIC TELEMETRY ]
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 items-start">
          {/* ── Left: Intensive Technical Training (6 Cols) ── */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 mb-2 font-orbitron text-base font-bold text-cyan-300">
              <FiBookOpen className="text-cyan-400" />
              <span>SPECIALIZED ENGINEERING TRAINING</span>
            </div>

            {TRAININGS.map((tr) => (
              <motion.div
                key={tr.name}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <TiltCard3D maxTilt={8}>
                  <div className="cyber-card p-6 sm:p-7 rounded-2xl hud-corner">
                    <div className="flex items-start justify-between gap-3 pb-3 mb-4 border-b border-cyan-500/20">
                      <div>
                        <h3 className="font-orbitron text-base sm:text-lg font-bold text-white leading-snug">
                          {tr.name}
                        </h3>
                        <p className="font-mono text-xs sm:text-sm text-cyan-400 mt-1">
                          {tr.institute} · {tr.location}
                        </p>
                      </div>
                      <span className="px-3 py-1 rounded-md bg-[#02040a] border border-cyan-500/30 font-mono text-xs font-bold text-cyan-300">
                        {tr.year}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-2.5 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-[11px]">
                        ⏱️ DURATION: {tr.duration}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 font-mono text-[11px] flex items-center gap-1">
                        <FiCheck size={12} />
                        VERIFIED CERT
                      </span>
                    </div>

                    <p className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                      TOPICS COVERED:
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {tr.topics.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-lg bg-[#02040a] border border-cyan-500/20 text-slate-300 font-mono text-xs hover:border-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard3D>
              </motion.div>
            ))}
          </div>

          {/* ── Right: Certifications & Language Matrix (6 Cols) ── */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 mb-2 font-orbitron text-base font-bold text-purple-300">
              <FiAward className="text-purple-400" />
              <span>OFFICIAL CERTIFICATIONS &amp; WEBINARS</span>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <TiltCard3D maxTilt={6}>
                    <div className="cyber-card p-5 sm:p-6 rounded-2xl hud-corner">
                      <div className="flex items-start gap-3.5">
                        <div className="p-3 rounded-xl bg-[#02040a] border border-purple-500/30 text-purple-400 flex-shrink-0 mt-0.5">
                          <FiAward size={20} />
                        </div>
                        <div>
                          <h4 className="font-orbitron text-xs sm:text-sm font-bold text-white leading-snug">
                            {cert.name}
                          </h4>
                          <p className="font-mono text-xs text-purple-300 mt-1">
                            {cert.org}
                          </p>
                          <span className="inline-block mt-2 font-mono text-[11px] text-slate-400 px-2.5 py-0.5 rounded bg-[#02040a] border border-purple-500/20">
                            🗓️ {cert.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </TiltCard3D>
                </motion.div>
              ))}
            </div>

            {/* Language Telemetry Matrix */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <TiltCard3D maxTilt={6}>
                <div className="cyber-card p-6 sm:p-7 rounded-2xl hud-corner">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-cyan-500/20">
                    <div className="flex items-center gap-2 font-orbitron text-xs sm:text-sm font-bold text-white tracking-wider">
                      <FiGlobe className="text-cyan-400" />
                      <span>LINGUISTIC TELEMETRY &amp; COMMS</span>
                    </div>
                    <span className="font-mono text-xs text-cyan-400">STATUS: GLOBAL</span>
                  </div>

                  <div className="space-y-4">
                    {LANGUAGES.map((lang) => (
                      <div key={lang.name} className="space-y-1.5">
                        <div className="flex justify-between font-mono text-xs sm:text-sm">
                          <span className="text-white font-bold">{lang.name}</span>
                          <span className="font-semibold" style={{ color: lang.color }}>{lang.level}</span>
                        </div>
                        <div className="h-2 w-full bg-[#02040a] rounded-full overflow-hidden border border-cyan-500/15">
                          <div
                            className="h-full rounded-full transition-all duration-1000"
                            style={{
                              width: lang.progress,
                              backgroundColor: lang.color,
                              boxShadow: `0 0 12px ${lang.color}`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard3D>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
