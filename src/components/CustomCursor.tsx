'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [label, setLabel] = useState('');

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const dotSpringConfig = { damping: 40, stiffness: 500, mass: 0.2 };

  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);
  const dotX = useSpring(cursorX, dotSpringConfig);
  const dotY = useSpring(cursorY, dotSpringConfig);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };
    const handleLeave = () => setIsVisible(false);
    const handleEnter = () => setIsVisible(true);

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactable = target.closest('a, button, [data-cursor]');
      if (interactable) {
        setIsHovering(true);
        const cursorLabel = (interactable as HTMLElement).dataset.cursor || '';
        setLabel(cursorLabel);
      }
    };
    const handleHoverEnd = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('a, button, [data-cursor]')) {
        setIsHovering(false);
        setLabel('');
      }
    };

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseleave', handleLeave);
    document.addEventListener('mouseenter', handleEnter);
    document.addEventListener('mouseover', handleHoverStart);
    document.addEventListener('mouseout', handleHoverEnd);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('mouseenter', handleEnter);
      document.removeEventListener('mouseover', handleHoverStart);
      document.removeEventListener('mouseout', handleHoverEnd);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999]" aria-hidden="true">
      {/* Outer ring */}
      <motion.div
        className="absolute top-0 left-0"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 2.2 : 1,
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="rounded-full border border-gold/50 flex items-center justify-center"
          style={{ width: '40px', height: '40px' }}
        >
          {label && (
            <span className="label-luxury text-gold/80" style={{ fontSize: '0.45rem', letterSpacing: '0.15em' }}>
              {label}
            </span>
          )}
        </div>
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="absolute top-0 left-0"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        <div
          className="rounded-full bg-gold"
          style={{ width: '4px', height: '4px' }}
        />
      </motion.div>
    </div>
  );
}
