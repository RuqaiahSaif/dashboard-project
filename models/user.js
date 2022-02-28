const mongoose = require('mongoose');

const DB = 'mongodb://127.0.0.1:27017/protfiliodb';

mongoose
  .connect(DB, {
    autoIndex: true,
  })
  .then(() => {
    console.log('DB connected :)');
  });

const fileSchema = new mongoose.Schema({
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

const User = mongoose.model('User', fileSchema);

module.exports = User;
