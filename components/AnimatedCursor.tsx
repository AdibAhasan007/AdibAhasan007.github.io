'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let targetX = -100, targetY = -100;
    let ringX = -100, ringY = -100;
    let raf: number;

    const moveCursor = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      dot.style.left = `${targetX}px`;
      dot.style.top = `${targetY}px`;
    };

    // Single persistent RAF loop — no memory leak
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const animate = () => {
      ringX = lerp(ringX, targetX, 0.12);
      ringY = lerp(ringY, targetY, 0.12);
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const onEnter = () => {
      dot.classList.add('is-hovering');
      ring.classList.add('is-hovering');
    };

    const onLeave = () => {
      dot.classList.remove('is-hovering');
      ring.classList.remove('is-hovering');
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });

    // Add listeners to all interactive elements
    const targets = document.querySelectorAll('a, button, [role="button"], input, textarea, select, .cursor-target');
    targets.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      cancelAnimationFrame(raf);
      targets.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
