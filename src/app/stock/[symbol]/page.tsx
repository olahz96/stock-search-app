import { StockDetail } from '@/components/stock/detail/StockDetail'
import { getStockQuote } from '@/services/stock'
import React from 'react'

type StockDetailPageProps = {
  params: Promise<{ symbol: string }>
}

const StockDetailPage = async ({ params }: StockDetailPageProps) => {
  const symbolParam = (await params).symbol
  const data = await getStockQuote(symbolParam)

  return <StockDetail data={data} />
}

export default StockDetailPage
