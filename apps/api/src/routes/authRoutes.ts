import express from 'express';
import { register, login } from '../controllers/authController';

const router = express.Router();

router.post('/register/email', register);
router.post('/login/email', login);

export default router;
