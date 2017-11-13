import React from "react";
import fetchEachArticle from "../actions/eachArticle.action";
import { connect } from "react-redux";

class EachArticle extends React.Component {
  componentDidMount() {
    this.props.fetchEachArticle(this.props.match.params.id);
  }

  render() {
    const article = this.props.eachArticle;
    return (
      <div className="container">
        <div className="box">
          <strong>{article.title} </strong>
          <p>{article.body}</p>
          <p>
            <small>{article.created_by}</small>
          </p>
          <div className="box">
            <p>{article.votes}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // comments: state.comments.data,
  loading: state.eachArticle.loading,
  error: state.eachArticle.error,
  eachArticle: state.eachArticle.data
});

const mapDispatchToProps = dispatch => ({
  fetchEachArticle: id => {
    dispatch(fetchEachArticle(id));
  },
  fetchComments: id => {
    // dispatch(fetchComments(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EachArticle);
