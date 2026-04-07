import express from 'express';
import {
  getPTSessions,
  createPTSession,
  deletePTSession,
} from '../controllers/ptSessionController.js';

const router = express.Router();

// Define PT session-related routes here
router.get('/', getPTSessions);
router.post('/', createPTSession);
router.delete('/:id', deletePTSession);

export default router;
