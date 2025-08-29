'use client'

import { QueryClient, QueryClientProvider, isServer } from '@tanstack/react-query'
import { ReactNode } from 'react'

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false
      }
    }
  })
}

let browserQueryClient: QueryClient | undefined = undefined

function getQueryClient() {
  if (isServer) {
    return makeQueryClient()
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient()
    return browserQueryClient
  }
}

export function Providers(props: { children: ReactNode }) {
  const queryClient = getQueryClient()

  return <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
}
