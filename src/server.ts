import { ApolloServer } from "@apollo/server";
import gql from "graphql-tag";

import { startStandaloneServer } from "@apollo/server/standalone";
import { GraphQLResolveInfo } from "graphql";
import { randomUUID } from "node:crypto";

interface QueryCurrentUserArgs {
  // empty for now since I don't know if your schema takes args here
}

const typeDefs = gql`
  type User {
    id: String!
    name: String!
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    createUser(name: String!): User!
  }
`;

interface User {
  id: string;
  name: string;
}

const users: User[] = [];

const resolvers = {
  Query: {
    users: () => {
      return users;
    },
  },
  
  Mutation: {
    createUser: (_: any, args: User) => {
      const user: User = {
        id: randomUUID(),
        name: args.name,
      };

      users.push(user);

      return user;
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
