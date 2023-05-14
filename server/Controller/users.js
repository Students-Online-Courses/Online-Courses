const { SECRET_KEY } = require("../middleware");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const {
  getAllUsers,
  getOneUser,
  postUser,
  updateUser,
  deleteUser,
} = require("../model/users.js");
const { json } = require("body-parser");

module.exports = {
  getUser: (req, res) => {
    getAllUsers((req, results) => res.json(results));
  },
  
  
  signIn_User: async (req, res) => {
    try {
      let email = req.body.userEmail;
      let password = req.body.userPassword;
  
      const response = await getOneUser((err, results) => {
        if (err) {
          console.log(err);
          res.status(404).json('bad request');
        } else {
          if (results.length === 0) {
            res.json("Wrong email ladyBOI");
          } else {
            const user = results[0];
            console.log('Password:', password);
            console.log('User Password:', user.userPassword);
            bcrypt.compare(password, user.userPassword, (err, result) => {
              if (err) {
                console.log(err);
                res.status(500).json('Internal Server Error');
              } else {
                if (result) {
                  const token = jwt.sign({ userEmail: email }, SECRET_KEY);
                  res.json({ token: token });
                } else {
                  res.json('Wrong password');
                }
              }
            });
          }
        }
      }, req.body.userEmail);
  
    } catch (err) {
      console.log(err);
      res.status(500).json('Internal Server Error');
    }
  },
  
  addUser: (req, res) => {
    const password = req.body.userPassword;
    const saltR = 10;
    bcrypt
      .genSalt(saltR)
      .then((salt) => {
        return bcrypt.hash(password, salt);
      })
      .then((hash) => {
        postUser(
          (err, result) => {
            if (err) res.status(500).send(err);
            else res.status(200).send(result);
          },
          [
            [req.body.userFullName],
            [req.body.userEmail],
            [hash],
            [req.body.userRole],
            [req.body.userSection],
          ],
        );
      })
      .catch((err) => console.log(err));
  },
  update: (req, res) => {
    updateUser(
      (err, result) => {
        if (err) res.status(500).send(err);
        else res.status(200).send(result);
      },
      [req.body, req.params.id],
    );
  },
  deleted: (req, res) => {
    deleteUser(
      (err, result) => {
        if (err) res.status(500).send(err);
        else res.status(200).send(result);
      },
      [req.params.id],
    );
  },
};
