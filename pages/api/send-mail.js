import nodemailer from 'nodemailer';

async function  sendEmail (req, res){
  if (req.method === 'POST') {
    const { senderEmail, recipientEmail, senderAddress, senderPhone } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        service: 'Gmail', // e.g., Gmail
        auth: {
          user: 'vishwakarmashivam2003@gmail.com',
          pass:  process.env.GMAIL_PASS,
        },
      });

      const mailOptions = {
        from: senderEmail,
        to: recipientEmail,
        subject: "This mail comes from admin website",
        text: `Address: ${senderAddress} \n Phone: ${senderPhone}`,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};


export default sendEmail;