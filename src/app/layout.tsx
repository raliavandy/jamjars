import './globals.css'
import type { Metadata } from 'next'

// Default metadata for SEO and browser tab
export const metadata: Metadata = {
  title: 'JamJars',
  description: 'Web Consultancy & Contracting Services',
  icons: {
    icon: '/favicon.ico', 
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
