import React from "react";
import { NavLink } from "react-router-dom";
import VoteUpDown from "./VoteUpDown";
import { Grid, Segment } from "semantic-ui-react";

import "./ArticleList.css";

const ArticlesList = props => {
  const { article } = props;
  return (
    <Grid>
      <Grid.Row divided>
        <Grid.Column width={5} style={{ textAlign: "right" }}>
          <VoteUpDown type="articles" votes={article.votes} id={article._id} />
        </Grid.Column>
        <Grid.Column width={11}>
          <NavLink to={`/articles/${article._id}`} key={article._id}>
            <Segment style={{ height: "100%" }} className="article-hover">
              {article.title}
              <p>
                <em>
                  by: <strong>{article.created_by}</strong>
                </em>
              </p>
            </Segment>
          </NavLink>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row />
    </Grid>
  );
};

export default ArticlesList;
