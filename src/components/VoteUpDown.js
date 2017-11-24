import React from "react";

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

  render() {
    return (
      <div>
        <div>{this.state.score}</div>
        <p>
          <a onClick={this.increment}>
            <i
              className="fa fa-thumbs-o-up"
              aria-hidden="true"
              style={{
                color: "green"
              }}
            />
          </a>
        </p>
        <p>
          <a onClick={this.decrement}>
            <i
              className="fa fa-thumbs-o-down"
              aria-hidden="true"
              style={{ color: "tomato" }}
            />
          </a>
        </p>
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
    }
  }
}

export default VoteUpDown;
