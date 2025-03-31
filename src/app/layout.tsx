import './globals.css';

import { Analytics } from '@vercel/analytics/next';
import Footer from '@/components/Footer';
import { Josefin_Sans } from 'next/font/google';
import type { Metadata } from 'next';
import NavBar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const josefin = Josefin_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://ismailboussekine.me'),
  title: {
    default: 'Ismail M. Boussekine',
    template: '%s | Ismail M. Boussekine',
  },
  description:
    'Welcome to my personal website, Portfolio and blog, Where I showcase my web development projects,Share insightful blog posts, and provide resources on technology and coding',
  keywords: [
    'Ismail M. Boussekine',
    'Ismail Boussekine',
    'Ismail Mohamed Boussekine',
    'Boussekine Mohamed Ismail',
    'Ismail',
    'Boussekine',
    'web development',
    'web developer',
    'blog',
    'portfolio',
    'projects',
    'technology',
    'coding',
    'ENSTA',
    'Ecole National Supérieure des Techniques Avancées',
    'National Higher School of Advanced Technologies',
  ],
  twitter: {
    images: '/opengraph-image.png',
    card: 'summary_large_image',
    creator: '@11sma31l',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Ismail M. Boussekine',
    images: {
      url: `/opengraph-image.png`,
      width: 1200,
      height: 630,
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={josefin.className}>
        <SpeedInsights />
        <Analytics />
        <Toaster />
        <ScrollToTop />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          <hr className="w-full sticky top-14 left-0 bg-muted-foreground" />
          {children}
          <hr className="w-full bg-muted-foreground" />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
