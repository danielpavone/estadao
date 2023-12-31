import express, { Request, Response } from "express";
import HttpServer from "./HttpServer";
import cors from "cors";

export default class ExpressAdapter implements HttpServer {
  app: any;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(cors());
  }

  on(method: string, url: string, callback: Function): void {
    this.app[method](url, async function (req: Request, res: Response) {
      const output = await callback(req.params, req.body);
      res.json(output);
    })
  }

  listen(port: number): void {
    this.app.listen(port);
  }
}