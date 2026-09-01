'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiGithub, FiExternalLink, FiLayers, FiCpu, FiTrendingUp, FiCheckCircle } from 'react-icons/fi';
import GlitchText from './GlitchText';
import TiltCard3D from './TiltCard3D';

type Project = {
  id: string;
  title: string;
  category: string;
  filter: 'all' | 'enterprise' | 'ai' | 'automation';
  desc: string;
  tags: string[];
  image: string;
  github?: string;
  link?: string;
  metrics: string;
  accent: string;
  company?: string;
};

const PROJECTS: Project[] = [
  {
    id: 'votingsoft',
    title: 'VotingSoft — Trusted Online Voting & Election Platform',
    category: 'ENTERPRISE SAAS // ELECTIONS',
    filter: 'enterprise',
    company: 'Built @ IYLMA Innovation Limited',
    desc: 'Full-scale secure election and voting management platform. Engineered automated ballot paper preparation, live real-time vote counting & result monitoring, voter registration with booth verification, candidate slip tracking, and cryptographic ballot verification.',
    tags: ['Python', 'Django REST', 'Real-time Analytics', 'Security', 'Voting Engine'],
    image: '/projects/votingsoft.jpg',
    link: 'https://www.votingsoft.com/',
    metrics: '🗳️ 100% SECURE LIVE ELECTION SYSTEM',
    accent: '#00f0ff',
  },
  {
    id: 'empo-tracker',
    title: 'EMPO Tracker — Employee Progress & Workforce Analytics',
    category: 'ENTERPRISE ERP // MONITORING',
    filter: 'enterprise',
    company: 'Built @ IYLMA Innovation Limited',
    desc: 'High-performance employee progress & productivity tracking ecosystem. Features real-time GPS location tracking, task & activity monitoring, live screen surveillance, work hour logging, app/website usage analytics, and automated 92%+ productivity scoring.',
    tags: ['Workforce ERP', 'Real-time Tracking', 'Live Monitoring', 'Performance Analytics'],
    image: '/projects/empo-tracker.jpg',
    link: 'https://iylma.com/',
    metrics: '⚡ 92%+ TEAM PRODUCTIVITY GAIN',
    accent: '#00ff66',
  },
  {
    id: 'omr-software',
    title: 'Smart OMR Evaluation & Optical Scanning Software',
    category: 'AI EVALUATION // EDTECH',
    filter: 'automation',
    company: 'Built @ IYLMA Innovation Limited',
    desc: 'High-speed automated OMR sheet evaluation engine with 100% accuracy. Features student & branch batch management, dynamic OMR sheet generation, answer key mapping, instantaneous merit list generation, and subject-wise performance analytics.',
    tags: ['Computer Vision', 'OMR Evaluation', 'Automated Grading', 'Analytics'],
    image: '/projects/omr-software.jpg',
    link: 'https://iylma.com/',
    metrics: '🎯 100% ACCURACY FAST PROCESSING',
    accent: '#bd00ff',
  },
  {
    id: 'rmg-erp',
    title: 'RMG Apparel ERP & Production Management Software',
    category: 'INDUSTRY ERP // SUPPLY CHAIN',
    filter: 'enterprise',
    company: 'Built @ IYLMA Innovation Limited',
    desc: 'Comprehensive RMG manufacturing ERP suite. Integrates vendor & supplier management, sample & cost sheet calculation, real-time order & production line tracking, shipment & delivery dispatching, and automated multi-tier invoice payment processing.',
    tags: ['RMG ERP', 'Supply Chain', 'Production Tracking', 'Invoice Engine'],
    image: '/projects/rmg-erp.jpg',
    link: 'https://iylma.com/',
    metrics: '🏭 END-TO-END PRODUCTION PIPELINE',
    accent: '#ffd700',
  },
  {
    id: 'coaching-mgmt',
    title: 'Coaching & Academic Institution Management Software',
    category: 'MANAGEMENT SAAS // EDTECH',
    filter: 'automation',
    company: 'Built @ IYLMA Innovation Limited',
    desc: 'All-in-one institutional management platform. Streamlines student admission & batch allocation, biometric attendance tracking, automated fee invoicing & SMS alerts, exam scheduling, and student performance trend charts.',
    tags: ['Institution SaaS', 'Billing & Invoicing', 'Attendance', 'Exam Management'],
    image: '/projects/coaching-mgmt.jpg',
    link: 'https://iylma.com/',
    metrics: '📚 TRUSTED BY COACHING CENTERS',
    accent: '#0080ff',
  },
  {
    id: 'ecommerce-engine',
    title: 'E-Commerce Architecture & High-Speed Checkout Engine',
    category: 'E-COMMERCE // SCALABLE BACKEND',
    filter: 'enterprise',
    company: 'Built @ IYLMA Innovation Limited',
    desc: 'Modular e-commerce store infrastructure with high-concurrency order processing, real-time inventory management, multi-gateway secure checkout, cart state sync, and robust backend microservices.',
    tags: ['Fast Checkout', 'Inventory Sync', 'Payment Gateways', 'API Architecture'],
    image: '/projects/ecommerce-engine.jpg',
    link: 'https://iylma.com/',
    metrics: '🛒 HIGH-CONCURRENCY CHECKOUT',
    accent: '#ff007f',
  },
  {
    id: 'fed-dqn',
    title: 'Federated Rainbow DQN — Traffic Optimization',
    category: 'REINFORCEMENT LEARNING // AI',
    filter: 'ai',
    desc: 'Federated RL framework combining Rainbow DQN with federated averaging for city-scale traffic routing. Delivered a 73.31% travel-time reduction on synthetic benchmarks and 38.39% on real OpenStreetMap graphs with a custom Python GUI.',
    tags: ['Reinforcement Learning', 'Rainbow DQN', 'Federated Learning', 'Python', 'GUI'],
    image: '/projects/fed-dqn.jpg',
    github: 'https://github.com/AdibAhasan007',
    metrics: '⚡ 73.31% EFFICIENCY GAIN',
    accent: '#00f0ff',
  },
  {
    id: 'smart-parking',
    title: 'Smart Parking & Intelligent Allocation System',
    category: 'IOT & SMART SYSTEMS // AUTOMATION',
    filter: 'automation',
    desc: 'Automated IoT parking space management system. Implements real-time sensor-based slot occupancy tracking, dynamic reservation routing, automated vehicle entry/exit registration, and revenue management dashboard.',
    tags: ['Smart Parking', 'IoT Sensors', 'Real-time Allocation', 'Automation'],
    image: '/projects/smart-parking.jpg',
    github: 'https://github.com/AdibAhasan007',
    metrics: '🚗 REAL-TIME SLOT ALLOCATION',
    accent: '#00ff66',
  },
  {
    id: 'heart-disease',
    title: 'Heart Disease Clinical Prediction System',
    category: 'MACHINE LEARNING // HEALTHCARE',
    filter: 'ai',
    desc: 'End-to-end predictive clinical risk classification built with Python and TensorFlow. Features medical data preprocessing, multi-model cross-benchmarking, and hyperparameter tuning for superior predictive recall.',
    tags: ['Python', 'TensorFlow', 'Scikit-Learn', 'Classification', 'Healthcare'],
    image: '/projects/heart-disease.jpg',
    github: 'https://github.com/AdibAhasan007/Heart-Disease-Prediction-System',
    metrics: '❤️ HIGH-ACCURACY CLINICAL MODEL',
    accent: '#ff007f',
  },
  {
    id: 'dhaka-climate',
    title: "Dhaka's 64-Year Climate Journey (1949–2013)",
    category: 'DATA SCIENCE // TIME-SERIES',
    filter: 'ai',
    desc: 'Comprehensive multi-decade longitudinal climate study analyzing 64 years of meteorological records to discover core correlations between urbanization, seasonal temperature anomalies, and humidity patterns in Dhaka.',
    tags: ['Time Series', 'Data Science', 'Pandas', 'Matplotlib', 'Climate Analytics'],
    image: '/projects/dhaka-climate.jpg',
    github: 'https://github.com/AdibAhasan007/Dhaka-s-Climate-Journey',
    metrics: '🌍 64-YEAR HISTORICAL DATASET',
    accent: '#00ff66',
  },
];

