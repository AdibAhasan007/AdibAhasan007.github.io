'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

type Article = {
  title: string;
  url: string;
  source: string;
  image?: string;       // manual image (guaranteed)
  og?: string;          // optional OG image (if you want)
};

const articles: Article[] = [
  {
    title:
      'Untold Story Behind a Successful Author and Programmer, Adib Ahasan Chowdhury',
    url: 'https://www.issuewire.com/untold-story-behind-a-successful-author-and-programmer-adib-ahasan-chowdhury-1769543279299196',
    source: 'issuewire.com',
    image:
      'https://s3-us-west-2.amazonaws.com/issuewireassets/primg/112180/picture-of-adib-ahasan-chowdhury768376777.jpg',
  },
  {
    title: 'Immersed in the Charms of Kolkata',
    url: 'https://www.openpr.com/news/3267423/adib-ahasan-chowdhury-immersed-in-the-charms-of-kolkata',
    source: 'openpr.com',
    image: 'https://cdn.open-pr.com/W/a/Wa27117716_g.jpg',
  },
  {
    title:
      'A Multitalented Author & Programmer Making Waves',
    url: 'https://www.issuewire.com/adib-ahasan-chowdhury-a-multitalented-author-and-programmer-making-waves-1770511844588456',
    source: 'issuewire.com',
    image:
      'https://s3-us-west-2.amazonaws.com/issuewireassets/primg/112991/adib-ahasan-chowdhury906706290.jpg',
  },
  // — your Medium articles with known thumbnail links —
  {
    title:
      "Desirable Difficulties & Children's Inquiry Skills",
    url: 'https://medium.com/@pranto7/the-power-of-desirable-difficulties-in-enhancing-children-inquiry-skills-deba78dd995e',
    source: 'medium.com',
    image:
      'https://miro.medium.com/v2/resize:fit:640/format:webp/1*uMkFObo5tX-4YNlwZ2g5Ug.png',
  },
  {
    title: 'Quantum Physics in a Leaf?',
    url: 'https://medium.com/@pranto7/quantum-physics-in-a-leaf-8eb6c81caafa',
    source: 'medium.com',
    image:
      'https://miro.medium.com/v2/resize:fit:4800/format:webp/0*XbQ2g-ols6s3Olq2',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: 'easeOut' } },
};

function Card({ a }: { a: Article }) {
  const [loaded, setLoaded] = useState(false);

  // we first try manual image, else OG, else a local gradient fallback
  const imgSrc =
    a.image ||
    a.og ||
    '/images/article-fallback.jpg'; // add a pretty gradient image locally if you like

  return (
    <motion.article
      variants={item}
      className="card group relative overflow-hidden rounded-2xl bg-neutral-900/40 ring-1 ring-white/10 hover:ring-blue-500/30 transition-shadow"
      style={{
        boxShadow:
          '0 10px 30px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.02)',
      }}
      whileHover={{ y: -4, rotateX: 0, rotateY: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
    >
      <Link href={a.url} target="_blank" rel="noopener" className="block">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          {/* image */}
          <Image
            src={imgSrc}
            alt={a.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={false}
            onLoadingComplete={() => setLoaded(true)}
            className={`object-cover transition-transform duration-500 will-change-transform group-hover:scale-[1.04] ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* skeleton shimmer while loading */}
          {!loaded && (
            <div className="absolute inset-0 animate-pulse bg-[linear-gradient(110deg,rgba(255,255,255,0.06)_8%,rgba(255,255,255,0.15)_18%,rgba(255,255,255,0.06)_33%)] bg-[length:200%_100%]" />
          )}

          {/* subtle inner glow */}
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_-40px_100px_rgba(0,0,0,.45)]" />

          {/* shine sweep on hover (CSS below) */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="shine h-full w-1/3 opacity-0" />
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-[15px]/[1.35] font-semibold text-white/95">
            {a.title}
          </h3>
          <p className="mt-3 text-[13px] text-white/50">{a.source}</p>
        </div>
      </Link>
    </motion.article>
  );
}

export default function Articles() {
  return (
    <>
      {/* local CSS for the shine sweep + soft tilt */}
      <style jsx global>{`
        /* Shine effect */
        .card:hover .shine {
          opacity: 0.5;
          background: linear-gradient(
            100deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.22) 45%,
            rgba(255, 255, 255, 0) 90%
          );
          transform: translateX(-120%);
          animation: shine-move 1100ms ease-in-out forwards;
        }
        @keyframes shine-move {
          0% {
            transform: translateX(-120%) skewX(-12deg);
          }
          100% {
            transform: translateX(220%) skewX(-12deg);
          }
        }
      `}</style>

      <section id="articles" className="container mx-auto px-6 md:px-10 lg:px-14">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-bold">Articles</h2>
          <p className="text-xs md:text-sm text-white/50">
            Thumbnails auto-generate via OG — with graceful fallbacks.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {articles.map((a) => (
            <Card a={a} key={a.url} />
          ))}
        </motion.div>
      </section>
    </>
  );
}
