import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@/components/Providers'; // For cart state (designs on clothing)
import './globals.css'; // Styles for design previews and checkout

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Doodz Threads - Custom Print-on-Demand Gear',
  description: 'Pick designs, apply to clothing, pay with Stripe, fulfill via Printify.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<html lang="en"><body className={inter.className}><Providers>{children}</Providers></body></html>); // All on one line to nix whitespace nodes
}