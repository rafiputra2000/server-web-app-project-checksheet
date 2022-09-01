const mongoose = require("mongoose");

const dailyReportSchema = new mongoose.Schema({
    operatorname: String,
    machine: String,
    lineproduction:String,
    shift: String,
    troubletime:String,
    myreport : String,
});

module.exports = mongoose.model('DailyReport', dailyReportSchema);