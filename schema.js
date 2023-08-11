const typeDefs = `
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
    welcomeMessage(name:String):String
  }
`;

const resolvers = {
  Query: {
    books: () => books,
    welcomeMessage: (parent, args) => {
      console.log(parent, args);
      return `Welcome to GraphQL, ${args.name}!`;
    },
  },
};

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



module.exports = { typeDefs, resolvers };
