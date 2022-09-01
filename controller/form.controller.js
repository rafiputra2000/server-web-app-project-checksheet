const Handover = require("../models/handover.model");
const initalShiftInspection = require("../models/initialshiftinspection.model");
const productionParameters = require("../models/productionparameters.model");
const Materials = require("../models/materials.model");
const productionResults = require("../models/productionresults.model");
const imdReject = require("../models/imdreject.model");
const totalResinUsage = require("../models/totalresinusage.model");
const dailyReport = require("../models/dailyreport.model");

//-------------------------------Handover Form-----------------------------------------------
exports.getHandoverForm = async function(req, res) {
    try {
        const handoverForm = await Handover.find();
        res.json(handoverForm);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

//------------------------------Initial Shift Inspection-------------------------------------
exports.getInitalShiftInspectionForm = async function(req, res) {
    try {
        const initalShiftInspectionForm = await initalShiftInspection.find();
        res.json(initalShiftInspectionForm);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

//------------------------------Production Parameters----------------------------------------
exports.getProductionParametersForm = async function(req, res) {
    try {
        const productionParametersForm = await productionParameters.find();
        res.json(productionParametersForm);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

//------------------------------Materials ---------------------------------------------------
exports.getMaterialsForm = async function(req, res) {
    try {
        const materialsForm = await Materials.find();
        res.json(materialsForm);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

//------------------------------Production Results ----------------------------------------
exports.getProductionResultsForm = async function(req, res) {
    try {
        const productionResultsForm = await productionResults.find();
        res.json(productionResultsForm);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

//------------------------------IMD Reject -------------------------------------------------
exports.getImdRejectForm = async function(req, res) {
    try {
        const imdRejectForm = await imdReject.find();
        res.json(imdRejectForm);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

//------------------------------Total Resin Usage ------------------------------------------
exports.getTotalResinUsageForm = async function(req, res) {
    try {
        const totalResinUsageForm = await totalResinUsage.find();
        res.json(initalShiftInspectionForm);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

//------------------------------Daily Report -------------------------------------------------
exports.getDailyReportForm = async function(req, res) {
    try {
        const initalShiftInspectionForm = await dailyReport.find();
        res.json(initalShiftInspectionForm);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}
