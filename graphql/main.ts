import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client';

import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }

  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

const authMiddleware = setContext(async (_, { headers }) => {
  const accessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGpjdmVnYWIuc2l0ZSIsInN1YiI6ImQyMjM1MzM1LWIwODItNGI2Zi05ZGE4LWI1MWZmMzIxYjZmNiIsImlhdCI6MTcxMDczNTY1OCwiZXhwIjoxNzEwNzM5MjU4fQ.vOz4DzWvsOf8DoLtL0OvptC2J3jYfdzOiCcQPS_TSO4';
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${accessToken}`,
    },
  };
});

const httpLink = new HttpLink({
  uri: 'https://users-api-5ykmhbvg3a-uc.a.run.app/graphql',
});
const cache = new InMemoryCache();

const createApolloClient = () => {
  return new ApolloClient({
    link: from([errorLink, authMiddleware, httpLink]),
    cache,
  });
};

export default createApolloClient;
