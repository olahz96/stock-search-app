import LoadingSkeleton from '@/components/layout/LoadingSkeleton'
import React from 'react'

const StockDetailLoading = () => {
  return (
    <section>
      <LoadingSkeleton className="h-12 w-48 mt-4" />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6">
        <LoadingSkeleton className="h-[110px]" />
        <LoadingSkeleton className="h-[110px]" />
        <LoadingSkeleton className="h-[110px]" />
        <LoadingSkeleton className="h-[110px]" />
        <LoadingSkeleton className="h-[110px]" />
        <LoadingSkeleton className="h-[110px]" />
        <LoadingSkeleton className="h-[110px]" />
        <LoadingSkeleton className="h-[110px]" />
        <LoadingSkeleton className="h-[110px]" />
      </div>
    </section>
  )
}

export default StockDetailLoading
