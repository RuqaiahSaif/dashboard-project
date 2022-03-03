const database = require('../connect/connection');

// create an schema
var socialSchema = new database.Schema({
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true,
    },
    link:{
        type:String,
        required:true,
    },
    // Description: {
    //       type: String,
    //       required: true,

    //     },
    //     Start_Date: {
    //       type: Date,
    //       required: true,


    //     },
    //     End_Date: {
    //       type: Date,
    //       required: true,


    //     },

    createdAt: {
        type: Date,
        default: Date.now,
    },
    is_active: {
        type: Boolean,
        default: 1
    }

});

var socialModel = database.model('social', socialSchema);

module.exports = socialModel;

