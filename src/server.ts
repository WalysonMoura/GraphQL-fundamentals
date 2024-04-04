import { ApolloServer } from '@apollo/server';
import fastifyApollo from '@as-integrations/fastify';
import { fastify } from 'fastify';



export const app = fastify({ logger: true });

const typeDefs = `
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
(async () => {
  await server.start();
   // Assuming Fastify is installed

  app.register(fastifyApollo(server));

  // ... other Fastify app configuration

  await app.listen({ port: 4000 })
})();
