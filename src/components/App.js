import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Homepage from "./Homepage";
import EachArticle from "./EachArticle";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/articles/:id" component={EachArticle} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
