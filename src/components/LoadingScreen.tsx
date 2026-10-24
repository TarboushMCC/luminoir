'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'reveal' | 'done'>('loading');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setPhase('reveal'), 200);
          setTimeout(() => {
            setPhase('done');
            onComplete();
          }, 1400);
          return 100;
        }
        const increment = prev < 60 ? Math.random() * 8 + 2 : Math.random() * 4 + 1;
        return Math.min(prev + increment, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-noir overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Ambient background glow */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute inset-0 opacity-20"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(201,169,110,0.3) 0%, transparent 60%)',
              }}
              animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          {/* Brand monogram */}
          <motion.div
            className="relative flex flex-col items-center gap-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05, y: -20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Monogram circle */}
            <div className="relative">
              <motion.div
                className="w-20 h-20 rounded-full border border-gold/30 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute inset-2 rounded-full border border-gold/10" />
                {/* Rotating arc */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 80 80">
                  <circle
                    cx="40" cy="40" r="38"
                    fill="none"
                    stroke="rgba(201,169,110,0.5)"
                    strokeWidth="0.5"
                    strokeDasharray="40 200"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-gold font-serif"
                  style={{ fontSize: '2rem', fontWeight: 300, letterSpacing: '0.05em' }}
                >
                  L
                </span>
              </div>
            </div>

            {/* Brand name */}
            <div className="text-center">
              <motion.p
                className="label-luxury text-gold/60 mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Maison de Parfum
              </motion.p>
              <motion.h1
                className="font-serif text-4xl font-light tracking-[0.35em] text-ivory"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                LUMINOIR
              </motion.h1>
            </div>

            {/* Progress bar */}
            <div className="w-48 flex flex-col items-center gap-3">
              <div className="w-full h-px bg-charcoal-light overflow-hidden">
                <motion.div
                  className="h-full origin-left"
                  style={{
                    background: 'linear-gradient(90deg, #9A7A45, #C9A96E, #F0DCA0)',
                    scaleX: progress / 100,
                    transformOrigin: 'left',
                  }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>
              <motion.span
                className="label-luxury text-gold/40"
                style={{ fontSize: '0.6rem' }}
              >
                {Math.round(progress)}%
              </motion.span>
            </div>
          </motion.div>

          {/* Reveal overlay */}
          <AnimatePresence>
            {phase === 'reveal' && (
              <motion.div
                className="absolute inset-0 bg-noir"
                initial={{ scaleY: 0, originY: 1 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
