import { resolveURL } from '@/utils/url'

type FetchApiOptions = { url: string; isExternal?: boolean } & RequestInit

export const fetchAPI = async <T>({ url, isExternal = false, ...options }: FetchApiOptions): Promise<T> => {
  const headers = new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  })

  try {
    const resolvedURL = resolveURL(url, isExternal)
    const response = await fetch(resolvedURL, { ...options, headers: headers })

    if (response.ok) {
      return await response.json()
    } else {
      const { error } = await response.json()
      throw new Error(error)
    }
  } catch (err) {
    throw new Error(err as any)
  }
}
