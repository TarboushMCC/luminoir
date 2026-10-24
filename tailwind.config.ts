import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        noir: '#0A0A0A',
        charcoal: {
          DEFAULT: '#1A1A1A',
          light: '#252525',
          dark: '#111111',
          mid: '#2A2A2A',
        },
        gold: {
          DEFAULT: '#C9A96E',
          light: '#E8D5A8',
          dark: '#9A7A45',
          muted: '#8B7355',
          bright: '#F0DCA0',
        },
        ivory: '#F5F0E8',
        cream: '#E8E0D0',
        silver: '#B8B4AC',
        smoke: '#6B6560',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.45em',
        luxury: '0.28em',
        editorial: '0.18em',
        brand: '0.35em',
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '0.9' }],
        '11xl': ['12rem', { lineHeight: '0.85' }],
        '12xl': ['14rem', { lineHeight: '0.8' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gold-shimmer': 'linear-gradient(105deg, transparent 40%, rgba(201,169,110,0.3) 50%, transparent 60%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      animation: {
        'float': 'float 7s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 2s infinite',
        'shimmer': 'shimmer 3.5s linear infinite',
        'pulse-gold': 'pulseGold 3s ease-in-out infinite',
        'smoke-rise': 'smokeRise 6s ease-out infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'text-reveal': 'textReveal 1.2s cubic-bezier(0.16,1,0.3,1) forwards',
        'line-expand': 'lineExpand 1.5s cubic-bezier(0.16,1,0.3,1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-18px) rotate(0.5deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-0.5deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 30px rgba(201,169,110,0.15), 0 0 60px rgba(201,169,110,0.05)' },
          '50%': { boxShadow: '0 0 60px rgba(201,169,110,0.35), 0 0 120px rgba(201,169,110,0.15)' },
        },
        smokeRise: {
          '0%': { transform: 'translateY(0) translateX(0) scale(1)', opacity: '0.4' },
          '50%': { transform: 'translateY(-60px) translateX(10px) scale(1.3)', opacity: '0.15' },
          '100%': { transform: 'translateY(-120px) translateX(-5px) scale(1.6)', opacity: '0' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.7' },
        },
        textReveal: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        lineExpand: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'cinematic': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '128': '32rem',
        '144': '36rem',
      },
      screens: {
        'xs': '375px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
};

export default config;
