import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = () => {
  const cache = new InMemoryCache();

  const client = new ApolloClient({
    cache: cache,
    uri: import.meta.env.VITE_API_URL,

    name: "react-web-client",
    version: "1.3",
    queryDeduplication: false,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-and-network",
      },
    },
  });

  return client;
};

export const $apollo = apolloClient();
