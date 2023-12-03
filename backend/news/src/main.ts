import PgPromiseAdapter from "./infra/database/PgPromiseAdapter";
import NewsRepositoryDatabase from "./infra/repository/NewsRepositoryDatabase";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import MainController from "./infra/controller/MainController";
import CreateNews from "./application/usecase/CreateNews";
import GetNews from "./application/usecase/GetNews";
import UpdateNews from "./application/usecase/UpdateNews";
import DeleteNews from "./application/usecase/DeleteNews";

const connection = new PgPromiseAdapter();
const newsRepository = new NewsRepositoryDatabase(connection);
const createNews = new CreateNews(newsRepository);
const getNews = new GetNews(newsRepository);
const updateNews = new UpdateNews(newsRepository);
const deleteNews = new DeleteNews(newsRepository);
const httpServer = new ExpressAdapter();
new MainController(httpServer, createNews, getNews, updateNews, deleteNews);
httpServer.listen(3000);