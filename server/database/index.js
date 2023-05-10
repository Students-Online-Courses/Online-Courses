const mysql = require("mysql");
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