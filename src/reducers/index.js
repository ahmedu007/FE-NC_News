import { combineReducers } from "redux";

import articles from "./articles.reducer";
import eachArticle from "./eachArticle.reducer";
import topics from "./topics.reducer";

const reducer = combineReducers({
  articles,
  eachArticle,
  topics
});

export default reducer;
