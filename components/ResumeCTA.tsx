'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { useRef, MouseEvent } from 'react';

const CV_URL =
  'https://drive.usercontent.google.com/u/0/uc?id=12z3WmCOgPKaOxWq9Ys7awmLxt5rnLPm4&export=download';

const SPARKLES = [
  { x: '10%', y: '20%', size: 6, delay: 0 },
  { x: '88%', y: '15%', size: 8, delay: 0.3 },
  { x: '75%', y: '70%', size: 5, delay: 0.6 },
  { x: '25%', y: '75%', size: 7, delay: 0.9 },
  { x: '55%', y: '12%', size: 5, delay: 1.2 },
  { x: '92%', y: '50%', size: 6, delay: 0.45 },
  { x: '8%',  y: '55%', size: 4, delay: 0.75 },
];

export default function ResumeCTA() {
  const cardRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const glowX = useTransform(mx, (v) => `${v * 100}%`);
  const glowY = useTransform(my, (v) => `${v * 100}%`);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const onMouseLeave = () => { mx.set(0.5); my.set(0.5); };

  return (
    <section className="relative py-8">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div
            ref={cardRef}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0a1628]"
            style={{ boxShadow: '0 20px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)' }}
          >
            {/* Aurora background */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(60% 80% at 20% 20%, rgba(99,102,241,0.18), transparent),' +
                  'radial-gradient(50% 70% at 80% 30%, rgba(139,92,246,0.15), transparent),' +
                  'radial-gradient(60% 70% at 50% 110%, rgba(6,182,212,0.12), transparent)',
                filter: 'blur(30px)',
              }}
            />

            {/* Mouse-follow spotlight */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -inset-px"
              style={{
                background: useTransform(
                  [glowX, glowY],
                  ([x, y]) =>
                    `radial-gradient(400px 300px at ${x} ${y}, rgba(99,102,241,0.12), transparent 60%)`,
                ),
              }}
            />

            {/* Grid lines */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }}
            />

            {/* Sparkles */}
            {SPARKLES.map((s, i) => (
              <motion.span
                key={i}
                aria-hidden
                className="pointer-events-none absolute rounded-full"
                style={{
                  top: s.y, left: s.x,
                  width: s.size, height: s.size,
                  background: 'radial-gradient(circle, rgba(255,255,255,0.8), transparent 70%)',
                  boxShadow: '0 0 12px rgba(255,255,255,0.3)',
                }}
                animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 3 + i * 0.3, delay: s.delay, ease: 'easeInOut' }}
              />
            ))}

            {/* Content */}
            <div className="relative z-10 text-center px-8 py-16 sm:px-16 sm:py-20">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="section-tag mx-auto w-fit mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse inline-block" />
                Resume Available
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="section-title-premium text-center"
              >
                Want a quick{' '}
                <span className="gradient-text">overview?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 text-base text-slate-400 max-w-xl mx-auto"
              >
                Grab my latest resume — projects, skills, and experience all in one clean PDF.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35, type: 'spring', stiffness: 280, damping: 20 }}
                className="mt-8 flex flex-wrap items-center justify-center gap-4"
              >
                <motion.a
                  href={CV_URL}
                  target="_blank"
                  rel="noopener"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-primary-premium group flex items-center gap-2.5 px-7 py-3.5 text-base"
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <FaDownload size={14} />
                  </motion.span>
                  <span>Download CV (PDF)</span>
                </motion.a>

                <a
                  href="#contact"
                  className="btn-ghost-premium flex items-center gap-2 px-6 py-3.5 text-base"
                >
                  <span>Contact Instead</span>
                  <FiArrowRight size={15} />
                </a>
              </motion.div>
            </div>

            {/* Top/bottom edge fade */}
            <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/[0.03] to-transparent" />
            <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/[0.03] to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
