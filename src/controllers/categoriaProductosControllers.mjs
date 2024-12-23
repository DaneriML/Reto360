import CategoriaProductos from '../models/categoriaProductosModels.mjs';


// Obtener todas las categorías de productos
async function obtenerCategorias(req, res){
  try {
    const categorias = await CategoriaProductos.findAll();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear una nueva categoría de producto
async function crearCategoria(req, res) {
  try {
    const nuevaCategoria = req.body;
    const newcategoria = await CategoriaProductos.create(nuevaCategoria);
    res.status(201).json(newcategoria);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la categoría de producto', error });
  }
};

// Actualizar una categoría de producto por ID
async function actualizarCategoria(req, res){
  try {
    const { id, nuevaCategoria } = req.body;
    const categoriaActualizada = await CategoriaProductos.findByPk(id);
    if (!categoriaActualizada) {
      return res.status(404).json({ message: 'Categoría de producto no encontrada' });
    }
    await categoriaActualizada.update(nuevaCategoria);
    res.status(200).json( {message: 'Actualizacion con exito', categoriaActualizada});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { obtenerCategorias, crearCategoria, actualizarCategoria };

