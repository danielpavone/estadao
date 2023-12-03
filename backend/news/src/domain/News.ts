export default class News {
  private constructor(
    readonly newsId: string,
    private title: string,
    private content: string,
    private active: boolean,
    readonly date: Date
  ) {
  }

  static create(title: string, content: string, date: Date) {
    if (!title) throw new Error("Invalid title");
    if (!content) throw new Error("Invalid content");
    const newsId = crypto.randomUUID();
    const active = true;
    return new News(newsId, title, content, active, date);
  }

  static restore(newsId: string, title: string, content: string, active: boolean, date: Date) {
    if (!title) throw new Error("Invalid title");
    if (!content) throw new Error("Invalid content");
    return new News(newsId, title, content, active, date);
  }

  updateTitle(title: string) {
    this.title = title;
  }

  updateContent(content: string) {
    this.content = content;
  }

  updateActive(active: boolean) {
    this.active = active;
  }

  getTitle() {
    return this.title;
  }

  getContent() {
    return this.content
  }

  isActive() {
    return this.active;
  }
}