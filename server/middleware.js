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

// const verifyToken = (req, res, next) => {
//     const token = req.headers.authorization;

//     if (!token) {
//       return res
//         .status(401)
//         .json({ message: "No token provided. Unauthorized." });
//     }

//     jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
//       if (err) {
//         return res.status(401).json({ message: "Failed to authenticate token." });
//       }

//       req.userId = decoded.userId;
//       next();
//     });
//   };
//   app.get("/protected-route", verifyToken, (req, res) => {
//     res.json({ message: "Protected route accessed successfully." });
//   });
//   app.post("/login", (req, res) => {
//     const { email, password } = req.body;
//     const token = jwt.sign({ userId: user.id }, "your-secret-key");

//     res.json({ token });
//   });

//   app.post("/register", (req, res) => {
//     const { email, password } = req.body;
//     const hashedPassword = bcrypt.hashSync(password, 10);

//     res.json({ message: "User registered successfully." });
//   });
