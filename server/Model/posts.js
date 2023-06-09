const connection = require ("../database/index.js");
module.exports = {
 getAllPosts : (callback) => {
    const sql='select * from courses'
    connection.query(sql,(err,results)=>{
     callback(err,results)
    })
 },

  getOnePosts : (callback,id) => {
    const sql= 'SELECT * FROM courses WHERE idCourses = ?'
    connection.query(sql,id,(err,results)=>{
     callback(err,results)
    })
 },
 getTeacherPosts : (callback,id) => {
    const sql= 'SELECT * FROM courses WHERE users_idUser = ?'
    connection.query(sql,id,(err,results)=>{
     callback(err,results)
    })
 },
  AddPosts : (callback,body) => {
    const sql= 'insert into courses set ? '
    connection.query(sql,body,(err,results)=>{
     callback(err,results)
    })
 },
  updatePosts : (callback,id) => {
    const sql= 'update courses set ? where idcourses=?'
    connection.query(sql,id,(err,results)=>{
     callback(err,results)
    })
 },
  deletePosts : (callback,id)=>{
    const sql="delete from courses where idcourses=?"
    connection.query(sql,id,function(err,res){
        callback(err,res)
    })
}
}