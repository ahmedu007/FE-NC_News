import { expect } from "chai";
import comments, { initialState } from "../src/reducers/postComment.reducer";

import postComments, {
  postCommentsRequest,
  postCommentsSuccess,
  postCommentsFailure
} from "../src/actions/postComments.action";

describe("post comments reducer", () => {
  describe("default behaviour", () => {
    it("returns the passed previous state if an unrecognised action is passed", () => {
      const action = { type: "whatever" };
      const newState = comments(initialState, action);
      expect(newState).to.equal(initialState);
    });
    it("uses the initial state if no previous state is passed", () => {
      const action = { type: "whatever" };
      const newState = comments(undefined, action);
      expect(newState).to.equal(initialState);
    });
  });
  it("handles FETCH_COMMENTS_REQUEST", () => {
    const action = postCommentsRequest();
    const newState = comments(undefined, action);
    expect(newState.loading).to.be.true;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql([]);
  });
  it("handles FETCH_COMMENTS_SUCCESS", () => {
    const prevState = comments(undefined, postCommentsRequest());
    const data = [1, 2, 3];
    const action = postCommentsSuccess(data);
    const newState = comments(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql(data);
  });
  it("handles FETCH_COMMENTS_FAILURE", () => {
    const prevState = comments(undefined, postCommentsRequest());
    const error = "Something went wrong";
    const action = postCommentsFailure(error);
    const newState = comments(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.data).to.eql([]);
  });
});
