import NewsRepository from "../repository/NewsRepository";
import News from "../../domain/News";

export default class CreateNews {
  constructor(readonly newsRepository: NewsRepository) {
  }

  async execute(input: Input) {
    const news = News.create(input.title, input.body, input.date);
    await this.newsRepository.save(news);
    return {
      newsId: news.newsId
    }
  }
}

type Input = {
  title: string,
  body: string,
  date: Date,
}