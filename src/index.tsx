import * as React from "react";
import * as ReactDOM from "react-dom";

import { ApolloProvider } from "@apollo/react-hooks";
import client from "./client";
import Routes from "@/Routes";

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  document.getElementById("root")
);
