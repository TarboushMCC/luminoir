'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

export default function CampaignSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.0]);
  const imageY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%']);
  const textY = useTransform(scrollYProgress, [0.2, 0.8], [40, -40]);

  return (
    <section
      ref={sectionRef}
      id="campaign"
      className="relative overflow-hidden bg-noir"
    >
      {/* Full-width cinematic CSS visual */}
      <div className="relative h-[90vh] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ scale: imageScale, y: imageY }}
        >
          {/* Deep cinematic base */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(145deg, #0A0806 0%, #161208 25%, #0D0D0B 50%, #100E08 75%, #080806 100%)' }}
          />
          {/* Grand light sweep — left to center */}
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse 60% 100% at 20% 50%, rgba(201,169,110,0.14) 0%, rgba(160,120,60,0.05) 45%, transparent 65%)' }}
          />
          {/* Right atmospheric accent */}
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse 40% 70% at 80% 40%, rgba(140,100,40,0.1) 0%, transparent 55%)' }}
          />
          {/* Horizontal light band — like a horizon */}
          <div
            className="absolute"
            style={{
              top: '42%', left: 0, right: 0,
              height: '1px',
              background: 'linear-gradient(to right, transparent 0%, rgba(201,169,110,0.15) 20%, rgba(201,169,110,0.3) 50%, rgba(201,169,110,0.15) 80%, transparent 100%)',
            }}
          />
          {/* Vertical light columns — dramatic studio lighting effect */}
          {[12, 38, 62, 88].map((x, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${x}%`,
                top: '5%', bottom: '5%',
                width: i === 1 || i === 2 ? '2px' : '1px',
                background: `linear-gradient(to bottom, transparent, rgba(201,169,110,${i === 1 ? 0.12 : 0.04}), rgba(201,169,110,${i === 1 ? 0.08 : 0.02}), transparent)`,
                filter: 'blur(0.5px)',
              }}
            />
          ))}
          {/* Abstract geometric shapes — luxury editorial */}
          <div
            className="absolute"
            style={{
              left: '28%', top: '20%',
              width: '1px', height: '60%',
              background: 'linear-gradient(to bottom, transparent, rgba(201,169,110,0.2), transparent)',
            }}
          />
          <div
            className="absolute"
            style={{
              left: '68%', top: '25%',
              width: '1px', height: '50%',
              background: 'linear-gradient(to bottom, transparent, rgba(201,169,110,0.15), transparent)',
            }}
          />
          {/* Noise texture */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 512 512\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
            }}
          />
        </motion.div>

        {/* Edge vignettes */}
        <div
          className="absolute bottom-0 left-0 right-0 h-64"
          style={{ background: 'linear-gradient(to top, #0A0A0A, transparent)' }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-40"
          style={{ background: 'linear-gradient(to bottom, #0A0A0A, transparent)' }}
        />
        <div
          className="absolute inset-y-0 left-0 w-32"
          style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.5), transparent)' }}
        />
        <div
          className="absolute inset-y-0 right-0 w-32"
          style={{ background: 'linear-gradient(to left, rgba(10,10,10,0.5), transparent)' }}
        />

        {/* Centered overlay text */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10"
          style={{ y: textY }}
        >
          <motion.p
            className="label-luxury text-gold/60 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Campaign 2024 · "The Duality Collection"
          </motion.p>

          <div className="overflow-hidden mb-2">
            <motion.h2
              className="font-serif text-[clamp(3.5rem,8vw,9rem)] font-light text-ivory leading-[0.87]"
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.1, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            >
              Perfected by
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-10">
            <motion.h2
              className="font-serif text-[clamp(3.5rem,8vw,9rem)] font-light leading-[0.87]"
              style={{
                background: 'linear-gradient(135deg, #9A7A45 0%, #C9A96E 30%, #F0DCA0 55%, #C9A96E 80%, #9A7A45 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            >
              Light
            </motion.h2>
          </div>

          <motion.div
            className="divider-gold w-32 mb-8"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          />

          <motion.p
            className="font-serif text-lg font-light text-ivory/50 italic max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 1 }}
          >
            "We don't create fragrances. We excavate feelings that have no name."
          </motion.p>
        </motion.div>
      </div>

      {/* Below-image editorial row */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16 py-20">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
          {[
            {
              issue: 'Issue I',
              title: 'The Shadow Campaign',
              year: '2022',
              desc: 'Shot in a decommissioned Parisian lighthouse. Photographer: Chen Wei.',
            },
            {
              issue: 'Issue II',
              title: 'The Mirror Collection',
              year: '2023',
              desc: 'Exploring the space between self-reflection and dissolution. Shot in Marrakech.',
            },
            {
              issue: 'Issue III',
              title: 'The Duality Collection',
              year: '2024',
              desc: 'Light against darkness. The new campaign for the modern fragrance collector.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.issue}
              className="group flex flex-col gap-4 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.12, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="divider-gold w-full mb-2" />
              <div className="flex items-center justify-between">
                <span className="label-luxury text-gold/40">{item.issue}</span>
                <span className="label-luxury text-ivory/25">{item.year}</span>
              </div>
              <h3 className="font-serif text-2xl font-light text-ivory group-hover:text-gold/90 transition-colors duration-400">
                {item.title}
              </h3>
              <p className="prose-luxury text-xs">{item.desc}</p>
              <a
                href="#"
                className="label-luxury text-gold/40 hover:text-gold flex items-center gap-2 group-hover:gap-3 transition-all duration-400 mt-2 w-fit"
              >
                View Campaign
                <span>→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
