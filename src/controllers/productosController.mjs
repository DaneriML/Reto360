import Product from "../models/productosModels.mjs";

async function getAllProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

async function createProduct1(req, res) {
  try {
    const data = req.body;
    const newProduct = await Product.create(data);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

async function updatedProduct(req, res) {
  try {
    const { id, data} = req.body;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    await product.update(data);
    res.status(200).json({ message: 'Producto actualizado exitosamente', product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


export { getAllProducts, createProduct1, updatedProduct };
