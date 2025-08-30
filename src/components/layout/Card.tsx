import React from 'react'

type CardProps = {
  children: React.ReactNode
}

export const Card = ({ children }: CardProps) => {
  return <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">{children}</div>
}
