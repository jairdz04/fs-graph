import 'reflect-metadata';
import * as dotenv from 'dotenv';
dotenv.config();

import { startApp } from './server';
import { connect } from './database';

import { env } from 'process';

const startServer = async () => {
  try {
    await connect();
    const app = await startApp();
    app.listen(env.PORT, () => {
      console.log('Server running on PORT: ', env.PORT);
    });
  } catch (error) {
    console.log('Error starting the server', error);
    process.exit(0);
  }
};

startServer();
