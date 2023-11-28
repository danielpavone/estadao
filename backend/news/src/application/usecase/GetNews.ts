import NewsRepository from "../repository/NewsRepository";

export default class GetNews {
  constructor(readonly newsRepository: NewsRepository) {
  }

  async execute(newsId: string): Promise<Output> {
    const news = await this.newsRepository.getById(newsId);
    if (!news) throw new Error("Not found");
    return {
      newsId: news.newsId,
      title: news.getTitle(),
      body: news.getBody(),
      active: news.isActive(),
      date: news.date,
    }
  }
}

type Output = {
  newsId: string,
  title: string,
  body: string,
  active: boolean,
  date: Date,
}