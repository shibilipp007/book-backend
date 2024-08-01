const jwt = require("jsonwebtoken");

const secure = async (req, res, next) => {
  if (req.cookies.token) {
    try {
      const userData = jwt.verify(req.cookies.token, process.env.JWT_KEY);
      req.user = userData;
      next();
    } catch (error) {
      res.status(401).send("Unautherised access");
    }
  } else {
    res.status(401).send("No user");
  }
};

module.exports = { secure };
