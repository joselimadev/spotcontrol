import './globals.css';
import Providers from '@/providers/providers';
import type { Metadata } from 'next';
import { Open_Sans as OpenSans } from 'next/font/google';

const openSans = OpenSans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Spotcontrol',
  description: 'Controle avançado de músicas do Spotify',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
