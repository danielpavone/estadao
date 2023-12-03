import News from "../../domain/News";

export default interface NewsRepository {
  save(news: News): Promise<void>;
  update(news: News): Promise<void>;
  list(): Promise<News[]>;
  getById(newsId: string): Promise<News | undefined>;
  delete(newsId: string): Promise<void>;
}
