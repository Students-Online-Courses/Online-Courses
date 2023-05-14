const { getAllComments, AddComments } = require("../model/comment")

  module.exports = {
    getComments : (req, res) => {
      getAllComments((req, results) => 
          res.json(results)
      )
      },
      Add :(req, res) => {
        AddComments((err,result)=>{
          if(err) res.status(500).send(err)
          else res.status(200).send(result)
        },req.body)
      },
}