'use client'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Improved Traffic Routing with Federated Rainbow DQN',
    desc:
      'Federated RL framework combining Rainbow DQN with federated averaging for city-scale routing. Achieved 73.31% travel-time reduction on benchmarks and 38.39% on OSM maps. Includes GUI for one-click training, baselines, and performance visualization.',
    tags: ['Reinforcement Learning', 'Federated Learning', 'Rainbow DQN', 'GUI'],
    icon: '🛣️',
    image: 'https://cdn.prod.website-files.com/5bcf95411e70df20404f914c/65b010fb2a6baf407cfa1404_Real-Time%20Traffic%20Data-blog-th.webp',
    github: 'https://github.com/AdibAhasan007', // update if repo exists
  },
  {
    title: 'Heart Disease Prediction System',
    desc:
      'End-to-end risk classification in Python/TensorFlow. Robust preprocessing, multi-model comparison, and hyperparameter tuning delivered significant accuracy gains over baseline statistical models.',
    tags: ['Python', 'TensorFlow', 'Classification', 'ML Pipeline'],
    icon: '❤️',
    image: 'https://www.slideegg.com/image/catalog/300808-heart-disease-prediction.png',
    github: 'https://github.com/AdibAhasan007/Heart-Disease-Prediction-System',
  },
  {
    title: 'Dhaka’s Climate Study (1949–2013)',
    desc:
      'Long-horizon climate analysis across 64 years. Time-series trends, seasonal variability, and heatmaps; highlights correlations between urbanization and rising temperatures.',
    tags: ['Time Series', 'Data Visualization', 'Climate Analysis'],
    icon: '🌍',
    image: 'https://energybangla.com/wp-content/uploads/2019/10/Climate-change-in-Bangladesh-and-effects.jpg',
    github: 'https://github.com/AdibAhasan007/Dhaka-s-Climate-Journey',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-6"
      >
        Projects
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            className="card overflow-hidden flex flex-col group"
          >
            {/* Image */}
            <div className="relative w-full aspect-[16/10] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-gray-400 mb-4 flex-grow">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* GitHub link */}
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-500 hover:underline mt-auto"
                >
                  🔗 View on GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
