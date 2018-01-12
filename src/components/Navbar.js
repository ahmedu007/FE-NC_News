import React from "react";
import Topic from "./Topics";
import logo from "../NCN-black border cropped.png";
import { connect } from "react-redux";
import fetchTopics from "../actions/topics.action";
import { NavLink } from "react-router-dom";

import { Container, Menu, Image } from "semantic-ui-react";

class Navbar extends React.Component {
  componentDidMount() {
    this.props.fetchTopics();
  }

  render() {
    return (
      <Menu fixed="top" inverted>
        {/* <header className="header">
        <h1 id="logo">
          <img src={logo} alt="NC News Logo" />
        </h1>
        <nav style={{ left: "10%" }}>
        <div className="container">
          <Topic />
        </div>
      </nav>
      </header> */}
        <Container>
          <Menu.Item as="a" header link href="/">
            <Image
              size="mini"
              src={logo}
              style={{
                marginRight: "1.5em",
                background: "transparent",
                backgroundColor: "transparent"
              }}
            />
            NC News
          </Menu.Item>
          {this.props.topics.map((topic, i) => {
            return (
              <Menu.Item link as="a">
                <NavLink
                  to={`/topics/${topic.title}/articles`}
                  key={topic.title}
                >
                  {topic.title}
                </NavLink>
              </Menu.Item>
            );
          })}
        </Container>
      </Menu>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
