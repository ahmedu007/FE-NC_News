import { combineReducers } from "redux";

import articles from "./articles.reducer";
import eachArticle from "./eachArticle.reducer";
import topics from "./topics.reducer";
import articlesByTopic from "./articlesByTopic.reducer";
import comments from "./comments.reducer";
import deleteComment from "./deleteComment.reducer";

const reducer = combineReducers({
  articles,
  eachArticle,
  topics,
  articlesByTopic,
  comments,
  deleteComment
});

export default reducer;
