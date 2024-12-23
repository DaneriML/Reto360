import dotenv from 'dotenv';

dotenv.config();

const {USERS,
  PASSWORD,
  SEVER,
  DATABASE,
  PORTDB} = process.env;

export default {USERS, PASSWORD,
SEVER,
DATABASE,
PORTDB};