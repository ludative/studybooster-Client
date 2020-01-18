import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "@/containers/Main";
import EmailValidation from "@/containers/EmailValidation";

export default () => (
  <Router>
    <Route exact={true} path="/" component={Main} />
    <Route exact path={"/email-validation"} component={EmailValidation}/>
  </Router>
);
