import Member from '../models/MemberModal';
import { getNextId } from '../models/CounterModal';

export async function getMembers(req, res, next) {
  res.json(await Member.find());
}

export async function getMember(req, res, next) {
  res.json(await Member.findById(req.params.id));
}

export async function createMember(req, res, next) {
  const memberId = await getNextId('member', 'M');
  const member = await Member.create({ memberId, ...req.body });
  res.json(member);
}

export async function updateMember(req, res, next) {
  const member = await Member.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
  );
  res.json(member);
}

export async function deleteMember(req, res, next) {
  await Member.findByIdAndDelete(req.params.id);
  res.json({ success: true });
}
