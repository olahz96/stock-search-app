import { StockQuote } from '@/types/quote'
import { StockSymbol } from '@/types/search'
import { fetchAPI } from '@/utils/fetchAPI'

export const getStockSymbols = async (symbol: string) => {
  const { data } = await fetchAPI<{ data: StockSymbol[] }>({
    url: `/api/search?symbol=${encodeURIComponent(symbol)}`,
    cache: 'force-cache'
  })

  return data
}

export const getStockQuote = async (symbol: string) => {
  const { data } = await fetchAPI<{ data: StockQuote }>({
    url: `/api/quote?symbol=${encodeURIComponent(symbol)}`,
    cache: 'force-cache'
  })

  return data
}
