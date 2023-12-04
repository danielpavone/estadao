import { NavLink } from 'react-router-dom'
import { NewsContainer, NewsCard, PublishedAt } from './styles'
import formatDate from '../../utils/date'

type News = {
  newsId: string
  title: string
  content: string
  date: Date
}

export default function NewsList ({news}: any) {
  return (
    <NewsContainer>
      {news.map((item: News) => (
        <NewsCard key={item.newsId}>
          <NavLink to={`/news/${item.newsId}`}>{item.title}</NavLink>
          <PublishedAt>{formatDate(item.date)}</PublishedAt>
        </NewsCard>
      ))}
    </NewsContainer>
  )
}