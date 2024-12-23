import express from 'express';
import { obtenerCategorias, crearCategoria, actualizarCategoria } from '../controllers/categoriaProductosControllers.mjs';

const categoryRoutes = express.Router();

categoryRoutes.get('/', obtenerCategorias);
categoryRoutes.post('/', crearCategoria);
categoryRoutes.put('/', actualizarCategoria);


export default categoryRoutes;