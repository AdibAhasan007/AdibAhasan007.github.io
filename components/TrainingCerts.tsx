'use client';

import { motion } from 'framer-motion';
import { FiAward, FiBookOpen } from 'react-icons/fi';

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

const trainings: Training[] = [
  {
    name: 'Django REST Framework – DRF',
    institute: 'HrSoft Bangladesh',
    location: 'Dhaka, Bangladesh',
    duration: '24 Hours',
    year: '2025',
    topics: ['REST API design', 'serializers', 'viewsets', 'JWT authentication', 'pagination', 'API versioning', 'pytest', 'backend testing fundamentals'],
  },
];

const certifications: Certification[] = [
  {
    name: 'Webinar on Renewable Energy and IEEE PES Day 2021',
    org: 'University of Liberal Arts Bangladesh',
    date: 'April 29, 2021',
  },
  {
    name: 'Skills for Career',
    org: 'University of Liberal Arts Bangladesh',
    date: 'February 1, 2021 – May 11, 2021',
  },
];

export default function TrainingCerts() {
  return (
    <section id="training" className="relative py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 inline-block" />
            Professional Development
          </div>
          <h2 className="section-title-premium">
            Training &amp; <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {/* ── Training ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-5"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                <FiBookOpen size={15} />
              </div>
              <h3 className="font-display font-bold text-white text-[17px]">Training</h3>
            </motion.div>

            <div className="space-y-4">
              {trainings.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className="glass-card-hover glass-premium p-5 rounded-2xl group"
                >
                  {/* Top */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h4 className="font-display font-bold text-white text-[15px] leading-snug">{t.name}</h4>
                      <p className="text-[12.5px] text-indigo-400 mt-0.5">{t.institute}</p>
                    </div>
                    <span className="flex-shrink-0 text-[11px] text-slate-500 font-medium mt-0.5">{t.year}</span>
                  </div>

                  {/* Meta badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="tag text-[11px]">📍 {t.location}</span>
                    <span className="tag text-[11px]">⏱️ {t.duration}</span>
                  </div>

                  {/* Topics */}
                  <div>
                    <p className="text-[11px] text-slate-500 uppercase tracking-widest font-semibold mb-2">Topics Covered</p>
                    <div className="flex flex-wrap gap-1.5">
                      {t.topics.map((topic) => (
                        <span
                          key={topic}
                          className="text-[11px] px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-medium"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                    style={{ background: 'radial-gradient(600px at 50% 0%, rgba(99,102,241,0.06), transparent 60%)' }} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Certifications ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-5"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400">
                <FiAward size={15} />
              </div>
              <h3 className="font-display font-bold text-white text-[17px]">Certifications</h3>
            </motion.div>

            <div className="space-y-4">
              {certifications.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: i * 0.12 }}
                  className="glass-card-hover glass-premium p-5 rounded-2xl group relative overflow-hidden"
                >
                  {/* Accent line */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl"
                    style={{ background: 'linear-gradient(180deg, #8b5cf6, #06b6d4)' }}
                  />

                  <div className="pl-3">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400 flex-shrink-0 mt-0.5">
                        <FiAward size={13} />
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-white text-[14px] leading-snug">{c.name}</h4>
                        <p className="text-[12px] text-violet-400 mt-0.5">{c.org}</p>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-[11px] text-slate-500 bg-white/[0.04] border border-white/[0.07] rounded-full px-3 py-1 mt-1">
                      🗓️ {c.date}
                    </span>
                  </div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                    style={{ background: 'radial-gradient(600px at 50% 0%, rgba(139,92,246,0.05), transparent 60%)' }} />
                </motion.div>
              ))}
            </div>

            {/* Language proficiency card */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="glass-premium p-5 rounded-2xl mt-4"
            >
              <h4 className="font-display font-semibold text-white text-[14px] mb-4">Language Proficiency</h4>
              <div className="space-y-2.5">
                {[
                  { lang: '🇧🇩 Bangla', level: 'Native', color: '#22c55e' },
                  { lang: '🇬🇧 English', level: 'Professional', color: '#06b6d4' },
                  { lang: '🇮🇳 Hindi', level: 'Conversational', color: '#8b5cf6' },
                ].map((l) => (
                  <div key={l.lang} className="flex items-center justify-between">
                    <span className="text-[13px] text-slate-300">{l.lang}</span>
                    <span
                      className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                      style={{ background: `${l.color}15`, color: l.color, border: `1px solid ${l.color}30` }}
                    >
                      {l.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
