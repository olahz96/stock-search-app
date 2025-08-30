import { getStockSymbols } from '@/services/stock'
import { keepPreviousData, queryOptions } from '@tanstack/react-query'

export const searchSymbolsOptions = (symbol: string) =>
  queryOptions({
    queryKey: ['searchSymbol', symbol],
    queryFn: () => getStockSymbols(symbol),
    enabled: !!symbol,
    placeholderData: keepPreviousData
  })
