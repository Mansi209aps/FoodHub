const mailer = require("nodemailer");
const { google } = require("googleapis");
require("dotenv").config();


const oauth2client = new google.auth.OAuth2(
    process.env.clientId,
    process.env.clientSecret,
    process.env.redirecturi
);
oauth2client.setCredentials({ refresh_token: process.env.refreshtoken });

// async function sendmail({
//     from = "noreply",
//     to,
//     cc = "",
//     bcc = "",
//     subject = "",
//     text = "",
//     html = "",
//     attachment = "",
// }) {
//     try {
//         const accesstoken = await oauth2client.getAccessToken();
//         const transport = mailer.createTransport({
//             service: "gmail",
//             auth: {
//                 type: "oauth2",
//                 user: "mansisharma209aps@gmail.com",
//                 clientId: process.env.clientId,
//                 refreshToken: process.env.refreshtoken,
//                 accessToken: accesstoken,
//                 clientSecret: process.env.clientSecret,
//             },
//         });
//         // var transport = mailer.createTransport({
//         //   service: "gmail",
//         //   auth: {
//         //     user: "example@gmail.com",
//         //     pass: "lrxtlcmmqvmlmcxg",
//         //   },
//         // });
//         const mailoption = {
//             from: `Mansi Sharma <mansisharma209aps@gmail.com>`,
//             to: to,
//             cc: cc,
//             bcc: bcc,
//             subject: 'Hello, world',
//             text: 'Hello from gmail api',
//             html: '<h1>Hello from gmail api</h1>',
//             attachment: attachment,
//         };
//         var result = await transport.sendMail(mailoption);
//         return result;
//     } catch (error) {
//         return error;
//     }
// }

async function sendmail(emailData) {
    try {
        const accesstoken = await oauth2client.getAccessToken();
        const transport = mailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'oauth2',
                user: 'mansisharma209aps@gmail.com',
                clientId: process.env.clientId,
                refreshToken: process.env.refreshtoken,
                accessToken: accesstoken,
                clientSecret: process.env.clientSecret,
            },
        });

        const mailOption = {
            from: 'mansisharma209aps@gmail.com',
            to: emailData.to,
            cc: emailData.cc || '',
            bcc: emailData.bcc || '',
            subject: emailData.subject,
            text: emailData.text || '',
            html: emailData.html || '',
            attachment: emailData.attachment || '',
        };

        const result = await transport.sendMail(mailOption);
        return result;
    } catch (error) {
        return error;
    }
}

exports.sendMail = sendmail;