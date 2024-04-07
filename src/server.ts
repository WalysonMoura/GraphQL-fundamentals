import "reflect-metadata";

import path from "node:path";

import { ApolloServer } from "@apollo/server";

import { startStandaloneServer } from "@apollo/server/standalone";

import { buildSchema } from "type-graphql";
import { ApponintmentsResolver } from "./resolvers/appointments-resolver";

import { randomUUID } from "node:crypto";

const typeDefs = `
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

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [ApponintmentsResolver],
  //  emitSchemaFile: path.resolve(__dirname, "schema.gpl"),
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url} }`);
}

bootstrap();
