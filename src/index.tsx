import * as React from "react";
import * as ReactDOM from "react-dom";

import { ApolloProvider } from "@apollo/react-hooks";
import client from "./client";
import App from "./App";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