const FILTERS = [
  { id: 'all', label: 'ALL PRODUCTION ARTIFACTS' },
  { id: 'enterprise', label: 'ENTERPRISE ERP & SAAS' },
  { id: 'ai', label: 'AI & REINFORCEMENT LEARNING' },
  { id: 'automation', label: 'AUTOMATION & SMART SYSTEMS' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'enterprise' | 'ai' | 'automation'>('all');

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.filter === activeFilter);

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <div className="relative z-10 max-w-[1680px] mx-auto px-4 sm:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <div className="cyber-tag mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping inline-block" />
            07 // PRODUCTION ARTIFACTS &amp; SYSTEMS
          </div>
          <h2 className="cyber-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            FEATURED <GlitchText text="PROJECTS &amp; SAAS" as="span" className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-500" />
          </h2>
          <p className="mt-4 font-mono text-xs sm:text-sm text-slate-400">
            [ DEPLOYED VOTING PLATFORMS, WORKFORCE ERP, OMR SYSTEMS, AI REINFORCEMENT LEARNING &amp; CLOUD ARCHITECTURES ]
          </p>
        </motion.div>

        {/* Filter Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id as 'all' | 'enterprise' | 'ai' | 'automation')}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-mono text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
                activeFilter === f.id
                  ? 'text-cyan-300 bg-[#061533] border border-cyan-400/60 shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                  : 'text-slate-400 bg-[#030816]/80 border border-cyan-500/15 hover:text-cyan-400 hover:border-cyan-500/40'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* 3D Cyber Project Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((proj, idx) => (
              <motion.article
                key={proj.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <TiltCard3D maxTilt={12} glare={true} className="h-full">
                  <div className="cyber-card flex flex-col justify-between rounded-2xl hud-corner overflow-hidden group hover:border-cyan-400/70 h-full">
                    <div>
                      {/* Thumbnail Frame with Scanline */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#02040a] holo-scan">
                        <Image
                          src={proj.image}
                          alt={proj.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-108 opacity-85 group-hover:opacity-100"
                          sizes="(max-width: 768px) 100vw, 550px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#030816] via-transparent to-transparent" />

                        {/* Top Category Badge */}
                        <div className="absolute top-3 left-3 flex flex-col gap-1">
                          <span
                            className="px-2.5 py-1 rounded-md font-mono text-[10px] font-bold uppercase tracking-wider backdrop-blur-md"
                            style={{
                              background: 'rgba(2, 4, 10, 0.85)',
                              color: proj.accent,
                              border: `1px solid ${proj.accent}60`,
                              boxShadow: `0 0 10px ${proj.accent}30`,
                            }}
                          >
                            {proj.category}
                          </span>
                          {proj.company && (
                            <span className="px-2 py-0.5 rounded-md font-mono text-[9px] text-cyan-300 bg-[#02040a]/90 border border-cyan-500/30">
                              {proj.company}
                            </span>
                          )}
                        </div>

                        {/* Hover Quick Action Buttons */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 bg-[#02040a]/75 backdrop-blur-xs">
                          {proj.link && (
                            <a
                              href={proj.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-cyber-primary py-2 px-4 text-xs flex items-center gap-1.5"
                            >
                              <FiExternalLink size={14} />
                              <span>LIVE PLATFORM</span>
                            </a>
                          )}
                          {proj.github && (
                            <a
                              href={proj.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-cyber-ghost py-2 px-4 text-xs flex items-center gap-1.5"
                            >
                              <FiGithub size={14} />
                              <span>SOURCE</span>
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Body Content */}
                      <div className="p-6">
                        {/* Metrics Banner */}
                        <div className="mb-2.5 font-mono text-xs font-bold tracking-wider" style={{ color: proj.accent }}>
                          {proj.metrics}
                        </div>

                        <h3 className="font-orbitron text-base sm:text-lg font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors">
                          {proj.title}
                        </h3>

                        <p className="mt-3 font-sans text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-4">
                          {proj.desc}
                        </p>

                        {/* Tags */}
                        <div className="mt-5 flex flex-wrap gap-1.5">
                          {proj.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-0.5 rounded-md bg-[#02040a] border border-cyan-500/20 text-slate-300 font-mono text-[11px]"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer Link */}
                    <div className="px-6 py-4 border-t border-cyan-500/15 flex items-center justify-between font-mono text-xs">
                      {proj.link ? (
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 font-bold"
                        >
                          <FiExternalLink size={13} />
                          <span>ACCESS SYSTEM</span>
                        </a>
                      ) : proj.github ? (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 font-bold"
                        >
                          <FiGithub size={13} />
                          <span>VIEW REPOSITORY</span>
                        </a>
                      ) : (
                        <span className="text-slate-500">PRODUCTION READY</span>
                      )}
                      <span className="text-slate-500 text-[10px]">SYS_BUILD // v2.6</span>
                    </div>
                  </div>
                </TiltCard3D>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Global Hub CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-4 text-center"
        >
          <a
            href="https://www.votingsoft.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber-primary inline-flex items-center gap-2 text-xs sm:text-sm py-3.5 px-7"
          >
            <FiExternalLink size={16} />
            <span>EXPLORE VOTINGSOFT LIVE // VOTING ENGINE</span>
          </a>

          <a
            href="https://github.com/AdibAhasan007"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber-ghost inline-flex items-center gap-2 text-xs sm:text-sm py-3.5 px-7"
          >
            <FiGithub size={16} />
            <span>ACCESS COMPLETE GITHUB REPOSITORIES</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
