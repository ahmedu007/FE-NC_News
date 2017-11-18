import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Homepage from "./Homepage";
import EachArticle from "./EachArticle";
import Topics from "./Topics";
import ArticlesByTopic from "./ArticlesByTopic";
import Navbar from "./Navbar";
import Footer from "./Footer";

import Test from "./Test";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <div className="App">
            <br />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/topics" component={Topics} />
              <Route exact path="/articles/:id" component={EachArticle} />
              <Route exact path="/test" component={Test} />
              <Route
                exact
                path="/topics/:topic/articles"
                component={ArticlesByTopic}
              />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
