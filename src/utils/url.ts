export const isServer = typeof window === 'undefined'

export const getBaseURL = () => process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'

export const resolveURL = (url: string, isExternal?: boolean) => {
  // If it's a full URL or marked as external return as it is
  if (url.startsWith('http') || isExternal) {
    return url
  }

  // If it's on the server-side and is an API route
  if (isServer && url.startsWith('/api')) {
    return `${getBaseURL()}${url}`
  }

  // For client-side or absolute path return as it is
  return url
}
