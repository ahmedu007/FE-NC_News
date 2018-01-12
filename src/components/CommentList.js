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
          <Grid.Column width={3}>
            <span style={{ textAlign: "center" }}>
              <VoteUpDown
                votes={comment.votes}
                id={comment._id}
                type="comments"
              />
            </span>
          </Grid.Column>
          <Grid.Column width={13}>
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
          <Grid.Column width={3} />
          <Grid.Column width={10} />
        </Grid.Row>
      </Grid>
      // <div className="columns">
      //   <div className="column">
      //     <div className="box" style={{ height: "100%" }}>
      //       <br />
      //       <VoteUpDown
      //         votes={comment.votes}
      //         id={comment._id}
      //         type="comments"
      //       />
      //     </div>
      //   </div>
      //   <div className="column is-three-quarters">
      //     <div className="box" style={{ height: "100%" }}>
      //       <p> {comment.body} </p>
      //       <br />
      //       <p>
      //         <small>
      //           comment by: <strong>{comment.created_by}</strong>
      //         </small>
      //       </p>
      //       <p className="field" style={{ textAlign: "right" }}>
      //         <input
      //           type="submit"
      //           className="button is-dark is-outlined"
      //           onClick={this.handleCommentDelete}
      //           value={`Delete`}
      //           name={comment._id}
      //         />
      //       </p>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default CommentList;
