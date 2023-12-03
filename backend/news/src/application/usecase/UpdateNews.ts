import NewsRepository from "../repository/NewsRepository";
import News from "../../domain/News";

export default class UpdateNews {
  constructor(readonly newsRepository: NewsRepository) {
  }

  async execute(input: Input) {
    const news = await this.newsRepository.getById(input.newsId)
    if (!news) throw new Error('Resource not found');
    news.updateTitle(input.title);
    news.updateContent(input.content);
    news.updateActive(input.active);
    const updatedNews = News.restore(news.newsId, news.getTitle(), news.getContent(), news.isActive(), news.date)
    await this.newsRepository.update(updatedNews);
    return {
      newsId: news.newsId,
      title: news.getTitle(),
      content: news.getContent(),
      active: news.isActive(),
      date: news.date,
    }
  }
}

type Input = {
  newsId: string,
  title: string,
  content: string,
  active: boolean,
  date: Date,
}