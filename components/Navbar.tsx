'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const links = [
  { name: 'Home',       href: '#home' },
  { name: 'About',      href: '#about' },
  { name: 'Skills',     href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education',  href: '#education' },
  { name: 'Training',   href: '#training' },
  { name: 'Projects',   href: '#projects' },
  { name: 'Articles',   href: '#articles' },
  { name: 'Contact',    href: '#contact' },
];


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      for (const link of [...links].reverse()) {
        const id = link.href.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 120) {
            setActive(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#020817]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-pad mx-auto max-w-6xl flex items-center justify-between py-4">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={() => handleNavClick('#home')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative group flex items-center gap-2"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white text-sm font-bold shadow-lg shadow-indigo-500/30">
            AA
          </span>
          <span className="font-display font-bold text-white text-[15px] tracking-tight">
            Adib Ahasan
          </span>
        </motion.a>

        {/* Desktop Links */}
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-1"
        >
          {links.map((l) => {
            const id = l.href.replace('#', '');
            const isActive = active === id;
            return (
              <li key={l.href}>
                <button
                  onClick={() => handleNavClick(l.href)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-[13.5px] font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-indigo-500/15 border border-indigo-500/20"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative">{l.name}</span>
                </button>
              </li>
            );
          })}
        </motion.ul>

        {/* Right: CTA + Mobile Menu */}
        <div className="flex items-center gap-3">
          <motion.a
            href="#contact"
            onClick={() => handleNavClick('#contact')}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 rounded-xl text-[13px] font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-900/30"
          >
            Hire Me
          </motion.a>

          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-colors"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu size={18} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 h-full w-[280px] bg-[#0a1628] border-l border-white/[0.06] z-50 p-6 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white text-sm font-bold">
                  AA
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <FiX size={16} />
                </button>
              </div>

              {/* Links */}
              <ul className="space-y-1 flex-1">
                {links.map((l, i) => {
                  const id = l.href.replace('#', '');
                  const isActive = active === id;
                  return (
                    <motion.li
                      key={l.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <button
                        className={`w-full text-left px-4 py-2.5 rounded-xl text-[14px] font-medium transition-all ${
                          isActive
                            ? 'bg-indigo-500/15 text-white border border-indigo-500/20'
                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                        }`}
                        onClick={() => handleNavClick(l.href)}
                      >
                        {l.name}
                      </button>
                    </motion.li>
                  );
                })}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                onClick={() => handleNavClick('#contact')}
                className="w-full flex items-center justify-center py-3 rounded-xl bg-indigo-600 text-white font-semibold text-[14px] hover:bg-indigo-500 transition-colors"
              >
                Hire Me
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
