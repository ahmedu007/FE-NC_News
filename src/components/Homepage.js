import React from "react";
import { connect } from "react-redux";
import PT from "prop-types";

import fetchArticles from "../actions/articles.action";
import { NavLink } from "react-router-dom";

import Topic from "./Topics";

class Homepage extends React.Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    return (
      <div>
        <div className="container">
          {this.props.articles.map((article, i) => {
            return (
              <div className="columns">
                <div
                  className="box"
                  style={{ marginTop: "12px", marginBottom: "12px" }}
                >
                  <p>{article.votes}</p>
                  <a>
                    <i
                      class="fa fa-thumbs-o-up"
                      aria-hidden="true"
                      style={{
                        color: "green"
                      }}
                    />
                  </a>{" "}
                  <a>
                    <i
                      class="fa fa-thumbs-o-down"
                      aria-hidden="true"
                      style={{ color: "tomato" }}
                    />
                  </a>
                </div>
                <div className="column is-four-fifths">
                  <div className="box" key={i} style={{ height: "100%" }}>
                    <NavLink to={`/articles/${article._id}`} key={article._id}>
                      {article.title}
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

Homepage.propTypes = {
  articles: PT.array.isRequired,
  loading: PT.bool.isRequired,
  error: PT.any,
  fetchArticles: PT.func.isRequired
};

const mapStateToProps = state => ({
  articles: state.articles.data,
  loading: state.articles.loading,
  error: state.articles.error
});

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => {
    dispatch(fetchArticles());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
