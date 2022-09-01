const { check, validationResult} = require("express-validator");

exports.runValidation = function(req, res, next){
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(404).json({
            status: false,
            message: errors.array()[0].msg
        })
    }
    next()
}

exports.validationRegister = [
    check("username", "username cannot be empty").notEmpty(),
    check("email", "email cannot be empty").notEmpty().matches(/.+\@.+\..+/).withMessage("Email must use the @ sign"),
    check("password", "password cannot be empty").notEmpty().isLength({ min:6 }).withMessage("Password must be at least 6 characters")
]

exports.validationLogin = [
    check("username", "username cannot be empty").notEmpty(),
    check("password", "password cannot be empty").notEmpty()
]
