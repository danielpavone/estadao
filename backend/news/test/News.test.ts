import News from "../src/domain/News";

test("should create a news", async function () {
  const input: any = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper. Quam nulla porttitor massa id neque. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Diam ut venenatis tellus in metus vulputate eu scelerisque.",
    date: new Date()
  }
  const news = News.create(input.title, input.content, input.date);
  expect(news.isActive()).toBeTruthy();
});

test("should inactive a news", async function () {
  const input: any = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper. Quam nulla porttitor massa id neque. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Diam ut venenatis tellus in metus vulputate eu scelerisque.",
    date: new Date()
  }
  const news = News.create(input.title, input.content, input.date);
  news.updateActive(false);
  expect(news.isActive()).toBeFalsy();
});

test("should update a news", async function () {
  const input: any = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper. Quam nulla porttitor massa id neque. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Diam ut venenatis tellus in metus vulputate eu scelerisque.",
    date: new Date()
  }
  const news = News.create(input.title, input.content, input.date);
  news.updateTitle("Lorem Ipsum");
  expect(news.getTitle()).toBe("Lorem Ipsum");
});

test("should update a content", async function () {
  const input: any = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper. Quam nulla porttitor massa id neque. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Diam ut venenatis tellus in metus vulputate eu scelerisque.",
    date: new Date()
  }
  const news = News.create(input.title, input.content, input.date);
  news.updateContent("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper.");
  expect(news.getContent()).toBe("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper.");
});

test("shouldn't create a news with empty title", async function () {
  const input: any = {
    title: "",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper. Quam nulla porttitor massa id neque. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Diam ut venenatis tellus in metus vulputate eu scelerisque.",
    date: new Date()
  }
  expect(() => News.create(input.title, input.content, input.active)).toThrow(new Error('Invalid title'));
});

test("shouldn't create a news with empty content", async function () {
  const input: any = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    content: "",
    date: new Date()
  }
  expect(() => News.create(input.title, input.content, input.active)).toThrow(new Error('Invalid content'));
});