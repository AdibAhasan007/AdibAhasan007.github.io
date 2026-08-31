'use client';

import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiCpu, FiFileText } from 'react-icons/fi';
import confetti from 'canvas-confetti';
import GlitchText from './GlitchText';
import TiltCard3D from './TiltCard3D';

const CV_URL =
  'https://drive.usercontent.google.com/u/0/uc?id=12z3WmCOgPKaOxWq9Ys7awmLxt5rnLPm4&export=download';

export default function ResumeCTA() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#00f0ff', '#bd00ff', '#00ff66'],
    });
  };

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="relative z-10 max-w-[1680px] mx-auto px-4 sm:px-8 xl:px-12">
        <TiltCard3D maxTilt={6} glare={true}>
          <div className="cyber-card p-8 sm:p-16 rounded-3xl hud-corner relative overflow-hidden text-center bg-gradient-to-b from-[#06122c] to-[#02040a] border-cyan-500/30">
            {/* Animated Background Laser Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[100px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[100px]"
            />

            {/* Top Badge */}
            <div className="cyber-tag mb-5 mx-auto">
              <FiFileText size={14} className="text-cyan-400" />
              <span>OFFICIAL CURRICULUM VITAE // 2026</span>
            </div>

            {/* Title */}
            <h2 className="cyber-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-4xl mx-auto">
              LOOKING TO HIRE A <GlitchText text="HIGH-CALIBER" as="span" className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-green-400" /> ENGINEER?
            </h2>

            <p className="mt-5 font-sans text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Download my comprehensive verified resume covering production AI systems, backend microservices, real-time APIs, and core research artifacts.
            </p>

            {/* Action Buttons */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={triggerConfetti}
                className="btn-cyber-primary text-xs sm:text-sm py-4 px-9 flex items-center gap-2.5 shadow-[0_0_30px_rgba(0,240,255,0.5)]"
              >
                <FiDownload size={16} className="animate-bounce" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>

              <a
                href="#contact"
                className="btn-cyber-ghost text-xs sm:text-sm py-4 px-8 flex items-center gap-2"
              >
                <FiMail size={16} />
                <span>DISCUSS OPPORTUNITIES</span>
              </a>
            </div>

            <div className="mt-7 font-mono text-xs text-cyan-400/80">
              [ VERIFIED FOR SOFTWARE ENGINEER // AI ENGINEER // BACKEND ROLES ]
            </div>
          </div>
        </TiltCard3D>
      </div>
    </section>
  );
}
