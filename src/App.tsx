import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { ApolloProvider } from "@apollo/react-hooks";
import client from "./client";

import Main from "./components/Main";
import Login from "./components/Login";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact={true} path="/" component={Main} />
        <Route path="/login" component={Login} />
      </Router>
    </ApolloProvider>
  );
};

export default App;
