import { STOCK_MARKET_API } from '@/constants/api'
import { StockApiQlobalQuoteResult } from '@/types/api'
import { fetchAPI } from '@/utils/fetchAPI'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const symbol = searchParams.get('symbol')

  if (!symbol) {
    return NextResponse.json({ error: 'Symbol is required' }, { status: 400 })
  }

  try {
    const data = await fetchAPI<StockApiQlobalQuoteResult>({
      url: `${STOCK_MARKET_API}?function=GLOBAL_QUOTE&symbol=${encodeURIComponent(symbol)}&apikey=${process.env.API_KEY}`,
      isExternal: true
    })

    if (data['Error Message']) {
      return NextResponse.json({ error: data['Error Message'] }, { status: 400 })
    }

    if (data['Information']) {
      return NextResponse.json({ error: 'API call frequency limit reached' }, { status: 429 })
    }

    const globalQuote = data['Global Quote']
    const results = globalQuote
      ? {
          symbol: globalQuote['01. symbol'],
          open: globalQuote['02. open'],
          high: globalQuote['03. high'],
          low: globalQuote['04. low'],
          price: globalQuote['05. price'],
          volume: globalQuote['06. volume'],
          latestTradingDay: globalQuote['07. latest trading day'],
          previousClose: globalQuote['08. previous close'],
          change: globalQuote['09. change'],
          changePercent: globalQuote['10. change percent']
        }
      : null

    return NextResponse.json({ data: results })
  } catch (error) {
    console.error('Search API error:', error)
    return NextResponse.json({ error: 'Failed to search stocks' }, { status: 500 })
  }
}
