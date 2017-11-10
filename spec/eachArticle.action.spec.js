import { expect } from "chai";
import nock from "nock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import fetchEachArticle, {
  fetchEachArticleRequest,
  fetchEachArticleSuccess,
  fetchEachArticleFailure
} from "../src/actions/eachArticle.action";

const API_URL = "https://northcoders-news-api.herokuapp.com/api";
const id = "583412925905f02e4c8e6e01";
const mockStore = configureMockStore([thunk]);

describe("async action creators", () => {
  afterEach(() => {
    nock.cleanAll();
  });
  describe("fetchEachArticle", () => {
    it.only("dispatches FETCH_EACH_ARTICLE_SUCCESS when fetching ArticleById reponds with 200 and data", () => {
      nock(API_URL)
        .get(`/articles/${id}`)
        .reply(200, { ArticleById: [1, 2, 3] });

      const expectedActions = [
        fetchEachArticleRequest(),
        fetchEachArticleSuccess({ ArticleById: [1, 2, 3] })
      ];

      const store = mockStore();

      return store.dispatch(fetchEachArticle(id)).then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
    });
    it("dispatches FETCH_EACH_ARTICLE_FAILURE when fetching ArticleById reponds with an error", () => {
      nock(API_URL)
        .get(`/articles/${id}`)
        .replyWithError({ message: "error" });

      const expectedActions = [
        fetchEachArticleRequest(),
        fetchEachArticleFailure("error")
      ];

      const store = mockStore();

      return store.dispatch(fetchEachArticle(id)).then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
    });
  });
});
