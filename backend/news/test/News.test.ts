import News from "../src/domain/News";

test("should create a news", async function () {
  const input: any = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper. Quam nulla porttitor massa id neque. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Diam ut venenatis tellus in metus vulputate eu scelerisque.",
    date: new Date()
  }
  const news = News.create(input.title, input.body, input.date);
  expect(news.isActive()).toBeTruthy();
});

test("should inactive a news", async function () {
  const input: any = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper. Quam nulla porttitor massa id neque. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Diam ut venenatis tellus in metus vulputate eu scelerisque.",
    date: new Date()
  }
  const news = News.create(input.title, input.body, input.date);
  news.disableNews();
  expect(news.isActive()).toBeFalsy();
});

test("should update a news", async function () {
  const input: any = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper. Quam nulla porttitor massa id neque. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Diam ut venenatis tellus in metus vulputate eu scelerisque.",
    date: new Date()
  }
  const news = News.create(input.title, input.body, input.date);
  news.updateTitle("Lorem Ipsum");
  expect(news.getTitle()).toBe("Lorem Ipsum");
});

test("should update a body", async function () {
  const input: any = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper. Quam nulla porttitor massa id neque. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Diam ut venenatis tellus in metus vulputate eu scelerisque.",
    date: new Date()
  }
  const news = News.create(input.title, input.body, input.date);
  news.updateBody("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper.");
  expect(news.getBody()).toBe("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper.");
});

test("shouldn't create a news with empty title", async function () {
  const input: any = {
    title: "",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper. Quam nulla porttitor massa id neque. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Diam ut venenatis tellus in metus vulputate eu scelerisque.",
    date: new Date()
  }
  expect(() => News.create(input.title, input.body, input.active)).toThrow(new Error('Invalid title'));
});

test("shouldn't create a news with empty body", async function () {
  const input: any = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    body: "",
    date: new Date()
  }
  expect(() => News.create(input.title, input.body, input.active)).toThrow(new Error('Invalid body'));
});