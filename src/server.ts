import "reflect-metadata";

import path from "node:path";

import { ApolloServer } from "@apollo/server";

import { startStandaloneServer } from "@apollo/server/standalone";

import { buildSchema } from "type-graphql";

import { randomUUID } from "node:crypto";
import { fileURLToPath } from "node:url";
import { ApponintmentsResolver } from "./graphql/resolvers/appointments-resolver";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
    emitSchemaFile: path.resolve(__dirname, "graphql/schemas", "schema.gql"),
    validate: true,
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
