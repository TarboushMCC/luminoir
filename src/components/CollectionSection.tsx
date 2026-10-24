'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import PerfumeBottle from './PerfumeBottle';

const products = [
  {
    id: 'noctis',
    name: 'NOCTIS',
    subtitle: 'The Night Equation',
    price: '320',
    size: '50ml',
    topNotes: ['Black Pepper', 'Bergamot'],
    heartNotes: ['Aged Oud', 'Vetiver'],
    baseNotes: ['Sandalwood', 'Amber'],
    description: 'A meditation on solitude. Dark, resinous, and unapologetically intense. NOCTIS was composed for those who find beauty in the hours after midnight.',
    accent: '#C9A96E',
    mood: 'Dark · Intense · Resinous',
  },
  {
    id: 'solene',
    name: 'SOLÈNE',
    subtitle: 'The Rose Equation',
    price: '285',
    size: '50ml',
    topNotes: ['Turkish Rose', 'Lychee'],
    heartNotes: ['Iris', 'Jasmine Sambac'],
    baseNotes: ['Ambergris', 'White Musk'],
    description: 'Femininity distilled to its most essential form. SOLÈNE is the warmth of sunrise captured in a crystal vessel — soft power, defined.',
    accent: '#D4A0A0',
    mood: 'Floral · Sensual · Luminous',
  },
  {
    id: 'abyssal',
    name: 'ABYSSAL',
    subtitle: 'The Ocean Equation',
    price: '295',
    size: '50ml',
    topNotes: ['Sea Salt', 'Grapefruit'],
    heartNotes: ['Driftwood', 'Aquatic Accord'],
    baseNotes: ['Dark Musk', 'Cedarwood'],
    description: 'Inspired by the architecture of the deep ocean. ABYSSAL moves between cold clarity and warm depths, a fragrance built for those who seek the edge.',
    accent: '#7A9EB5',
    mood: 'Aquatic · Deep · Mysterious',
  },
  {
    id: 'lumiere',
    name: 'LUMIÈRE',
    subtitle: 'The Light Equation',
    price: '265',
    size: '50ml',
    topNotes: ['Bergamot', 'Neroli'],
    heartNotes: ['White Tea', 'Orris'],
    baseNotes: ['Cedarwood', 'Muslin'],
    description: 'If light had a scent, it would be LUMIÈRE. Ethereal, weightless, and blindingly clean — the first breath of morning, bottled.',
    accent: '#E8D5A8',
    mood: 'Ethereal · Clean · Elevated',
  },
];

function NoteChip({ note }: { note: string }) {
  return (
    <span className="inline-block px-2 py-0.5 text-ivory/40 border border-ivory/10 rounded-sm" style={{ fontSize: '0.6rem', letterSpacing: '0.1em' }}>
      {note}
    </span>
  );
}

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-10%' });

  return (
    <motion.div
      ref={cardRef}
      className="group relative flex flex-col cursor-pointer"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor="VIEW"
    >
      {/* Card container */}
      <div className="relative overflow-hidden bg-charcoal/50 border border-ivory/5 group-hover:border-gold/20 transition-colors duration-700">
        {/* Hover glow */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at 50% 80%, ${product.accent}10 0%, transparent 60%)`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>

        {/* Bottle area */}
        <div className="relative flex items-end justify-center pt-12 pb-6 overflow-hidden"
          style={{ minHeight: '320px' }}
        >
          {/* Atmospheric bg gradient */}
          <div
            className="absolute inset-0 opacity-20 transition-opacity duration-700 group-hover:opacity-40"
            style={{ background: `radial-gradient(ellipse at 50% 100%, ${product.accent}25 0%, transparent 65%)` }}
          />

          <motion.div
            animate={hovered ? {
              y: -12,
              filter: 'drop-shadow(0 20px 40px rgba(201,169,110,0.2))',
            } : {
              y: 0,
              filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.5))',
            }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <PerfumeBottle name={product.name} variant="card" />
          </motion.div>
        </div>

        {/* Product info */}
        <div className="p-6 border-t border-ivory/5">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="label-luxury text-gold/60 mb-1" style={{ fontSize: '0.55rem' }}>
                {product.subtitle}
              </p>
              <h3 className="font-serif text-2xl font-light text-ivory tracking-[0.12em]">
                {product.name}
              </h3>
            </div>
            <div className="text-right">
              <p className="font-serif text-xl font-light text-ivory/80">${product.price}</p>
              <p className="label-luxury text-ivory/30" style={{ fontSize: '0.5rem' }}>{product.size}</p>
            </div>
          </div>

          {/* Mood */}
          <p className="label-luxury text-gold/40 mb-3" style={{ fontSize: '0.52rem' }}>
            {product.mood}
          </p>

          {/* Notes */}
          <div className="flex flex-wrap gap-1 mb-5">
            {[...product.topNotes, ...product.heartNotes].slice(0, 4).map(note => (
              <NoteChip key={note} note={note} />
            ))}
          </div>

          {/* Description - revealed on hover */}
          <AnimatePresence>
            {hovered && (
              <motion.p
                className="prose-luxury text-xs mb-5"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
              >
                {product.description}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Add to cart */}
          <motion.button
            className="btn-luxury w-full flex items-center justify-center gap-3 py-3.5 border border-gold/30 text-gold/70 hover:text-ivory hover:bg-gold/8 hover:border-gold/60 transition-all duration-500"
            whileTap={{ scale: 0.98 }}
          >
            <span>Add to Collection</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function CollectionSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: '-10%' });

  return (
    <section id="collection" className="relative py-28 lg:py-40 bg-noir">
      {/* Subtle divider */}
      <div className="divider-gold mb-0" />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div>
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="w-8 h-px bg-gold/40" />
              <span className="label-luxury text-gold/50">Signature Collection</span>
            </motion.div>
            <motion.h2
              className="font-serif text-[clamp(3rem,6vw,6rem)] font-light text-ivory leading-[0.9]"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              The Four
              <br />
              <em className="text-gold">Equations</em>
            </motion.h2>
          </div>
          <motion.p
            className="prose-luxury max-w-xs lg:pb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 1 }}
          >
            Each fragrance solves a different question of identity.
            Which one answers yours?
          </motion.p>
        </div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* View all */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a
            href="#"
            className="btn-luxury group flex items-center gap-3 px-10 py-4 border border-ivory/15 text-ivory/50 hover:text-ivory hover:border-ivory/30 transition-all duration-500"
          >
            <span>View All Fragrances</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
