import News from "../../domain/News";
import NewsRepository from "../../application/repository/NewsRepository";
import Connection from "../database/Connection";

export default class NewsRepositoryDatabase implements NewsRepository {
  constructor(readonly connection: Connection) { }

  async save(news: News) {
    await this.connection.query("insert into news (news_id, title, content, active, date) values ($1, $2, $3, $4, $5)", [news.newsId, news.getTitle(), news.getContent(), news.isActive(), news.date]);
  }

  async list() {
    return await this.connection.query("select * from news where active = true order by date desc", []);
  }

  async update(news: News) {
    await this.connection.query("update news set title = $1, content = $2, active = $3 where news_id = $4", [news.getTitle(), news.getContent(), news.isActive(), news.newsId]);
  }

  async getById(newsId: string) {
    const [newsData] = await this.connection.query("select * from news where news_id = $1", [newsId]);
    if (!newsData) return;
    return News.restore(newsData.news_id, newsData.title, newsData.content, newsData.active, newsData.date);
  }

  async delete(newsId: string) {
    await this.connection.query("delete from news where news_id = $1", [newsId]);
  }
}