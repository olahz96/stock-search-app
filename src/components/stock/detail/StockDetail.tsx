import { ArrowBigDown, ArrowBigUp, Banknote, CalendarClock, ChartColumnIncreasing, CircleChevronLeft, Percent, Sunrise, TrendingUpDown } from 'lucide-react'
import React from 'react'
import { StockDetailCard } from './StockDetailCard'
import { StockQuote } from '@/types/quote'

type StockDetailProps = {
  data: StockQuote | null
}

export const StockDetail = ({ data }: StockDetailProps) => {
  return (
    <section>
      <h2 className="text-3xl font-bold mt-4">{data?.symbol}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6">
        <StockDetailCard title="Open" value={data?.open} icon={<Sunrise />} />
        <StockDetailCard title="High" value={data?.high} icon={<ArrowBigUp className="text-green-500" />} />
        <StockDetailCard title="Low" value={data?.low} icon={<ArrowBigDown className="text-red-500" />} />
        <StockDetailCard title="Price" value={data?.price} icon={<Banknote />} />
        <StockDetailCard title="Volume" value={data?.volume} icon={<ChartColumnIncreasing />} />
        <StockDetailCard title="Latest trading day" value={data?.latestTradingDay} icon={<CalendarClock />} />
        <StockDetailCard title="Previous close" value={data?.previousClose} icon={<CircleChevronLeft />} />
        <StockDetailCard title="Change" value={data?.change} icon={<TrendingUpDown />} />
        <StockDetailCard title="Change percent" value={data?.changePercent} icon={<Percent />} />
      </div>
    </section>
  )
}
