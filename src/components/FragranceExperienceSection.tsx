'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const fragranceNotes = {
  top: [
    { name: 'Black Pepper', origin: 'Madagascar', intensity: 85, desc: 'A sharp, spiced opening that commands immediate attention.' },
    { name: 'Bergamot', origin: 'Calabria, Italy', intensity: 70, desc: 'The bright citrus heartbeat that lifts everything around it.' },
    { name: 'Cardamom', origin: 'Guatemala', intensity: 60, desc: 'Warm, slightly sweet — the fragrance begins to breathe.' },
  ],
  heart: [
    { name: 'Aged Oud', origin: 'Laos', intensity: 95, desc: 'The rarest wood in perfumery. 30-year aged, smoky and eternal.' },
    { name: 'Bulgarian Rose', origin: 'Rose Valley, Bulgaria', intensity: 80, desc: 'Harvested before sunrise, when the oil content is at its peak.' },
    { name: 'Vetiver', origin: 'Haiti', intensity: 65, desc: 'Earthy and grounding — the soul of the fragrance.' },
  ],
  base: [
    { name: 'Ambergris', origin: 'Atlantic Waters', intensity: 90, desc: 'Oceanic, warm, and impossibly soft. A living ingredient.' },
    { name: 'Sandalwood', origin: 'Mysore, India', intensity: 75, desc: 'Creamy and meditative, the foundation that holds everything.' },
    { name: 'Tonka Bean', origin: 'Venezuela', intensity: 55, desc: 'A whisper of vanilla and coumarin that never leaves.' },
  ],
};

const noteLabels = {
  top: { label: 'Top Notes', sub: 'The first impression · 0–30 min', color: '#E8D5A8' },
  heart: { label: 'Heart Notes', sub: 'The true character · 30 min–4 hrs', color: '#C9A96E' },
  base: { label: 'Base Notes', sub: 'The memory · 4–12+ hours', color: '#9A7A45' },
};

