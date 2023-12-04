import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getNewsById } from '../../services/newsService'
import News from '../../components/News'

export function Details() {
  const { id } = useParams()
  const [news, setNews] = useState<any>()

  useEffect(() => {
    async function fetchNews() {
      const fetchedNews = await getNewsById(id as string)
      setNews(fetchedNews)
    }
    fetchNews()
  }, [id]);

  return (
    <News news={news}/>
  )
}
