require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const RouteUser = require("./routes/user.js");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser:true
    // useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true
});

const app = express();

// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

//------------------------------Registration and Login User-------------------------------------
app.post('/Register', RouteUser);
app.post('/Login', RouteUser);
app.get('/User', RouteUser);
app.put('/forgotpassword', RouteUser);
app.put('/resetpassword', RouteUser);

//------------------------------Form from android application server-------------------------------------
app.get('/handover',RouteUser);
app.get('/initial-shift-inspection',RouteUser);
app.get('/production-parameters',RouteUser);
app.get('/material-used',RouteUser);
app.get('/production-results',RouteUser);
app.get('/imd-reject',RouteUser);
app.get('/total-resin-usage',RouteUser);
app.get('/daily-report',RouteUser);

app.listen(process.env.PORT, function(){
    console.log("server started on port " + process.env.PORT);
});