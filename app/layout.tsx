import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TransNepal Freight Services - Nepal\'s Leading Dry Port Operations',
  description: 'TransNepal Freight Services Pvt. Ltd. - Leading provider of freight and logistics services in Nepal with operations in Biratnagar, Kakarvita, Tatopani, and Chobar.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
