const NEWS_API_URL = 'http://localhost:3000'

export async function getNews() {
  try {
    const response = await fetch(`${NEWS_API_URL}/news`)
    const data = await response.json();
    return data
  } catch (error) {
    return []
  }
}

export async function getNewsById(id: string) {
  try {
    const response = await fetch(`${NEWS_API_URL}/news/${id}`)
    const data = await response.json()
    return data
  } catch (error) {
    return {}
  }
}
