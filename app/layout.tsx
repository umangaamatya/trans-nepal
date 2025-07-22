import './globals.css'
import { Metadata } from 'next'
import Providers from './providers'

export const metadata: Metadata = {
  title: "TransNepal - Leading Dry Port Operations",
  description: "Nepal's leading dry port operations, providing cargo handling, storage, and weighment services.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
