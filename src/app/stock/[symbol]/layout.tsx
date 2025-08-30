import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function StockDetailLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
      <Link href="/stock/search" className="inline-flex gap-2 font-bold text-blue-600 hover:text-blue-800">
        <ArrowLeft />
        <span className="text-lg">Go back to search</span>
      </Link>
      {children}
    </section>
  )
}
