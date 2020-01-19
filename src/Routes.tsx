import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import {teal} from "@material-ui/core/colors";

// Pages
import Main from "@/containers/Main";
import Studies from "@/containers/Studies";
import EmailValidation from "@/containers/EmailValidation";
import Login from "@/containers/Login";

export default () => {
  const theme = createMuiTheme({
    palette: {
      primary: teal
    },
  });

  return (
      <Router>
        <ThemeProvider theme={theme}>
          <Route exact path="/" component={Main} />
          <Route exact path="/studies" component={Studies} />
          <Route path="/login" component={Login} />
          <Route exact path={"/email-validation"} component={EmailValidation}/>
        </ThemeProvider>
      </Router>
  )
}
