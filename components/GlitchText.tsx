'use client';

import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p' | 'div';
}

export default function GlitchText({ text, className = '', as = 'span' }: GlitchTextProps) {
  const Component = as as any;

  return (
    <Component
      data-text={text}
      className={`glitch-wrapper relative inline-block font-orbitron font-extrabold ${className}`}
    >
      <span className="relative z-10">{text}</span>
    </Component>
  );
}
