import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Banner from "@/components/Banner";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LGTB | Community. Growth. Development.",
  description: "Real-time analytics dashboard for monitoring high-value vaults and staking metrics on Solana",
  keywords: ["Solana", "DeFi", "Analytics", "Staking", "Cryptocurrency", "LGTB"],

  openGraph: {
    title: "LGTB | Community. Growth. Development.",
    description: "Real-time analytics dashboard for monitoring high-value vaults and staking metrics on Solana",
    url: 'https://lgtbread.com/',
    siteName: "Let's Get This Bread",
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://lgtbread.com/Header.png',
        width: 1200,
        height: 630,
        alt: 'LGTB banner',
        type: 'image/png',
      }
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: "LGTB | Community. Growth. Development.",
    description: "Real-time analytics dashboard for monitoring high-value vaults and staking metrics on Solana",
    creator: '@lgtbanalytics',
    images: ['/Header.png'],
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

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
        <Banner />
        <div className="container mx-auto">
          {children}
        </div>

      </body>
    </html>
  );
}
