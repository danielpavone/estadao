import NewsRepository from "../repository/NewsRepository";

export default class DeleteNews {
  constructor(readonly newsRepository: NewsRepository) {
  }

  async execute(newsId: string) {
    await this.newsRepository.delete(newsId);
  }
}