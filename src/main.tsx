import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import "./index.scss";
import { $apollo } from "./apollo";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <ApolloProvider client={$apollo}>
      <App />
    </ApolloProvider>
);
