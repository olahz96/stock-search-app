import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Providers } from '@/app/provider'
import { ToastContainer } from 'react-toastify'

const nunitoSans = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stock Search'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.className} antialiased flex flex-col h-screen`}>
        <Providers>
          <Header title="Stock Search APP" />
          <section className="p-6 flex-1 overflow-auto">{children}</section>
          <ToastContainer position="bottom-right" />
        </Providers>
      </body>
    </html>
  )
}
