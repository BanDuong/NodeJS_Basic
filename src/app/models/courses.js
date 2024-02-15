const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, default: 'bot', maxLenght: 255 },
    description: { type: String, default: 'bot', maxLenght: 255 },
    image: { type: String },
    creatDate: { type: Date, default: Date.now },
    updateDate: { type: Date, default: Date.now },
  });

module.exports = mongoose.model('Course', Course);

