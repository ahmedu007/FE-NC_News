import React from "react";
import img from "./404.gif";

class NotFound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <article style={{ color: "black", fontSize: "1.6rem" }}>
          The requested URL
          <strong>
            <em> {this.props.location.pathname} </em>
          </strong>
          was not found on this server.
        </article>
        <br />
        <img src={img} alt="Error" />
      </div>
    );
  }
}

export default NotFound;
