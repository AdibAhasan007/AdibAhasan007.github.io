'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

type Project = {
  title: string;
  desc: string;
  tags: string[];
  image: string;
  github?: string;
  link?: string;
  icon: string;
  accent: string;
};

const projects: Project[] = [
  {
    title: 'Federated Rainbow DQN — Traffic Routing',
    desc:
      'Federated RL framework combining Rainbow DQN with federated averaging for city-scale traffic routing. Achieved 73.31% travel-time reduction on benchmarks and 38.39% on OSM maps. Includes GUI for one-click training, baselines, and performance visualization.',
    tags: ['Reinforcement Learning', 'Federated Learning', 'Rainbow DQN', 'Python', 'GUI'],
    image:
      'https://cdn.prod.website-files.com/5bcf95411e70df20404f914c/65b010fb2a6baf407cfa1404_Real-Time%20Traffic%20Data-blog-th.webp',
    github: 'https://github.com/AdibAhasan007',
    icon: '🛣️',
    accent: '#6366f1',
  },
  {
    title: 'Heart Disease Prediction System',
    desc:
      'End-to-end risk classification in Python/TensorFlow. Robust preprocessing, multi-model comparison, and hyperparameter tuning delivered significant accuracy gains over baseline statistical models.',
    tags: ['Python', 'TensorFlow', 'Classification', 'ML Pipeline', 'Healthcare'],
    image: 'https://www.slideegg.com/image/catalog/300808-heart-disease-prediction.png',
    github: 'https://github.com/AdibAhasan007/Heart-Disease-Prediction-System',
    icon: '❤️',
    accent: '#ef4444',
  },
  {
    title: "Dhaka's Climate Study (1949–2013)",
    desc:
      'Long-horizon climate analysis across 64 years. Time-series trends, seasonal variability, heatmaps — highlighting correlations between urbanization and rising temperatures in Bangladesh.',
    tags: ['Time Series', 'Data Visualization', 'Climate Science', 'Python'],
    image: 'https://energybangla.com/wp-content/uploads/2019/10/Climate-change-in-Bangladesh-and-effects.jpg',
    github: 'https://github.com/AdibAhasan007/Dhaka-s-Climate-Journey',
    icon: '🌍',
    accent: '#22c55e',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block" />
            What I've Built
          </div>
          <h2 className="section-title-premium">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
              className="project-card group flex flex-col"
              style={{ '--accent' : p.accent } as React.CSSProperties}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                {/* Dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/90 via-[#020817]/30 to-transparent" />
                {/* Icon overlay */}
                <div
                  className="absolute top-3 right-3 flex items-center justify-center w-9 h-9 rounded-xl backdrop-blur-sm border border-white/10 text-lg"
                  style={{ background: `${p.accent}22` }}
                >
                  {p.icon}
                </div>
                {/* Hover overlay with links */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
                  style={{ background: `${p.accent}15` }}>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#020817]/80 backdrop-blur-sm border border-white/10 text-white text-xs font-semibold hover:border-white/25 transition-colors">
                      <FiGithub size={13} /> GitHub
                    </a>
                  )}
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#020817]/80 backdrop-blur-sm border border-white/10 text-white text-xs font-semibold hover:border-white/25 transition-colors">
                      <FiExternalLink size={13} /> Live
                    </a>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-5">
                <h3 className="font-display font-bold text-white text-[15px] leading-snug">{p.title}</h3>
                <p className="mt-2 text-[13px] text-slate-500 leading-relaxed flex-1 line-clamp-3">{p.desc}</p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="text-[10.5px] px-2.5 py-1 rounded-full font-medium"
                      style={{
                        background: `${p.accent}12`,
                        color: p.accent,
                        border: `1px solid ${p.accent}30`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                  {p.tags.length > 4 && (
                    <span className="text-[10.5px] px-2.5 py-1 rounded-full bg-white/5 text-slate-500 border border-white/8">
                      +{p.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Footer links */}
                <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center gap-4">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[12px] text-slate-400 hover:text-white transition-colors underline-animate">
                      <FiGithub size={13} /> View Code
                    </a>
                  )}
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[12px] text-slate-400 hover:text-white transition-colors underline-animate">
                      <FiExternalLink size={13} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/AdibAhasan007"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-premium inline-flex items-center gap-2"
          >
            <FiGithub size={16} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
