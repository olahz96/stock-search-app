'use client'
import { SearchInput } from '@/components/stock/search/SearchInput'
import { SearchResults } from '@/components/stock/search/SearchResult'
import { useDebounce } from '@/hooks/useDebounce'
import { getSymbols } from '@/services/stock'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const StockSearchPage = () => {
  const [symbol, setSymbol] = useState<string>('')
  const debouncedSymbol = useDebounce(symbol)

  const { data, error, isFetching } = useQuery({
    queryKey: ['stock', debouncedSymbol],
    queryFn: () => getSymbols(debouncedSymbol),
    enabled: !!debouncedSymbol
  })

  useEffect(() => {
    if (error) {
      toast.error(error.message)
    }
  }, [error])

  return (
    <div className="flex flex-col items-center mt-20">
      <div className="w-full max-w-xl relative">
        <SearchInput id="stock-search-input" placeholder="Search stocks..." value={symbol} onChange={e => setSymbol(e.target.value)} />
        <SearchResults loading={isFetching} results={data?.data} />
      </div>
    </div>
  )
}

export default StockSearchPage
