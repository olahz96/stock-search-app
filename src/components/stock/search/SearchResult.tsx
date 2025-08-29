import { StockSymbol } from '@/types/symbol'
import React from 'react'
import { SearchResultItem } from '@/components/stock/search/SearchResultItem'

type SearchResultsProps = {
  loading: boolean
  results?: StockSymbol[]
}

export const SearchResults = ({ loading, results }: SearchResultsProps) => {
  if (!loading && (!results || results.length === 0)) return null

  return (
    <div className="absolute w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto z-10">
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <p>Loading...</p>
        </div>
      ) : results && results.length > 0 ? (
        results.map(result => <SearchResultItem key={result.symbol} result={result} />)
      ) : (
        <div className="flex justify-center items-center h-40">
          <p>No results found.</p>
        </div>
      )}
    </div>
  )
}
