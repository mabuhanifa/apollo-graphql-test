const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
    welcomeMessage(name:String, day:String):String
  }
`;

const resolvers = {
  Query: {
    books: () => books,
    welcomeMessage: (parent, args) => {
      console.log(args.name);
      return `Welcome to GraphQL, ${args.name}! Today is ${args.day}`;
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
