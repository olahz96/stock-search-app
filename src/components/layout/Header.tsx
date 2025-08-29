import React from 'react'
import { ChartLine } from 'lucide-react'

type HeaderProps = {
  title: string
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="bg-foreground p-6 flex justify-center items-center gap-2 shadow-orange-300">
      <ChartLine size={48} className="text-background" />
      <h2 className="text-background text-2xl font-bold">{title}</h2>
    </header>
  )
}
