const mongoose = require("mongoose");

const totalResinUsageSchema = new mongoose.Schema({
    operatorname: String,
    shift: String,
    materialschoice: String,
    valactualweight: String,
    percent: String
});

module.exports = mongoose.model('TotalResinUsage', totalResinUsageSchema);