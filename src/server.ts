import { ApolloServer } from "@apollo/server";
import gql from "graphql-tag";

const typeDefs = gql`
  type Query {
    Ola: String
  }
`;

const resolvers = {
  Query: {
    Ola: () => "Hello from the Ola resolver!", // Example resolver implementation
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// Await server.start() before calling fastifyApollo()
await server.start();
