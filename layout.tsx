import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'MAZ STRUCTURA - Expert en Rénovation en Belgique',
  description: 'MAZ STRUCTURA - Spécialistes en construction et rénovation intégrale en Belgique.',
  metadataBase: new URL('https://www.mazstructura.com'),
  openGraph: {
    title: 'MAZ STRUCTURA - Expert en Rénovation en Belgique',
    description: 'Spécialistes en construction et rénovation intégrale en Belgique.',
    url: 'https://www.mazstructura.com',
    siteName: 'MAZ STRUCTURA',
    locale: 'fr_BE',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
