const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    name: { type: String },
    phone: { type: Number },
    email: { type: String },
    address: { type: String }
});

module.exports = { Employee };