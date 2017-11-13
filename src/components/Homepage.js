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
              <div className="box" key={i}>
                <NavLink to={`/articles/${article._id}`} key={article._id}>
                  {article.title}
                </NavLink>
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
