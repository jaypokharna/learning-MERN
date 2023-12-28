const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/advancedb");

const userSchema = mongoose.Schema({
  username : String,
  name: String,
  description : String,
  categories : {
    type : Array,
    default : []
  },
  datacreated : {
    type : Date,
    default : Date.now()
  }
})

module.exports = mongoose.model("user",userSchema);