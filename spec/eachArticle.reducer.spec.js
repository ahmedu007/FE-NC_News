import { expect } from "chai";
import articleByIdReducer, {
  initialState
} from "../src/reducers/eachArticle.reducer";
import {
  fetchArticleById,
  fetchEachArticleRequest,
  fetchEachArticleSuccess,
  fetchEachArticleFailure
} from "../src/actions/eachArticle.action";

describe("articleById reducer", () => {
  describe("default behaviour", () => {
    it("returns the passed previous state if an unrecognised action is passed", () => {
      const action = { type: "whatever" };
      const newState = articleByIdReducer(initialState, action);
      expect(newState).to.equal(initialState);
    });
    it("uses the initial state if no previous state is passed", () => {
      const action = { type: "whatever" };
      const newState = articleByIdReducer(undefined, action);
      expect(newState).to.equal(initialState);
    });
  });
  it("handles FETCH_ARTICLEBYID_REQUEST", () => {
    const action = fetchEachArticleRequest();
    const newState = articleByIdReducer(undefined, action);
    expect(newState.loading).to.be.true;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql([]);
  });
  it("handles FETCH_ARTICLEBYID_SUCCESS", () => {
    const prevState = articleByIdReducer(undefined, fetchEachArticleRequest());
    const data = [1, 2, 3];
    const action = fetchEachArticleSuccess(data);
    const newState = articleByIdReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql(data);
  });
  it("handles FETCH_ARTICLEBYID_FAILURE", () => {
    const prevState = articleByIdReducer(undefined, fetchEachArticleRequest());
    const error = "Something went wrong";
    const action = fetchEachArticleFailure(error);
    const newState = articleByIdReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.data).to.eql([]);
  });
});
