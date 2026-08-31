'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';

type Article = {
  title: string;
  url: string;
  source: string;
  image: string;
  date?: string;
};

const articles: Article[] = [
  {
    title: 'Untold Story Behind a Successful Author and Programmer, Adib Ahasan Chowdhury',
    url: 'https://www.issuewire.com/untold-story-behind-a-successful-author-and-programmer-adib-ahasan-chowdhury-1769543279299196',
    source: 'issuewire.com',
    image: 'https://s3-us-west-2.amazonaws.com/issuewireassets/primg/112180/picture-of-adib-ahasan-chowdhury768376777.jpg',
    date: '2024',
  },
  {
    title: 'Immersed in the Charms of Kolkata',
    url: 'https://www.openpr.com/news/3267423/adib-ahasan-chowdhury-immersed-in-the-charms-of-kolkata',
    source: 'openpr.com',
    image: 'https://cdn.open-pr.com/W/a/Wa27117716_g.jpg',
    date: '2024',
  },
  {
    title: 'A Multitalented Author & Programmer Making Waves',
    url: 'https://www.issuewire.com/adib-ahasan-chowdhury-a-multitalented-author-and-programmer-making-waves-1770511844588456',
    source: 'issuewire.com',
    image: 'https://s3-us-west-2.amazonaws.com/issuewireassets/primg/112991/adib-ahasan-chowdhury906706290.jpg',
    date: '2024',
  },
  {
    title: "Desirable Difficulties & Children's Inquiry Skills",
    url: 'https://medium.com/@pranto7/the-power-of-desirable-difficulties-in-enhancing-children-inquiry-skills-deba78dd995e',
    source: 'medium.com',
    image: 'https://miro.medium.com/v2/resize:fit:640/format:webp/1*uMkFObo5tX-4YNlwZ2g5Ug.png',
    date: '2023',
  },
  {
    title: 'Quantum Physics in a Leaf?',
    url: 'https://medium.com/@pranto7/quantum-physics-in-a-leaf-8eb6c81caafa',
    source: 'medium.com',
    image: 'https://miro.medium.com/v2/resize:fit:4800/format:webp/0*XbQ2g-ols6s3Olq2',
    date: '2023',
  },
];

function ArticleCard({ a, i }: { a: Article; i: number }) {
  const [loaded, setLoaded] = useState(false);

  const sourceColor = a.source.includes('medium')
    ? { bg: 'rgba(0,0,0,0.8)', text: '#ffffff', border: 'rgba(255,255,255,0.2)' }
    : { bg: 'rgba(99,102,241,0.12)', text: '#a5b4fc', border: 'rgba(99,102,241,0.25)' };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: i * 0.08 }}
    >
      <Link href={a.url} target="_blank" rel="noopener noreferrer" className="article-card block group">
        {/* Thumbnail */}
        <div className="relative aspect-[16/9] overflow-hidden">
          {!loaded && (
            <div className="absolute inset-0 animate-pulse"
              style={{ background: 'linear-gradient(110deg, rgba(255,255,255,0.04) 8%, rgba(255,255,255,0.08) 18%, rgba(255,255,255,0.04) 33%)', backgroundSize: '200% 100%' }} />
          )}
          <Image
            src={a.image}
            alt={a.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            onLoad={() => setLoaded(true)}
            className={`object-cover transition-all duration-500 group-hover:scale-[1.05] ${loaded ? 'opacity-100' : 'opacity-0'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/80 via-transparent to-transparent" />

          {/* Source badge */}
          <div className="absolute top-3 left-3">
            <span
              className="text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm"
              style={{ background: sourceColor.bg, color: sourceColor.text, border: `1px solid ${sourceColor.border}` }}
            >
              {a.source}
            </span>
          </div>

          {/* External link icon */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#020817]/80 backdrop-blur-sm border border-white/10 text-white">
              <FiExternalLink size={13} />
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-display font-semibold text-white text-[14px] leading-snug line-clamp-2 group-hover:text-indigo-300 transition-colors duration-200">
            {a.title}
          </h3>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-[11px] text-slate-500 font-medium">{a.source}</span>
            {a.date && <span className="text-[11px] text-slate-600">{a.date}</span>}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Articles() {
  return (
    <section id="articles" className="relative py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between flex-wrap gap-4"
        >
          <div>
            <div className="section-tag">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 inline-block" />
              Published Work
            </div>
            <h2 className="section-title-premium">
              Articles &amp; <span className="gradient-text">Press</span>
            </h2>
          </div>
          <a
            href="https://medium.com/@pranto7"
            target="_blank"
            rel="noopener"
            className="btn-ghost-premium text-[13px] hidden sm:inline-flex"
          >
            View All Articles
          </a>
        </motion.div>

        {/* Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a, i) => (
            <ArticleCard key={a.url} a={a} i={i} />
          ))}
        </div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center sm:hidden"
        >
          <a
            href="https://medium.com/@pranto7"
            target="_blank"
            rel="noopener"
            className="btn-ghost-premium inline-flex text-[13px]"
          >
            View All Articles
          </a>
        </motion.div>
      </div>
    </section>
  );
}
