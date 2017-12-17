import React from "react";
import img from "./404.gif";

const NotFound = props => {
  return (
    <div>
      <article style={{ color: "black", fontSize: "1.6rem" }}>
        The requested URL
        <strong>
          <em> {props.location.pathname} </em>
        </strong>
        was not found on this server.
      </article>
      <br />
      <img src={img} alt="Error" />
    </div>
  );
};

export default NotFound;
