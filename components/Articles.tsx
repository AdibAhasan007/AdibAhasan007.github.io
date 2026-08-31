'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiExternalLink, FiBookOpen } from 'react-icons/fi';
import GlitchText from './GlitchText';
import TiltCard3D from './TiltCard3D';

type Article = {
  title: string;
  url: string;
  source: string;
  image: string;
  date?: string;
  category: string;
};

const ARTICLES: Article[] = [
  {
    title: 'Untold Story Behind a Successful Author and Programmer, Adib Ahasan Chowdhury',
    url: 'https://www.issuewire.com/untold-story-behind-a-successful-author-and-programmer-adib-ahasan-chowdhury-1769543279299196',
    source: 'IssueWire Press',
    image: 'https://s3-us-west-2.amazonaws.com/issuewireassets/primg/112180/picture-of-adib-ahasan-chowdhury768376777.jpg',
    date: '2024',
    category: 'PRESS FEATURE',
  },
  {
    title: 'Immersed in the Charms of Kolkata — Cultural & Analytical Reflections',
    url: 'https://www.openpr.com/news/3267423/adib-ahasan-chowdhury-immersed-in-the-charms-of-kolkata',
    source: 'openPR Germany',
    image: 'https://cdn.open-pr.com/W/a/Wa27117716_g.jpg',
    date: '2024',
    category: 'ESSAY // TRAVEL',
  },
  {
    title: 'A Multitalented Author & Programmer Making Waves Across Bangladesh',
    url: 'https://www.issuewire.com/adib-ahasan-chowdhury-a-multitalented-author-and-programmer-making-waves-1770511844588456',
    source: 'IssueWire Press',
    image: 'https://s3-us-west-2.amazonaws.com/issuewireassets/primg/112991/adib-ahasan-chowdhury906706290.jpg',
    date: '2024',
    category: 'PRESS FEATURE',
  },
  {
    title: 'The Power of Desirable Difficulties in Enhancing Inquiry & Cognitive Skills',
    url: 'https://medium.com/@pranto7/the-power-of-desirable-difficulties-in-enhancing-children-inquiry-skills-deba78dd995e',
    source: 'Medium Publications',
    image: 'https://miro.medium.com/v2/resize:fit:640/format:webp/1*uMkFObo5tX-4YNlwZ2g5Ug.png',
    date: '2023',
    category: 'COGNITIVE SCIENCE',
  },
  {
    title: 'Quantum Physics in a Leaf? Quantum Coherence in Biological Photosynthesis',
    url: 'https://medium.com/@pranto7/quantum-physics-in-a-leaf-8eb6c81caafa',
    source: 'Medium Publications',
    image: 'https://miro.medium.com/v2/resize:fit:4800/format:webp/0*XbQ2g-ols6s3Olq2',
    date: '2023',
    category: 'QUANTUM BIOLOGY',
  },
];

export default function Articles() {
  return (
    <section id="articles" className="relative py-20 overflow-hidden">
      <div className="relative z-10 max-w-[1680px] mx-auto px-4 sm:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <div className="cyber-tag mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping inline-block" />
              08 // PUBLISHED TRANSMISSIONS
            </div>
            <h2 className="cyber-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              ARTICLES &amp; <GlitchText text="PRESS" as="span" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400" />
            </h2>
            <p className="mt-4 font-mono text-xs sm:text-sm text-slate-400">
              [ WRITTEN INSIGHTS, COGNITIVE RESEARCH &amp; INTERNATIONAL MEDIA FEATURES ]
            </p>
          </div>

          <a
            href="https://medium.com/@pranto7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber-ghost hidden md:inline-flex items-center gap-2 text-xs sm:text-sm py-3 px-6"
          >
            <FiBookOpen size={16} />
            <span>READ ALL ON MEDIUM</span>
          </a>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ARTICLES.map((art, idx) => (
            <motion.div
              key={art.url}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <TiltCard3D maxTilt={10} className="h-full">
                <Link
                  href={art.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-card block rounded-2xl hud-corner overflow-hidden group hover:border-purple-400/70 h-full flex flex-col justify-between"
                >
                  <div>
                    {/* Image Frame */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#02040a] holo-scan">
                      <Image
                        src={art.image}
                        alt={art.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-108 opacity-85 group-hover:opacity-100"
                        sizes="(max-width: 768px) 100vw, 450px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030816] via-transparent to-transparent" />

                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-md bg-[#02040a]/85 border border-purple-500/40 text-purple-300 font-mono text-[10px] font-bold tracking-wider backdrop-blur-md">
                          {art.category}
                        </span>
                      </div>

                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="p-2 rounded-lg bg-[#02040a]/85 border border-cyan-400/40 text-cyan-300 flex items-center justify-center">
                          <FiExternalLink size={13} />
                        </span>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-6">
                      <h3 className="font-orbitron text-sm sm:text-base font-bold text-white leading-snug group-hover:text-purple-300 transition-colors line-clamp-2">
                        {art.title}
                      </h3>
                    </div>
                  </div>

                  <div className="px-6 py-4 border-t border-cyan-500/15 flex items-center justify-between font-mono text-xs text-slate-400">
                    <span className="text-cyan-400">{art.source}</span>
                    <span>{art.date}</span>
                  </div>
                </Link>
              </TiltCard3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
