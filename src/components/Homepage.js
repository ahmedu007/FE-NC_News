import React from "react";
import { connect } from "react-redux";
import PT from "prop-types";

import fetchArticles from "../actions/articles.action";
import { NavLink } from "react-router-dom";

class Homepage extends React.Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <br />
        </div>
        <div className="container">
          {this.props.articles.map(article => {
            return (
              <div className="box">
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
