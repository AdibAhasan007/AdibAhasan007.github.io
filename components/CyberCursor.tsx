'use client';

import { useEffect, useRef } from 'react';

export default function CyberCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let isClicking = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Direct zero-lag update for the center laser core
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${isClicking ? 1.6 : isHovering ? 1.3 : 1})`;

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('a, button, input, textarea, [role="button"], .cyber-card, .btn-cyber-primary, .btn-cyber-ghost');
        isHovering = !!interactive;
        if (isHovering) {
          ring.classList.add('cursor-hover');
          dot.style.backgroundColor = '#00ff66';
        } else {
          ring.classList.remove('cursor-hover');
          dot.style.backgroundColor = '#00f0ff';
        }
      }
    };

    const onMouseDown = () => {
      isClicking = true;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(1.6)`;
      ring.classList.add('cursor-click');
    };

    const onMouseUp = () => {
      isClicking = false;
      ring.classList.remove('cursor-click');
    };

    // Fast 120fps hardware-accelerated follow loop for outer ring (no heavy lag/damping)
    let animationId: number;
    const updateRing = () => {
      // Rapid interpolation for crisp responsiveness (0.35 factor = ultra fast response)
      ringX += (mouseX - ringX) * 0.38;
      ringY += (mouseY - ringY) * 0.38;

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

      animationId = requestAnimationFrame(updateRing);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    animationId = requestAnimationFrame(updateRing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* Outer Cyber Reticle Ring (Ultra-Fast Zero-Lag GPU accelerated) */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-cyan-400/60 hidden md:block w-8 h-8 transition-[width,height,border-color,background-color] duration-150 ease-out will-change-transform"
        style={{
          boxShadow: '0 0 14px rgba(0, 240, 255, 0.4)',
        }}
      >
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-0.5 w-1 h-0.5 bg-cyan-400" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-0.5 w-1 h-0.5 bg-cyan-400" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-0.5 w-0.5 h-1 bg-cyan-400" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-0.5 w-0.5 h-1 bg-cyan-400" />
      </div>

      {/* Inner Real-time Instant Laser Core */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-50 w-2 h-2 rounded-full bg-cyan-400 hidden md:block shadow-[0_0_10px_#00f0ff] will-change-transform"
      />

      <style jsx global>{`
        .cursor-hover {
          width: 44px !important;
          height: 44px !important;
          border-color: #00ff66 !important;
          background-color: rgba(0, 255, 102, 0.08) !important;
          box-shadow: 0 0 25px rgba(0, 255, 102, 0.6), inset 0 0 10px rgba(0, 255, 102, 0.3) !important;
        }
        .cursor-click {
          transform: scale(0.85) !important;
        }
      `}</style>
    </>
  );
}
