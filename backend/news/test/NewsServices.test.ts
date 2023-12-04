import CreateNews from "../src/application/usecase/CreateNews";
import GetNews from "../src/application/usecase/GetNews";
import NewsRepository from "../src/application/repository/NewsRepository";
import Connection from "../src/infra/database/Connection";
import PgPromiseAdapter from "../src/infra/database/PgPromiseAdapter";
import NewsRepositoryDatabase from "../src/infra/repository/NewsRepositoryDatabase";
import DeleteNews from "../src/application/usecase/DeleteNews";
import UpdateNews from "../src/application/usecase/UpdateNews";
import GetAllActiveNews from "../src/application/usecase/GetAllActiveNews";

let createNews: CreateNews;
let getAllActiveNews: GetAllActiveNews;
let getNews: GetNews;
let updateNews: UpdateNews;
let deleteNews: DeleteNews;
let connection: Connection;
let newsRepository: NewsRepository;

beforeEach(async function () {
  connection = new PgPromiseAdapter();
  newsRepository = new NewsRepositoryDatabase(connection);
  createNews = new CreateNews(newsRepository);
  getAllActiveNews = new GetAllActiveNews(newsRepository);
  getNews = new GetNews(newsRepository);
  deleteNews = new DeleteNews(newsRepository);
  updateNews = new UpdateNews(newsRepository);
});

test("should create a news", async function () {
  const input: any = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper. Quam nulla porttitor massa id neque. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Diam ut venenatis tellus in metus vulputate eu scelerisque.",
    date: new Date()
  }
  const output = await createNews.execute(input);
  expect(output?.newsId).toBeDefined();
});

test("should create a news and return news", async function () {
  const input: any = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper. Quam nulla porttitor massa id neque. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Diam ut venenatis tellus in metus vulputate eu scelerisque.",
    date: new Date()
  }
  const output = await createNews.execute(input);
  const news = await getNews.execute(output.newsId);
  expect(news?.newsId).toBeDefined();
  expect(news?.title).toBe(input.title);
  expect(news?.content).toBe(input.content);
  expect(news?.active).toBeTruthy();
  expect(news?.date).toBeDefined();
});

test("should return all active news", async function () {
  const news = await getAllActiveNews.execute();
  expect(Array.isArray(news)).toBe(true);
  expect(news[0]).toHaveProperty('newsId');
  expect(news[0]).toHaveProperty('title');
  expect(news[0]).toHaveProperty('content');
  expect(news[0]).toHaveProperty('active');
  expect(news[0]).toHaveProperty('date');
});

test("should create a news and update", async function () {
  const input: any = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper. Quam nulla porttitor massa id neque. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Diam ut venenatis tellus in metus vulputate eu scelerisque.",
    date: new Date()
  }
  const output = await createNews.execute(input);
  const savedNews = await getNews.execute(output.newsId);
  const updatedInput = {
    newsId: savedNews.newsId,
    title: 'Lorem Ipsum',
    content: 'Lorem Ipsum Rem',
    active: savedNews.active,
    date: savedNews.date
  }
  await updateNews.execute(updatedInput);
  const getUpdatedNews = await getNews.execute(output.newsId);
  expect(getUpdatedNews.title).toBe('Lorem Ipsum');
  expect(getUpdatedNews.content).toBe('Lorem Ipsum Rem');
  expect(getUpdatedNews.active).toBeTruthy();
});

test("should create a news and update only title", async function () {
  const input: any = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper. Quam nulla porttitor massa id neque. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Diam ut venenatis tellus in metus vulputate eu scelerisque.",
    date: new Date()
  }
  const output = await createNews.execute(input);
  const savedNews = await getNews.execute(output.newsId);
  const updatedInput = {
    newsId: savedNews.newsId,
    title: 'Lorem Ipsum',
  }
  await updateNews.execute(updatedInput);
  const getUpdatedNews = await getNews.execute(output.newsId);
  expect(getUpdatedNews.title).toBe('Lorem Ipsum');

});

test("should throw an error with invalid newsId", async function () {
  await expect(() => getNews.execute(crypto.randomUUID())).rejects.toThrow(new Error("Resource not found"));
});

test("should create and delete a news", async function () {
  const input: any = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper. Quam nulla porttitor massa id neque. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Diam ut venenatis tellus in metus vulputate eu scelerisque.",
    date: new Date()
  }
  const output = await createNews.execute(input);
  await deleteNews.execute(output);
  await expect(() => getNews.execute(output.newsId)).rejects.toThrow(new Error("Resource not found"));
});

afterEach(async function () {
  connection.close();
});