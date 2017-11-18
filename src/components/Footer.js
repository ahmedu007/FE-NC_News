import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <nav>
          <ul>
            <li>
              <a href="https://twitter.com/umair170">
                <i
                  className="fa fa-twitter icon-2x"
                  aria-hidden="true"
                  title="Twitter"
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/umair-ahmed-0222b377/">
                <i
                  className="fa fa-linkedin icon-2x"
                  aria-hidden="true"
                  title="Linkedin"
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/ahmedu007/FE-NC_News">
                <i
                  className="fa fa-github icon-2x"
                  aria-hidden="true"
                  title="GitHub"
                />
              </a>
            </li>
            <li style={{ width: "150px" }}>
              <a href="https://bulma.io/">
                <img
                  src="https://bulma.io/images/made-with-bulma.png"
                  alt="footer"
                  title="Bulma"
                />
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    );
  }
}

export default Footer;
