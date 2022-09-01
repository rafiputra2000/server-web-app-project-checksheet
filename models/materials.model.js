const mongoose = require("mongoose");

const MaterialsSchema = new mongoose.Schema({
    operatorname: String,
    shift: String,
    materialused: String,
    kodetext:  String,
    spectext: String,
    weightmattext:  String,
    tanggal: String,
    notetext : String
});

module.exports = mongoose.model('Materials', MaterialsSchema);