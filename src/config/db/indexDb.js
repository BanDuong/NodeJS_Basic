const mongoose = require('mongoose');
// console.log(mongoose);
async function connect(){
    try {
        await mongoose.connect('mongodb://127.0.0.1/Education_dev');
        console.log('-----Connected to MongoDB-----');
    } catch (error) {
        console.log('-----Error connecting to MongoDB-----');
    }
}

module.exports = { connect }
