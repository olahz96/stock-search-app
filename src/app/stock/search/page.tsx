'use client'
import { SearchInput } from '@/components/stock/search/SearchInput'
import { SearchResults } from '@/components/stock/search/SearchResult'
import { useDebounce } from '@/hooks/useDebounce'
import { searchSymbolsOptions } from '@/utils/queryOptions'
import { useQuery } from '@tanstack/react-query'
import React, { useDeferredValue, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const StockSearchPage = () => {
  const [symbol, setSymbol] = useState<string>('')
  const debouncedSymbol = useDebounce(symbol)

  const { data, error, isLoading } = useQuery(searchSymbolsOptions(debouncedSymbol))

  useEffect(() => {
    if (error) {
      toast.error(error.message)
    }
  }, [error])

  return (
    <div className="flex flex-col items-center mt-20">
      <div className="w-full max-w-xl relative">
        <SearchInput id="stock-search-input" placeholder="Search stocks..." value={symbol} onChange={e => setSymbol(e.target.value)} />
        {debouncedSymbol ? <SearchResults loading={isLoading} results={data} /> : null}
      </div>
    </div>
  )
}

export default StockSearchPage
