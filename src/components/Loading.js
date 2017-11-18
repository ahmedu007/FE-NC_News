import React from "react";
import loading from "./loading.gif";

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img src={loading} alt="loading Image" />
      </div>
    );
  }
}

export default Loading;
