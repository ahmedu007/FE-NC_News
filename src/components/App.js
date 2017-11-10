import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Homepage from "./Homepage";
import EachArticle from "./EachArticle";
import Topics from "./Topics";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/topics" component={Topics} />
          <Route exact path="/articles/:id" component={EachArticle} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
