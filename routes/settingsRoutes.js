import express from 'express';
import {
  getSettings,
  updateSettings,
} from '../controllers/settingsController.js';

const router = express.Router();

// Get user settings
router.get('/', getSettings);

// Update user settings
router.put('/', updateSettings);
