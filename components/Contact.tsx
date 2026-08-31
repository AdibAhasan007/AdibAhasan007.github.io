'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiUser, FiMail, FiMessageSquare, FiSend, FiMapPin } from 'react-icons/fi';
import { FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF, FaGithub } from 'react-icons/fa';

const SOCIAL_LINKS = [
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
      // ⚠️ Replace 'xvgalrjq' with your real Formspree form ID from formspree.io
      // Free signup → New Form → pranto7@gmail.com → copy the endpoint ID
      const res = await fetch('https://formspree.io/f/xvgalrjq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-8">
      {/* Ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block" />
            Let's Talk
          </div>
          <h2 className="section-title-premium">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base max-w-lg">
            Have a project, opportunity, or just want to chat? Drop me a message — I reply within 24 hours.
          </p>
        </motion.div>

        <div className="mt-10 grid md:grid-cols-5 gap-8">
          {/* ── Left: Form (3/5) ── */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3 glass-premium p-7 rounded-2xl space-y-4"
          >
            {/* Name */}
            <div className="relative">
              <FiUser size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
                className="form-input-premium pl-10"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FiMail size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="form-input-premium pl-10"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <FiMessageSquare size={14} className="absolute left-4 top-4 text-slate-500 pointer-events-none" />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell me about your project or inquiry..."
                required
                className="form-input-premium pl-10 resize-none"
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={status === 'loading'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-primary-premium flex items-center justify-center gap-2.5 py-3.5 text-[15px] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </span>
              ) : (
                <>
                  <FiSend size={15} />
                  Send Message
                </>
              )}
            </motion.button>

            {/* Status messages */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-[13px] text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-xl py-3 px-4"
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-[13px] text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl py-3 px-4"
              >
                ✗ Oops! Something went wrong. Please try emailing me directly.
              </motion.div>
            )}
          </motion.form>

          {/* ── Right: Info (2/5) ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-5"
          >
            {/* Info card */}
            <div className="glass-premium p-6 rounded-2xl">
              <h3 className="font-display font-bold text-white text-[16px] mb-4">Contact Info</h3>
              <ul className="space-y-4">
                {[
                  { icon: <FiMapPin size={14} />, label: 'Location', value: 'Dhaka, Bangladesh' },
                  { icon: <FiMail size={14} />, label: 'Email', value: 'pranto7@gmail.com', href: 'mailto:pranto7@gmail.com' },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex-shrink-0 mt-0.5">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wide">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-[13.5px] text-slate-300 hover:text-indigo-400 underline-animate transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[13.5px] text-slate-300">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social card */}
            <div className="glass-premium p-6 rounded-2xl">
              <h3 className="font-display font-bold text-white text-[16px] mb-4">Follow Me</h3>
              <div className="flex flex-wrap gap-2">
                {SOCIAL_LINKS.map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="social-link flex items-center gap-2 px-3 h-9 rounded-lg text-[12px] font-medium w-full"
                  >
                    <span className="text-indigo-400">{icon}</span>
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className="glass-premium p-5 rounded-2xl border border-emerald-500/10">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[12px] font-semibold text-emerald-400 uppercase tracking-wider">Available Now</span>
              </div>
              <p className="text-[12.5px] text-slate-400 leading-relaxed">
                Open to internship extensions, freelance projects, and full-time roles in Python/ML development.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
