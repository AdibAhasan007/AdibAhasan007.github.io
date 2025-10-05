'use client';

import { motion } from 'framer-motion';
import { FaPython, FaJava, FaDocker, FaLinux, FaAws, FaGithub } from 'react-icons/fa';
import { SiC, SiCplusplus, SiNumpy, SiPandas, SiScikitlearn, SiTensorflow, SiPytorch, SiMysql, SiJupyter, SiVercel, SiGooglecloud } from 'react-icons/si';

type SkillCategory = {
  title: string;
  skills: { name: string; icon: JSX.Element }[];
};

const categories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', icon: <FaPython size={24} /> },
      { name: 'Java', icon: <FaJava size={24} /> },
      { name: 'C', icon: <SiC size={24} /> },
      { name: 'C++', icon: <SiCplusplus size={24} /> },
    ],
  },
  {
    title: 'Data Science & ML',
    skills: [
      { name: 'NumPy', icon: <SiNumpy size={24} /> },
      { name: 'Pandas', icon: <SiPandas size={24} /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn size={24} /> },
      { name: 'TensorFlow', icon: <SiTensorflow size={24} /> },
      { name: 'PyTorch', icon: <SiPytorch size={24} /> },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'SQL (MySQL)', icon: <SiMysql size={24} /> },
      { name: 'Jupyter', icon: <SiJupyter size={24} /> },
      { name: 'Git', icon: <FaGithub size={24} /> },
      { name: 'Docker', icon: <FaDocker size={24} /> },
      { name: 'Linux', icon: <FaLinux size={24} /> },
      { name: 'AWS', icon: <FaAws size={24} /> },
      { name: 'Google Cloud', icon: <SiGooglecloud size={24} /> },
      { name: 'Vercel', icon: <SiVercel size={24} /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-wrapper">
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Skills
      </motion.h2>

      <div className="space-y-12">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">{cat.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {cat.skills.map((s, j) => (
                <motion.div
                  key={j}
                  whileHover={{ scale: 1.06, rotate: 1 }}
                  transition={{ type: 'spring', stiffness: 250, damping: 15 }}
                  className="shine relative p-4 rounded-xl bg-[rgb(20,25,34)]/85 flex flex-col items-center gap-2 ring-1 ring-white/5"
                >
                  <span className="text-indigo-400">{s.icon}</span>
                  <span className="text-sm text-slate-200">{s.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
