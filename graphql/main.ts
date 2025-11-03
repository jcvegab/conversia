import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

import { ErrorLink } from '@apollo/client/link/error';

export const errorLink = new ErrorLink(({ error }) => {
  console.error(`[GraphQL error]: ${error}`);
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const accessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGpjdmVnYWIuc2l0ZSIsInN1YiI6ImQyMjM1MzM1LWIwODItNGI2Zi05ZGE4LWI1MWZmMzIxYjZmNiIsImlhdCI6MTcxMDczNTY1OCwiZXhwIjoxNzEwNzM5MjU4fQ.vOz4DzWvsOf8DoLtL0OvptC2J3jYfdzOiCcQPS_TSO4';

  operation.setContext({
    headers: {
      Authorization: accessToken ? `Bearer ${accessToken}` : '',
    },
  });

  return forward(operation);
});

const httpLink = new HttpLink({
  uri: 'https://users-api-5ykmhbvg3a-uc.a.run.app/graphql',
});

const cache = new InMemoryCache();

const createApolloClient = () => {
  return new ApolloClient({
    link: ApolloLink.from([errorLink, authMiddleware, httpLink]),
    cache,
  });
};

export default createApolloClient;
