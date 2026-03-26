import Transaction from '../models/TransactionModal';
import { getNextId } from '../models/CounterModal';

export async function getTransactions(req, res, next) {
  res.json(await Transaction.find());
}

export async function createTransaction(req, res, next) {
  const transactionId = await getNextId('transaction', 'T');
  const tx = await Transaction.create({ transactionId, ...req.body });
  res.json(tx);
}

export async function updateTransaction(req, res, next) {
  const tx = await Transaction.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
  );
}

export async function deleteTransaction(req, res, next) {
  await Transaction.findByIdAndDelete(req.parms.id);
  res.json({ success: true });
}
