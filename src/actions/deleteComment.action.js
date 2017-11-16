import axios from "axios";
import * as types from "./types";

// const API_URL = "https://northcoders-news-api.herokuapp.com/api";
const API_URL = "https://s-sharda-nc.herokuapp.com/api";

export const deleteCommentRequest = () => {
  return {
    type: types.DELETE_COMMENT_REQUEST
  };
};

export const deleteCommentSuccess = comment_id => {
  return {
    type: types.DELETE_COMMENT_SUCCESS,
    comment_id: comment_id
  };
};

export const deleteCommentError = error => {
  return {
    type: types.DELETE_COMMENT_FAILURE,
    error: error
  };
};

export default comment_id => {
  return dispatch => {
    dispatch(deleteCommentRequest());
    axios
      .delete(`${API_URL}/comments/${comment_id}`)
      .then(res => {
        dispatch(deleteCommentSuccess(comment_id));
      })
      .catch(error => {
        dispatch(deleteCommentError(error));
      });
  };
};
