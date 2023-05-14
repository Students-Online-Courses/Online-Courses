const connection = require("../database/index.js");

const getAllUsers = (callback) => {
  const sql = "select * from users";
  connection.query(sql, (err, results) => {
    callback(err, results);
  });
};

const getOneUser = (callback, body) => {
    const sql = " select * from users where userEmail = ?";
    connection.query(sql, body, (err, results) => {
      callback(err, results)
});
}
   

const postUser = (callback, body) => { 
  const sql= 'insert into users (userFullName, userEmail, userPassword, userRole, userSection) values (?, ?, ?, ?, ?)'
   connection.query(sql, body, (err,results)=>{
    callback(err,results)
   })
};



// const postUser = (callback, body) => {
//   const password = req.body.password;
//   const saltR = 10;
//   bcrypt.genSalt(saltR).then((salt) => {
//     return bcrypt.hash(password, salt);
//   }).then((hash)=>  {
//     const sql = "insert into users set ? ";
//   connection.query(sql, [fullName:req.body.fullName], (err, results) => {
//     callback(err, results);
//   });
//   })
 
// };
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
  getOneUser,
  postUser,
  updateUser,
  deleteUser,
};
