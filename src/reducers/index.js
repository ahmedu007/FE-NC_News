import { combineReducers } from "redux";

import articles from "../actions/articles.action";

const reducer = combineReducers({
  articles
});

export default reducer;
