import express from 'express';
import {
  getUsers,createUser
  updateUser,deleteUser
} from '../controllers/userController.js';

const router = express.Router();

// Get user profile
router.get('/', getUserProfile);
