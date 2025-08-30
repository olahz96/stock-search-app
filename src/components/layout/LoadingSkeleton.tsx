import cn from '@/utils/cn'
import React from 'react'

type LoadingSkeletonProps = {
  className?: string
}

const LoadingSkeleton = ({ className }: LoadingSkeletonProps) => {
  return (
    <div role="status" className={cn('flex items-center h-28 justify-center bg-gray-300 rounded-lg animate-pulse', className)}>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default LoadingSkeleton
