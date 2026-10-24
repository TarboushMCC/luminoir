'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

export default function NewsletterSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [focused, setFocused] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setState('loading');
    await new Promise(r => setTimeout(r, 1500));
    setState('success');
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-28 lg:py-40 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0A0A0A 0%, #111008 40%, #0A0A0A 100%)',
      }}
    >
      {/* Atmospheric background */}
      <div className="absolute inset-0" aria-hidden="true">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(201,169,110,0.05) 0%, transparent 60%)' }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Decorative horizontal lines */}
      <div className="absolute top-0 left-0 right-0">
        <div className="divider-gold opacity-50" />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Monogram */}
          <motion.div
            className="flex justify-center mb-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border border-gold/25" />
              <div className="absolute inset-2 rounded-full border border-gold/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-2xl font-light text-gold/70">L</span>
              </div>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.p
            className="label-luxury text-gold/50 mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            The Inner Circle
          </motion.p>
          <motion.h2
            className="font-serif text-[clamp(2.5rem,5vw,5rem)] font-light text-ivory leading-[0.9] mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            An invitation
            <br />
            <em className="text-gold">to exclusivity</em>
          </motion.h2>
          <motion.p
            className="prose-luxury mb-12 mx-auto"
            style={{ maxWidth: '400px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Join the LUMINOIR Inner Circle. First access to new releases,
            private ateliers, and fragrance compositions reserved solely for members.
          </motion.p>

          {/* Benefits */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 1 }}
          >
            {[
              { icon: '◇', text: 'Early access to new releases' },
              { icon: '◇', text: 'Exclusive member pricing' },
              { icon: '◇', text: 'Private atelier invitations' },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-2">
                <span className="text-gold/40 text-xs" aria-hidden="true">{b.icon}</span>
                <span className="label-luxury text-ivory/40" style={{ fontSize: '0.58rem' }}>{b.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Email form */}
          <AnimatePresence mode="wait">
            {state === 'success' ? (
              <motion.div
                key="success"
                className="flex flex-col items-center gap-4 py-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10l4 4 8-8" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="font-serif text-xl font-light text-ivory">Welcome to the Circle</p>
                <p className="label-luxury text-gold/50" style={{ fontSize: '0.58rem' }}>
                  Your invitation has been received. Expect a letter.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <div className={`flex flex-col sm:flex-row items-stretch border transition-colors duration-500 ${
                  focused ? 'border-gold/50' : 'border-ivory/10'
                }`}>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    placeholder="your@address.com"
                    required
                    className="flex-1 bg-transparent px-6 py-4 text-ivory/80 placeholder-ivory/20 outline-none font-sans text-sm"
                    style={{ letterSpacing: '0.05em' }}
                    aria-label="Email address"
                  />
                  <button
                    type="submit"
                    disabled={state === 'loading'}
                    className="btn-luxury px-8 py-4 bg-gold text-noir hover:bg-gold-light disabled:opacity-60 transition-colors duration-400 min-w-[140px] flex items-center justify-center gap-2"
                  >
                    {state === 'loading' ? (
                      <motion.div
                        className="w-4 h-4 border border-noir/50 border-t-noir rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                      />
                    ) : (
                      <span>Join</span>
                    )}
                  </button>
                </div>
                <p className="label-luxury text-ivory/20 mt-4" style={{ fontSize: '0.52rem' }}>
                  No spam, ever. Unsubscribe at any time. We respect your privacy.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
