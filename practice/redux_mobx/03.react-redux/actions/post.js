const { ADD_POST } = require("../constant")

const addPost = (data) =>{
  return{
    type:ADD_POST,
    data
  }
}

module.exports = {addPost}