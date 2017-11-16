import * as types from "../actions/types";

export const initialState = {
  loading: false,
  error: null,
  data: []
};

export default (prevState = initialState, action) => {
  switch (action.type) {
    case types.DELETE_COMMENT_REQUEST:
      return Object.assign({}, prevState, {
        loading: !prevState.loading,
        error: null,
        data: []
      });

    case types.DELETE_COMMENT_SUCCESS:
      return Object.assign({}, prevState, {
        loading: false,
        error: null,
        data: prevState.data.filter(comment => {
          return comment._id !== action.comment._id;
        })
      });

    case types.DELETE_COMMENT_FAILURE:
      return Object.assign({}, prevState, {
        loading: false,
        error: action.payload,
        data: []
      });
    default:
      return prevState;
  }
};
