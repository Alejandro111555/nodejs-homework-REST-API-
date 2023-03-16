const { User } = require("../models/user");

const { httpError, ctrlWrapper } = require("../helpers");

const register = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  const newUser = await User.create(req.body);

  if (user) {
    throw httpError(409, "Email in use");
  }

  res.status(201).json({
    email: newUser.email,
    name: newUser.name,
  });
};

module.exports = {
  register: ctrlWrapper(register),
};
