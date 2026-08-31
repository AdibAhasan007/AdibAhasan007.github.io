'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiGithub, FiMail, FiArrowRight, FiCpu, FiActivity, FiShield, FiCode, FiLayers } from 'react-icons/fi';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import ThreeHeroScene from './ThreeHeroScene';
import GlitchText from './GlitchText';
import TiltCard3D from './TiltCard3D';

/* ── Fast Cyber Role Rotator ───────────────── */
const ROLES = [
  'AI ENGINEER & SOFTWARE DEVELOPER',
  'PYTHON BACKEND ARCHITECT',
  'DJANGO & FASTAPI SPECIALIST',
  'TECH ENTREPRENEUR // CEO',
  'MACHINE LEARNING RESEARCHER',
];

function CyberTypedRole() {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = ROLES[idx];
    let timeout: NodeJS.Timeout;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 45);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 20);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx]);

  return (
    <div className="font-mono text-sm sm:text-base md:text-lg text-cyan-300 font-semibold tracking-wider flex items-center gap-2">
      <span className="text-cyan-500 font-bold">&gt;</span>
      <span>{displayed}</span>
      <span className="w-2.5 h-5 bg-cyan-400 animate-cursor-blink inline-block shadow-[0_0_8px_#00f0ff]" />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[96vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* 3D Three.js Interactive Particle Canvas */}
      <ThreeHeroScene />

      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 xl:px-12">
        {/* Top HUD Telemetry Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-wrap items-center justify-between gap-3 bg-[#030816]/80 border border-cyan-500/30 rounded-xl px-5 py-2.5 backdrop-blur-md w-full shadow-[0_0_20px_rgba(0,240,255,0.1)]"
        >
          <div className="flex items-center gap-2.5 font-mono text-xs text-cyan-300">
            <FiCpu className="text-cyan-400 animate-spin" />
            <span>NEURAL CORE // ACTIVE (THREE.JS 3D ENGINE)</span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
            <FiActivity className="animate-pulse" />
            <span>STATUS: OPEN FOR NEW OPPORTUNITIES &amp; VENTURES</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-purple-400">
            <FiShield />
            <span>HQ: DHAKA, BANGLADESH</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 items-center">
          {/* ── Left Content (7 Cols) ── */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="cyber-tag mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping shadow-[0_0_10px_#00f0ff]" />
              NEXT-GEN AI &amp; HIGH-SCALE BACKEND ARCHITECTURE
            </motion.div>

            {/* Name with Cyber Glitch Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="cyber-title text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-white leading-tight">
                ADIB AHASAN
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-500">
                  <GlitchText text="CHOWDHURY" as="span" />
                </span>
              </h1>
            </motion.div>

            {/* Typed Role */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-4"
            >
              <CyberTypedRole />
            </motion.div>

            {/* Mission Statement (Corrected Job Dates) */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-5 text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl"
            >
              Software Engineer &amp; AI Specialist. Formerly{' '}
              <span className="text-cyan-300 font-semibold underline decoration-cyan-500/40">AI Engineer &amp; Software Developer</span> at{' '}
              <span className="text-white font-semibold">IYLMA Innovation Limited</span>, CSE Graduate from ULAB, previously Software Engineering Intern (Python) at{' '}
              <span className="text-indigo-300 font-semibold">HRSoft BD</span>, and Co-founder &amp; CEO of{' '}
              <span className="text-purple-300 font-semibold">Trinity Property Ventures Bangladesh</span>.
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="btn-cyber-primary group flex items-center gap-2 text-sm py-3.5 px-6"
              >
                <span>EXPLORE 3D PROJECTS</span>
                <FiArrowRight className="transition-transform group-hover:translate-x-1.5 duration-200" />
              </a>

              <a
                href="#contact"
                className="btn-cyber-ghost flex items-center gap-2 text-sm py-3.5 px-6"
              >
                <FiMail size={16} />
                <span>INITIALIZE COMMS</span>
              </a>
            </motion.div>

            {/* Social Grid & Quick Tech Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs text-cyan-400/80 uppercase tracking-widest">TRANSMISSION:</span>
                <div className="h-px w-6 bg-cyan-500/30" />
                {[
                  { icon: <FiGithub size={16} />, href: 'https://github.com/AdibAhasan007', label: 'GitHub' },
                  { icon: <FaLinkedinIn size={15} />, href: 'https://www.linkedin.com/in/adib-ahasan-chowdhury-41178213b/', label: 'LinkedIn' },
                  { icon: <FaTwitter size={15} />, href: 'https://x.com/AdibAhasan', label: 'Twitter' },
                  { icon: <FiMail size={15} />, href: 'mailto:pranto7@gmail.com', label: 'Email' },
                ].map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#050e24] border border-cyan-500/30 text-slate-300 hover:text-cyan-300 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-200"
                  >
                    {icon}
                  </a>
                ))}
              </div>

              <div className="hidden xl:flex items-center gap-2 pl-4 border-l border-cyan-500/20 font-mono text-xs text-slate-400">
                <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">#Python</span>
                <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">#DjangoREST</span>
                <span className="px-2 py-0.5 rounded bg-green-500/10 text-green-300 border border-green-500/20">#FastAPI</span>
                <span className="px-2 py-0.5 rounded bg-pink-500/10 text-pink-300 border border-pink-500/20">#PyTorch</span>
              </div>
            </motion.div>
          </div>

          {/* ── Right Holographic 3D Avatar Card (5 Cols) ── */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-full max-w-lg"
            >
              <TiltCard3D maxTilt={15} glare={true}>
                <div className="cyber-card p-3.5 rounded-2xl hud-corner relative overflow-hidden holo-scan">
                  {/* Image Container with Cyber Frame */}
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#02040a]">
                    <Image
                      src="/adib.jpg"
                      alt="Adib Ahasan Chowdhury"
                      fill
                      priority
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 550px"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-transparent opacity-85" />

                    {/* HUD Targeting Overlay Lines */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#02040a]/85 border border-cyan-500/40 rounded-md px-2.5 py-1 font-mono text-[11px] text-cyan-300 backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      SYS_ID // ADIB-007
                    </div>

                    <div className="absolute top-3 right-3 bg-[#02040a]/85 border border-purple-500/40 rounded-md px-2.5 py-1 font-mono text-[11px] text-purple-300 backdrop-blur-md">
                      AI_ENG // LEVEL_MAX
                    </div>

                    {/* Bottom Info Banner */}
                    <div className="absolute bottom-3 inset-x-3 bg-[#030816]/95 border border-cyan-500/40 rounded-xl p-3.5 backdrop-blur-md">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-orbitron font-bold text-white text-base">Adib Ahasan Chowdhury</p>
                          <p className="font-mono text-xs text-cyan-400 mt-0.5">Software Developer · AI Engineer · CEO</p>
                        </div>
                        <div className="text-right">
                          <span className="font-mono text-[11px] text-emerald-400 block">● ACTIVE DEV</span>
                          <span className="font-mono text-[10px] text-slate-400">ULAB // 2025</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Metrics Bar below card */}
                  <div className="mt-3.5 grid grid-cols-3 gap-2.5">
                    <div className="bg-[#02040a]/90 border border-cyan-500/25 rounded-xl p-2.5 text-center">
                      <div className="font-orbitron font-bold text-cyan-400 text-base">3+</div>
                      <div className="font-mono text-[10px] text-slate-400 mt-0.5 uppercase">Yrs Dev</div>
                    </div>
                    <div className="bg-[#02040a]/90 border border-purple-500/25 rounded-xl p-2.5 text-center">
                      <div className="font-orbitron font-bold text-purple-400 text-base">10+</div>
                      <div className="font-mono text-[10px] text-slate-400 mt-0.5 uppercase">Projects</div>
                    </div>
                    <div className="bg-[#02040a]/90 border border-green-500/25 rounded-xl p-2.5 text-center">
                      <div className="font-orbitron font-bold text-green-400 text-base">CEO</div>
                      <div className="font-mono text-[10px] text-slate-400 mt-0.5 uppercase">Trinity</div>
                    </div>
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
