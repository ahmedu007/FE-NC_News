import React from "react";
import VoteUpDown from "./VoteUpDown";
import { Grid, Icon, Button } from "semantic-ui-react";

class CommentList extends React.Component {
  constructor() {
    super();
    this.handleCommentDelete = this.handleCommentDelete.bind(this);
  }

  handleCommentDelete(event) {
    event.preventDefault();
    this.props.deleteComment(event.target.value);
  }

  render() {
    const { comment } = this.props;
    return (
      <Grid celled="internally">
        <Grid.Row>
          <Grid.Column width={5}>
            <span style={{ textAlign: "center" }}>
              <VoteUpDown
                votes={comment.votes}
                id={comment._id}
                type="comments"
              />
            </span>
          </Grid.Column>
          <Grid.Column width={11}>
            <p>{comment.body}</p>
            <p style={{ textAlign: "left" }}>
              comment by: <strong>{comment.created_by}</strong>
              <Button
                animated
                color="black"
                floated="right"
                onClick={this.handleCommentDelete}
                value={comment._id}
              >
                <Button.Content visible value={comment._id}>
                  Delete
                </Button.Content>
                <Button.Content hidden value={comment._id}>
                  <Icon name="trash" />
                </Button.Content>
              </Button>
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5} />
          <Grid.Column width={11} />
        </Grid.Row>
      </Grid>
    );
  }
}

export default CommentList;
