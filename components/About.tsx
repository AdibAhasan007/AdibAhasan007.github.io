'use client';

import { motion } from 'framer-motion';

const words = ['About', 'Me'];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const rise = {
  hidden: { opacity: 0, y: 18, filter: 'blur(3px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 340, damping: 24 },
  },
};

const line = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const cardIn = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: 'easeOut', delay: 0.05 },
  },
};

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* floating ambiance blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(40% 40% at 50% 50%, #5b7bff80, transparent 70%)' }}
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(40% 40% at 50% 50%, #00e0ff66, transparent 70%)' }}
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto max-w-5xl px-6 py-20">
        {/* Title */}
        <motion.h2
          className="relative z-[1] mb-3 flex flex-wrap gap-x-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {words.map((w) => (
            <motion.span key={w} variants={rise} className="inline-block">
              {w}
            </motion.span>
          ))}
        </motion.h2>

        {/* gradient underline + comet sweep */}
        <motion.div
          className="relative h-[3px] w-24 overflow-hidden rounded-full bg-gradient-to-r from-[#4b6cff] via-[#7aa2ff] to-[#4b6cff]/60"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <motion.span
            aria-hidden
            className="absolute inset-0 -skew-x-12"
            style={{
              background:
                'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.55) 45%, rgba(255,255,255,0) 100%)',
            }}
            initial={{ x: '-120%' }}
            whileInView={{ x: ['-120%', '140%'] }}
            viewport={{ once: true }}
            transition={{ duration: 1.7, ease: 'easeInOut', delay: 0.2 }}
          />
        </motion.div>

        {/* Animated border card */}
        <motion.div
          variants={cardIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative mt-8 rounded-3xl p-[1.25px]"
        >
          {/* moving conic-border */}
          <motion.div
            aria-hidden
            className="absolute inset-0 rounded-3xl"
            style={{
              background:
                'conic-gradient(from 0deg, #5b7bff, #00e0ff, #7aa2ff, #5b7bff)',
              filter: 'blur(10px)',
              opacity: 0.35,
            }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          />
          {/* inner glass */}
          <div className="relative rounded-3xl bg-white/[0.05] p-6 sm:p-8 backdrop-blur-md ring-1 ring-white/10">
            {/* highlight sweep behind first paragraph */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute left-0 right-0 top-6 h-9 rounded-xl bg-gradient-to-r from-white/[0.06] via-white/[0.12] to-white/[0.06]"
              initial={{ x: '-120%', opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.25 }}
              style={{ maskImage: 'linear-gradient(90deg, transparent, #000, transparent)' }}
            />

            {/* Content – staggered lines */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              className="relative text-lg leading-8 text-white/85"
            >
              <motion.p variants={line}>
                I’m <span className="font-semibold text-white">Adib Ahasan Chowdhury</span>, a CSE
                graduate from ULAB and currently a Python Developer Intern at HRSoft BD. I’m also
                the Co-founder & CEO of Trinity Property Ventures Bangladesh, where I combine
                technology and business to create innovative real estate solutions.
              </motion.p>

              <motion.p variants={line} className="mt-5">
                I enjoy building practical tools, writing clean and maintainable code, and sharing
                insights that help others learn and grow faster. My work reflects a balance between
                tech problem-solving and entrepreneurial vision, with a focus on delivering real
                value.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
