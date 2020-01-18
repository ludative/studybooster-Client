import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Pages
import Main from "@/containers/Main";
import Studies from "@/containers/Studies";

export default () => (
  <Router>
    <Route exact path="/" component={Main} />
    <Route exact path="/studies" component={Studies} />
  </Router>
);
