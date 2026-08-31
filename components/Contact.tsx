'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiUser, FiMail, FiMessageSquare, FiSend, FiMapPin, FiPhone, FiCheck, FiRadio } from 'react-icons/fi';
import { FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF, FaGithub } from 'react-icons/fa';
import toast from 'react-hot-toast';
import GlitchText from './GlitchText';
import TiltCard3D from './TiltCard3D';

const SOCIAL_TRANSMISSIONS = [
  { icon: <FaGithub size={16} />, href: 'https://github.com/AdibAhasan007', label: 'GitHub' },
  { icon: <FaLinkedinIn size={15} />, href: 'https://www.linkedin.com/in/adib-ahasan-chowdhury-41178213b/', label: 'LinkedIn' },
  { icon: <FaTwitter size={15} />, href: 'https://x.com/AdibAhasan', label: 'Twitter/X' },
  { icon: <FaInstagram size={15} />, href: 'https://www.instagram.com/pranto.adib', label: 'Instagram' },
  { icon: <FaFacebookF size={15} />, href: 'https://www.facebook.com/Pranto.Adib', label: 'Facebook' },
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('https://formspree.io/f/xvgalrjq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        toast.success('TRANSMISSION SUCCESSFUL // I will respond within 24 hours!', {
          style: {
            background: '#030816',
            color: '#00ff66',
            border: '1px solid #00ff66',
            fontFamily: 'monospace',
          },
        });
      } else {
        setStatus('error');
        toast.error('TRANSMISSION FAILED // Direct email: pranto7@gmail.com');
      }
    } catch {
      setStatus('error');
      toast.error('NETWORK ERROR // Direct email: pranto7@gmail.com');
    }
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <div className="relative z-10 max-w-[1680px] mx-auto px-4 sm:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="cyber-tag mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping inline-block" />
            09 // OPEN TRANSMISSION CHANNELS
          </div>
          <h2 className="cyber-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            INITIALIZE <GlitchText text="CONTACT" as="span" className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-green-400" />
          </h2>
          <p className="mt-4 font-mono text-xs sm:text-sm text-slate-400">
            [ READY FOR BACKEND ARCHITECTURE, AI ENGINEERING &amp; HIGH-IMPACT COLLABORATIONS ]
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 items-start">
          {/* ── Left: Cyber Form Window (7 Cols) with 3D Tilt ── */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <TiltCard3D maxTilt={6}>
              <form
                onSubmit={handleSubmit}
                className="cyber-card p-6 sm:p-9 rounded-2xl hud-corner"
              >
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-cyan-500/20">
                  <span className="font-mono text-xs sm:text-sm text-cyan-300 flex items-center gap-2">
                    <FiRadio className="text-cyan-400 animate-pulse" />
                    SECURE COMMS TERMINAL
                  </span>
                  <span className="font-mono text-xs text-emerald-400">CHANNEL: 256-BIT SSL</span>
                </div>

                <div className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block font-mono text-xs text-slate-300 mb-1.5 uppercase">
                      &gt; SENDER_NAME:
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-400/60" size={16} />
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your full name or company"
                        required
                        className="w-full bg-[#02040a] border border-cyan-500/25 rounded-xl pl-10 pr-4 py-3.5 text-xs sm:text-sm text-white placeholder-slate-500 font-mono focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block font-mono text-xs text-slate-300 mb-1.5 uppercase">
                      &gt; RETURN_EMAIL:
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-400/60" size={16} />
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@domain.com"
                        required
                        className="w-full bg-[#02040a] border border-cyan-500/25 rounded-xl pl-10 pr-4 py-3.5 text-xs sm:text-sm text-white placeholder-slate-500 font-mono focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all"
                      />
                    </div>
                  </div>

                  {/* Message Payload */}
                  <div>
                    <label className="block font-mono text-xs text-slate-300 mb-1.5 uppercase">
                      &gt; MESSAGE_PAYLOAD:
                    </label>
                    <div className="relative">
                      <FiMessageSquare className="absolute left-3.5 top-4 text-cyan-400/60" size={16} />
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Describe your engineering requirements, project vision, or collaborative opportunity..."
                        required
                        className="w-full bg-[#02040a] border border-cyan-500/25 rounded-xl pl-10 pr-4 py-3.5 text-xs sm:text-sm text-white placeholder-slate-500 font-mono focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Action */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full btn-cyber-primary py-4 text-xs sm:text-sm flex items-center justify-center gap-2 mt-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        TRANSMITTING DATA...
                      </span>
                    ) : (
                      <>
                        <FiSend size={16} />
                        <span>SEND TRANSMISSION // 24H RESPONSE</span>
                      </>
                    )}
                  </button>

                  {status === 'success' && (
                    <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 font-mono text-xs flex items-center gap-2">
                      <FiCheck size={16} className="text-emerald-400" />
                      <span>TRANSMISSION CONFIRMED! I will reply shortly.</span>
                    </div>
                  )}
                </div>
              </form>
            </TiltCard3D>
          </motion.div>

          {/* ── Right: Direct Coordinates & Socials (5 Cols) with 3D Tilt ── */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Direct Coordinates Card */}
            <TiltCard3D maxTilt={6}>
              <div className="cyber-card p-6 sm:p-8 rounded-2xl hud-corner">
                <h3 className="font-orbitron text-sm sm:text-base font-bold text-white tracking-wider pb-3 mb-5 border-b border-cyan-500/20">
                  DIRECT COORDINATES
                </h3>

                <div className="space-y-5">
                  {/* Location */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-3 rounded-xl bg-[#02040a] border border-cyan-500/20 text-cyan-400 flex-shrink-0">
                      <FiMapPin size={18} />
                    </div>
                    <div>
                      <span className="font-mono text-[11px] text-slate-400 uppercase">COORDINATES // ADDRESS</span>
                      <p className="font-sans text-xs sm:text-sm text-slate-200 mt-0.5">
                        House No. 265, Road No. 1, Adabor, Dhaka-1207, Bangladesh
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-3 rounded-xl bg-[#02040a] border border-cyan-500/20 text-cyan-400 flex-shrink-0">
                      <FiMail size={18} />
                    </div>
                    <div>
                      <span className="font-mono text-[11px] text-slate-400 uppercase">OFFICIAL EMAIL</span>
                      <p className="font-mono text-xs sm:text-sm text-cyan-400 mt-0.5">
                        <a href="mailto:pranto7@gmail.com" className="hover:underline">
                          pranto7@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-3 rounded-xl bg-[#02040a] border border-cyan-500/20 text-cyan-400 flex-shrink-0">
                      <FiPhone size={18} />
                    </div>
                    <div>
                      <span className="font-mono text-[11px] text-slate-400 uppercase">TELEPHONE // WHATSAPP</span>
                      <p className="font-mono text-xs sm:text-sm text-slate-200 mt-0.5">
                        <a href="tel:+8801750336644" className="hover:underline hover:text-cyan-300">
                          +880 1750-336644
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard3D>

            {/* Social Grid Card */}
            <TiltCard3D maxTilt={6}>
              <div className="cyber-card p-6 sm:p-8 rounded-2xl hud-corner">
                <h3 className="font-orbitron text-sm sm:text-base font-bold text-white tracking-wider pb-3 mb-5 border-b border-cyan-500/20">
                  ACTIVE BROADCASTS
                </h3>

                <div className="grid grid-cols-2 gap-2.5">
                  {SOCIAL_TRANSMISSIONS.map((soc) => (
                    <a
                      key={soc.label}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-[#02040a] border border-cyan-500/20 text-slate-300 font-mono text-xs hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.35)] transition-all"
                    >
                      <span className="text-cyan-400">{soc.icon}</span>
                      <span className="font-semibold">{soc.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </TiltCard3D>

            {/* Live Operational Status */}
            <div className="cyber-card p-4 sm:p-5 rounded-2xl border border-emerald-500/30 flex items-center gap-3.5">
              <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 animate-ping" />
              <div>
                <div className="font-orbitron text-xs sm:text-sm font-bold text-emerald-400">
                  SYSTEM READY // ACCEPTING NEW ROLES
                </div>
                <div className="font-mono text-[11px] text-slate-400 mt-0.5">
                  Available for full-time engineering, consulting &amp; AI development
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
