const database = require('../connect/connection');

// create an schema
var servicesSchema = new database.Schema({
    ser_name: {
        type: String,
        required: true
    },
    ser_icon: {
        type: String,
        required: true,
    },


    createdAt: {
        type: Date,
        default: Date.now,
    },
    is_active: {
        type: Boolean,
        default: 1
    }

});

var servicesModel = database.model('services', servicesSchema);

module.exports = servicesModel;

