'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import { useRef, MouseEvent } from 'react';

const CV_URL =
  'https://drive.usercontent.google.com/u/0/uc?id=12z3WmCOgPKaOxWq9Ys7awmLxt5rnLPm4&export=download';

const sparkles = [
  { x: '15%', y: '25%', size: 8, delay: 0.1 },
  { x: '85%', y: '30%', size: 6, delay: 0.25 },
  { x: '70%', y: '65%', size: 7, delay: 0.4 },
  { x: '35%', y: '70%', size: 5, delay: 0.55 },
  { x: '55%', y: '20%', size: 6, delay: 0.7 },
];

export default function ResumeCTA() {
  const cardRef = useRef<HTMLDivElement>(null);

  // Fancy mouse glow
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const glowX = useTransform(mx, (v) => `calc(${v}px - 150px)`);
  const glowY = useTransform(my, (v) => `calc(${v}px - 150px)`);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  return (
    <section className="mx-auto max-w-6xl px-6 sm:px-8">
      {/* Container entrance */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative"
      >
        {/* Aurora / Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-3xl"
          style={{
            background:
              'radial-gradient(40% 60% at 20% 20%, rgba(59,130,246,.18), transparent), radial-gradient(40% 60% at 80% 30%, rgba(139,92,246,.18), transparent), radial-gradient(60% 60% at 50% 100%, rgba(34,197,94,.12), transparent)',
            filter: 'blur(24px)',
          }}
        />

        {/* Card */}
        <motion.div
          ref={cardRef}
          onMouseMove={onMouseMove}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d1320] px-6 py-14 shadow-[0_10px_40px_rgba(0,0,0,.35)] sm:px-12"
        >
          {/* Mouse-follow glow */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute h-[300px] w-[300px] rounded-full"
            style={{
              top: glowY as any,
              left: glowX as any,
              background:
                'radial-gradient(150px 150px at center, rgba(56,189,248,.18), rgba(0,0,0,0))',
              filter: 'blur(10px)',
            }}
          />

          {/* Sparkles */}
          {sparkles.map((s, i) => (
            <motion.span
              key={i}
              aria-hidden
              className="pointer-events-none absolute rounded-full bg-white/40 dark:bg-white/30"
              style={{
                top: s.y,
                left: s.x,
                width: s.size,
                height: s.size,
                boxShadow: '0 0 20px rgba(255,255,255,.25)',
              }}
              initial={{ y: 0, opacity: 0.6 }}
              animate={{ y: [0, -6, 0], opacity: [0.6, 1, 0.6] }}
              transition={{
                repeat: Infinity,
                duration: 3.2 + i * 0.2,
                delay: s.delay,
                ease: 'easeInOut',
              }}
            />
          ))}

          {/* Copy */}
          <div className="relative z-10 text-center">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            >
              <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent [text-shadow:0_0_20px_rgba(255,255,255,.08)]">
                Want a quick overview?
              </span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.55 }}
              className="mx-auto mt-3 max-w-2xl text-base text-slate-300/80"
            >
              Grab my latest resume — projects, skills, and experience in one page.
            </motion.p>

            {/* Button */}
            <motion.a
              href={CV_URL}
              target="_blank"
              rel="noopener"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.42, type: 'spring', stiffness: 260, damping: 20 }}
              className="group relative mx-auto mt-7 inline-flex items-center gap-3 rounded-2xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-lg shadow-indigo-900/30 outline-0 transition focus:ring-2 focus:ring-indigo-400/50 sm:px-6"
            >
              {/* Ripple / pulse */}
              <span
                aria-hidden
                className="absolute inset-0 rounded-2xl bg-indigo-500 opacity-0 blur transition duration-500 group-hover:opacity-30"
              />
              <motion.span
                className="relative -ml-0.5"
                whileHover={{ x: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              >
                <FaDownload />
              </motion.span>
              <span className="relative">Download CV (PDF)</span>
            </motion.a>
          </div>

          {/* subtle top/bottom edge gradients */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/5 to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/5 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
