import express from 'express';
import  producRouter  from './routes/productosRoutes.mjs';
import categoryRoutes  from './routes/categoriaProductRoutes.mjs';
import userRoutes  from './routes/userRoutes.mjs';
const app = express();

app.use(express.json());

//rutas para productos
app.use('/productos', producRouter);
app.use('/CrearProductos1', producRouter);
app.use('/ActualizarProducto', producRouter);

//Rutas para Categoria Productos
app.use('/categoriaProductos', categoryRoutes);
app.use('/CrearCategoria', categoryRoutes);
app.use('/ActualizarCategoria', categoryRoutes);

//Rutas para Usuarios
app.use('/usuarios', userRoutes);
app.use('/updateUser', userRoutes);

export default app;