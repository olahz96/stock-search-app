'use client'

import { RotateCcw } from 'lucide-react'

type ErrorPageProps = {
  reset: () => void
}

const ErrorPage = ({ reset }: ErrorPageProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-12">
      <h1 className="text-3xl text-red-600 font-bold">There are issues loading the page.</h1>
      <button className="bg-foreground rounded-lg p-3 cursor-pointer text-bold text-background flex items-center justify-center gap-2" onClick={() => reset()}>
        <RotateCcw size={16} />
        Try again
      </button>
    </div>
  )
}

export default ErrorPage
