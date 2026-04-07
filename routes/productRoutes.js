import express from 'express';
import {} from '../Controllers/productController.js';

const router = express.Router();

// Define product-related routes here
router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
