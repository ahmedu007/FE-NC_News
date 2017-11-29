import React from "react";
import fetchEachArticle from "../actions/eachArticle.action";
import { connect } from "react-redux";
import fetchComments from "../actions/comments.action";
import deleteComment from "../actions/deleteComment.action";
import postComments from "../actions/postComments.action";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import VoteUpDown from "./VoteUpDown";

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
      <div className="container">
        <div className="columns">
          <div
            className="box"
            style={{ marginTop: "12px", marginBottom: "12px" }}
          >
            <br />
            <VoteUpDown votes={article.votes} />
          </div>
          <div className="column is-four-fifths">
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
        </div>
        <br />
        <h2>
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments.data,
  loading: state.eachArticle.loading,
  error: state.eachArticle.error,
  eachArticle: state.eachArticle.data,
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
