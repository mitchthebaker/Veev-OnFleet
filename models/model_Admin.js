const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: false,
    trim: true,
    lowercase: true
  },
  isReadOnly: {
    type: Boolean,
    required: false,
    trim: true,
    lowercase: true
  }
});

const Admin = mongoose.model("Admin", adminSchema);
//module.exports = Admin;
