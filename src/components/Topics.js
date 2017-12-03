import React from "react";
import PT from "prop-types";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import fetchTopics from "../actions/topics.action";

import "./Topics.css";

class Topic extends React.Component {
  componentDidMount() {
    this.props.fetchTopics();
  }

  render() {
    // const { topics, loading, error } = this.props;
    return (
      <div className="columns" style={{ width: "120%" }}>
        <a href="/" className="column">
          <li className="btn">Home</li>
        </a>
        {this.props.topics.map((topic, i) => {
          return (
            <NavLink
              to={`/topics/${topic.title}/articles`}
              key={topic.title}
              activeClassName="is-active"
              className="column"
            >
              <li className="btn" key={i}>
                {topic.title}
              </li>
            </NavLink>
          );
        })}
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
