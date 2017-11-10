import axios from "axios";
import * as types from "./types";

const API_URL = "https://northcoders-news-api.herokuapp.com/api";

export const fetchEachArticleRequest = () => ({
  type: types.FETCH_EACH_ARTICLE_REQUEST
});

export const fetchEachArticleSuccess = data => ({
  type: types.FETCH_EACH_ARTICLE_SUCCESS,
  payload: data
});

export const fetchEachArticleFailure = error => ({
  type: types.FETCH_EACH_ARTICLE_FAILURE,
  payload: error
});

export default id => {
  return dispatch => {
    dispatch(fetchEachArticleRequest());
    return axios
      .get(`${API_URL}/articles/${id}`)
      .then(res => {
        dispatch(fetchEachArticleSuccess(res.data));
      })
      .catch(error => {
        dispatch(fetchEachArticleFailure(error.message));
      });
  };
};
