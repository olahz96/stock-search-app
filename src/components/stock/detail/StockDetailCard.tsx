import { Card } from '@/components/layout/Card'
import React from 'react'

type StockDetailCardProps = {
  title: string
  value: string | undefined
  icon?: React.ReactNode
}

export const StockDetailCard = ({ title, value, icon }: StockDetailCardProps) => {
  return (
    <Card>
      <h2 className="text-xl font-bold flex items-center gap-2">
        {icon ? icon : null}
        <span>{title}</span>
      </h2>
      <p className="text-md mt-2">{value ?? 'N/A'}</p>
    </Card>
  )
}
