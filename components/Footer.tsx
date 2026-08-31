'use client';

import { FiGithub, FiMail, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { motion } from 'framer-motion';

const LINKS = [
  { name: 'GitHub',   href: 'https://github.com/AdibAhasan007',          icon: <FiGithub size={15} /> },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/adib-ahasan-chowdhury-41178213b/', icon: <FiLinkedin size={15} /> },
  { name: 'Twitter',  href: 'https://x.com/AdibAhasan',                  icon: <FiTwitter size={15} /> },
  { name: 'Email',    href: 'mailto:pranto7@gmail.com',                   icon: <FiMail size={15} /> },
];

const NAV = [
  { name: 'About',      href: '#about' },
  { name: 'Skills',     href: '#skills' },
  { name: 'Projects',   href: '#projects' },
  { name: 'Articles',   href: '#articles' },
  { name: 'Contact',    href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/[0.06]">
      {/* Top glow */}
      <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)' }} />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white text-sm font-bold">
                AA
              </span>
              <span className="font-display font-bold text-white">Adib Ahasan Chowdhury</span>
            </div>
            <p className="text-[13px] text-slate-500 leading-relaxed max-w-[220px]">
              Python Developer · Entrepreneur · CSE Graduate from ULAB, Dhaka.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[12px] font-semibold text-slate-400 uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-2">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-[13px] text-slate-500 hover:text-indigo-400 underline-animate transition-colors">
                    {n.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-[12px] font-semibold text-slate-400 uppercase tracking-widest mb-4">Connect</h4>
            <div className="flex flex-col gap-2">
              {LINKS.map(({ name, href, icon }) => (
                <a
                  key={name}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[13px] text-slate-500 hover:text-indigo-400 transition-colors group"
                >
                  <span className="text-slate-600 group-hover:text-indigo-400 transition-colors">{icon}</span>
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-slate-600">
            © {new Date().getFullYear()}{' '}
            <span className="text-slate-400 font-medium">Adib Ahasan Chowdhury</span>
            {' '}— All rights reserved.
          </p>
          <p className="text-[11px] text-slate-700">
            Built with <span className="text-indigo-500">Next.js</span> · <span className="text-cyan-600">TypeScript</span> · <span className="text-violet-600">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
