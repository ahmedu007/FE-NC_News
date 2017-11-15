import React from "react";
import Topic from "./Topics";

class Navbar extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>
          <img
            src="https://tsuyoshiwada.github.io/react-stack-grid/images/logo.png"
            // src="https://www.imageupload.co.uk/images/2017/11/14/Logomakr_1b6YJB.png"
            alt="React Stack Grid"
          />
        </h1>
        <nav>
          <ul>
            <Topic />
            <li>
              <a href="/">Home</a>
            </li>
            {/* <li>
              <IndexLink to="/" activeClassName="is-active">
                Home
              </IndexLink>
            </li>
            <li>
              <Link to="/horizontal/" activeClassName="is-active">
                Horizontal
              </Link>
            </li>
            <li>
              <Link to="/change-size/" activeClassName="is-active">
                Change Size
              </Link>
            </li>
            <li>
              <Link to="/real-world/" activeClassName="is-active">
                Real World
              </Link>
            </li> */}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;
