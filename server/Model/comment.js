const connection = require ("../database/index.js");
const getAllComments = (callback) => {
    const sql='select * from comments'
    connection.query(sql,(err,results)=>{
     callback(err,results)
    })
 };
 const AddComments = (callback,body) => {
    const sql= 'insert into comments set ? '
    connection.query(sql,body,(err,results)=>{
     callback(err,results)
    })
 };
 module.exports = {
    getAllComments,
    AddComments 
 }