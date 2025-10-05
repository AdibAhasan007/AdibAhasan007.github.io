'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  {name:'Home', href:'#hero'},
  {name:'About', href:'#about'},
  {name:'Skills', href:'#skills'},
  {name:'Experience', href:'#experience'},
  {name:'Education', href:'#education'},
  {name:'Projects', href:'#projects'},
  {name:'Articles', href:'#articles'},
  {name:'Contact', href:'#contact'}
]

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-gray-950/60 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <nav className="container-pad mx-auto max-w-6xl flex items-center justify-between py-3">
        <a href="#hero" className="font-bold text-lg">Adib Ahasan Chowdhury</a>
        <ul className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <li key={l.href}>
              <a className="hover:text-brand-600" href={l.href}>{l.name}</a>
            </li>
          ))}
        </ul>
        <button className="md:hidden" onClick={()=>setOpen(true)} aria-label="Open menu">☰</button>
      </nav>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              {...{ className: 'fixed inset-0 bg-black/50 z-40' }}
              initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            >
              <div className="w-full h-full" onClick={()=>setOpen(false)} />
            </motion.div>
            <motion.aside
              {...{ className: 'fixed right-0 top-0 h-full w-72 bg-white dark:bg-gray-900 z-50 p-6 flex flex-col border-l border-slate-200 dark:border-slate-800' }}
              initial={{x:'100%'}} animate={{x:0}} exit={{x:'100%'}} transition={{duration:.3}}
            >
              <button className="self-end mb-4" onClick={()=>setOpen(false)} aria-label="Close menu">✕</button>
              <ul className="space-y-4">
                {links.map(l => (
                  <li key={l.href}>
                    <a className="hover:text-brand-600" href={l.href} onClick={()=>setOpen(false)}>{l.name}</a>
                  </li>
                ))}
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
