import { ApolloServer } from "@apollo/server";
import gql from "graphql-tag";

import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = gql`
  type Query {
    helloWorld: String!
  }
`;

const resolvers = {
  Query: {
    helloWorld: () => {
      return "Hello from the Ola resolver!";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url} }`);
