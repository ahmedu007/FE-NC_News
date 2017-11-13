import React from "react";

class CommentForm extends React.Component {
  componentDidUpdate() {}
  render() {
    return (
      <div className="field">
        <form>
          <div className="control">
            <textarea
              className="textarea is-success"
              type="text"
              placeholder="Add a public Comment"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CommentForm;