export default function FragranceExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });
  const [activeLayer, setActiveLayer] = useState<'top' | 'heart' | 'base'>('heart');
  const [activeNote, setActiveNote] = useState<number | null>(null);

  const notes = fragranceNotes[activeLayer];
  const layerInfo = noteLabels[activeLayer];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-28 lg:py-44 bg-charcoal overflow-hidden"
    >
      {/* Atmospheric background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 80% 50%, rgba(201,169,110,0.08) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="w-8 h-px bg-gold/40" />
            <span className="label-luxury text-gold/50">The Atelier</span>
          </motion.div>
          <motion.h2
            className="font-serif text-[clamp(2.8rem,5vw,5.5rem)] font-light text-ivory leading-[0.92] mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            The Architecture
            <br />
            <em className="text-gold">of a Scent</em>
          </motion.h2>
          <motion.p
            className="prose-luxury max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 1 }}
          >
            Every LUMINOIR fragrance is built in three movements — each layer a chapter,
            each note a word in a language spoken only through the senses.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left — Layer selector */}
          <div className="lg:col-span-2 flex flex-col gap-2">
            {(Object.keys(noteLabels) as Array<keyof typeof noteLabels>).map((layer, i) => (
              <motion.button
                key={layer}
                className={`group flex items-start gap-5 p-5 text-left transition-all duration-500 border-l-2 ${
                  activeLayer === layer
                    ? 'border-gold bg-charcoal-light'
                    : 'border-transparent hover:border-gold/30 hover:bg-charcoal-light/50'
                }`}
                onClick={() => { setActiveLayer(layer); setActiveNote(null); }}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
              >
                {/* Visual indicator orbs */}
                <div className="flex flex-col items-center gap-1 pt-1">
                  {[...Array(3)].map((_, j) => (
                    <div
                      key={j}
                      className="rounded-full transition-all duration-500"
                      style={{
                        width: j === 0 ? '8px' : j === 1 ? '6px' : '4px',
                        height: j === 0 ? '8px' : j === 1 ? '6px' : '4px',
                        background: activeLayer === layer ? noteLabels[layer].color : 'rgba(201,169,110,0.2)',
                        opacity: 1 - j * 0.3,
                      }}
                    />
                  ))}
                </div>
                <div>
                  <p className={`font-serif text-xl font-light transition-colors duration-500 ${
                    activeLayer === layer ? 'text-ivory' : 'text-ivory/50'
                  }`}>
                    {noteLabels[layer].label}
                  </p>
                  <p className="label-luxury text-ivory/30 mt-1" style={{ fontSize: '0.55rem' }}>
                    {noteLabels[layer].sub}
                  </p>
                </div>
              </motion.button>
            ))}

            {/* Pyramid visualization */}
            <motion.div
              className="mt-8 flex flex-col items-center gap-1"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 1 }}
            >
              {[
                { label: 'T', w: 40, layer: 'top' },
                { label: 'H', w: 70, layer: 'heart' },
                { label: 'B', w: 100, layer: 'base' },
              ].map(({ label, w, layer }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => { setActiveLayer(layer as 'top' | 'heart' | 'base'); setActiveNote(null); }}
                >
                  <div
                    className="h-8 transition-all duration-500 flex items-center justify-center"
                    style={{
                      width: `${w}px`,
                      background: activeLayer === layer
                        ? `linear-gradient(90deg, transparent, ${noteLabels[layer as keyof typeof noteLabels].color}60, transparent)`
                        : 'rgba(201,169,110,0.08)',
                      border: `1px solid ${activeLayer === layer ? noteLabels[layer as keyof typeof noteLabels].color + '40' : 'rgba(201,169,110,0.1)'}`,
                    }}
                  >
                    <span className="label-luxury text-gold/40" style={{ fontSize: '0.45rem' }}>{label}</span>
                  </div>
                </div>
              ))}
              <p className="label-luxury text-ivory/20 mt-2" style={{ fontSize: '0.5rem' }}>
                Fragrance Pyramid
              </p>
            </motion.div>
          </div>

          {/* Right — Notes detail */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayer}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-2 h-2 rounded-full" style={{ background: layerInfo.color }} />
                  <h3 className="font-serif text-2xl font-light text-ivory">{layerInfo.label}</h3>
                  <div className="flex-1 h-px bg-gold/10" />
                </div>

                <div className="flex flex-col gap-4">
                  {notes.map((note, i) => (
                    <motion.div
                      key={note.name}
                      className={`p-5 border transition-all duration-500 cursor-pointer ${
                        activeNote === i
                          ? 'border-gold/30 bg-charcoal-light'
                          : 'border-ivory/5 hover:border-gold/15 hover:bg-charcoal/50'
                      }`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.6 }}
                      onClick={() => setActiveNote(activeNote === i ? null : i)}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className="font-serif text-lg font-light text-ivory">{note.name}</p>
                          <p className="label-luxury text-ivory/30 mt-0.5" style={{ fontSize: '0.52rem' }}>
                            {note.origin}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <p className="label-luxury text-gold/50" style={{ fontSize: '0.5rem' }}>
                              Intensity
                            </p>
                            <p className="font-serif text-lg text-gold/80">{note.intensity}%</p>
                          </div>
                          <svg
                            width="14" height="14" viewBox="0 0 14 14" fill="none"
                            className={`text-gold/40 transition-transform duration-300 ${activeNote === i ? 'rotate-180' : ''}`}
                            aria-hidden="true"
                          >
                            <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                          </svg>
                        </div>
                      </div>

                      {/* Intensity bar */}
                      <div className="w-full h-px bg-ivory/5 overflow-hidden">
                        <motion.div
                          className="h-full"
                          style={{ background: `linear-gradient(90deg, ${layerInfo.color}, ${layerInfo.color}50)` }}
                          initial={{ width: 0 }}
                          animate={{ width: `${note.intensity}%` }}
                          transition={{ delay: 0.3 + i * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        />
                      </div>

                      {/* Expanded description */}
                      <AnimatePresence>
                        {activeNote === i && (
                          <motion.p
                            className="prose-luxury text-xs mt-4"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35 }}
                          >
                            {note.desc}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
