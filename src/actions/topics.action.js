import axios from "axios";
import * as types from "./types";

const API_URL = "https://northcoders-news-api.herokuapp.com/api";

export const fetchTopicsRequest = () => ({
  type: types.FETCH_ALL_TOPICS_REQUEST
});

export const fetchTopicsSuccess = data => ({
  type: types.FETCH_ALL_TOPICS_SUCCESS,
  payload: data
});

export const fetchTopicsFailure = error => ({
  type: types.FETCH_ALL_TOPICS_FAILURE,
  payload: error
});

export default () => {
  return dispatch => {
    dispatch(fetchTopicsRequest());
    return axios
      .get(`${API_URL}/topics`)
      .then(res => {
        dispatch(fetchTopicsSuccess(res.data.topics));
      })
      .catch(error => {
        dispatch(fetchTopicsFailure(error.message));
      });
  };
};
