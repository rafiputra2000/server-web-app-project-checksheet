require('dotenv').config();
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jsonWebToken = require("jsonwebtoken");
const { sendEmail } = require("../helpers");

exports.registerUser = async function (req, res) {
    const {username,email,password} = req.body;

    const emailUser = await User.findOne({email: email})
    const usernameUser = await User.findOne({username: username})

    if(usernameUser){
        return(res.status(404).json({
            status: false,
            message: "username is already available can't be registered anymore"
        }))
    }

    if(emailUser){
        return(res.status(404).json({
            status: false,
            message: "email is already available can't be registered anymore"
        }))
    }

    // const data = {
    //     username: username,
    //     email: email,
    //     password: password
    // }

    const hashPassword = await bcrypt.hashSync(password, 10);
    
    const user = new User({
        username: username,
        email: email,
        password: hashPassword
    });

    user.save()

    return (res.status(201).json({
        status: true,
        message: "Account has been registered"
    }));
}

exports.loginUser = async function(req, res){
    const { username, password } = req.body;

    const dataUser = await User.findOne({$or:[{username: username}, {email: username}]})
    if(dataUser){
        const passwordUser = await bcrypt.compare(password, dataUser.password);
        if(passwordUser){
            const data ={
                id: dataUser._id
            }
            const token = await jsonWebToken.sign(data, process.env.JWT_SECRET);
            return (res.status(201).json({
                message: "Welcome",
                token: token
            }));
        } else{
            return (res.status(404).json({
                message: "Your password is wrong and try again !"
            }));
        }
    } else{
        return (res.status(404).json({
            message: "email or username not available"
        }));
    }
}

exports.getSingleUser = async function(req, res){
    console.log(req.id);
    const user = await User.findOne({_id: req.id})
    return res.status(200).json({
        message: "Successfully get",
        data: user
    })
}

exports.forgotPassword = async function(req, res){
    const { email } = req.body;

    const user = await User.findOne({email: email});
    if(!user){
        return res.status(404).json({
            status: false,
            message: "Email not found in my database please register first"
        });
    }

    const token = jsonWebToken.sign({
        iduser: user._id
    }, process.env.JWT_SECRET);

    await user.updateOne({resetPasswordLink: token});

    const templateEmail = {
        from: "ElectroWorld.ID",
        to: email,
        subject: "Link Reset Password",
        html: "<p>Please click the link below to reset password</p>" + process.env.CLIENT_URL + "/resetpassword" + "/" + token
    }
    sendEmail(templateEmail);
    
    return res.status(200).json({
        status: true,
        message: "Password link successfully sent"
    });
}

exports.resetPassword = async function(req, res){
    const { token, password } = req.body

    const user = await User.findOne({resetPasswordLink: token})
    if(user){
        const hashPassword = await bcrypt.hash(password, 10)
        user.password = hashPassword
        await user.save()
        return res.status(201).json({
            status: true,
            message: "password has been changed"
        })
    }
}
