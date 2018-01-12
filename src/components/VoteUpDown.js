import React from "react";
import axios from "axios";
import API_URL from "../config";

import { Button, Icon } from "semantic-ui-react";

class VoteUpDown extends React.Component {
  constructor() {
    super();

    this.state = {
      score: 0,
      voted: false,
      alert: false
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      score: this.props.votes
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.votes > 0) {
      this.setState({
        score: nextProps.votes
      });
    }
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      alert: false
    });
  }

  increment() {
    if (this.state.voted) {
      this.setState({
        alert: true
      });
    }
    if (!this.state.voted) {
      this.setState({
        score: this.state.score + 1,
        voted: true
      });
      axios
        .put(`${API_URL}/${this.props.type}/${this.props.id}?vote=UP`)
        .then(res => {
          console.assert(res.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  decrement() {
    if (this.state.voted) {
      this.setState({
        alert: true
      });
    }
    if (!this.state.voted) {
      this.setState({
        score: this.state.score - 1,
        voted: true
      });
      axios
        .put(`${API_URL}/${this.props.type}/${this.props.id}?vote=DOWN`)
        .then(res => {
          console.assert(res.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  render() {
    return (
      <div>
        <div>
          <strong>{this.state.score}</strong>
        </div>
        <span>
          <Button animated="vertical" onClick={this.increment}>
            <Button.Content hidden>Like</Button.Content>
            <Button.Content visible>
              <Icon name="like outline" style={{ color: "green" }} />
            </Button.Content>
          </Button>
        </span>
        <span>
          <Button animated="vertical" onClick={this.decrement}>
            <Button.Content hidden>Dislike</Button.Content>
            <Button.Content visible>
              <Icon name="dislike outline" style={{ color: "tomato" }} />
            </Button.Content>
          </Button>
        </span>
        <div className={this.state.alert ? "modal is-active" : "modal"}>
          <div className="modal-background" />
          <div className="modal-content">
            <article className="message is-dark">
              <div className="message-header">
                <p>Invalid Request</p>
                <button
                  className="delete"
                  aria-label="delete"
                  onClick={this.handleClick}
                />
              </div>
              <div className="message-body">
                <p>You can only Vote once</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default VoteUpDown;
