const crypto = require('crypto');
const dotenv=require('dotenv');
dotenv.config();
const twilio = require('twilio');
const generateOTP = () => {
  return crypto.randomInt(100000, 999999).toString();
};
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const sendOTP = (mobile, otp) => {
  return client.messages.create({
    body: `Your OTP is ${otp}. It is valid for 5 minutes.`,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: mobile,
  });
};
module.exports={generateOTP,sendOTP};
