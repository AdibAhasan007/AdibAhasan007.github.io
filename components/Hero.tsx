'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useMemo } from 'react';

const container = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const letters = {
  hidden: { opacity: 0, y: 18, rotateX: -35 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { delay: i * 0.035, type: 'spring', stiffness: 320, damping: 22 },
  }),
};

const word = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.25 + i * 0.08, type: 'spring', stiffness: 250, damping: 24 },
  }),
};

const btn = {
  hidden: { opacity: 0, y: 8 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.8 + i * 0.08, type: 'spring', stiffness: 220, damping: 22 },
  }),
};

function SplitLetters({ text, className }: { text: string; className?: string }) {
  const chars = useMemo(() => Array.from(text), [text]);
  return (
    <span className={className}>
      {chars.map((ch, i) => {
        // ✅ keep spaces visible between words
        const display = ch === ' ' ? '\u00A0' : ch;
        return (
          <motion.span
            key={i}
            custom={i}
            variants={letters}
            initial="hidden"
            animate="show"
            className="inline-block will-change-transform"
          >
            {display}
          </motion.span>
        );
      })}
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="container mx-auto max-w-6xl px-6 pt-24 sm:pt-28 lg:pt-32">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        {/* Left: Headline */}
        <div>
          <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
            {/* Line 1 */}
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block text-white/90">Hi, I’m</span>

              {/* Name (animated letters) */}
              <SplitLetters
                text=" Adib Ahasan"
                className="text-[2.75rem] sm:text-[4rem] lg:text-[4.5rem] text-transparent bg-clip-text bg-gradient-to-r from-[#8db3ff] via-[#5b82ff] to-[#8db3ff]"
              />

              {/* Second line (word reveal) */}
              <div className="mt-2 flex flex-wrap gap-x-2">
                {['Chowdhury'].map((w, i) => (
                  <motion.span
                    key={w + i}
                    custom={i}
                    variants={word}
                    initial="hidden"
                    animate="show"
                    className="text-[2.75rem] sm:text-[4rem] lg:text-[4.5rem] font-extrabold text-[#7aa2ff]"
                  >
                    {w}
                  </motion.span>
                ))}
              </div>
            </h1>

            {/* Subtitle with shimmer sweep */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.55 }}
              className="relative inline-block rounded-2xl px-4 py-3 ring-1 ring-white/10 bg-white/[0.06] text-[1.05rem] leading-relaxed text-white/90 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
            >
              <span className="relative z-10">
                CSE graduate from ULAB • Python Developer Intern at HRSoft BD •
                Co-founder & CEO of Trinity Property Ventures Bangladesh.
              </span>
              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-0 -skew-x-12"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.18) 50%, rgba(255,255,255,0) 100%)',
                }}
                initial={{ x: '-120%' }}
                animate={{ x: ['-120%', '140%'] }}
                transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut', delay: 0.4 }}
              />
            </motion.div>

            {/* Buttons */}
            <div className="mt-6 flex gap-4">
              <motion.a
                custom={0}
                variants={btn}
                initial="hidden"
                animate="show"
                href="https://github.com/AdibAhasan007"
                target="_blank"
                rel="noopener"
                className="btn btn-primary px-6 py-3 rounded-xl bg-[#3b66ff] text-white font-semibold shadow-lg shadow-[#3b66ff]/20 hover:shadow-xl hover:-translate-y-[1px] transition transform"
              >
                GitHub
              </motion.a>

              <motion.a
                custom={1}
                variants={btn}
                initial="hidden"
                animate="show"
                href="#contact"
                className="px-6 py-3 rounded-xl border border-white/15 text-white/90 hover:text-white hover:border-white/25 transition font-semibold"
              >
                Contact
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Right: Profile card (floating) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.35 }}
          className="relative mx-auto w-full max-w-[540px]"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="rounded-3xl bg-white/[0.04] ring-1 ring-white/10 p-3 backdrop-blur-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,.5)]"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/adib.jpg"
                alt="Adib Ahasan Chowdhury"
                width={1200}
                height={1200}
                priority
                className="h-[380px] w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
