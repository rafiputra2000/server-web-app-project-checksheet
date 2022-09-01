const mongoose = require("mongoose");

const productionResultsSchema = new mongoose.Schema({
    operatorname: String,
    shift: String,
    prodresult: String,
    qtytotalcaptext: String,
    weighttotalcaptext:String,
    prodresult2:  String,
    qtygoodcaptext: String,
    weightgoodcaptext: String,
    prodresult3: String,
    qtyrejectpurgingcaptext: String,
    weighrejectpurgingvaltext: String,
    prodresult4: String,
    qtyrejectimdvaltext:String,
    weighrejectimdvaltext: String,
    prodresult5: String,
    weightrejectpurgingextrudertext: String,
    prodresult6: String,
    weighttotalrejectvaltext: String
});

module.exports = mongoose.model('ProductionResults', productionResultsSchema);