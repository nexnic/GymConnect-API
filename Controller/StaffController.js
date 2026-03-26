import Staff from '../models/StaffSchema';
import { getNextId } from '../models/CounterModal';

export async function getStaff(req, res, next) {
  res.json(await Staff.find());
}

export async function createStaff(req, res, next) {
  const staffId = await getNextId('staff', 'S');
  const staff = await Staff.create({ StaffId, ...req.body });
  res.json(staff);
}

export async function updateStaff(req, res, next) {
  const staff = await Staff.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
  );
  res.json(staff);
}

export async function deleteStaff(req, res, next) {
  await Staff.findByIdAndDelete(req.params.id);
  res.json({ success: true });
}
