import NewsRepository from "../repository/NewsRepository";
import News from "../../domain/News";

export default class UpdateNews {
  constructor(readonly newsRepository: NewsRepository) {
  }

  async execute(input: Input) {
    const news = await this.newsRepository.getById(input.newsId)
    news?.updateTitle(input.title);
    news?.updateBody(input.body);
    await this.newsRepository.update(news as News);
    return {
      newsId: news?.newsId,
      title: news?.getTitle(),
      body: news?.getBody(),
      active: news?.isActive(),
      date: news?.date,
    }
  }
}

type Input = {
  newsId: string,
  title: string,
  body: string,
  active: boolean,
  date: Date,
}