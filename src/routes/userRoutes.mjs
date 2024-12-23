import express from 'express';
import { createUser, updateUser } from '../controllers/userControllers.mjs';

const user = express.Router();


user.post('/', createUser);
user.put('/:id', updateUser);

export default user;