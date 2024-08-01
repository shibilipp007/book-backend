const User = require("../models/userModel");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Login = async (req, res) => {
  // get the email and password
  const { email, password } = req.body;
  // check the user exists with given email
  const user = await User.findOne({ email: email }).exec();

  if (!user) {
    return res.status(401).send("Unauthorised access : user not found");
  }

  // check wether the password matches
  const passwordMatch = bcrypt.compare(password, user.password);

  if (passwordMatch) {
    var token = jwt.sign(
      { _id: user._id, email: user.email, name: user.name },
      process.env.JWT_KEY
    );
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 1 * 60 * 60 * 1000,
    });
    res.status(200).send("Logged in");
  } else {
    res.send("Unautherised access: Incorrect password");
  }
};

const verifyLogin = async (req, res) => {
  res.json(req.user);
};

module.exports = { Login, verifyLogin };