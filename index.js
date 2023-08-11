const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { typeDefs, resolvers } = require("./schema");
require("dotenv").config();
const port = process.env.PORT || 4000;



const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.json());

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function main() {
  await server.start();
  app.use("/graphql", expressMiddleware(server));
}

main().catch((error) => {
  console.error("Error starting the server:", error);
});

app.listen(4000, () => {
  console.log(` Server ready at http://localhost:4000/graphql`);
});
