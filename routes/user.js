const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getSingleUser, forgotPassword, resetPassword, logoutUser } = require("../controller/user.controller");
const { getHandoverForm, getInitalShiftInspectionForm, getProductionParametersForm, getMaterialsForm, getProductionResultsForm, getImdRejectForm, getTotalResinUsageForm, getDailyReportForm } = require("../controller/form.controller");
const { runValidation, validationRegister, validationLogin } = require("../validation");
const { middleware } = require("../middleware/middleware");
// router.get("/", function (req, res){
//     res.send("HALOOO WORLD");
// });

//------------------------------Registration and Login User-------------------------------------
router.post('/Register', validationRegister, runValidation, registerUser);
router.post('/Login', validationLogin, runValidation, loginUser);
router.get('/User', middleware, getSingleUser);
router.put('/forgotpassword', forgotPassword);
router.put('/resetpassword', resetPassword);

//------------------------------Form from android application server-------------------------------------
router.get('/handover',getHandoverForm);
router.get('/initial-shift-inspection',getInitalShiftInspectionForm);
router.get('/production-parameters',getProductionParametersForm);
router.get('/material-used',getMaterialsForm);
router.get('/production-results',getProductionResultsForm);
router.get('/imd-reject',getImdRejectForm);
router.get('/total-resin-usage',getTotalResinUsageForm);
router.get('/daily-report',getDailyReportForm);

module.exports = router;