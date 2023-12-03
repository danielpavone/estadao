import NewsRepository from "../repository/NewsRepository";

export default class GetNews {
  constructor(readonly newsRepository: NewsRepository) {
  }

  async execute(newsId: string): Promise<Output> {
    const news = await this.newsRepository.getById(newsId);
    if (!news) throw new Error("Resource not found");
    return {
      newsId: news.newsId,
      title: news.getTitle(),
      content: news.getContent(),
      active: news.isActive(),
      date: news.date,
    }
  }
}

type Output = {
  newsId: string,
  title: string,
  content: string,
  active: boolean,
  date: Date,
}