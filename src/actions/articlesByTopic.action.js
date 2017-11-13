import axios from "axios";
import * as types from "./types";

const API_URL = "https://northcoders-news-api.herokuapp.com/api";

export const fetchArticlesByTopicRequest = () => ({
  type: types.FETCH_ARTICLES_BY_TOPIC_REQUEST
});

export const fetchArticlesByTopicSuccess = data => ({
  type: types.FETCH_ARTICLES_BY_TOPIC_SUCCESS,
  payload: data
});

export const fetchArticlesByTopicFailure = error => ({
  type: types.FETCH_ARTICLES_BY_TOPIC_FAILURE,
  payload: error
});

export default topic => {
  return dispatch => {
    dispatch(fetchArticlesByTopicRequest());
    return axios
      .get(`${API_URL}/topics/${topic}/articles`)
      .then(res => {
        dispatch(fetchArticlesByTopicSuccess(res.data.articles));
      })
      .catch(error => {
        dispatch(fetchArticlesByTopicFailure(error.message));
      });
  };
};
