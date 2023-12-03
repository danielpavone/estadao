import pgp from "pg-promise";
import Connection from "./Connection";

export default class PgPromiseAdapter implements Connection {
  connection: any;
  private databaseName: any;

  constructor() {
    this.databaseName = process.env.NODE_ENV === "production" ? "estadao" : "estadao_dev";
    this.connection = pgp()(`postgres://postgres:postgres@database_${process.env.NODE_ENV}:5432/${this.databaseName}`)
  }

  query(statement: string, data: any): Promise<any> {
    return this.connection.query(statement, data);
  }

  async close(): Promise<void> {
    await this.connection.$pool.end();
  }
}