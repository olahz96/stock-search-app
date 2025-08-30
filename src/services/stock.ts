import { StockQuote } from '@/types/quote'
import { StockSymbol } from '@/types/search'
import { fetchAPI } from '@/utils/fetchAPI'

export const getStockSymbols = async (symbol: string) =>
  await fetchAPI<StockSymbol[]>({
    url: `/api/search?symbol=${encodeURIComponent(symbol)}`,
    cache: 'force-cache'
  })

export const getStockQuote = async (symbol: string) =>
  await fetchAPI<StockQuote>({
    url: `/api/quote?symbol=${encodeURIComponent(symbol)}`,
    cache: 'force-cache'
  })
