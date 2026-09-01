'use client';

import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p' | 'div';
}

export default function GlitchText({ text, className = '', as = 'span' }: GlitchTextProps) {
  const Component = as as React.ElementType;

  return (
    <Component
      data-text={text}
      className={`glitch-wrapper relative inline-block font-orbitron font-extrabold tracking-wide ${className}`}
    >
      {/*
       * IMPORTANT: Do NOT add z-index here.
       * z-index + position = new stacking context → breaks iOS Safari background-clip:text
       * causing gradient text to appear completely invisible on iPhones.
       * `position:relative` alone (no z-index) does NOT create a stacking context.
       */}
      <span className="relative select-none">{text}</span>
    </Component>
  );
}
