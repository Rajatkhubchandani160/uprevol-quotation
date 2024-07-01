const nodemailer = require('nodemailer');
const cartproduct = require('../models/cartproduct');

const sendQuoteRequest = async (req, res) => {
  try {
    const { name, email, phone,address, message } = req.body;
    const userId = req.userId;

    const allProduct = await cartproduct.find({ userId }).populate('productId');

    const emailContent = `
      <h1>New Quote Request</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Message:</strong> ${message}</p>
      <h2>Placed Order</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr>
            <th style="border: 1px solid #ddd; padding: 8px;font-weight: bold; ">Product Name</th>
            <th style="border: 1px solid #ddd; padding: 8px;font-weight: bold; ">Quantity</th>
            <th style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Price</th>
          </tr>
        </thead>
        <tbody>
          ${allProduct.map(item => `
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;">${item.productId.productName}</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${item.quantity}</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${item.productId.selling}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;

    // Log data without HTML
    allProduct.forEach(item => {
      console.log(`Product: ${item.productId.productName}, Quantity: ${item.quantity}, Price: ${item.productId.selling}`);
    });

    // Set up the transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'rajatkhubchandani12@gmail.com', // Replace with your email
        pass: process.env.EMAIL_APP_KEY, // Replace with your email password
      },
    });

    const mailOptions = {
      from: email, // User's email
      to: 'rajatkhubchndani16@gmail.com', // Owner's email
      subject: `New Product Quote Request from ${name}`,
      html: emailContent,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to send email' });
      } else {
        console.log('Email sent: ' + info.response);
        res.json({
          message: "Mail successfully sent",
          success: true,
          error: false,
        });
      }
    });

  } catch (err) {
    res.status(500).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = sendQuoteRequest;
