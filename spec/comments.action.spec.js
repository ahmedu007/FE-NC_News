import { expect } from "chai";
import nock from "nock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import fetchComments, {
  fetchCommentsRequest,
  fetchCommentsSuccess,
  fetchCommentsFailure
} from "../src/actions/comments.action";

import API_URL from "../src/config";
const id = `583412925905f02e4c8e6e01`;

const mockStore = configureMockStore([thunk]);

describe("async action creators", () => {
  afterEach(() => {
    nock.cleanAll();
  });
  describe("fetchComment", () => {
    it("dispatches FETCH_COMMENTS_SUCCESS when fetching ArticleById reponds with 200 and data", () => {
      nock(API_URL)
        .get(`/articles/${id}/comments`)
        .reply(200, { comment: [1, 2, 3] });

      const expectedActions = [
        fetchCommentsRequest(),
        fetchCommentsSuccess([1, 2, 3])
      ];

      const store = mockStore();

      return store.dispatch(fetchComments(id)).then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
    });
    it("dispatches FETCH_COMMENTS_FAILURE when fetching ArticleById reponds with an error", () => {
      nock(API_URL)
        .get(`/articles/${id}/comments`)
        .replyWithError({ message: "error" });

      const expectedActions = [
        fetchCommentsRequest(),
        fetchCommentsFailure("error")
      ];

      const store = mockStore();

      return store.dispatch(fetchComments(id)).then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
    });
  });
});
