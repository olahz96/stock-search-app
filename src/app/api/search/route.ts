import { STOCK_MARKET_API } from '@/constants/api'
import { StockSymbol } from '@/types/symbol'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const symbol = searchParams.get('symbol')

  if (!symbol) {
    return NextResponse.json({ error: 'Symbol is required' }, { status: 400 })
  }

  try {
    const response = await fetch(`${STOCK_MARKET_API}?function=SYMBOL_SEARCH&keywords=${encodeURIComponent(symbol)}&apikey=${process.env.API_KEY}`)
    const data = await response.json()

    if (data['Error Message']) {
      return NextResponse.json({ error: data['Error Message'] }, { status: 400 })
    }

    if (data['Information']) {
      return NextResponse.json({ error: 'API call frequency limit reached' }, { status: 429 })
    }

    const results: StockSymbol[] = (data['bestMatches'] ?? []).map((match: any) => ({
      symbol: match['1. symbol'],
      name: match['2. name'],
      type: match['3. type'],
      region: match['4. region'],
      marketOpen: match['5. marketOpen'],
      marketClose: match['6. marketClose'],
      timezone: match['7. timezone'],
      currency: match['8. currency'],
      matchScore: match['9. matchScore']
    }))

    return NextResponse.json({ data: results })
  } catch (error) {
    console.error('Search API error:', error)
    return NextResponse.json({ error: 'Failed to search stocks' }, { status: 500 })
  }
}
