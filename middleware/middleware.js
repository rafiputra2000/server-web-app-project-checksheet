require("dotenv").config();
const jsonWebToken = require("jsonwebtoken");

exports.middleware = async function(req, res, next){
    const token = req.header("Authorization");
    
    if(!token){
        return res.status(401).json({
            message: "not available token"
        })
    }

    const decode = jsonWebToken.verify(token, process.env.JWT_SECRET);
    req.id = decode.id
    next()
}