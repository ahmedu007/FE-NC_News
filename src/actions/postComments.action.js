import axios from "axios";
import * as types from "./types";
import API_URL from "../config";

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
        dispatch(postCommentsSuccess(res.data.comment));
      })
      .catch(error => {
        dispatch(postCommentsFailure(error.message));
        console.error(error);
      });
  };
};
