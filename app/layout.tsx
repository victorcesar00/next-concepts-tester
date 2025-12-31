import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Next.js Educational Guide',
  description: 'Learn Next.js concepts and features',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-zinc-50 dark:bg-black">
        {children}
      </body>
    </html>
  )
}


