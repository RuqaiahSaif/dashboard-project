const database = require('../connect/connection');

// create an schema
var experienceSchema = new database.Schema({
    experience: {
                type:String,
                required:true
            },
            year:{
                type:Number,
                required:true,
            },
         
              
            createdAt: {
                  type: Date,
                  default: Date.now,
                },
                is_active: {
                       type: Boolean,
                        default: 1 }
            
        });
 
var experienceModel = database.model('experience',experienceSchema);
 
module.exports = experienceModel;

