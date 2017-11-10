import axios from "axios";
import * as types from "./types";

const API_URL = "https://s-sharda-nc.herokuapp.com/api";

export const fetchArticlesRequest = () => ({
  type: types.FETCH_ARTICLES_REQUEST
});

export const fetchArticlesSuccess = data => ({
  type: types.FETCH_ARTICLES_SUCCESS,
  payload: data
});

export const fetchArticlesFailure = error => ({
  type: types.FETCH_ARTICLES_FAILURE,
  payload: error
});

export default () => {
  return dispatch => {
    dispatch(fetchArticlesRequest());
    return axios
      .get(`${API_URL}/articles`)
      .then(res => {
        dispatch(fetchArticlesSuccess(res.data.articles));
      })
      .catch(error => {
        dispatch(fetchArticlesFailure(error.message));
      });
  };
};
