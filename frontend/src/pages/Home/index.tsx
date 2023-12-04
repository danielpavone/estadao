import { useEffect, useState } from 'react'
import NewsList from '../../components/NewsList'
import { getNews } from '../../services/newsService'

export function Home() {
  const [news, setNews] = useState([])

  useEffect(() => {
    async function fetchNews() {
      const fetchedNews = await getNews();
      setNews(fetchedNews);
    }
    fetchNews();
  }, [])

  return (
    <NewsList news={news} />
  )
}
