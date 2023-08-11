const typeDefs = `
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
    welcomeMessage(name: String): String
  }
`;

const books = [
  {
    title: "The Awakening",
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
    welcomeMessage: () => "Welcome to GraphQL",
  },
  
};

module.exports = { typeDefs, resolvers };
