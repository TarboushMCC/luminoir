'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "NOCTIS is the first fragrance I've worn that doesn't merely complement me — it completes me. There is nothing quite like it in the world of niche perfumery.",
    author: 'Isabelle Morel',
    role: 'Fashion Director, Le Monde',
    initials: 'IM',
    rating: 5,
    product: 'NOCTIS',
  },
  {
    quote: "SOLÈNE is what I imagine a warm Parisian afternoon smells like — effortless, sensual, and deeply memorable. I've received more compliments wearing this than anything I own.",
    author: 'Marcus Venn',
    role: 'Creative Director, Venn Studio',
    initials: 'MV',
    rating: 5,
    product: 'SOLÈNE',
  },
  {
    quote: "The longevity is extraordinary. I applied ABYSSAL at 8AM and a client commented on my 'beautiful scent' at 6PM. That's not a perfume — that's architecture.",
    author: 'Zara Osei',
    role: 'Fragrance Collector, London',
    initials: 'ZO',
    rating: 5,
    product: 'ABYSSAL',
  },
  {
    quote: "I've spent 20 years in the fragrance industry. LUMIÈRE is the most refined clean scent I have ever encountered. Luminoir has changed what 'clean' means.",
    author: 'Dr. Rémi Blanc',
    role: 'Perfumery Consultant, Paris',
    initials: 'RB',
    rating: 5,
    product: 'LUMIÈRE',
  },
];

const pressFeatures = [
  { name: 'Vogue', quote: '"The niche fragrance house redefining luxury"' },
  { name: 'GQ', quote: '"NOCTIS belongs in every serious collection"' },
  { name: 'Harper\'s Bazaar', quote: '"Luminoir is perfumery as fine art"' },
  { name: 'The FT', quote: '"An investment in olfactory brilliance"' },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 lg:py-44 bg-noir overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(rgba(201,169,110,0.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div>
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="w-8 h-px bg-gold/40" />
              <span className="label-luxury text-gold/50">Voices</span>
            </motion.div>
            <motion.h2
              className="font-serif text-[clamp(2.8rem,5vw,5rem)] font-light text-ivory leading-[0.9]"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Worn by those
              <br />
              who <em className="text-gold">know</em>
            </motion.h2>
          </div>

          {/* Navigation dots */}
          <motion.div
            className="flex items-center gap-3 lg:pb-3"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`transition-all duration-400 ${
                  activeIdx === i
                    ? 'w-8 h-px bg-gold'
                    : 'w-4 h-px bg-ivory/20 hover:bg-ivory/40'
                }`}
                onClick={() => setActiveIdx(i)}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </motion.div>
        </div>

        {/* Main testimonial */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-dark p-10 lg:p-16 relative overflow-hidden">
              {/* Large quote mark */}
              <div
                className="absolute top-6 right-10 font-serif text-gold/8 pointer-events-none"
                style={{ fontSize: '12rem', lineHeight: 1 }}
                aria-hidden="true"
              >
                "
              </div>

              <div className="relative z-10">
                {/* Product badge */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                  <span className="label-luxury text-gold/50">
                    {testimonials[activeIdx].product} — Verified Purchase
                  </span>
                </div>

                <blockquote className="font-serif text-[clamp(1.3rem,2.5vw,2.2rem)] font-light text-ivory/85 leading-relaxed italic mb-10 max-w-4xl">
                  "{testimonials[activeIdx].quote}"
                </blockquote>

                <div className="flex items-center gap-5">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center bg-charcoal-light">
                    <span className="font-serif text-gold/70 text-sm">{testimonials[activeIdx].initials}</span>
                  </div>
                  <div>
                    <p className="font-serif text-ivory/80 text-base">{testimonials[activeIdx].author}</p>
                    <p className="label-luxury text-ivory/30 mt-0.5" style={{ fontSize: '0.55rem' }}>
                      {testimonials[activeIdx].role}
                    </p>
                  </div>
                  {/* Stars */}
                  <div className="ml-auto flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path
                          d="M6 1l1.4 2.9 3.1.4-2.25 2.2.55 3.1L6 8.1 3.2 9.6l.55-3.1L1.5 4.3l3.1-.4z"
                          fill="rgba(201,169,110,0.8)"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Thumbnail cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-20">
          {testimonials.map((t, i) => (
            <motion.button
              key={i}
              className={`text-left p-5 border transition-all duration-500 ${
                activeIdx === i
                  ? 'border-gold/30 bg-charcoal-light'
                  : 'border-ivory/5 hover:border-gold/15'
              }`}
              onClick={() => setActiveIdx(i)}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.8 }}
            >
              <p className="label-luxury text-gold/40 mb-2" style={{ fontSize: '0.52rem' }}>
                {t.product}
              </p>
              <p className="font-serif text-sm text-ivory/60 italic leading-relaxed line-clamp-2">
                "{t.quote.substring(0, 80)}..."
              </p>
              <p className="label-luxury text-ivory/30 mt-3" style={{ fontSize: '0.5rem' }}>
                — {t.author}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Press features */}
        <div className="divider-gold mb-12" />
        <motion.div
          className="flex flex-wrap items-center justify-between gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 1 }}
        >
          {pressFeatures.map((press, i) => (
            <motion.div
              key={press.name}
              className="flex flex-col gap-1"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + i * 0.1, duration: 0.8 }}
            >
              <p className="font-serif text-xl font-light text-ivory/25 tracking-wide">{press.name}</p>
              <p className="font-serif text-xs italic text-gold/40">{press.quote}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
