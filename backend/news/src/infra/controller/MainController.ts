import CreateNews from "../../application/usecase/CreateNews";
import DeleteNews from "../../application/usecase/DeleteNews";
import GetAllActiveNews from "../../application/usecase/GetAllActiveNews";
import GetNews from "../../application/usecase/GetNews";
import UpdateNews from "../../application/usecase/UpdateNews";
import HttpServer from "../http/HttpServer";

export default class MainController {
  constructor(readonly httpServer: HttpServer, createNews: CreateNews, getAllActiveNews: GetAllActiveNews, getNews: GetNews, updateNews: UpdateNews, deleteNews: DeleteNews) {
    httpServer.on("post", "/news", async function (params: any, body: any) {
      try {
        const output = await createNews.execute(body);
        return output;
      } catch (err: any) {
        return { error: err.message }
      }
    });

    httpServer.on("get", "/news", async function (params: any, body: any) {
      try {
        const output = await getAllActiveNews.execute();
        return output;
      } catch (err: any) {
        return { error: err.message }
      }
    });

    httpServer.on("get", "/news/:newsId", async function (params: any, body: any) {
      try {
        const output = await getNews.execute(params.newsId);
        return output;
      } catch (err: any) {
        return { error: err.message }
      }
    });

    httpServer.on("put", "/news", async function (params: any, body: any) {
      try {
        const output = await updateNews.execute(body);
        return output;
      } catch (err: any) {
        return { error: err.message }
      }
    });

    httpServer.on("delete", "/news", async function (params: any, body: any) {
      try {
        const output = await deleteNews.execute(body);
        return output;
      } catch (err: any) {
        return { error: err.message }
      }
    });
  }
}