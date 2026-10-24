'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import PerfumeBottle from './PerfumeBottle';

const WORDS = ['Obsession', 'Darkness', 'Memory', 'Desire', 'Silence'];

function SmokeParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-2xl"
          style={{
            width: `${80 + i * 30}px`,
            height: `${80 + i * 30}px`,
            left: `${30 + i * 5}%`,
            bottom: `${20 + (i % 3) * 10}%`,
            background: 'radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)',
            animation: `smokeFloat ${6 + i * 1.5}s ease-out ${i * 0.8}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

function AmbientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Large atmospheric orb - top */}
      <motion.div
        className="absolute -top-64 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 60%)' }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Side orb left */}
      <motion.div
        className="absolute top-1/3 -left-32 w-96 h-96 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(201,169,110,0.05) 0%, transparent 70%)' }}
        animate={{ x: [0, 20, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Side orb right */}
      <motion.div
        className="absolute top-1/2 -right-32 w-80 h-80 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 70%)' }}
        animate={{ x: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const lineVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
};

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const bottleY = useTransform(scrollY, [0, 700], [0, -120]);
  const textY = useTransform(scrollY, [0, 500], [0, -60]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const bottleScale = useTransform(scrollY, [0, 700], [1, 0.92]);

  const smoothBottleY = useSpring(bottleY, { stiffness: 60, damping: 20 });
  const smoothTextY = useSpring(textY, { stiffness: 60, damping: 20 });

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-noir"
      id="hero"
    >
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 80% at 50% 20%, rgba(26,20,10,0.8) 0%, #0A0A0A 60%)',
        }}
      />

      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      <AmbientOrbs />
      <SmokeParticles />

      {/* Main content wrapper */}
      <motion.div
        className="relative z-10 w-full max-w-screen-xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12"
        style={{ opacity: heroOpacity }}
      >
        {/* Left — Editorial Text */}
        <motion.div
          className="flex-1 max-w-xl"
          style={{ y: smoothTextY }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Overline */}
          <motion.div variants={lineVariants} className="overflow-hidden mb-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-gold/60" />
              <span className="label-luxury text-gold/60">Maison de Parfum · Paris</span>
            </div>
          </motion.div>

          {/* Main headline — cinematic */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              variants={lineVariants}
              className="font-serif text-[clamp(4rem,8vw,7.5rem)] font-light text-ivory leading-[0.88]"
            >
              Born From
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-6">
            <motion.h1
              variants={lineVariants}
              className="font-serif text-[clamp(4rem,8vw,7.5rem)] font-light leading-[0.88]"
              style={{
                background: 'linear-gradient(135deg, #C9A96E 0%, #F0DCA0 40%, #C9A96E 60%, #9A7A45 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Darkness
            </motion.h1>
          </div>

          {/* Divider */}
          <motion.div variants={lineVariants} className="overflow-hidden mb-6">
            <div className="divider-gold w-32" />
          </motion.div>

          {/* Subline */}
          <motion.p
            variants={lineVariants}
            className="prose-luxury max-w-sm mb-10"
          >
            Rare ingredients harvested at the edge of twilight. Each fragrance a narrative —
            intimate, irreducible, and entirely your own.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={lineVariants} className="flex flex-wrap items-center gap-4">
            <a
              href="#collection"
              className="btn-luxury inline-flex items-center gap-3 px-8 py-4 bg-gold text-noir hover:bg-gold-light transition-colors duration-500"
            >
              <span>Explore Collection</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#story"
              className="btn-luxury inline-flex items-center gap-3 px-6 py-4 border border-ivory/20 text-ivory/60 hover:text-ivory hover:border-ivory/40 transition-all duration-500"
            >
              Our Story
            </a>
          </motion.div>
        </motion.div>

        {/* Right — Perfume Bottle */}
        <motion.div
          className="relative flex-shrink-0 flex items-center justify-center"
          style={{ y: smoothBottleY, scale: bottleScale }}
        >
          {/* Bottle glow backdrop */}
          <div
            className="absolute inset-0 rounded-full blur-3xl opacity-20"
            style={{ background: 'radial-gradient(circle, rgba(201,169,110,0.5) 0%, transparent 60%)', transform: 'scale(0.7)' }}
            aria-hidden="true"
          />

          <motion.div
            animate={{
              y: [0, -18, 0],
              rotate: [0, 0.4, 0, -0.4, 0],
            }}
            transition={{
              y: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
              rotate: { duration: 9, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <PerfumeBottle name="NOCTIS" variant="hero" />
          </motion.div>

          {/* Floating notes labels */}
          <motion.div
            className="absolute left-0 top-1/3 -translate-x-full"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <div className="flex items-center gap-3 glass-dark px-3 py-2 rounded-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
              <div>
                <p className="label-luxury text-gold/50" style={{ fontSize: '0.5rem' }}>Top Note</p>
                <p className="font-serif text-ivory/70 text-xs italic">Black Pepper</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute right-0 top-1/2 translate-x-full"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            <div className="flex items-center gap-3 glass-dark px-3 py-2 rounded-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
              <div>
                <p className="label-luxury text-gold/50" style={{ fontSize: '0.5rem' }}>Heart Note</p>
                <p className="font-serif text-ivory/70 text-xs italic">Aged Oud</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="label-luxury text-ivory/30" style={{ fontSize: '0.55rem' }}>Scroll to discover</span>
        <div className="relative w-px h-14 bg-ivory/10 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-gold/60"
            style={{ height: '40%' }}
            animate={{ y: ['0%', '250%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #0A0A0A)' }}
        aria-hidden="true"
      />
    </section>
  );
}
