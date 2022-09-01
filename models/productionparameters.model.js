const mongoose = require("mongoose");

const productionParametersSchema = new mongoose.Schema({
    operatorname: String,
    shift: String,
    parameterproduksichoice:  String,
    valactual1hours:  String,
    valactual2hours:  String,
    valactual3hours:  String,
    valactual4hours:  String,
    valactual5hours:  String,
    valactual6hours:  String, 
    valactual7hours:  String,
    valactual8hours:  String,
});

module.exports = mongoose.model('ProductionParameters', productionParametersSchema);