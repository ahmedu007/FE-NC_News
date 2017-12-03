import React from "react";
import { NavLink } from "react-router-dom";
import VoteUpDown from "./VoteUpDown";

const ArticlesList = props => {
  const { article } = props;
  return (
    <div className="columns">
      <div className="box" style={{ marginTop: "1%", marginBottom: "1%" }}>
        <VoteUpDown type="articles" votes={article.votes} id={article._id} />
      </div>
      <div className="column is-four-fifths">
        <div className="box" style={{ height: "156px" }}>
          <NavLink to={`/articles/${article._id}`} key={article._id}>
            {article.title}
            <p>
              <small>
                <em>
                  by: <strong>{article.created_by}</strong>
                </em>
              </small>
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ArticlesList;
