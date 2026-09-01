'use client';

import { useEffect } from 'react';

export default function ScrollProgress() {
  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      // iOS Safari sometimes uses body.scrollTop, not documentElement.scrollTop
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      const pct = total > 0 ? (scrolled / total) * 100 : 0;
      el.style.setProperty('--scroll-progress', `${pct}%`);
    };

    window.addEventListener('scroll', update, { passive: true });
    // Also listen on document for iOS
    document.addEventListener('scroll', update, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', update);
      document.removeEventListener('scroll', update);
    };
  }, []);

  return <div className="scroll-progress" aria-hidden />;
}
