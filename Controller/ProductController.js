import Product from '../models/ProductModal';
import { getNextId } from '../models/CounterModal';

export async function getProducts(req, res, next) {
  res.json(await Product.find());
}

export async function createProduct(req, res, next) {
  const productId = await getNextId('product', 'P');
  const product = await Product.create({ productId, ...req.body });
  res.json(product);
}

export async function updateProduct(req, res, next) {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
  );
  res.json(product);
}

export async function deleteProduct(req, res, next) {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ success: true });
}
