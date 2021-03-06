import { expect } from "chai";
import nock from "nock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import fetchEachArticle, {
  fetchEachArticleRequest,
  fetchEachArticleSuccess,
  fetchEachArticleFailure
} from "../src/actions/eachArticle.action";

import API_URL from "../src/config";

const id = "583412925905f02e4c8e6e01";
const mockStore = configureMockStore([thunk]);

describe("async action creators", () => {
  afterEach(() => {
    nock.cleanAll();
  });
  describe("fetchAllArticleById", () => {
    it("dispatches FETCH_ARTICLEBYID_SUCCESS when fetching ArticleById reponds with 200 and data", () => {
      nock(API_URL)
        .get(`/articles/${id}`)
        .reply(200, { article: ["this is the article"] });

      const expectedActions = [
        fetchEachArticleRequest(),
        fetchEachArticleSuccess("this is the article")
      ];

      const store = mockStore();

      return store.dispatch(fetchEachArticle(id)).then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
    });
    it("dispatches FETCH_ARTICLEBYID_FAILURE when fetching ArticleById reponds with an error", () => {
      nock(API_URL)
        .get("/articles/583412925905f02e4c8e6e01")
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
