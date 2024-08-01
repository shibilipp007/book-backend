const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const getAllUser = async (req, res) => {
  const uers = await User.find({});
  res.json(uers);
};

const getUserById = async (req, res) => {
  const user = await User.findById(req.params.bookId).exec();
  res.json(user);
};

const addUser = async (req, res) => {
  const { name, email, password } = req.body;
  const saltRounds = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    name,
    email,
    password: hash,
  });

  await user.save();
  res.json(user);
};

const updateUser = async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.params.userId,
    req.body,
    { new: true }
  );
  res.json(updatedUser);
};

const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.bookId);
  res.send("Deleted");
};

module.exports = {
  getAllUser,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
