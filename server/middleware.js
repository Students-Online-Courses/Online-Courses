const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET_KEY = "nacef123123";

const authToken = (req, res, next) => {
  const header = req.headers["authorization"];
  const token = header && header.split(" ")[1];
  if (!token) res.sendStatus(401);
  jwt.verify(token, SECRET_KEY);
  next();
};

module.exports = { authToken, SECRET_KEY };

