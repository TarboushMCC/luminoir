'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import PerfumeBottle from './PerfumeBottle';

export default function BestSellerSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const bottleX = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section
      ref={sectionRef}
      className="relative py-0 overflow-hidden bg-charcoal-dark"
      id="bestseller"
    >
      {/* Full-bleed editorial layout */}
      <div className="grid lg:grid-cols-2 min-h-[90vh]">
        {/* Left — Cinematic CSS visual */}
        <motion.div
          className="relative overflow-hidden min-h-[50vh] lg:min-h-0"
          style={{ y: imageY }}
        >
          {/* Dark luxury base */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, #0C0B06 0%, #1A1508 35%, #0D0D0A 60%, #080808 100%)' }}
          />
          {/* Primary golden light — dramatic column from upper-left */}
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse 50% 80% at 30% 30%, rgba(201,169,110,0.22) 0%, rgba(160,120,60,0.08) 50%, transparent 70%)' }}
          />
          {/* Secondary warm pool at bottom */}
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse 70% 40% at 50% 90%, rgba(120,80,20,0.15) 0%, transparent 60%)' }}
          />
          {/* Specular flare */}
          <div
            className="absolute"
            style={{
              top: '8%', left: '15%',
              width: '3px', height: '40%',
              background: 'linear-gradient(to bottom, transparent, rgba(240,220,160,0.4), transparent)',
              filter: 'blur(1px)',
            }}
          />
          {/* Abstract bottle silhouette — dark shape in light */}
          <div
            className="absolute"
            style={{
              left: '50%', top: '15%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '260px',
              background: 'rgba(5,5,5,0.85)',
              borderRadius: '4px',
              boxShadow: '0 0 80px rgba(201,169,110,0.1), -2px 0 20px rgba(201,169,110,0.08)',
            }}
          />
          {/* Bottle cap */}
          <div
            className="absolute"
            style={{
              left: '50%', top: '8%',
              transform: 'translateX(-50%)',
              width: '50px', height: '60px',
              background: 'linear-gradient(90deg, #4A3820, #C9A96E, #F0DCA0, #C9A96E, #4A3820)',
              borderRadius: '3px',
            }}
          />
          {/* Marble / texture streaks */}
          {[15, 35, 55, 75].map((pct, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${pct}%`, top: 0, bottom: 0,
                width: '1px',
                background: `linear-gradient(to bottom, transparent, rgba(201,169,110,${0.03 + i * 0.01}), transparent)`,
              }}
            />
          ))}
          {/* Grain overlay */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")',
            }}
          />
          {/* Right edge fade */}
          <div
            className="absolute inset-y-0 right-0 w-1/3"
            style={{ background: 'linear-gradient(to right, transparent, rgba(26,21,8,0.6))' }}
          />

          {/* Bestseller badge */}
          <motion.div
            className="absolute top-10 left-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative w-24 h-24">
              <motion.svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              >
                <defs>
                  <path
                    id="circle-text"
                    d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text className="fill-gold/70" style={{ fontSize: '9px', letterSpacing: '3.5px' }}>
                  <textPath href="#circle-text">
                    BESTSELLER · NOCTIS · 2024 ·
                  </textPath>
                </text>
              </motion.svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-px h-4 bg-gold/40 rotate-45" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right — Product spotlight */}
        <div className="relative flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-20 lg:py-0 bg-charcoal-dark">
          {/* Ambient glow */}
          <div
            className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 0% 50%, rgba(201,169,110,0.3) 0%, transparent 50%)' }}
            aria-hidden="true"
          />

          {/* Floating bottle */}
          <motion.div
            className="absolute right-8 lg:right-12 top-1/2 -translate-y-1/2 opacity-20 lg:opacity-100"
            style={{ x: bottleX }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <PerfumeBottle name="NOCTIS" variant="spotlight" className="opacity-80" />
            </motion.div>
          </motion.div>

          <div className="relative z-10 max-w-md">
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="w-8 h-px bg-gold/40" />
              <span className="label-luxury text-gold/50">N°01 Bestseller</span>
            </motion.div>

            <div className="overflow-hidden mb-1">
              <motion.h2
                className="font-serif text-[clamp(4rem,7vw,7rem)] font-light text-ivory leading-[0.85]"
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                NOCTIS
              </motion.h2>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h3
                className="font-serif text-xl font-light text-gold/70 italic"
                initial={{ y: 60, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                The Night Equation
              </motion.h3>
            </div>

            <motion.div
              className="divider-gold w-full mb-8"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'left' }}
            />

            <motion.p
              className="prose-luxury mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Our most-requested fragrance since its debut in 2019.
              NOCTIS has been described as "the perfume equivalent of a black tuxedo at 3 AM" —
              dark, complete, and mysteriously effortless.
            </motion.p>

            {/* Notes summary */}
            <motion.div
              className="grid grid-cols-3 gap-4 mb-10 p-5 border border-gold/10 bg-noir/40"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 1 }}
            >
              {[
                { tier: 'Top', notes: 'Black Pepper, Bergamot' },
                { tier: 'Heart', notes: 'Aged Oud, Vetiver' },
                { tier: 'Base', notes: 'Sandalwood, Amber' },
              ].map(({ tier, notes }) => (
                <div key={tier}>
                  <p className="label-luxury text-gold/50 mb-1" style={{ fontSize: '0.52rem' }}>{tier}</p>
                  <p className="font-serif text-xs text-ivory/60 italic leading-relaxed">{notes}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 1 }}
            >
              <a
                href="#"
                className="btn-luxury inline-flex items-center gap-3 px-8 py-4 bg-gold text-noir hover:bg-gold-light transition-colors duration-500"
              >
                <span>Shop NOCTIS · $320</span>
              </a>
              <a
                href="#"
                className="btn-luxury flex items-center gap-2 text-ivory/40 hover:text-ivory transition-colors duration-400"
              >
                <span>Request a Sample</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
