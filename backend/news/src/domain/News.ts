export default class News {
  private constructor(
    readonly newsId: string,
    private title: string,
    private body: string,
    private active: boolean,
    readonly date: Date
  ) {
  }

  static create(title: string, body: string, date: Date) {
    if (!title) throw new Error("Invalid title");
    if (!body) throw new Error("Invalid body");
    const newsId = crypto.randomUUID();
    const active = true;
    return new News(newsId, title, body, active, date);
  }

  static restore(newsId: string, title: string, body: string, active: boolean, date: Date) {
    return new News(newsId, title, body, active, date);
  }

  updateTitle(title: string) {
    this.title = title;
  }

  updateBody(body: string) {
    this.body = body;
  }

  disableNews() {
    this.active = false;
  }

  getTitle() {
    return this.title;
  }

  getBody() {
    return this.body
  }

  isActive() {
    return this.active;
  }
}