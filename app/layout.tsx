import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zeykia - Luxury Carpet Collection',
  description: 'Where Ancient Artistry Meets Contemporary Luxury. Hand-woven masterpieces by master artisans.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navigation />

        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
} 