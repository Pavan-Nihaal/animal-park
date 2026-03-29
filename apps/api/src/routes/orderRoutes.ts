import express from 'express';
import { getOrders, createOrder, updateOrderStatus } from '../controllers/orderController';

const router = express.Router();

router.get('/:userId', getOrders);
router.post('/', createOrder);
router.patch('/:id', updateOrderStatus);

export default router;
