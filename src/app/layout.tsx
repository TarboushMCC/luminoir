import type { Metadata } from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LUMINOIR — Niche Luxury Fragrance',
  description: 'Born from darkness. Perfected by light. LUMINOIR crafts rare, intimate fragrances for those who seek the extraordinary.',
  keywords: 'luxury perfume, niche fragrance, haute parfumerie, exclusive scent, luxury fragrance house',
  openGraph: {
    title: 'LUMINOIR — Niche Luxury Fragrance',
    description: 'Born from darkness. Perfected by light.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="bg-noir text-ivory antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
