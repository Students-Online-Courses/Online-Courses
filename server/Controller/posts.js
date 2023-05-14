const {getAllPosts,getOnePosts,getTeacherPosts,AddPosts,deletePosts,updatePosts} = require('../model/posts.js')
module.exports = {
  getPosts : (req, res) => {
    getAllPosts((req, results) => 
        res.json(results)
    )
    },
    getPosts : (req, res) =>{
      getOnePosts((req, results)=>
       res.json(results)
      )
    },
      getTeacherPosts : (req,res)=>{
        getTeacherPosts((err,result)=>{
          if(err) res.status(500).send(err)
          else res.status(200).send(result)
        },[req.params.id])
      },
      add : (req, res) => {
        AddPosts((err,result)=>{
          if(err) res.status(500).send(err)
          else res.status(200).send(result)
        },req.body)
      },
 deleted : (req,res)=>{
  deletePosts((err,result)=>{
    if(err) res.status(500).send(err)
    else res.status(200).send(result)
  },[req.params.id])
},
update : (req,res)=>{
  updatePosts((err,result)=>{
    if(err) res.status(500).send(err)
    else res.status(200).send(result)
  },[req.body,req.params.id])
}
}



