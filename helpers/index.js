const nodemailer = require("nodemailer");

exports.sendEmail = async dataEmail => {
    // create reusable transporter object using the default SMTP transport
  // let transporter = nodemailer.createTransport({
  //   host: "smtp.gmail.com",
  //   port: 587,
  //   secure: false, // true for 465, false for other ports
  //   requireTLS: true,
  //   auth: {
  //     user: "rafi.putra2000@gmail.com", // generated ethereal user
  //     pass: "fkdsdwtfexjpvjzn", // generated ethereal password
  //   },
  // });

  let transporter = nodemailer.createTransport({
    service: "gmail",
    requireTLS: true,
    // secure: true,
    auth: {
      user: "rafi.putra2000@gmail.com", // generated ethereal user
      pass: "qzyesgydkftuucwr", // generated ethereal password
    },
  });

  return(
    await transporter.sendMail(dataEmail)
    .then(info => console.log("Email has been seen:" + info.message))
    .catch(err => console.log("Terjadi Kesalahan:" + err))
  );
}