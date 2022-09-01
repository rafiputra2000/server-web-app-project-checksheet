const mongoose = require("mongoose");

const handoverSchema = new mongoose.Schema({
    operatorname: String,
    machine: String,
    lineproduction: String,
    tanggal: String,
    shift: String
});

module.exports = mongoose.model('Handover', handoverSchema);