type FetchAPIOptions = { url: string } & RequestInit

export const fetchAPI = async <T>({ url, ...options }: FetchAPIOptions): Promise<T> => {
  const isServer = typeof window === 'undefined'
  const headers = new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  })

  try {
    const response = await fetch(isServer ? `${process.env.NEXT_PUBLIC_URL}${url}` : url, { ...options, headers: headers })

    if (response.ok) {
      const { data } = await response.json()
      return data
    } else {
      const { error } = await response.json()
      throw new Error(error)
    }
  } catch (err) {
    throw new Error(err as any)
  }
}
