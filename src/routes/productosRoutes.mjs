// import express from 'express';


// import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/productosController.mjs';

// const router = express.Router();

// // Get all products
// router.get('/', getAllProducts);

// // Get product by ID
// router.get('/:id', getProductById);

// // Create a new product
// router.post('/', createProduct);

// // Update a product by ID
// router.put('/:id', updateProduct);

// // Delete a product by ID
// router.delete('/:id', deleteProduct);

// export default router;
import express from 'express';  
import { getAllProducts, createProduct1, updatedProduct } from '../controllers/productosController.mjs';

const router = express.Router();


router.get('/', getAllProducts);
router.post('/', createProduct1);
router.put('/', updatedProduct);

export default router;