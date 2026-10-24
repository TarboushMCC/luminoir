'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const footerLinks = {
  Fragrances: ['NOCTIS', 'SOLÈNE', 'ABYSSAL', 'LUMIÈRE', 'Gift Sets'],
  'The House': ['Our Story', 'Atelier', 'Sustainability', 'Careers', 'Press'],
  Services: ['Sample Program', 'Bespoke', 'Engraving', 'Consultations'],
  Legal: ['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'Accessibility'],
};

const socialLinks = [
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'Pinterest',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.88 6.42 9.34-.09-.78-.17-1.99.04-2.84.18-.77 1.23-5.21 1.23-5.21s-.31-.63-.31-1.57c0-1.47.85-2.57 1.91-2.57.9 0 1.34.68 1.34 1.49 0 .91-.58 2.27-.88 3.53-.25 1.06.52 1.91 1.56 1.91 1.87 0 3.13-2.39 3.13-5.22 0-2.16-1.46-3.67-3.55-3.67-2.42 0-3.84 1.82-3.84 3.7 0 .73.28 1.52.63 1.95.07.08.08.16.06.24l-.23.96c-.04.15-.13.19-.29.11-1.06-.5-1.72-2.06-1.72-3.32 0-2.69 1.96-5.17 5.65-5.17 2.97 0 5.27 2.11 5.27 4.94 0 2.94-1.86 5.31-4.44 5.31-.87 0-1.68-.45-1.96-1l-.53 1.98c-.19.74-.71 1.67-1.06 2.23.8.25 1.65.38 2.53.38 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: '-5%' });

  return (
    <footer
      ref={footerRef}
      className="relative bg-charcoal-dark border-t border-gold/8 pt-20 pb-10 overflow-hidden"
    >
      {/* Ambient top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.3), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
        {/* Top — Brand + Nav */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 mb-20">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Monogram */}
              <div className="relative w-14 h-14 mb-8">
                <div className="absolute inset-0 rounded-full border border-gold/20" />
                <div className="absolute inset-2 rounded-full border border-gold/8" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-2xl font-light text-gold/60">L</span>
                </div>
              </div>

              <p className="label-luxury text-gold/40 mb-1" style={{ fontSize: '0.55rem' }}>
                Maison de Parfum
              </p>
              <h2 className="font-serif text-3xl font-light tracking-[0.3em] text-ivory/80 mb-6">
                LUMINOIR
              </h2>
              <p className="prose-luxury text-xs max-w-[260px] mb-8">
                Crafting intimate, irreducible fragrances for those who inhabit
                the space between darkness and light.
              </p>

              {/* Social links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-ivory/30 hover:text-gold transition-colors duration-400 p-2"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([category, links], colIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + colIdx * 0.08, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="label-luxury text-gold/50 mb-6">{category}</p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="prose-luxury text-xs hover:text-ivory/80 transition-colors duration-300 group flex items-center gap-2"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider-gold mb-8" />

        {/* Bottom row */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="label-luxury text-ivory/20" style={{ fontSize: '0.52rem' }}>
            © 2024 LUMINOIR. All rights reserved. Paris, France.
          </p>

          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-gold/30" />
            <p className="label-luxury text-ivory/20" style={{ fontSize: '0.52rem' }}>
              Crafted with intention · Free shipping on orders over $250
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
