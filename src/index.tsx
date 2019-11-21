import * as React from "react";
import * as ReactDOM from "react-dom";

import { ApolloProvider } from "@apollo/react-hooks";
import client from "./client";
import App from "./App";

import { GlobalStyle } from "@/styles/common";

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyle />
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
