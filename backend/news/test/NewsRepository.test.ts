import News from "../src/domain/News";
import Connection from "../src/infra/database/Connection";
import PgPromiseAdapter from "../src/infra/database/PgPromiseAdapter";
import NewsRepository from "../src/infra/repository/NewsRepositoryDatabase";

let connection: Connection;
let newsRepository: NewsRepository;

beforeEach(async function () {
  connection = new PgPromiseAdapter();
  newsRepository = new NewsRepository(connection);
});

test("should create a entry on news table and check by id", async function () {
  const input: any = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper. Quam nulla porttitor massa id neque. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Diam ut venenatis tellus in metus vulputate eu scelerisque.",
    date: new Date()
  }
  const news = News.create(input.title, input.content, input.date);
  await newsRepository.save(news);
  const savedNews = await newsRepository.getById(news.newsId);
  expect(savedNews?.newsId).toBeDefined();
  expect(savedNews?.getTitle()).toBe(input.title);
  expect(savedNews?.getContent()).toBe(input.content);
  expect(savedNews?.isActive).toBeTruthy();
  expect(savedNews?.date).toBeDefined();
});

test("should list all active news", async function () {
  const news = await newsRepository.list();
  expect(Array.isArray(news)).toBe(true);
  expect(news[0]).toHaveProperty('news_id');
  expect(news[0]).toHaveProperty('title');
  expect(news[0]).toHaveProperty('content');
  expect(news[0]).toHaveProperty('active');
  expect(news[0]).toHaveProperty('date');
});

test("should create a entry on news table and update title and content", async function () {
  const input: any = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper. Quam nulla porttitor massa id neque. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Diam ut venenatis tellus in metus vulputate eu scelerisque.",
    date: new Date()
  }
  const news = News.create(input.title, input.content, input.date);
  await newsRepository.save(news);
  const savedNews = await newsRepository.getById(news.newsId);
  savedNews?.updateTitle("Olá, Mundo");
  savedNews?.updateContent("Lorem Ipsum");
  savedNews?.updateActive(false);
  newsRepository.update(savedNews as News);
  const updatedNews = await newsRepository.getById(news.newsId);
  expect(updatedNews?.getTitle()).toBe("Olá, Mundo");
  expect(updatedNews?.getContent()).toBe("Lorem Ipsum");
  expect(updatedNews?.isActive()).toBeFalsy();
});

test("should create a entry on news table and delete", async function () {
  const input: any = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper. Quam nulla porttitor massa id neque. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Diam ut venenatis tellus in metus vulputate eu scelerisque.",
    date: new Date()
  }
  const news = News.create(input.title, input.content, input.date);
  await newsRepository.save(news);
  await newsRepository.delete(news.newsId);
  const removedNews = await newsRepository.getById(news.newsId);
  expect(removedNews).toBeUndefined();
});

afterEach(async function () {
  await connection.close();
});