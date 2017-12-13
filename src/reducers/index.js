import { combineReducers } from "redux";

import articles from "./articles.reducer";
import topics from "./topics.reducer";
import comments from "./comments.reducer";
import deleteComment from "./deleteComment.reducer";

const reducer = combineReducers({
  articles,
  topics,
  comments,
  deleteComment
});

export default reducer;
