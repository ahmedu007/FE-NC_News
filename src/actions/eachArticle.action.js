import axios from "axios";
import * as types from "./types";
import API_URL from "../config";

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
        dispatch(fetchEachArticleSuccess(res.data.article[0]));
      })
      .catch(error => {
        dispatch(fetchEachArticleFailure(error.message));
      });
  };
};
