import { combineReducers } from "redux";

import articles from "./articles.reducer";
import eachArticle from "./eachArticle.reducer";
import topics from "./topics.reducer";
import articlesByTopic from "./articlesByTopic.reducer";

const reducer = combineReducers({
  articles,
  eachArticle,
  topics,
  articlesByTopic
});

export default reducer;
