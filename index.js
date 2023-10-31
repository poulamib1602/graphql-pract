const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolver');
const dotenv = require("dotenv");
dotenv.config();
const app = express();
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const server = new ApolloServer({ typeDefs, resolvers });
async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
}
startServer().then(() => {
  app.listen({ port: 4000 }, () => {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
  });
});
