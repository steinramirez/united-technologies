const nodemailer = require("nodemailer");

async function sendEmail() {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "neobot.ut@gmail.com",
      pass: "qruvtlxvifjkfmfl"
    }
  });

  let info = await transporter.sendMail({
    from: "neobot.ut@gmail.com",
    to: "porras.patricia96@gmail.com",
    subject: "Test Mail for Uni-Tech-med",
    text: "This is only a test email please avoid to reply"
  });

  console.log("Message sent: %s", info.messageId);
}

sendEmail();