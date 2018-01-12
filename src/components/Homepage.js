import React from "react";
import { connect } from "react-redux";

import PT from "prop-types";
import ArticlesList from "./ArticlesList";
import fetchArticles from "../actions/articles.action";

import Loading from "./Loading";
import { Container } from "semantic-ui-react";

class Homepage extends React.Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    return (
      <Container style={{ marginTop: "5rem" }}>
        {this.props.loading ? (
          <Loading />
        ) : (
          <Container>
            {this.props.articles.map((article, i) => {
              return <ArticlesList article={article} key={i} />;
            })}
          </Container>
        )}
      </Container>
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
