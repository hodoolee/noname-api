import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

import models from "./models";

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, "./schema")));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, "./resolvers")));
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

// Initialize the app
const app = express();

// The GraphQL endpoint
app.use(
  "/graphql", 
  bodyParser.json(), 
  graphqlExpress({ 
    schema, 
    context: {
      models,
    }
  })
);

// GraphiQL, a visual editor for queries
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

// Start the server
models.sequelize.sync({ }).then(() => {
  app.listen(3000);
});
