const mongoose = require('mongoose');

const DB = 'mongodb://127.0.0.1:27017/protfiliodb';

mongoose.connect(DB, {
        autoIndex: true,
    })
    .then(() => {
        console.log('DB connected :)');
    });
module.exports = mongoose;