import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Metadata} from 'next';

export const metadata: Metadata = {
    title: {
        template: '%s | Khraos',
        default: 'Home Page | Khraos',
    },
    metadataBase: new URL('https://khraos.in/'),
    alternates: {
        canonical: 'https://khraos.in/',
    }
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      <Analytics />
      <SpeedInsights />
      </body>
    </html>
  );
}
