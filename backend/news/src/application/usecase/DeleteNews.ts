import NewsRepository from "../repository/NewsRepository";

export default class DeleteNews {
  constructor(readonly newsRepository: NewsRepository) {
  }

  async execute(input: Input) {
    await this.newsRepository.delete(input.newsId);
  }
}

type Input = {
  newsId: string,
}