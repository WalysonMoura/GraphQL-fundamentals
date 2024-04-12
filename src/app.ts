import fastify from "fastify";

import { typeDefs } from "tests/typeDefs";
import { resolvers } from "tests/resolvers";
import { ApolloServer, BaseContext } from "@apollo/server";
import fastifyApollo, {
  fastifyApolloDrainPlugin,
} from "@as-integrations/fastify";

export const app = fastify({ logger: true });

export const apollo = new ApolloServer<BaseContext>({
  typeDefs,
  resolvers,
  plugins: [fastifyApolloDrainPlugin(app)],
});

app.register(fastifyApollo(apollo));
