import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Metadata} from 'next';
import { Provider as RollbarProvider } from '@rollbar/react';
import {clientConfig} from "@/app/rollbar";

export const metadata: Metadata = {
    title: {
        template: '%s | Khraos Genetor',
        default: 'Home Page | Khraos Genetor',
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
      <RollbarProvider config={clientConfig}>
          <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            {children}
          <Analytics />
          <SpeedInsights />
          </body>
        </html>
      </RollbarProvider>
  );
}
