import React from "react";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloLink, concat } from "apollo-link";
import { GRAPHQL_ENDPOINT } from "../../Constants/graphqlEndPoint";
const csrfToken = ReactOnRails.authenticityToken();

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: GRAPHQL_ENDPOINT
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      "X-CSRF-Token": csrfToken
    }
  });
  return forward(operation);
});

const client = new ApolloClient({
  cache: cache,
  link: concat(authMiddleware, link)
});

// client の定義に必要な処理が多かったので、各 Page のroot におくだけですぐ使えるようにWrapperとして切り出した
export const ApolloProviderWrapper = props => {
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};

export default props => <DashboardPage {...props} />;
