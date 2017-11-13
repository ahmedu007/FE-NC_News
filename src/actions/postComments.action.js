import axios from "axios";
import * as types from "./types";

const API_URL = "https://northcoders-news-api.herokuapp.com/api";

export const postCommentsRequest = () => ({
  type: types.FETCH_COMMENTS_REQUEST
});

export const postCommentsSuccess = data => ({
  type: types.FETCH_COMMENTS_SUCCESS,
  payload: data
});

export const postCommentsFailure = error => ({
  type: types.FETCH_COMMENTS_FAILURE,
  payload: error
});

export default id => {
  return dispatch => {
    dispatch(postCommentsRequest());
    return axios
      .post(`${API_URL}/articles/${id}/comments`)
      .then(res => {
        dispatch(postCommentsSuccess(res.data.comments));
      })
      .catch(error => {
        dispatch(postCommentsFailure(error.message));
      });
  };
};
