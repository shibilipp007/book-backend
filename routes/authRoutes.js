const express = require("express");

const {
  Login,
  verifyLogin,
  logoutHandler,
} = require("../controller/authController");
const { secure } = require("../middlware/secure");

const router = express.Router();

router.get("/verify", secure, verifyLogin);
router.post("/login", Login);
router.delete("/logout", logoutHandler);

module.exports = router;
