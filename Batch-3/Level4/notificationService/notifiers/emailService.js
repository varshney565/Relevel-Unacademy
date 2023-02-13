/**
 * this file will have the transporter object which is responsible for sending the emails.
 */
const nodemailer = require('nodemailer');

const tranporter = nodemailer.createTransport({
    port : 465,
    service : "gmail",
    auth : {
        user : "shivamvarshney565@gmail.com",
        pass : "znmwvaangbvulhot",
    },
    secure : true,
});