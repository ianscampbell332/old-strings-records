import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Old Strings Records',
  description: 'Done waiting. An independent label built for artists who stopped questioning and started believing.',
  openGraph: {
    title: 'Old Strings Records',
    description: 'Done waiting.',
    url: 'https://oldstringsrecords.com',
    siteName: 'Old Strings Records',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
