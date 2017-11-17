import React from "react";

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img src="https://i.imgur.com/YU6d2RV.gif" alt="loading" />
      </div>
    );
  }
}

export default Loading;
