import React from "react";
import { Form, Input, Button, Icon } from "semantic-ui-react";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newComment: { comment: "" },
      button: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    let comment = event.target.value;
    if (comment.length > 0) {
      this.setState({
        button: true
      });
    } else this.setState({ button: false });
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
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Post a comment</label>
          <Input
            placeholder="Join the conversation"
            onChange={this.handleChange}
            value={this.state.newComment.comment}
          />
        </Form.Field>
        {this.state.button ? (
          <Button animated="fade" floated="right" positive type="submit">
            <Button.Content visible>Post </Button.Content>
            <Button.Content hidden>
              <Icon name="send outline" />
            </Button.Content>
          </Button>
        ) : (
          <Button animated="fade" floated="right" positive disabled>
            <Button.Content visible>Post </Button.Content>
            <Button.Content hidden>
              <Icon name="send outline" />
            </Button.Content>
          </Button>
        )}
      </Form>
    );
  }
}

export default CommentForm;
