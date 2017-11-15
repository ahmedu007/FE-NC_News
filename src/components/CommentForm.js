import React from "react";
import { connect } from "react-redux";
// import postComments from "../actions/postComments.action";

class CommentForm extends React.Component {
  componentDidUpdate() {
    // this.props.postComments();
  }
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

// const mapStateToProps = state => ({
//   postComments: state.postComments.data,
//   loading: state.postComments.loading,
//   error: state.postComments.error
// });

// const mapDispatchToProps = dispatch => ({
//   postComments: (id, comment) => {
//     dispatch(postComments(id, comment));
//   }
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
export default CommentForm;
