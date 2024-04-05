import { ApolloServer } from "@apollo/server";
import gql from "graphql-tag";
import { startStandaloneServer } from '@apollo/server/standalone';

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
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);