import React from "react";
import fetchEachArticle from "../actions/eachArticle.action";
import { connect } from "react-redux";

class EachArticle extends React.Component {
  componentDidMount() {
    this.props.fetchEachArticle(this.props.match.params.id);
  }

  render() {
    return (
      <div className="container">
        <div>
          {this.props.articles.map(article => {
            {
              if (article._id === this.props.match.params.id) {
                return (
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
                );
              }
            }
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // comments: state.comments.data,
  articles: state.articles.data,
  loading: state.articles.loading,
  error: state.articles.error
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
