import React from "react";
import VoteUpDown from "./VoteUpDown";

class CommentList extends React.Component {
  constructor() {
    super();
    this.handleCommentDelete = this.handleCommentDelete.bind(this);
  }

  handleCommentDelete(event) {
    this.props.deleteComment(event.target.name);
    console.log("comment deleted");
  }

  render() {
    const comment = this.props.comment;
    return (
      <div className="columns">
        <div
          className="box"
          style={{ marginTop: "12px", marginBottom: "12px" }}
        >
          <br />
          <VoteUpDown votes={comment.votes} />
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
              <p className="field">
                <input
                  type="submit"
                  className="button is-danger is-outlined"
                  onClick={this.handleCommentDelete}
                  value={`Delete`}
                  name={comment._id}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentList;
