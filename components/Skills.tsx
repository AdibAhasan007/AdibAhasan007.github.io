'use client'

import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import { FiBox } from 'react-icons/fi'
import {
  SiPython, SiC, SiCplusplus, SiNumpy, SiPandas,
  SiScikitlearn, SiTensorflow, SiPytorch, SiMysql, SiJupyter,
  SiGit, SiGithub, SiDocker, SiLinux, SiAmazonaws, SiGooglecloud,
  SiVercel, SiPlotly
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

type Skill = { name: string; icon?: IconType }

const categories: { title: string; skills: Skill[] }[] = [
  {
    title: '💻 Programming Languages',
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'Java', icon: FaJava },         // ← use FaJava for reliability
      { name: 'C', icon: SiC },
      { name: 'C++', icon: SiCplusplus },
    ],
  },
  {
    title: '📊 Data Science & ML',
    skills: [
      { name: 'NumPy', icon: SiNumpy },
      { name: 'Pandas', icon: SiPandas },
      { name: 'Scikit-learn', icon: SiScikitlearn },
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'PyTorch', icon: SiPytorch },
      { name: 'Matplotlib/Plotly', icon: SiPlotly },
    ],
  },
  {
    title: '🛠️ Tools & Platforms',
    skills: [
      { name: 'SQL (MySQL)', icon: SiMysql },
      { name: 'Jupyter', icon: SiJupyter },
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Docker', icon: SiDocker },
      { name: 'Linux', icon: SiLinux },
      { name: 'AWS', icon: SiAmazonaws },
      { name: 'Google Cloud', icon: SiGooglecloud },
      { name: 'Vercel', icon: SiVercel },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 section-surface">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills
        </motion.h2>

        <div className="space-y-10">
          {categories.map((cat, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-lg mb-4">{cat.title}</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cat.skills.map((skill) => {
                  // Fallback to FiBox if the icon is undefined to avoid runtime crash
                  const Icon: IconType = (skill.icon as IconType) ?? FiBox
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center p-4 rounded-xl card hover:shadow-lg transition"
                    >
                      <Icon className="text-3xl text-blue-600 dark:text-blue-400 mb-2" />
                      <span className="text-sm">{skill.name}</span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
