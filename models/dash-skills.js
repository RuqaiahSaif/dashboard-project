const database = require('../connect/connection');

const skillsSchema = new database.Schema({
      
    title: { 
        type: String,
         required: true 
        },
    progress_percent: { 
        type: Number,
         required: true },
    is_active: {
         type: Number,
          default: 1 },
    createdAt: {
         type: Date,
          default: Date.now },
  });
  
const Skills = database.model('Skills', skillsSchema);
  module.exports = Skills;