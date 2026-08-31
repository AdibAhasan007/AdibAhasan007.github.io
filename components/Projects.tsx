'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import GlitchText from './GlitchText';
import TiltCard3D from './TiltCard3D';

type Project = {
  id: string;
  title: string;
  category: string;
  desc: string;
  tags: string[];
  image: string;
  github?: string;
  link?: string;
  metrics: string;
  accent: string;
};

const PROJECTS: Project[] = [
  {
    id: 'fed-dqn',
    title: 'Federated Rainbow DQN — Traffic Optimization',
    category: 'REINFORCEMENT LEARNING // AI',
    desc: 'Federated RL framework combining Rainbow DQN with federated averaging for city-scale traffic routing. Delivered a 73.31% travel-time reduction on synthetic benchmarks and 38.39% on real OpenStreetMap graphs. Includes an intuitive GUI for one-click training and live telemetry.',
    tags: ['Reinforcement Learning', 'Rainbow DQN', 'Federated Learning', 'Python', 'GUI'],
    image: 'https://cdn.prod.website-files.com/5bcf95411e70df20404f914c/65b010fb2a6baf407cfa1404_Real-Time%20Traffic%20Data-blog-th.webp',
    github: 'https://github.com/AdibAhasan007',
    metrics: '⚡ 73.31% EFFICIENCY GAIN',
    accent: '#00f0ff',
  },
  {
    id: 'heart-disease',
    title: 'Heart Disease Clinical Prediction System',
    category: 'MACHINE LEARNING // HEALTHCARE',
    desc: 'End-to-end predictive clinical risk classification built with Python and TensorFlow. Features robust medical preprocessing, cross-model benchmarking, and hyperparameter tuning to achieve superior predictive recall over standard statistical baselines.',
    tags: ['Python', 'TensorFlow', 'Scikit-Learn', 'Classification', 'Healthcare'],
    image: 'https://www.slideegg.com/image/catalog/300808-heart-disease-prediction.png',
    github: 'https://github.com/AdibAhasan007/Heart-Disease-Prediction-System',
    metrics: '❤️ HIGH-ACCURACY CLINICAL MODEL',
    accent: '#ff007f',
  },
  {
    id: 'dhaka-climate',
    title: "Dhaka's 64-Year Climate Analysis (1949–2013)",
    category: 'DATA SCIENCE // TIME-SERIES',
    desc: 'Comprehensive multi-decade longitudinal climate study analyzing 64 years of meteorological records. Discovered core correlations between rapid urbanization, seasonal temperature anomalies, and humidity patterns in Dhaka, Bangladesh.',
    tags: ['Time Series', 'Data Science', 'Pandas', 'Matplotlib', 'Climate Analytics'],
    image: 'https://energybangla.com/wp-content/uploads/2019/10/Climate-change-in-Bangladesh-and-effects.jpg',
    github: 'https://github.com/AdibAhasan007/Dhaka-s-Climate-Journey',
    metrics: '🌍 64-YEAR HISTORICAL DATASET',
    accent: '#00ff66',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 overflow-hidden">
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
            07 // PRODUCTION ARTIFACTS
          </div>
          <h2 className="cyber-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            FEATURED <GlitchText text="PROJECTS" as="span" className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-500" />
          </h2>
          <p className="mt-4 font-mono text-xs sm:text-sm text-slate-400">
            [ DEPLOYED REINFORCEMENT LEARNING, AI CLASSIFIERS &amp; BIG DATA SYSTEMS ]
          </p>
        </motion.div>

        {/* 3D Cyber Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((proj, idx) => (
            <motion.article
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: idx * 0.15 }}
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

                      {/* Top Badge */}
                      <div className="absolute top-3 left-3">
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
                      </div>

                      {/* Hover Quick Action Buttons */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 bg-[#02040a]/70 backdrop-blur-xs">
                        {proj.github && (
                          <a
                            href={proj.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-cyber-primary py-2 px-4 text-xs flex items-center gap-1.5"
                          >
                            <FiGithub size={14} />
                            <span>SOURCE</span>
                          </a>
                        )}
                        {proj.link && (
                          <a
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-cyber-ghost py-2 px-4 text-xs flex items-center gap-1.5"
                          >
                            <FiExternalLink size={14} />
                            <span>DEMO</span>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-6">
                      {/* Metrics Banner */}
                      <div className="mb-3 font-mono text-xs font-bold tracking-wider" style={{ color: proj.accent }}>
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
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 font-bold"
                      >
                        <FiGithub size={13} />
                        <span>VIEW REPOSITORY</span>
                      </a>
                    )}
                    <span className="text-slate-500 text-[10px]">SYS_BUILD // v1.0</span>
                  </div>
                </div>
              </TiltCard3D>
            </motion.article>
          ))}
        </div>

        {/* Global GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <a
            href="https://github.com/AdibAhasan007"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber-ghost inline-flex items-center gap-2.5 text-xs sm:text-sm py-3.5 px-8"
          >
            <FiGithub size={16} />
            <span>ACCESS COMPLETE GITHUB MATRIX // @AdibAhasan007</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
