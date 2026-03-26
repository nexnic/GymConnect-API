import Shift from '../models/ShiftModal';
import { getNextId } from '../models/ShiftModal';

export async function getshifts(req, res, next) {
  res.json(await Shift.find());
}

export async function createShift(req, res, next) {
  const shiftId = await getNextId('shift', 'SH');
  const shift = await Shift.create({ shiftId, ...req.body });
  res.json(shift);
}

export async function deleteShift(req, res, next) {
  await Shift.findByIdAndDelete(req.params.id);
  res.json({ success: true });
}
