import NewsRepository from "../repository/NewsRepository";

export default class GetAllActiveNews {
  constructor(readonly newsRepository: NewsRepository) {
  }

  async execute(): Promise<Output[]> {
    const news = await this.newsRepository.list();
    if (!news) throw new Error("Resource not found");
    return news.map((newsItem: any) => {
      return {
        newsId: newsItem.news_id,
        title: newsItem.title,
        content: newsItem.content,
        active: newsItem.active,
        date: newsItem.date,
      }
    });
  }
}

type Output = {
  newsId: string,
  title: string,
  content: string,
  active: boolean,
  date: Date,
}