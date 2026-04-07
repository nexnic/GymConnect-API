import express from 'express';
import {
  getshifts,
  createShift,
  deleteShift,
} from '../Controller/ShiftController.js';

const router = express.Router();

// Define shift-related routes here
router.get('/', getshifts);
router.post('/', createShift);
router.delete('/:id', deleteShift);

export default router;
