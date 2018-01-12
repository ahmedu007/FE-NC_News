import React from "react";
import PT from "prop-types";
import { connect } from "react-redux";
import fetchArticlesByTopic from "../actions/articlesByTopic.action";
import { NavLink } from "react-router-dom";
import VoteUpDown from "./VoteUpDown";
import ArticleList from "./ArticlesList";
import { Container } from "semantic-ui-react";

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
      <Container style={{ marginTop: "5rem" }}>
        {this.props.articlesByTopic.map((article, i) => {
          return <ArticleList article={article} key={i} />;
        })}
      </Container>
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
  articlesByTopic: state.topics.data,
  loading: state.topics.loading,
  error: state.topics.error
});

const mapDispatchToProps = dispatch => ({
  fetchArticlesByTopic: topic => {
    dispatch(fetchArticlesByTopic(topic));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesByTopic);
