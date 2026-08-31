'use client';

import { useEffect } from 'react';

export default function ScrollProgress() {
  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      const pct = total > 0 ? (scrolled / total) * 100 : 0;
      el.style.setProperty('--scroll-progress', `${pct}%`);
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return <div className="scroll-progress" aria-hidden />;
}
