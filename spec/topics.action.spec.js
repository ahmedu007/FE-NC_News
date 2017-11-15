import { expect } from "chai";
import nock from "nock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import fetchTopics, {
  fetchTopicsRequest,
  fetchTopicsSuccess,
  fetchTopicsFailure
} from "../src/actions/topics.action";

// const API_URL = "https://northcoders-news-api.herokuapp.com/api";
const API_URL = "https://s-sharda-nc.herokuapp.com/api";

const mockStore = configureMockStore([thunk]);

describe("async action creators", () => {
  afterEach(() => {
    nock.cleanAll();
  });
  describe("fetchAllTopics", () => {
    it("dispatches FETCH_ALL_TOPICS_SUCCESS when fetching Topics reponds with 200 and data", () => {
      nock(API_URL)
        .get("/topics")
        .reply(200, { topics: [1, 2, 3] });

      const expectedActions = [
        fetchTopicsRequest(),
        fetchTopicsSuccess([1, 2, 3])
      ];

      const store = mockStore();

      return store.dispatch(fetchTopics()).then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
    });
    it("dispatches FETCH_ALL_TOPICS_FAILURE when fetching Topics reponds with an error", () => {
      nock(API_URL)
        .get("/topics")
        .replyWithError({ message: "error" });

      const expectedActions = [
        fetchTopicsRequest(),
        fetchTopicsFailure("error")
      ];

      const store = mockStore();

      return store.dispatch(fetchTopics()).then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
    });
  });
});
