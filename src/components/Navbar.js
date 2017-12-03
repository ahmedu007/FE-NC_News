import React from "react";
import Topic from "./Topics";

import logo from "../NCN-black border cropped.png";

const Navbar = props => {
  return (
    <header className="header">
      <h1>
        <img src={logo} alt="NC News Logo" />
      </h1>
      <nav>
        <ul>
          <Topic />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
