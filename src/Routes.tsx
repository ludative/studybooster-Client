import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Pages
import Main from "@/containers/Main";
import Studies from "@/containers/Studies";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import {teal} from "@material-ui/core/colors";

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
        </ThemeProvider>
      </Router>
  )
}
