// File: api/models/db.js
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/classes");

module.exports = mongoose;