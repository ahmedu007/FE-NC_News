import { expect } from "chai";
import nock from "nock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import postComments, {
  postCommentsRequest,
  postCommentsSuccess,
  postCommentsFailure
} from "../src/actions/postComments.action";

// const API_URL = "https://northcoders-news-api.herokuapp.com/api";
const API_URL = "https://s-sharda-nc.herokuapp.com/api";
const id = `583412925905f02e4c8e6e01`;
const comment = "hello";

const mockStore = configureMockStore([thunk]);

describe("async action creators", () => {
  afterEach(() => {
    nock.cleanAll();
  });
  describe("Post Comments", () => {
    it("dispatches POST_COMMENTS_SUCCESS when fetching ArticleById reponds with 200 and data", () => {
      nock(API_URL)
        .post(`/articles/${id}/comments`)
        .reply(200, { comments: "hello" });

      const expectedActions = [
        postCommentsRequest(),
        postCommentsSuccess("hello")
      ];

      const store = mockStore();

      return store.dispatch(postComments(id, comment)).then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
    });

    it("dispatches POST_COMMENTS_FAILURE when fetching ArticleById reponds with an error", () => {
      nock(API_URL)
        .post(`/articles/${id}/comments`)
        .replyWithError({ message: "error" });

      const expectedActions = [
        postCommentsRequest(),
        postCommentsFailure("error")
      ];

      const store = mockStore();

      return store.dispatch(postComments(id)).then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
    });
  });
});
