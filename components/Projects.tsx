"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger, cardHover, imgZoom } from "@/lib/anim";
import { FiGithub, FiExternalLink } from "react-icons/fi";

type Project = {
  title: string;
  desc: string;
  tags: string[];
  image: string;
  github?: string;
  link?: string;
  icon?: string;
};

const projects: Project[] = [
  {
    title: "Improved Traffic Routing with Federated Rainbow DQN",
    desc:
      "Federated RL framework combining Rainbow DQN with federated averaging for city-scale routing. Achieved 73.31% travel-time reduction on benchmarks and 38.39% on OSM maps. Includes GUI for one-click training, baselines, and performance visualization.",
    tags: ["Reinforcement Learning", "Federated Learning", "Rainbow DQN", "GUI"],
    image:
      "https://cdn.prod.website-files.com/5bcf95411e70df20404f914c/65b010fb2a6baf407cfa1404_Real-Time%20Traffic%20Data-blog-th.webp",
    github: "https://github.com/AdibAhasan007", // replace if repo URL differs
    icon: "🛣️",
  },
  {
    title: "Heart Disease Prediction System",
    desc:
      "End-to-end risk classification in Python/TensorFlow. Robust preprocessing, multi-model comparison, and hyperparameter tuning delivered significant accuracy gains over baseline statistical models.",
    tags: ["Python", "TensorFlow", "Classification", "ML Pipeline"],
    image:
      "https://www.slideegg.com/image/catalog/300808-heart-disease-prediction.png",
    github:
      "https://github.com/AdibAhasan007/Heart-Disease-Prediction-System",
    icon: "❤️",
  },
  {
    title: "Dhaka’s Climate Study (1949–2013)",
    desc:
      "Long-horizon climate analysis across 64 years. Time-series trends, seasonal variability, heatmaps; highlights correlations between urbanization and rising temperatures.",
    tags: ["Time Series", "Data Visualization", "Climate Analysis"],
    image:
      "https://energybangla.com/wp-content/uploads/2019/10/Climate-change-in-Bangladesh-and-effects.jpg",
    github: "https://github.com/AdibAhasan007/Dhaka-s-Climate-Journey",
    icon: "🌍",
  },
];

export default function Projects() {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      className="space-y-8"
      id="projects"
    >
      <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold">
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((p) => (
          <motion.article
            key={p.title}
            variants={fadeUp}
            {...cardHover}
            className="group relative overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/40"
          >
            {/* cover */}
            <div className="relative h-48">
              <motion.div {...imgZoom} className="h-full">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  priority={false}
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* body */}
            <div className="relative p-5">
              <div className="mb-2 text-2xl">{p.icon ?? "🚀"}</div>
<h3 className="text-[15px] font-semibold text-[color:var(--title)]">
  {p.title}
</h3>

<p className="mt-2 text-[13px] text-[color:var(--body)]/80">
  {p.desc}
</p>


              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full px-2.5 py-1 text-xs bg-white/5 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-4">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300"
                    rel="noopener noreferrer"
                    aria-label="View on GitHub"
                  >
                    <FiGithub /> GitHub
                  </a>
                )}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white"
                    rel="noopener noreferrer"
                    aria-label="Open live project"
                  >
                    <FiExternalLink /> Live
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
