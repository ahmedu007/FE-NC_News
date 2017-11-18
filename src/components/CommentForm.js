import React from "react";
import "./CommentForm.css";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newComment: { comment: "" }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    let comment = event.target.value;
    this.setState({
      newComment: { comment }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.props.id, this.state.newComment);
    this.setState({
      newComment: { comment: "" }
    });
  }

  render() {
    return (
      <div className="field">
        <form onSubmit={this.handleSubmit}>
          <div className="control">
            <input
              className="textarea is-dark"
              type="text"
              placeholder="Add a public Comment"
              onChange={this.handleChange}
              value={this.state.newComment.comment}
            />
          </div>
          <br />
          <input
            type="submit"
            className="button is-dark is-outlined"
            value="Post Comment"
            style={{ color: "white", borderColor: "white" }}
          />
        </form>
      </div>
    );
  }
}

export default CommentForm;
