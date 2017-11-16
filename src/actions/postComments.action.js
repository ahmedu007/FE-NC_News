import axios from "axios";
import * as types from "./types";

// const API_URL = "https://northcoders-news-api.herokuapp.com/api";
const API_URL = "https://s-sharda-nc.herokuapp.com/api";

export const postCommentsRequest = () => ({
  type: types.POST_COMMENTS_REQUEST
});

export const postCommentsSuccess = data => ({
  type: types.POST_COMMENTS_SUCCESS,
  payload: data
});

export const postCommentsFailure = error => ({
  type: types.POST_COMMENTS_FAILURE,
  payload: error
});

export default (id, comment) => {
  return dispatch => {
    dispatch(postCommentsRequest());
    return axios
      .post(`${API_URL}/articles/${id}/comments`, comment)
      .then(res => {
        console.log(res.data, comment);
      })
      .catch(error => {
        console.log(error);
        dispatch(postCommentsFailure(error));
      });
  };
};
