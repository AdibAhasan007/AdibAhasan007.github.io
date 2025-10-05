// lib/anim.ts
import { Variants } from "framer-motion";

export const EASE: number[] = [0.17, 0.55, 0.55, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

export const cardHover = {
  whileHover: {
    y: -6,
    scale: 1.01,
    boxShadow: "0 10px 30px rgba(0,0,0,.25)",
    transition: { duration: 0.25, ease: EASE },
  },
  whileTap: { scale: 0.995 },
};

export const imgZoom = {
  whileHover: { scale: 1.05, transition: { duration: 0.35, ease: EASE } },
};
