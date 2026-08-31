'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { FiCpu, FiTerminal, FiDatabase, FiAward, FiCode, FiLayers } from 'react-icons/fi';
import GlitchText from './GlitchText';
import TiltCard3D from './TiltCard3D';

function CyberCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const dur = 1800;
    const step = 16;
    const steps = dur / step;
    const inc = target / steps;
    let cur = 0;
    const id = setInterval(() => {
      cur += inc;
      if (cur >= target) {
        setCount(target);
        clearInterval(id);
      } else {
        setCount(Math.floor(cur));
      }
    }, step);
    return () => clearInterval(id);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-orbitron font-bold text-2xl sm:text-3xl text-cyan-400">
      {count}{suffix}
    </span>
  );
}

const DOSSIER_PILLARS = [
  {
    icon: <FiCpu className="text-cyan-400" size={22} />,
    title: 'AI & INTELLIGENT SYSTEMS',
    desc: 'Engineered deep learning pipelines, AI-powered software solutions, and neural integrations at IYLMA Innovation Limited.',
  },
  {
    icon: <FiCode className="text-purple-400" size={22} />,
    title: 'HIGH-PERFORMANCE BACKEND',
    desc: 'Architecting robust, scalable microservices and REST APIs using Python, Django REST Framework, and FastAPI with clean OOP patterns.',
  },
  {
    icon: <FiDatabase className="text-green-400" size={22} />,
    title: 'DATA & STORAGE OPTIMIZATION',
    desc: 'Designing and tuning relational schemas, high-throughput queries, and ACID-compliant transactional flows with PostgreSQL & MySQL.',
  },
  {
    icon: <FiLayers className="text-pink-400" size={22} />,
    title: 'TECH VENTURE LEADERSHIP',
    desc: 'Co-founding and directing Trinity Property Ventures Bangladesh — driving tech integration and product strategy.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="relative z-10 max-w-[1680px] mx-auto px-4 sm:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="cyber-tag mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping inline-block" />
            02 // SYSTEM DOSSIER
          </div>
          <h2 className="cyber-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            ABOUT <GlitchText text="THE ENGINEER" as="span" className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500" />
          </h2>
          <p className="mt-4 font-mono text-xs sm:text-sm text-slate-400">
            [ QUERYING /SYS/IDENT/ADIB_AHASAN_CHOWDHURY.JSON ... OK ]
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 items-stretch">
          {/* ── Left: Cyber Terminal Window (7 Cols) with 3D Tilt ── */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col"
          >
            <TiltCard3D maxTilt={8} className="h-full">
              <div className="terminal-window h-full flex flex-col hud-corner">
                {/* Terminal Header */}
                <div className="terminal-header">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                    <span className="ml-2 font-mono text-xs text-slate-400">bash — adib@ai-cluster: ~</span>
                  </div>
                  <span className="font-mono text-[10px] text-cyan-400">UTF-8 // ENCRYPTED</span>
                </div>

                {/* Terminal Body */}
                <div className="terminal-body flex-1 text-slate-300 space-y-4 p-5 sm:p-7">
                  <p className="text-cyan-400">
                    <span className="text-purple-400">root@adib-engine:~$</span> cat summary.json
                  </p>

                  <div className="bg-[#02040a]/80 border border-cyan-500/20 rounded-xl p-5 font-mono text-xs sm:text-sm leading-relaxed space-y-3">
                    <p>
                      <span className="text-cyan-300 font-semibold">&gt; PAST ROLE:</span> Former AI Engineer &amp; Software Developer at{' '}
                      <span className="text-white font-bold">IYLMA Innovation Limited</span> (Jan 2026 – Jul 2026).
                    </p>
                    <p>
                      <span className="text-purple-300 font-semibold">&gt; BACKGROUND:</span> Computer Science and Engineering graduate from{' '}
                      <span className="text-white font-bold">University of Liberal Arts Bangladesh (ULAB)</span>.
                    </p>
                    <p>
                      <span className="text-green-300 font-semibold">&gt; EXPERTISE:</span> Python, Django REST Framework, FastAPI, REST APIs, Git/GitHub, PostgreSQL, MySQL, unit testing (Pytest), clean architecture, and scalable software systems.
                    </p>
                    <p>
                      <span className="text-pink-300 font-semibold">&gt; ACTIVE VENTURE:</span> Co-founder &amp; CEO at{' '}
                      <span className="text-white font-bold">Trinity Property Ventures Bangladesh</span>.
                    </p>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans pt-1">
                    Passionate about engineering elegant, production-ready software solutions. Whether deploying AI models into reliable backend APIs or building next-generation digital products, I focus on clean code, testability, and high-impact problem solving.
                  </p>

                  {/* Telemetry Tags */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs">
                      📍 DHAKA, BANGLADESH
                    </span>
                    <span className="px-3 py-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      AVAILABLE FOR NEW ROLES
                    </span>
                    <span className="px-3 py-1.5 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs">
                      ⚙️ BACKEND &amp; AI SPECIALIST
                    </span>
                  </div>
                </div>
              </div>
            </TiltCard3D>
          </motion.div>

          {/* ── Right: Cyber Metrics & Pillars (5 Cols) with 3D Tilt ── */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between gap-4"
          >
            {/* 4 Pillars */}
            <div className="space-y-3.5">
              {DOSSIER_PILLARS.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <TiltCard3D maxTilt={8}>
                    <div className="cyber-card p-4 sm:p-5 rounded-xl flex items-start gap-4 group hover:border-cyan-400/60">
                      <div className="p-3 rounded-xl bg-[#02040a] border border-cyan-500/25 group-hover:border-cyan-400/60 transition-colors flex-shrink-0">
                        {pillar.icon}
                      </div>
                      <div>
                        <h3 className="font-orbitron text-xs sm:text-sm font-bold text-white tracking-wider group-hover:text-cyan-300 transition-colors">
                          {pillar.title}
                        </h3>
                        <p className="text-xs text-slate-400 font-sans mt-1 leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </TiltCard3D>
                </motion.div>
              ))}
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2">
              <div className="cyber-card p-3.5 text-center rounded-xl">
                <CyberCounter target={3} suffix="+" />
                <p className="font-mono text-[11px] text-slate-400 mt-1 uppercase">Years Dev</p>
              </div>
              <div className="cyber-card p-3.5 text-center rounded-xl">
                <CyberCounter target={10} suffix="+" />
                <p className="font-mono text-[11px] text-slate-400 mt-1 uppercase">Projects</p>
              </div>
              <div className="cyber-card p-3.5 text-center rounded-xl">
                <CyberCounter target={5} suffix="+" />
                <p className="font-mono text-[11px] text-slate-400 mt-1 uppercase">Articles</p>
              </div>
              <div className="cyber-card p-3.5 text-center rounded-xl">
                <CyberCounter target={2} suffix="" />
                <p className="font-mono text-[11px] text-slate-400 mt-1 uppercase">Companies</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
