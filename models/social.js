const mongoose = require('mongoose');

const DB = 'mongodb://127.0.0.1:27017/protfiliodb';

mongoose
    .connect(DB, {
        autoIndex: true,
    })
    .then(() => {
        console.log('DB connected :)');
    });


const Sechema = mongoose.Schema;
// create an schema
var socialSchema = new Sechema({
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

var socialModel = mongoose.model('social', socialSchema);

module.exports = socialModel;

