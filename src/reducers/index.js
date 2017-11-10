import { combineReducers } from "redux";

import articles from "./articles.reducer";

const reducer = combineReducers({
  articles
});

export default reducer;
