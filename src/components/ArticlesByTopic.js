import React from "react";
import PT from "prop-types";
import { connect } from "react-redux";
import fetchArticlesByTopic from "../actions/articlesByTopic.action";
import { NavLink } from "react-router-dom";

class ArticlesByTopic extends React.Component {
  componentDidMount() {
    const topic = this.props.match.params.topic.toLowerCase();
    this.props.fetchArticlesByTopic(topic);
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.match.params.topic.toLowerCase() !==
      nextProps.match.params.topic.toLowerCase()
    ) {
      this.props.fetchArticlesByTopic(
        nextProps.match.params.topic.toLowerCase()
      );
    }
  }

  render() {
    return (
      <div className="container">
        {this.props.articlesByTopic.map((article, i) => {
          return (
            <div className="box">
              <NavLink to={`/articles/${article._id}`}>
                <section>{article.votes}</section>
                <span> {article.title}</span>
                <p>
                  <em>
                    <small>by: {article.created_by}</small>
                  </em>
                </p>
              </NavLink>
            </div>
          );
        })}
      </div>
    );
  }
}

ArticlesByTopic.propTypes = {
  articlesByTopic: PT.array.isRequired,
  loading: PT.bool.isRequired,
  error: PT.any,
  fetchArticlesByTopic: PT.func.isRequired
};

const mapStateToProps = state => ({
  articlesByTopic: state.articlesByTopic.data,
  loading: state.articlesByTopic.loading,
  error: state.articlesByTopic.error
});

const mapDispatchToProps = dispatch => ({
  fetchArticlesByTopic: topic => {
    dispatch(fetchArticlesByTopic(topic));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesByTopic);