// tests/frontend.test.js
const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

describe("Meme Generator Frontend", () => {
  let dom;
  let document;

  beforeAll(() => {
    const html = fs.readFileSync(
      path.resolve(__dirname, "../frontend/index.html"),
      "utf8"
    );
    dom = new JSDOM(html);
    document = dom.window.document;
  });

  it("should have a search input for images", () => {
    const searchInput = document.querySelector("#search-input");
    expect(searchInput).not.toBeNull();
  });

  it("should have a canvas for the meme", () => {
    const canvas = document.querySelector("#meme-canvas");
    expect(canvas).not.toBeNull();
  });
});
