import { config } from 'dotenv';

config();

export const { PORT } = process.env as {
  [key: string]: string;
};