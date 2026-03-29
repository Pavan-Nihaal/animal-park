import { Request, Response } from 'express';
import { Order } from '../models/Order';

export const getOrders = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const orders = await Order.find({ userId }).populate('items.productId');
    res.json({ success: true, data: orders });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch orders', error });
  }
};

export const createOrder = async (req: Request, res: Response) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json({ success: true, data: order, message: 'Order created' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to create order', error });
  }
};

export const updateOrderStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { orderStatus, paymentStatus } = req.body;
    
    const order = await Order.findByIdAndUpdate(
      id,
      { orderStatus, paymentStatus },
      { new: true }
    );
    
    res.json({ success: true, data: order, message: 'Order updated' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update order', error });
  }
};
