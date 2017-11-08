import React from "react";
import { connect } from "react-redux";

import fetchArticles from "../actions/articles.action";

class Homepage extends React.Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    const { articles, loading, error } = this.props;
    return (
      <div>
        HELLO
        <p>WTF</p>
      </div>
    );
  }
}

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
