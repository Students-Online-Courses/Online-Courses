const mysql = require("mysql2");
const mysqlConfig = require("./config.js");

const connection = mysql.createConnection(mysqlConfig);
connection.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("DB conected !!");
  }
});
module.exports = connection;