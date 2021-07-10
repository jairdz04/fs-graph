import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { buildSchema } from 'type-graphql';

import { EmployeesResolver } from './resolvers/Employee';

export const startApp = async (): Promise<express.Application> => {
  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [EmployeesResolver]
    })
  });

  apolloServer.applyMiddleware({
    app,
    path: '/graphql'
  });

  return app;
};
