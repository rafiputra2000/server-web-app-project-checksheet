const mongoose = require("mongoose");

const imdRejectSchema = new mongoose.Schema({
    operatorname: String,
    shift: String,
    flash: String,
    ovality: String,
    warna: String,
    bintik: String,
    shorts: String
});

module.exports = mongoose.model('IMDReject', imdRejectSchema);