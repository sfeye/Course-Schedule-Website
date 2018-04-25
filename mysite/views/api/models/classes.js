// File: /api/models/sam.js

var db = require('./db');

var Schema = db.Schema;

var ClassesSchema = new Schema({
    id: { type: String, required: true},
    courseName: { type: String, required: true },
    location: { type: String, required: true },
    time: { type: String, required: true },
    day:  { type: String, required: true}
});

var ClassModel = db.model("Classe", ClassesSchema);

module.exports = ClassModel;