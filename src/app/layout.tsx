import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'OsteoPerio | Specialist Gum and Implant Surgery in Barcelona',
  description:
    'Patient-first periodontal and implant surgery website for OsteoPerio in Barcelona, with dedicated positioning for complex cases, second opinions, referrals, and international patients.',
  keywords: [
    'periodontal surgery barcelona',
    'implant surgery barcelona',
    'gum recession treatment barcelona',
    'bone regeneration barcelona',
    'peri-implantitis barcelona',
    'specialist periodontist barcelona',
    'international dental surgery barcelona',
    'osteoperio',
  ],
  authors: [{ name: 'OsteoPerio' }],
  icons: {
    icon: '/logo.svg',
  },
  openGraph: {
    title: 'OsteoPerio | Specialist Gum and Implant Surgery in Barcelona',
    description:
      'A premium periodontal and implant surgery concept built for patients, referrals, and international care.',
    type: 'website',
    locale: 'en_US',
    siteName: 'OsteoPerio',
    url: 'https://www.osteoperio.com',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${inter.variable} antialiased`} style={{ backgroundColor: '#FAFAF5', color: '#1A1A1A' }}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
