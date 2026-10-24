'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function BrandStorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-15%' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const textY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative py-32 lg:py-48 bg-noir overflow-hidden"
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5"
        style={{
          background: 'radial-gradient(ellipse at right, rgba(201,169,110,0.3) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-20"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-12 h-px bg-gold/40" />
          <span className="label-luxury text-gold/50">The House</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Image */}
          <motion.div
            className="relative"
            style={{ y: imageY }}
          >
            <motion.div
              className="relative aspect-[3/4] overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* CSS luxury editorial visual */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(160deg, #1A1208 0%, #0D0C08 30%, #1C1508 55%, #0A0A0A 100%)',
                }}
              />
              {/* Golden light column */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(ellipse 40% 70% at 55% 38%, rgba(201,169,110,0.18) 0%, rgba(180,140,80,0.06) 45%, transparent 70%)',
                }}
              />
              {/* Ingredient circles — abstract bokeh */}
              {[
                { w: 120, h: 120, x: '20%', y: '15%', op: 0.07 },
                { w: 80, h: 80, x: '65%', y: '22%', op: 0.09 },
                { w: 160, h: 160, x: '40%', y: '55%', op: 0.05 },
                { w: 50, h: 50, x: '72%', y: '65%', op: 0.11 },
                { w: 100, h: 100, x: '15%', y: '70%', op: 0.06 },
              ].map((orb, i) => (
                <div
                  key={i}
                  className="absolute rounded-full blur-xl"
                  style={{
                    width: orb.w, height: orb.h,
                    left: orb.x, top: orb.y,
                    background: `radial-gradient(circle, rgba(201,169,110,${orb.op * 3}) 0%, rgba(201,169,110,${orb.op}) 50%, transparent 70%)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  aria-hidden="true"
                />
              ))}
              {/* Vertical dividing lines — editorial */}
              <div
                className="absolute left-1/4 top-12 bottom-12 w-px opacity-10"
                style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,169,110,0.6), transparent)' }}
              />
              {/* Subtle grid overlay */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: 'linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              {/* Center monogram watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5">
                <span className="font-serif text-gold" style={{ fontSize: '18rem', fontWeight: 300, letterSpacing: '0.05em', color: '#C9A96E' }}>
                  L
                </span>
              </div>
              {/* Fragrance note text overlays */}
              <div className="absolute bottom-16 left-8 right-8 flex flex-col gap-3">
                {['Bulgarian Rose', 'Aged Oud Resin', 'Grasse Jasmine'].map((note, i) => (
                  <div key={note} className="flex items-center gap-3 opacity-40">
                    <div className="w-px h-3 bg-gold/60" />
                    <span className="font-serif text-xs italic text-ivory/60">{note}</span>
                  </div>
                ))}
              </div>
              {/* Bottom gradient */}
              <div
                className="absolute bottom-0 left-0 right-0 h-48"
                style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.8), transparent)' }}
              />
            </motion.div>

            {/* Floating stat card */}
            <motion.div
              className="absolute -right-8 bottom-16 glass-dark p-6 max-w-[160px]"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-serif text-4xl font-light text-gold leading-none mb-1">47</p>
              <p className="label-luxury text-ivory/40" style={{ fontSize: '0.55rem', lineHeight: 1.6 }}>
                Rare ingredients sourced from 12 countries
              </p>
            </motion.div>

            {/* Gold corner accent */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t border-l border-gold/30" />
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b border-r border-gold/30" />
          </motion.div>

          {/* Right — Story text */}
          <motion.div
            className="flex flex-col justify-center"
            style={{ y: textY }}
            variants={stagger}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.h2
              variants={fadeUp}
              className="font-serif text-[clamp(3rem,5vw,5.5rem)] font-light text-ivory leading-[0.92] mb-8"
            >
              Perfumery
              <br />
              <em className="text-gold">as an art</em>
              <br />
              form.
            </motion.h2>

            <motion.div variants={fadeUp} className="divider-gold w-24 mb-8" />

            <motion.p variants={fadeUp} className="prose-luxury mb-6 max-w-md">
              Founded in the quiet of a Parisian winter, LUMINOIR was born from a single conviction:
              that a fragrance should not merely be worn — it should be inhabited.
            </motion.p>

            <motion.p variants={fadeUp} className="prose-luxury mb-10 max-w-md">
              Our master perfumer, trained for fifteen years under the ancient traditions of Grasse,
              travels the world in pursuit of ingredients that defy extraction — a rare oud resin,
              Bulgarian rose harvested before dawn, ambergris found on forgotten shores.
            </motion.p>

            {/* Quote */}
            <motion.blockquote
              variants={fadeUp}
              className="relative pl-6 mb-10"
            >
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gold/40" />
              <p className="font-serif text-xl font-light text-ivory/70 italic leading-relaxed">
                "Darkness and light have always been the same conversation.
                We simply learned to capture it in a bottle."
              </p>
              <footer className="mt-3 label-luxury text-gold/40">
                — Elara Voss, Founder & Creative Director
              </footer>
            </motion.blockquote>

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gold/10"
            >
              {[
                { value: '2009', label: 'Founded in Paris' },
                { value: '12', label: 'Signature Scents' },
                { value: '38+', label: 'Countries Worldwide' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl font-light text-gold leading-none mb-1">
                    {stat.value}
                  </p>
                  <p className="label-luxury text-ivory/35" style={{ fontSize: '0.55rem', lineHeight: 1.7 }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
