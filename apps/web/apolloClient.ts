import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql", // Replace with your GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;
