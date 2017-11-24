import React from "react";
import { NavLink } from "react-router-dom";
import VoteUpDown from "./VoteUpDown";

class ArticlesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { article } = this.props;
    return (
      <div className="columns">
        <div className="box" style={{ marginTop: "1%", marginBottom: "1%" }}>
          <VoteUpDown votes={article.votes} />
        </div>
        <div className="column is-four-fifths">
          <div className="box" style={{ height: "100%" }}>
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
  }
}

export default ArticlesList;
