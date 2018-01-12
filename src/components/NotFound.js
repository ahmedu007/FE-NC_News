import React from "react";
import img from "./404.gif";
import { Container } from "semantic-ui-react";

const NotFound = props => {
  return (
    <Container style={{ textAlign: "center", paddingTop: "10%" }}>
      <article style={{ color: "black", fontSize: "1.6rem" }}>
        The requested URL
        <strong>
          <em> {props.location.pathname} </em>
        </strong>
        was not found on this server.
      </article>
      <br />
      <img src={img} alt="Error" />
    </Container>
  );
};

export default NotFound;
