import React from "react";
import { NavLink } from "react-router-dom";
import VoteUpDown from "./VoteUpDown";

const ArticlesList = props => {
  const { article } = props;
  return (
    <div className="columns">
      <div className="column">
        <div className="box" style={{ height: "100%" }}>
          <VoteUpDown type="articles" votes={article.votes} id={article._id} />
        </div>
      </div>
      <div className="column is-three-quarters">
        <div className="box" style={{ height: "100%", fontSize: "1.2rem" }}>
          <NavLink to={`/articles/${article._id}`} key={article._id}>
            {article.title}
            <br />
            <br />
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
