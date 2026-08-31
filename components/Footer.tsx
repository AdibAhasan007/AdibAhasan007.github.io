'use client';

import { FiGithub, FiMail, FiLinkedin, FiTwitter, FiArrowUp, FiTerminal } from 'react-icons/fi';

const LINKS = [
  { name: 'GitHub',   href: 'https://github.com/AdibAhasan007',          icon: <FiGithub size={14} /> },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/adib-ahasan-chowdhury-41178213b/', icon: <FiLinkedin size={14} /> },
  { name: 'Twitter',  href: 'https://x.com/AdibAhasan',                  icon: <FiTwitter size={14} /> },
  { name: 'Email',    href: 'mailto:pranto7@gmail.com',                   icon: <FiMail size={14} /> },
];

const NAV_LINKS = [
  { name: '01 // Home',       href: '#home' },
  { name: '02 // About',      href: '#about' },
  { name: '03 // Skills',     href: '#skills' },
  { name: '04 // Experience', href: '#experience' },
  { name: '05 // Education',  href: '#education' },
  { name: '06 // Training',   href: '#training' },
  { name: '07 // Projects',   href: '#projects' },
  { name: '08 // Articles',   href: '#articles' },
  { name: '09 // Contact',    href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-24 border-t border-cyan-500/20 bg-[#02040a]/90 backdrop-blur-md overflow-hidden">
      {/* Top Laser Accent */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#00f0ff]"
      />

      <div className="max-w-[1680px] mx-auto px-4 sm:px-8 xl:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 p-[1px] shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                <div className="flex h-full w-full items-center justify-center rounded-[9px] bg-[#02040a]">
                  <FiTerminal className="text-cyan-400" size={18} />
                </div>
              </div>
              <span className="font-orbitron text-lg font-bold text-white tracking-wider">
                ADIB AHASAN CHOWDHURY
              </span>
            </div>

            <p className="font-sans text-xs sm:text-sm text-slate-400 max-w-lg leading-relaxed">
              Software Engineer &amp; AI Specialist. Former AI Engineer &amp; Software Developer at <span className="text-cyan-400 font-semibold">IYLMA Innovation Limited</span>, 
              CSE Graduate from ULAB, Co-founder &amp; CEO of Trinity Property Ventures Bangladesh.
            </p>

            <div className="font-mono text-xs text-cyan-400/80">
              SYS_BUILD // v2.6.0 · DHAKA, BANGLADESH · 2026
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-orbitron text-xs sm:text-sm font-bold text-cyan-300 tracking-widest uppercase mb-4">
              COORDINATES
            </h4>
            <ul className="space-y-2 font-mono text-xs text-slate-400">
              {NAV_LINKS.slice(0, 5).map((nav) => (
                <li key={nav.name}>
                  <a href={nav.href} className="hover:text-cyan-300 transition-colors">
                    {nav.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Transmissions */}
          <div>
            <h4 className="font-orbitron text-xs sm:text-sm font-bold text-purple-300 tracking-widest uppercase mb-4">
              TRANSMISSIONS
            </h4>
            <div className="space-y-2.5">
              {LINKS.map(({ name, href, icon }) => (
                <a
                  key={name}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 font-mono text-xs text-slate-400 hover:text-cyan-300 transition-colors"
                >
                  <span className="text-cyan-400">{icon}</span>
                  <span>{name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="pt-8 border-t border-cyan-500/15 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} ADIB AHASAN CHOWDHURY. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-cyan-400/70">STACK: NEXT.JS 14 · THREE.JS · TYPESCRIPT · TAILWIND</span>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors bg-[#030816] border border-cyan-500/30 rounded-lg px-3 py-1.5 text-xs font-bold"
            >
              <span>TOP</span>
              <FiArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
