import React from "react";
import axios from "axios";
import API_URL from "../config";

import { Button, Header, Icon, Modal } from "semantic-ui-react";

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
      <div style={{ textAlign: "center" }}>
        <div>
          <strong>{this.state.score}</strong>
        </div>
        <span>
          <Button
            animated="vertical"
            onClick={this.increment}
            color="black"
            circular
          >
            <Button.Content hidden>Like</Button.Content>
            <Button.Content visible>
              <Icon name="thumbs up" style={{ color: "white" }} />
            </Button.Content>
          </Button>
        </span>
        <span>
          <Button
            animated="vertical"
            onClick={this.decrement}
            color="black"
            circular
          >
            <Button.Content hidden>Dislike</Button.Content>
            <Button.Content visible>
              <Icon name="thumbs down" style={{ color: "tomato" }} />
            </Button.Content>
          </Button>
        </span>

        <Modal
          open={this.state.alert}
          onClose={this.handleClick}
          basic
          size="small"
        >
          <Header icon="browser" content="Invalid Request" />
          <Modal.Content>
            <h3>You are only allowed to Vote once</h3>
          </Modal.Content>
          <Modal.Actions>
            <Button color="green" onClick={this.handleClick} inverted>
              <Icon name="checkmark" /> Got it
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default VoteUpDown;
