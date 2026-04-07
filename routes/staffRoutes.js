import express from 'express';
import {
  getStaff,
  createStaff,
  updateStaff,
  deleteStaff,
} from '../Controller/StaffController.js';

const router = express.Router();

// Define staff-related routes here
router.get('/', getStaff);
router.post('/', createStaff);
router.put('/:id', updateStaff);
router.delete('/:id', deleteStaff);

export default router;
