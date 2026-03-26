import Settings from '../models/SettingsModal';

export async function getSettings(req, res, next) {
  const settings = await Settings.findOne();
  res.json(settings);
}

export async function updateSettings(req, res, next) {
  const updated = await Settings.findOneAndUpdate({}, req.body, {
    new: true,
  });
  res.json(updated);
}
