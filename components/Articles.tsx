'use client'

import { motion } from 'framer-motion'

const list = [
  { title: 'Untold Story Behind a Successful Author and Programmer', url: 'https://www.issuewire.com/untold-story-behind-a-successful-author-and-programmer-adib-ahasan-chowdhury-1769543279299196' },
  { title: 'Immersed in the Charms of Kolkata', url: 'https://www.openpr.com/news/3267423/adib-ahasan-chowdhury-immersed-in-the-charms-of-kolkata' },
  { title: 'A Multitalented Author & Programmer Making Waves', url: 'https://www.issuewire.com/adib-ahasan-chowdhury-a-multitalented-author-and-programmer-making-waves-1770511844588456' },
  { title: 'Desirable Difficulties & Children’s Inquiry Skills', url: 'https://medium.com/@pranto7/the-power-of-desirable-difficulties-in-enhancing-children-inquiry-skills-deba78dd995e' },
  { title: 'Quantum Physics in a Leaf?', url: 'https://medium.com/@pranto7/quantum-physics-in-a-leaf-8eb6c81caafa' }
]

const og = (u:string)=>`https://api.microlink.io/?url=${encodeURIComponent(u)}&screenshot=false&meta=true&embed=image.url`
const snap = (u:string)=>`https://image.microlink.io/?url=${encodeURIComponent(u)}&meta=false`
const FALLBACK = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAAC0CAYAAABkQH0HAAAACXBIWXMAAAsSAAALEgHS3X78AAABaElEQVR4nO3RMQEAIAwAsb9xS7bQZCkJgQXkJg2f5k0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4w0oZk3L3GgCw5o3y7gAAHIH2u4AAKQH2u4AAKQH2u4AAKQH2u4AAKQH2u4AAKQH2u4AAKQH2u4AAKQH2u4AAKQH2u4AAKQH2u4AAKQH2u4AAKQH2u4AAKQH2u6A0H6S0wAAz8JqAAAAAElFTkSuQmCC'

export default function Articles(){
  return (
    <section id="articles" className="py-16">
      <div className="flex items-end justify-between gap-4">
        <h2 className="section-title">Articles</h2>
   
      </div>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((a,i)=>(
          <motion.div key={a.url} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.06}}>
            <a href={a.url} target="_blank" rel="noopener" className="card overflow-hidden group block">
              <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700">
                <img
                  src={og(a.url)} alt={a.title} loading="lazy" width={1200} height={750}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e)=>{
                    const img = e.currentTarget as HTMLImageElement
                    if(!img.dataset.fallback){ img.dataset.fallback='snap'; img.src = snap(a.url) }
                    else { img.src = FALLBACK }
                  }}
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{a.title}</h3>
                <p className="subtle text-sm mt-1">{new URL(a.url).hostname}</p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
