import React from "react";
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
              src="http://www.thefederation.coop/uploads/9/6/1/3/96130266/fed-friends-logos-northcoders_1.jpg"
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
              <Menu.Item as="span" key={topic.title}>
                <NavLink to={`/topics/${topic.title}/articles`}>
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
