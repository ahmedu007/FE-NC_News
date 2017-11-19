import React from "react";
import Topic from "./Topics";

import logo from "../NCN-black border cropped.png";

class Navbar extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>
          <img
            src={logo}
            //src="https://tsuyoshiwada.github.io/react-stack-grid/images/logo.png"
            alt="NC News Logo"
          />
        </h1>
        <nav>
          <ul>
            <Topic />
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;
