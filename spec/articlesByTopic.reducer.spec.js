import { expect } from "chai";
import articlesByTopic, {
  initialState
} from "../src/reducers/articlesByTopic.reducer";

import fetchArticlesByTopic, {
  fetchArticlesByTopicRequest,
  fetchArticlesByTopicSuccess,
  fetchArticlesByTopicFailure
} from "../src/actions/articlesByTopic.action";

describe("articles reducer", () => {
  describe("default behaviour", () => {
    it("returns the passed previous state if an unrecognised action is passed", () => {
      const action = { type: "whatever" };
      const newState = articlesByTopic(initialState, action);
      expect(newState).to.equal(initialState);
    });
    it("uses the initial state if no previous state is passed", () => {
      const action = { type: "whatever" };
      const newState = articlesByTopic(undefined, action);
      expect(newState).to.equal(initialState);
    });
  });
  it("handles FETCH_ARTICLES_REQUEST", () => {
    const action = fetchArticlesByTopicRequest();
    const newState = articlesByTopic(undefined, action);
    expect(newState.loading).to.be.true;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql([]);
  });
  it("handles FETCH_ARTICLES_SUCCESS", () => {
    const prevState = articlesByTopic(undefined, fetchArticlesByTopicRequest());
    const data = [1, 2, 3];
    const action = fetchArticlesByTopicSuccess(data);
    const newState = articlesByTopic(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql(data);
  });
  it("handles FETCH_ARTICLES_FAILURE", () => {
    const prevState = articlesByTopic(undefined, fetchArticlesByTopicRequest());
    const error = "Something went wrong";
    const action = fetchArticlesByTopicFailure(error);
    const newState = articlesByTopic(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.data).to.eql([]);
  });
});
