import nodemailer from "nodemailer";

export default async (req, res) => {
  const name = req.body.senderName;
  const email = req.body.senderEmail;
  const message = req.body.senderMessage;
  const content = `name: ${name} \n email: ${email} \n message: ${message} `;

  const transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
    debug: true,
    logger: true,
  });

  const mail = {
    from: {
      name: name,
      address: process.env.USER,
    },
    to: process.env.USER, // Change to email address that you want to receive messages on
    subject: "seanred.io: New Message from Contact Form",
    text: content,
  };

  await transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });

      transporter.sendMail(
        {
          from: process.env.USER,
          to: email,
          subject: "Thank you for contacting Sean Redmon",
          text: `Thank you for contacting me! I will get back to you as soon as possible. \n\nForm details\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
        },
        function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Message sent: " + info.response);
          }
        }
      );
    }
  });
};
