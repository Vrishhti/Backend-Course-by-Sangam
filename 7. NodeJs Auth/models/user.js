const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  role:{
    type:String,
    enum : ['user', 'admin'],  //only allows user or admin roles
    default: 'user'
  },
  isActive: {
    type: Boolean,
    default: true
  }
},
  {
  timestamps:true
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
