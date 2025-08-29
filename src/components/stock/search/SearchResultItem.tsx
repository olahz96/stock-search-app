import { StockSymbol } from '@/types/symbol'
import Link from 'next/link'
import React from 'react'

type SearchResultItemProps = { result: StockSymbol }

export const SearchResultItem = ({ result }: SearchResultItemProps) => {
  return (
    <div key={result.symbol} className="px-4 py-2 cursor-pointer hover:bg-gray-100">
      <Link href={`/stock/${encodeURIComponent(result.symbol)}`}>
        {result.name} ({result.symbol})
      </Link>
    </div>
  )
}
