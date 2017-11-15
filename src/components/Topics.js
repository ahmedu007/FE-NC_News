import React from "react";
import PT from "prop-types";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import fetchTopics from "../actions/topics.action";

class Topic extends React.Component {
  componentDidMount() {
    this.props.fetchTopics();
  }

  render() {
    // const { topics, loading, error } = this.props;
    return (
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          {this.props.topics.map((topic, i) => {
            return (
              <li key={i}>
                <NavLink
                  to={`/topics/${topic.title}/articles`}
                  key={topic.title}
                  activeClassName="is-active"
                >
                  {topic.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

Topic.propTypes = {
  topics: PT.array.isRequired,
  loading: PT.bool.isRequired,
  error: PT.any,
  fetchTopics: PT.func.isRequired
};

const mapStateToProps = state => ({
  topics: state.topics.data,
  loading: state.topics.loading,
  error: state.topics.error
});

const mapDispatchToProps = dispatch => ({
  fetchTopics: () => {
    dispatch(fetchTopics());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
