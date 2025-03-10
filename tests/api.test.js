// tests/api.test.js
const request = require("supertest");
const { handler } = require("../netlify/functions/api");

// Increase the timeout for all tests in this file:
jest.setTimeout(10000); // 10 seconds

describe("Meme API (Unsplash) Tests", () => {
  it("should return 400 if 'query' parameter is missing", async () => {
    const res = await request(handler).get("/api/search");
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Query parameter is required");
  });

  it("should return results for a valid query", async () => {
    const res = await request(handler).get("/api/search?query=castle");
    // ...
  });
});
