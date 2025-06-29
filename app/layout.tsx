import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GeSIM',
  description: 'GeSIM lets you access mobile data globally with a crypto-native eSIM. Pay with USDC, no KYC required, works in 180+ countries.',
  generator: 'GeSIM',
  keywords: ['GeSIM', 'crypto eSIM', 'Web3 mobile data', 'global internet', 'USDC roaming', 'no KYC eSIM'],
  authors: [{ name: 'GeSIM Team' }],
  // themeColor: '#0f172a',
  viewport: 'width=device-width, initial-scale=1.0',
  icons: {
    icon: '/favicon.ico',
    // apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'GeSIM – Crypto-native Global eSIMs',
    description: 'Use mobile data worldwide with GeSIM. Simple crypto payments, no SIM swaps, no telco nonsense.',
    url: 'https://gesim.xyz',
    siteName: 'GeSIM',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GeSIM – Crypto-native eSIMs',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  )
}
