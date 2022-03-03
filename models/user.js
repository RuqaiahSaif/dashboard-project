const database = require('../connect/connection');


const ufileSchema = new database.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
    
  },
  Address: {
    type: String,
    required: true,
 
   
    
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  is_active: {
     type: Boolean,
      default: 1 }
  // cv_file: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
});

const User = database.model('User', ufileSchema);

module.exports = User;
