import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { teal } from "@material-ui/core/colors";

// Pages
import Main from "@/containers/Main";
import Studies from "@/containers/Studies";
import ResendEmail from "@/containers/ResendEmail";
import Login from "@/containers/Login";
import EmailValidation from "@/containers/EmailValidation";

export default () => {
  const theme = createMuiTheme({
    palette: {
      primary: teal
    }
  });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Route exact path="/" component={Main} />
        <Route exact path="/studies" component={Studies} />
        <Route path="/login" component={Login} />
        <Route exact path={"/resend-email"} component={ResendEmail} />
        <Route exact path={"/validation/:token"} component={EmailValidation} />
      </ThemeProvider>
    </Router>
  );
};
