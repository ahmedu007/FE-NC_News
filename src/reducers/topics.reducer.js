import * as types from "../actions/types";

export const initialState = {
  loading: true,
  error: null,
  data: [],
  topics: []
};

export default (prevState = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_TOPICS_REQUEST:
      return Object.assign({}, prevState, {
        loading: true,
        error: null,
        topics: []
      });
    case types.FETCH_ALL_TOPICS_SUCCESS:
      return Object.assign({}, prevState, {
        loading: false,
        error: null,
        topics: action.payload
      });
    case types.FETCH_ALL_TOPICS_FAILURE:
      return Object.assign({}, prevState, {
        loading: false,
        error: action.payload,
        topics: []
      });
    case types.FETCH_ARTICLES_BY_TOPIC_REQUEST:
      return Object.assign({}, prevState, {
        loading: true,
        error: null,
        data: []
      });
    case types.FETCH_ARTICLES_BY_TOPIC_SUCCESS:
      return Object.assign({}, prevState, {
        loading: false,
        error: null,
        data: action.payload
      });
    case types.FETCH_ARTICLES_BY_TOPIC_FAILURE:
      return Object.assign({}, prevState, {
        loading: false,
        error: action.payload,
        data: []
      });
    default:
      return prevState;
  }
};
