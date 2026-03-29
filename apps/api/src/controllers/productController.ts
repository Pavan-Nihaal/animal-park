import { Request, Response } from 'express';
import { Product } from '../models/Product';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const { category, page = 1, limit = 20 } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const query = category ? { category, isActive: true } : { isActive: true };
    const products = await Product.find(query).skip(skip).limit(Number(limit));
    const total = await Product.countDocuments(query);

    res.json({
      success: true,
      data: products,
      pagination: { total, page: Number(page), limit: Number(limit) },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch products', error });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    res.json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch product', error });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ success: true, data: product, message: 'Product created' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to create product', error });
  }
};
