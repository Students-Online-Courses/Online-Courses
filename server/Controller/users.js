const { getAllUsers, getOneUser, postUser, updateUser, deleteUser } = require("../Model/users.js")

module.exports = {
   getUser : (req, res) => {
    getAllUsers((req, results) => 
        res.json(results)
    )
    },
    getOne_User : (req, res) =>{
      getOneUser((req, results) =>
       res.json(results)
      )
    },
    addUser :(req, res) => {
      postUser((err,result)=>{
        if(err) res.status(500).send(err)
        else res.status(200).send(result)
      },req.body)
    },
    update : (req,res)=>{
      updateUser((err,result)=>{
        if(err) res.status(500).send(err)
        else res.status(200).send(result)
      },[req.body,req.params.id])
    },
    deleted : (req,res)=>{
      deleteUser((err,result)=>{
        if(err) res.status(500).send(err)
        else res.status(200).send(result)
      },[req.params.id])
    }
    }




