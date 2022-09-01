const mongoose = require("mongoose");

const initialShiftInspectionSchema = new mongoose.Schema({
    operatorname: String,
    shift: String,
    leveloilgbdropdown: String,
    stateleveloilgbtext:  String,
    noteleveloilgbtext: String ,
    leveloilhydraulicdropdown: String,
    stateleveloilhydraulictext: String,
    noteleveloilhydraulictext: String,
    dehumudifierdropdown: String,
    statedehumudifiertext:  String,
    tempdehumudifiertext:   String,
    dpdehumudifiertext: String,
    regdehumudifiertext: String,
    capcoolerdropdown:  String,
    statecapcoolertext: String,
    valblowertext:  String,
    valmotorcapcoolertext:  String,
    unscrambledropdown: String,
    stateunscrambletext:  String,
    imdcameradropdown:  String,
    stateimdcameratext:  String,
    coolingchillerdropdown: String,
    statecoolingchillertext:  String,
    intempcoolingchillertext:  String,
    inpresscoolingchillertext: String,
    coolingtowerdropdown:  String,
    statecoolingtowertext:  String,
    intempcoolingtowertext:  String,
    inpresscoolingtowertext:  String 

});

module.exports = mongoose.model('InitialShiftInspection', initialShiftInspectionSchema);