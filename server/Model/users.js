const connection = require("../database/index.js");

const getAllUsers = (callback) => {
  const sql = "select * from users";
  connection.query(sql, (err, results) => {
    callback(err, results);
  });
};

const login = (callback, body) => {
  const sql = " select * from users where userEmail = ?";
  connection.query(sql, body, (err, results) => {
    callback(err, results);
  });
};

const signup = (callback, body) => {
  const sql =
    "insert into users (userFullName, userEmail, userPassword, userRole, userSection) values (?, ?, ?, ?, ?)";
  connection.query(sql, body, (err, results) => {
    callback(err, results);
  });
};

const updateUser = (callback, body) => {
  const sql = "update users set ? where idUser=?";
  connection.query(sql, body, (err, results) => {
    callback(err, results);
  });
};
const deleteUser = (callback, id) => {
  const sql = "delete from users where idUser=?";
  connection.query(sql, id, function (err, res) {
    callback(err, res);
  });
};

module.exports = {
  getAllUsers,
  login,
  signup,
  updateUser,
  deleteUser,
};
