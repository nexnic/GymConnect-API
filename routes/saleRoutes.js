import express from 'express';
import {
  getSales,
  createSale,
  deleteSale,
} from '../Controller/SaleController.js';

const router = express.Router();

// Define sale-related routes here
router.get('/', getSales);
router.post('/', createSale);
router.delete('/:id', deleteSale);

export default router;
