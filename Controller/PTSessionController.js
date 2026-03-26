import PTSession from '../models/PTSessionModal';
import { getNextId } from '../models/CounterModal';

export async function getPTSessions(req, res, next) {
  res.json(await PTSession.find());
}

export async function createPTSession(req, res, next) {
  const sessionId = await getNextId('ptsession', 'PT');
  const session = await PTSession.create({ sessionId, ...req.body });
  res.json(session);
}

export async function deletePTSession(req, res, next) {
  await PTSession.findByIdAndDelete(req.params.id);
  res.json({ success: true });
}
