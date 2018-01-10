import React from "react";
import axios from "axios";
import API_URL from "../config";

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
          <a className="button is-medium" onClick={this.increment}>
            <span className="icon">
              <i
                className="fa fa-thumbs-o-up"
                aria-hidden="true"
                style={{
                  color: "green"
                }}
                title="I Like this"
              />
            </span>
          </a>
        </span>
        <span>
          <a className="button is-medium" onClick={this.decrement}>
            <span className="icon">
              <i
                className="fa fa-thumbs-o-down"
                aria-hidden="true"
                style={{ color: "tomato" }}
                title="I don't Like this"
              />
            </span>
          </a>
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
