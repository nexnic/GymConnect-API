import Sale from '../models/SalesModal';
import { getNextId } from '../models/CounterModal';

export async function getSales(req, res, next) {
  res.json(await Sale.find());
}

export async function createSale(req, res, next) {
  const saleId = await getNextId('sale', 's');
  const sale = await Sale.create({ saleId, ...req.body });
  res.json(sale);
}

export async function deleteSale(req, res, next) {
  await Sale.findByIdAndDelete(req.params.id);
  res.json({ success: true });
}
