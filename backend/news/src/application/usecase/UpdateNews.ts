import NewsRepository from "../repository/NewsRepository";
import News from "../../domain/News";

export default class UpdateNews {
  constructor(readonly newsRepository: NewsRepository) {
  }

  async execute(input: Input) {
    const news = await this.newsRepository.getById(input.newsId)
    if (!news) throw new Error('Resource not found');
    const updateTitle = input.title ?? news.getTitle();
    const updateContent = input.content ?? news.getContent();
    const updateActive = input.active ?? news.isActive();
    news.updateTitle(updateTitle);
    news.updateContent(updateContent);
    news.updateActive(updateActive);
    const updatedNews = News.restore(news.newsId, news.getTitle(), news.getContent(), news.isActive(), news.date)
    await this.newsRepository.update(updatedNews);
    return {
      newsId: updatedNews.newsId,
      title: updatedNews.getTitle(),
      content: updatedNews.getContent(),
      active: updatedNews.isActive(),
      date: updatedNews.date,
    }
  }
}

type Input = {
  newsId: string,
  title?: string,
  content?: string,
  active?: boolean,
  date?: Date,
}