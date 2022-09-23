const { shuffleArray } = require("./utils");

describe("shuffleArray should", () => {
  test("should return an array", (arr) => {
    expect(shuffleArray.shuffleArray(arr).toBe(arr));
  });
});
