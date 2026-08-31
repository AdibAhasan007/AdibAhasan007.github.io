'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiTerminal, FiZap } from 'react-icons/fi';

const links = [
  { name: '// 01.HOME',        href: '#home',       id: 'home' },
  { name: '// 02.ABOUT',       href: '#about',      id: 'about' },
  { name: '// 03.SKILLS',      href: '#skills',     id: 'skills' },
  { name: '// 04.EXP',         href: '#experience', id: 'experience' },
  { name: '// 05.EDU',         href: '#education',  id: 'education' },
  { name: '// 06.TRAINING',    href: '#training',   id: 'training' },
  { name: '// 07.PROJECTS',    href: '#projects',   id: 'projects' },
  { name: '// 08.ARTICLES',    href: '#articles',   id: 'articles' },
  { name: '// 09.CONTACT',     href: '#contact',    id: 'contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 25);

      // Detect active section
      for (const link of [...links].reverse()) {
        const el = document.getElementById(link.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActive(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 xl:px-12 py-3 transition-all duration-300">
      <div
        className={`max-w-[1680px] mx-auto rounded-2xl transition-all duration-300 hud-corner ${
          scrolled
            ? 'bg-[#030816]/90 border border-cyan-500/30 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(0,240,255,0.15)]'
            : 'bg-[#030816]/60 border border-cyan-500/15 backdrop-blur-md'
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-8 py-3">
          {/* Logo / HUD Identifier */}
          <a
            href="#home"
            className="flex items-center gap-3 group"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 p-[1px] shadow-[0_0_15px_rgba(0,240,255,0.5)]">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#02040a]">
                <FiTerminal className="text-cyan-400 group-hover:scale-110 transition-transform duration-200" size={18} />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-orbitron text-xs sm:text-sm md:text-base font-black tracking-wider text-white group-hover:text-cyan-400 transition-colors">
                  ADIB.AHASAN
                </span>
                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#00ff66]" />
              </div>
              <span className="hidden sm:block font-mono text-[10px] text-cyan-400/80 tracking-widest uppercase">
                AI_SYS // v2.6.0
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-[#02040a]/70 border border-cyan-500/20 rounded-xl px-3 py-1.5">
            {links.map((link) => {
              const isActive = active === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-xs font-mono font-medium tracking-wider transition-all duration-200 rounded-lg ${
                    isActive
                      ? 'text-cyan-300 font-bold'
                      : 'text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/5'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="hud-nav-active"
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/40 shadow-[0_0_12px_rgba(0,240,255,0.3)]"
                      transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-orbitron font-bold tracking-wider text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-green-400 border border-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.5)] hover:shadow-[0_0_30px_rgba(0,255,102,0.7)] hover:scale-105 transition-all duration-200"
            >
              <FiZap size={14} className="animate-bounce" />
              <span>INITIALIZE</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle Navigation Menu"
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
            >
              {open ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden mt-2 rounded-2xl bg-[#030816]/95 border border-cyan-500/40 p-5 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(0,240,255,0.2)] hud-corner"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-cyan-500/20">
              <span className="font-mono text-xs text-cyan-400">TELEMETRY // INDEX</span>
              <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ONLINE
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {links.map((link) => {
                const isActive = active === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`px-3 py-2.5 rounded-xl font-mono text-xs tracking-wider transition-all ${
                      isActive
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 font-bold'
                        : 'text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400 border border-transparent'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t border-cyan-500/20">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="w-full btn-cyber-primary flex items-center justify-center gap-2 py-3 text-xs"
              >
                <FiZap size={14} />
                INITIALIZE CONTACT
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
