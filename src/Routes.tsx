import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "@/containers/Main";
import Login from "@/containers/Login";

export default () => (
  <Router>
    <Route exact={true} path="/" component={Main} />
    <Route path="/login" component={Login} />
  </Router>
);
