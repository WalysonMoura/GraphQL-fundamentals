import { ApolloServer } from "@apollo/server";
import gql from "graphql-tag";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefsd = gql`
  type Query {
    Ola: String
  }
`;

const resolver = {
  Query: {
    Ola: () => "Hello from the Ola resolver!", // Example resolver implementation
  },
};

const typeDefs = `#graphql
  #Os comentários em strings GraphQL (como esta) começam com o símbolo hash (#).

  # Este tipo de "Livro" define os campos consultáveis ​​para cada livro em nossa fonte de dados
  type Book {
    title: String
    author: String
  }

  # O tipo "Consulta" é especial: lista todas as consultas disponíveis que 
  # clientes podem executar, junto com o tipo de retorno de cada um. Nisso 
  # caso, a consulta "livros" retorna uma matriz de zero ou mais Livros (definidos acima)
  type Query {
    books: [Book]
  }
`;
const agora: Date = new Date();
const hora = String(agora.getHours());
const minutes = String(agora.getMinutes());

const books = [
  {
    title: `${hora}`,
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};
const server = new ApolloServer({ typeDefs, resolvers });

// Await server.start() before calling fastifyApollo()
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url} ${hora}:${agora}`);
