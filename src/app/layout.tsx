import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'

const nunitoSans = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stock Search'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.className} antialiased flex flex-col h-screen`}>
        <Header title="Stock Search APP" />
        <section className="p-6 flex-1 overflow-auto">{children}</section>
      </body>
    </html>
  )
}
