import { SymbolSearchResponse } from '@/types/symbol'

export const getSymbols = async (symbol: string): Promise<SymbolSearchResponse> => {
  const response = await fetch(`/api/search?symbol=${encodeURIComponent(symbol)}`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return await response.json()
}

export const getStockQuote = async (symbol: string) => {
  const response = await fetch(`/api/quote?symbol=${encodeURIComponent(symbol)}`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return await response.json()
}
