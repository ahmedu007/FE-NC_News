import React from "react";
import fetchEachArticle from "../actions/eachArticle.action";
import { connect } from "react-redux";
import fetchComments from "../actions/comments.action";
import CommentForm from "./CommentForm";

import axios from "axios";

const API_URL = "https://s-sharda-nc.herokuapp.com/api";

class EachArticle extends React.Component {
  constructor() {
    super();
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }
  componentDidMount() {
    this.props.fetchEachArticle(this.props.match.params.id);
    this.props.fetchComments(this.props.match.params.id);
  }

  handleCommentSubmit(comment) {
    axios
      .post(
        `${API_URL}/articles/${this.props.match.params.id}/comments`,
        comment
      )
      .then(res => {
        console.log("New comment added: ", res.data);
      })
      .then(res => {
        this.props.fetchComments(this.props.match.params.id);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const article = this.props.eachArticle;
    return (
      <div className="container">
        <div className="box">
          <div className="columns">
            <div
              className="box"
              style={{ marginTop: "12px", marginBottom: "12px" }}
            >
              <p>{article.votes}</p>
              <br />
              <p>
                <i
                  className="fa fa-thumbs-o-up"
                  aria-hidden="true"
                  style={{
                    color: "green"
                  }}
                />
              </p>
              <p>
                <i
                  className="fa fa-thumbs-o-down"
                  aria-hidden="true"
                  style={{ color: "tomato" }}
                />
              </p>
            </div>
            <div className="column is-four-fifths">
              <div className="box">
                <strong>{article.title} </strong>
                <p>{article.body}</p>
                <p>
                  <small>{article.created_by}</small>
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
            {this.props.comments.map((comment, i) => {
              return (
                <div className="columns" key={i}>
                  <div
                    className="box"
                    style={{ marginTop: "12px", marginBottom: "12px" }}
                  >
                    <span>{comment.votes}</span>
                    <br />
                    <p>
                      <i
                        className="fa fa-thumbs-o-up"
                        aria-hidden="true"
                        style={{
                          color: "green"
                        }}
                      />
                    </p>
                    <p>
                      <i
                        className="fa fa-thumbs-o-down"
                        aria-hidden="true"
                        style={{ color: "tomato" }}
                      />
                    </p>
                  </div>
                  <div>
                    <div className="column is-four-fifths">
                      <div className="box">
                        <p> {comment.body} </p>
                        <p>
                          <small>
                            comment by: <strong>{comment.created_by}</strong>
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <hr />
          <CommentForm
            id={this.props.match.params.id}
            handleSubmit={this.handleCommentSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments.data,
  loading: state.eachArticle.loading,
  error: state.eachArticle.error,
  eachArticle: state.eachArticle.data
});

const mapDispatchToProps = dispatch => ({
  fetchEachArticle: id => {
    dispatch(fetchEachArticle(id));
  },
  fetchComments: id => {
    dispatch(fetchComments(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EachArticle);
