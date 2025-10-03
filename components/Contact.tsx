'use client'

import { useState } from 'react'
import Swal from 'sweetalert2'

export default function Contact(){
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch('https://formspree.io/f/mwprbbrk', { method: 'POST', headers: { Accept: 'application/json' }, body: data })
      if (res.ok) {
        Swal.fire({ icon: 'success', title: 'Thanks!', text: 'Your message has been sent.' })
        form.reset()
      } else {
        Swal.fire({ icon: 'error', title: 'Oops', text: 'Submission failed. Try email: pranto7@gmail.com' })
      }
    } catch (err) {
      Swal.fire({ icon: 'error', title: 'Network error', text: 'Please try again later.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16">
      <h2 className="section-title">Contact</h2>
      <div className="grid md:grid-cols-2 gap-8 mt-6">
        <div className="card p-6">
          <h3 className="font-semibold mb-2">Let’s talk</h3>
          <p className="subtle">Drop me a line — I’ll get back soon.</p>
          <form onSubmit={onSubmit} className="mt-4 space-y-4">
            <input name="name" placeholder="Your name" className="w-full rounded-xl border border-slate-300 dark:border-slate-700 px-3 py-2 bg-white dark:bg-gray-900" required />
            <input type="email" name="email" placeholder="you@example.com" className="w-full rounded-xl border border-slate-300 dark:border-slate-700 px-3 py-2 bg-white dark:bg-gray-900" required />
            <textarea name="message" rows={5} placeholder="Message" className="w-full rounded-xl border border-slate-300 dark:border-slate-700 px-3 py-2 bg-white dark:bg-gray-900" required></textarea>
            <button className="btn btn-primary" disabled={loading}>{loading ? 'Sending…' : 'Send message'}</button>
          </form>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold mb-2">Find me</h3>
          <ul className="space-y-2 subtle">
            <li>📍 Dhaka, Bangladesh</li>
            <li>📧 <a className="text-brand-600 hover:underline" href="mailto:pranto7@gmail.com">pranto7@gmail.com</a></li>
            <li>🔗 <a className="text-brand-600 hover:underline" href="https://www.linkedin.com/in/adibahasanchowdhury/" target="_blank">LinkedIn</a></li>
            <li>🐦 <a className="text-brand-600 hover:underline" href="https://twitter.com/AdibAhasan" target="_blank">Twitter</a></li>
            <li>📸 <a className="text-brand-600 hover:underline" href="https://www.instagram.com/pranto.adib" target="_blank">Instagram</a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
