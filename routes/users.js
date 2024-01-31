var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/instaclone");
const userSchema = mongoose.Schema({
  username: String,
  password: String,
  name: String,
  email: String,
  bio: String,
  profileImage:String,
  posts:[{ type: mongoose.Schema.Types.ObjectId, ref: "post" }],
});
userSchema.plugin(plm);


module.exports = mongoose.model("user", userSchema);