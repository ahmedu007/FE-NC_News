import { expect } from "chai";
import nock from "nock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import fetchArticlesByTopic, {
  fetchArticlesByTopicRequest,
  fetchArticlesByTopicSuccess,
  fetchArticlesByTopicFailure
} from "../src/actions/articlesByTopic.action";

// const API_URL = "https://northcoders-news-api.herokuapp.com/api";
const API_URL = "https://s-sharda-nc.herokuapp.com/api";

const topic = "football";
const mockStore = configureMockStore([thunk]);

describe("async action creators", () => {
  afterEach(() => {
    nock.cleanAll();
  });
  describe("fetchAllArticleById", () => {
    it("dispatches FETCH_ARTICLES_BY_TOPIC_SUCCESS when fetching ArticleById reponds with 200 and data", () => {
      nock(API_URL)
        .get(`/topics/${topic}/articles`)
        .reply(200, { articles: [1, 2, 3] });

      const expectedActions = [
        fetchArticlesByTopicRequest(),
        fetchArticlesByTopicSuccess([1, 2, 3])
      ];

      const store = mockStore();

      return store.dispatch(fetchArticlesByTopic(topic)).then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
    });
    it("dispatches FETCH_ARTICLES_BY_TOPIC_FAILURE when fetching ArticleById reponds with an error", () => {
      nock(API_URL)
        .get(`/topics/${topic}/articles`)
        .replyWithError({ message: "error" });

      const expectedActions = [
        fetchArticlesByTopicRequest(),
        fetchArticlesByTopicFailure("error")
      ];

      const store = mockStore();

      return store.dispatch(fetchArticlesByTopic(topic)).then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
    });
  });
});
