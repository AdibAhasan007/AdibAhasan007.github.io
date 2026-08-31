'use client';

import Image from 'next/image';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { FiGithub, FiMail, FiArrowRight } from 'react-icons/fi';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';

/* ── Typed role rotator ─────────────────────── */
const ROLES = [
  'AI Engineer & Software Developer',
  'Python Backend Developer',
  'Django & FastAPI Engineer',
  'Tech Entrepreneur',
  'Junior Software Engineer',
];

function TypedRole() {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = ROLES[idx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx]);

  return (
    <span className="inline-flex items-center gap-1">
      <span className="gradient-text font-bold">{displayed}</span>
      <span className="w-[2px] h-[1em] bg-indigo-400 animate-[cursor-blink_1s_step-end_infinite] inline-block align-middle" />
    </span>
  );
}

/* ── Stats ──────────────────────────────────── */
const STATS = [
  { value: '3+',   label: 'Years Coding' },
  { value: '10+',  label: 'Projects Built' },
  { value: '5+',   label: 'Articles Written' },
  { value: '2',    label: 'Companies Founded/Joined' },
];

/* ── Floating particles ─────────────────────── */
function Particles() {
  const pts = useMemo(() =>
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      dur: Math.random() * 12 + 8,
      delay: Math.random() * 6,
    })), []);

  return (
    <div className="particles-container">
      {pts.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            ['--dur' as string]: `${p.dur}s`,
            ['--delay' as string]: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ── Magnetic Button ───────────────────────── */
function MagneticBtn({ children, href, className }: { children: React.ReactNode; href: string; className?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.25);
    y.set((e.clientY - cy) * 0.25);
  };

  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x, y }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    >
      {children}
    </motion.a>
  );
}

/* ── Hero ──────────────────────────────────── */
export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Mesh gradient background */}
      <div className="mesh-bg" aria-hidden />
      <Particles />

      {/* Glow orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-10 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* ── Left: Content ── */}
          <div>
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-tag mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
              Available for opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[3.2rem] sm:text-[4.2rem] lg:text-[4.8rem] font-display font-extrabold tracking-tight leading-[1.05] text-white"
            >
              Hi, I'm{' '}
              <span className="block gradient-text">Adib Ahasan</span>
              <span className="block text-white/90">Chowdhury</span>
            </motion.h1>

            {/* Typed role */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-4 text-xl sm:text-2xl text-slate-400 font-medium"
            >
              <TypedRole />
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-5 text-base text-slate-400 leading-relaxed max-w-lg"
            >
              AI Engineer &amp; Software Developer at{' '}
              <span className="text-indigo-400 font-semibold">IYLMA Innovation Limited</span> ·
              Previously Software Engineering Intern at{' '}
              <span className="text-cyan-400 font-semibold">HRSoft BD</span> ·
              Co-founder &amp; CEO of{' '}
              <span className="text-violet-400 font-semibold">Trinity Property Ventures</span>.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <MagneticBtn
                href="#projects"
                className="btn-primary-premium group"
              >
                <span>View Projects</span>
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </MagneticBtn>

              <MagneticBtn
                href="#contact"
                className="btn-ghost-premium"
              >
                <FiMail size={15} />
                <span>Get In Touch</span>
              </MagneticBtn>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="mt-8 flex items-center gap-3"
            >
              <span className="text-xs text-slate-500 font-medium uppercase tracking-widest">Find me</span>
              <div className="h-px flex-1 max-w-[40px] bg-white/10" />
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
                  className="social-link"
                >
                  {icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Profile Card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-[440px]"
          >
            {/* Floating animation wrapper */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Glow ring behind card */}
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[32px]"
                style={{
                  background: 'conic-gradient(from 0deg, #6366f1, #06b6d4, #8b5cf6, #6366f1)',
                  filter: 'blur(30px)',
                  opacity: 0.25,
                }}
              />

              {/* Card */}
              <div className="relative rounded-[28px] p-2 bg-[#0a1628]/80 border border-white/[0.08] backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                <div className="relative overflow-hidden rounded-[22px]">
                  <Image
                    src="/adib.jpg"
                    alt="Adib Ahasan Chowdhury"
                    width={1200}
                    height={1200}
                    priority
                    className="h-[400px] sm:h-[440px] w-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/80 via-[#020817]/10 to-transparent" />

                  {/* Name tag at bottom */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="glass px-4 py-3 rounded-xl">
                      <p className="font-display font-bold text-white text-base">Adib Ahasan Chowdhury</p>
                      <p className="text-xs text-indigo-300 mt-0.5">Python Developer · Entrepreneur</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats below card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-5 grid grid-cols-2 gap-3"
            >
              {STATS.map((s) => (
                <div key={s.label} className="stat-card">
                  <div className="stat-number gradient-text">{s.value}</div>
                  <div className="text-[11px] text-slate-400 mt-1 font-medium leading-tight">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
