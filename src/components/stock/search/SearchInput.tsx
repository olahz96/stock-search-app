'use client'

import { Search } from 'lucide-react'
import React from 'react'

type SearchInputProps = React.InputHTMLAttributes<HTMLInputElement>

export const SearchInput = ({ ...props }: SearchInputProps) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <Search size={24} className="text-background " />
      </div>

      <input
        {...props}
        type="search"
        className="block w-full p-4 ps-10 text-md text-background border border-foreground rounded-xl bg-foreground placeholder:text-background"
        autoComplete="off"
      />
    </div>
  )
}
