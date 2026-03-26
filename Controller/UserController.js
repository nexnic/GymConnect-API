import User from '../models/UsersModal';

export async function getUsers(req, res, next) {
  res.json(await User.find());
}

export async function createUser(req, res, next) {
  const user = await User.Create(req.body);
  res.json(user);
}

export async function updateUser(req, res, next) {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(user);
}

export async function deleteUser(req, res, next) {
  await User.findByIdAndDelete(req.params.id);
  res.json({ success: true });
}
