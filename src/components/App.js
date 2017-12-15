import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReallySmoothScroll from "really-smooth-scroll";

import Homepage from "./Homepage";
import EachArticle from "./EachArticle";
import Topics from "./Topics";
import ArticlesByTopic from "./ArticlesByTopic";
import Navbar from "./Navbar";
import Footer from "./Footer";

import NotFound from "./NotFound";

import "./App.css";

ReallySmoothScroll.shim();

ReallySmoothScroll.config({
  mousewheelSensitivity: 8,
  keydownSensitivity: 8
});

const App = () => {
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
            <Route
              exact
              path="/topics/:topic/articles"
              component={ArticlesByTopic}
            />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
