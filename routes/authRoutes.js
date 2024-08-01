const express = require("express");

const { Login, verifyLogin } = require("../controller/authController");
const { secure } = require("../middlware/secure");

const router = express.Router();

router.get("/verify", secure, verifyLogin);
router.post("/login", Login);

module.exports = router;
