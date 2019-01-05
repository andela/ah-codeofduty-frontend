import { bookmark, bookmarkingFailed, bookmarkArticle } from "../actions";
import { BOOKMARK_ARTICLE, BOOKMARK_ARTICLE_FAILURE } from "../types";

describe("action creators", () => {
  it("should dispatch BOOKMARK_ARTICLE type", () => {
    expect(bookmark({}).type).toEqual(BOOKMARK_ARTICLE);
  });
  it("should dispatch BOOKMARK_ARTICLE_FAILURE type", () => {
    expect(bookmarkingFailed({}).type).toEqual(BOOKMARK_ARTICLE_FAILURE);
  });
});
