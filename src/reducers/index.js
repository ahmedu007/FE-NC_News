import { combineReducers } from "redux";

import articles from "./articles.reducer";
import eachArticle from "./eachArticle.reducer";
import topics from "./topics.reducer";
import articlesByTopic from "./articlesByTopic.reducer";
import comments from "./comments.reducer";
import postComments from "./postComment.reducer";
import deleteComment from "./deleteComment.reducer";

const reducer = combineReducers({
  articles,
  eachArticle,
  topics,
  articlesByTopic,
  comments,
  postComments,
  deleteComment
});

export default reducer;
