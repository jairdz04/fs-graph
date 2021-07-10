import { createConnection } from 'typeorm';

export const connect = async (): Promise<void> => {
  await createConnection();
  console.log('MongoDB is connected');
};
