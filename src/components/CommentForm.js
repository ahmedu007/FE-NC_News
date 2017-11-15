import React from "react";
import axios from "axios";

const API_URL = "https://s-sharda-nc.herokuapp.com/api";

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
    axios
      .post(
        `${API_URL}/articles/${this.props.id}/comments`,
        this.state.newComment
      )
      .then(res => {
        console.log("New comment added: ", res);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="field">
        <form onSubmit={this.handleSubmit}>
          <div className="control">
            <textarea
              className="textarea is-warning"
              type="text"
              placeholder="Add a public Comment"
              onChange={this.handleChange}
            />
          </div>
          <br />
          <button type="submit"> Button</button>
        </form>
      </div>
    );
  }
}

export default CommentForm;
