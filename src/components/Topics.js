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
    return (
      <div style={{ paddingLeft: "5%", width: "85%" }}>
        <a href="/">
          <li className="btn">Home</li>
        </a>
        {this.props.topics.map((topic, i) => {
          return (
            <NavLink
              to={`/topics/${topic.title}/articles`}
              key={topic.title}
              activeClassName="is-active"
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
  topics: state.topics.topics,
  loading: state.topics.loading,
  error: state.topics.error
});

const mapDispatchToProps = dispatch => ({
  fetchTopics: () => {
    dispatch(fetchTopics());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
