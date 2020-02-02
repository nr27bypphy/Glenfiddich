import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloLink, concat } from "apollo-link";
import { GRAPHQL_ENDPOINT } from "../../bundles/Constants/graphqlEndPoint";
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

export const client = new ApolloClient({
  cache: cache,
  link: concat(authMiddleware, link)
});
