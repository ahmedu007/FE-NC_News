import React from "react";
import fetchEachArticle from "../actions/eachArticle.action";
import { connect } from "react-redux";
import fetchComments from "../actions/comments.action";
import deleteComment from "../actions/deleteComment.action";
import postComments from "../actions/postComments.action";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import VoteUpDown from "./VoteUpDown";
import { Container, Header } from "semantic-ui-react";

class EachArticle extends React.Component {
  componentDidMount() {
    this.props.fetchEachArticle(this.props.match.params.id);
    this.props.fetchComments(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.comments.length === nextProps.comments.length &&
      this.props.comments.length > 0
    ) {
      this.props.fetchComments(this.props.match.params.id);
    }
  }

  render() {
    const article = this.props.eachArticle;
    return (
      <Container text style={{ marginTop: "7em" }}>
        <Header as="h1">{article.title}</Header>
        <p>{article.body}</p>
        <p>
          Article by: <strong>{article.created_by}</strong>
        </p>
        <div style={{ textAlign: "center" }}>
          <VoteUpDown votes={article.votes} type="articles" id={article._id} />
        </div>

        {/* <div className="columns">
          <div className="column">
            <div className="box" style={{ height: "100%" }}>
              <br />
              <VoteUpDown
                votes={article.votes}
                type="articles"
                id={article._id}
              />
            </div>
          </div>
          <div className="column is-three-quarters">
            <div className="box">
              <strong>{article.title} </strong>
              <br />
              <br />
              <p>{article.body}</p>
              <br />
              <p>
                by:{" "}
                <small>
                  <strong>{article.created_by}</strong>
                </small>
              </p>
            </div>
          </div>
        </div> */}
        <br />
        <h2 style={{ fontSize: "1.5rem" }}>
          <strong>Comments</strong>
        </h2>
        <hr />
        <div>
          {this.props.comments
            .sort((a, b) => {
              return b.votes - a.votes;
            })
            .map((comment, i) => {
              return (
                <CommentList
                  comment={comment}
                  key={i}
                  deleteComment={this.props.deleteComment}
                />
              );
            })}
        </div>
        <hr />
        <CommentForm
          id={this.props.match.params.id}
          handleSubmit={this.props.postComments}
          fetchComments={this.props.fetchComments}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments.data,
  loading: state.articles.loading,
  error: state.articles.error,
  eachArticle: state.articles.data,
  deleteState: state.deleteComment.data
});

const mapDispatchToProps = dispatch => ({
  fetchEachArticle: id => {
    dispatch(fetchEachArticle(id));
  },
  fetchComments: id => {
    dispatch(fetchComments(id));
  },
  postComments: (id, comment) => {
    dispatch(postComments(id, comment)).then(res => {
      dispatch(fetchComments(id));
    });
  },
  deleteComment: id => {
    dispatch(deleteComment(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EachArticle);
