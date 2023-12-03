import CreateNews from "../../application/usecase/CreateNews";
import DeleteNews from "../../application/usecase/DeleteNews";
import GetNews from "../../application/usecase/GetNews";
import UpdateNews from "../../application/usecase/UpdateNews";
import HttpServer from "../http/HttpServer";

export default class MainController {
  constructor(readonly httpServer: HttpServer, createNews: CreateNews, getNews: GetNews, updateNews: UpdateNews, deleteNews: DeleteNews) {
    httpServer.on("post", "/news", async function (params: any, body: any) {
      const output = await createNews.execute(body);
      return output;
    });

    httpServer.on("get", "/news/:newsId", async function (params: any, body: any) {
      try {
        const output = await getNews.execute(params.newsId);
        return output;
      } catch (err) { }
    });

    httpServer.on("put", "/news", async function (params: any, body: any) {
      const output = await updateNews.execute(body);
      return output;
    });

    httpServer.on("delete", "/news", async function (params: any, body: any) {
      const output = await deleteNews.execute(body);
      return output;
    });
  }
}