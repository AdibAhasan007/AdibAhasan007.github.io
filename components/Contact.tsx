"use client";

import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPaperPlane, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="section-wrapper py-28">
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center"
      >
        Contact
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Left: Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 rounded-2xl relative overflow-hidden"
        >
          <h3 className="text-xl font-semibold mb-6">Send a message</h3>

          <form className="space-y-5">
            {/* Name */}
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                placeholder="Your Name"
                className="input-style pl-24"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-slate-400" />
              <input
                type="email"
                placeholder="you@example.com"
                className="input-style pl-10"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                rows={4}
                placeholder="How can I help?"
                className="input-style resize-none"
              />
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold 
                text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                hover:opacity-90 shadow-[0_0_20px_rgba(139,92,246,0.6)] transition-all"
            >
              <FaPaperPlane /> Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Right: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 rounded-2xl space-y-5"
        >
          <h3 className="text-xl font-semibold mb-6">Find me</h3>
          <ul className="space-y-4 text-[15px]">
            <li className="flex items-center gap-3 hover:text-indigo-400 transition">
              <FaMapMarkerAlt /> Dhaka, Bangladesh
            </li>
            <li className="flex items-center gap-3 hover:text-indigo-400 transition">
              <FaEnvelope /> <a href="mailto:pranto7@gmail.com">pranto7@gmail.com</a>
            </li>
            <li className="flex items-center gap-3 hover:text-indigo-400 transition">
              <FaLinkedin /> LinkedIn
            </li>
            <li className="flex items-center gap-3 hover:text-indigo-400 transition">
              <FaTwitter /> Twitter
            </li>
            <li className="flex items-center gap-3 hover:text-indigo-400 transition">
              <FaInstagram /> Instagram
            </li>
            <li className="flex items-center gap-3 hover:text-indigo-400 transition">
              <FaFacebook /> Facebook
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
