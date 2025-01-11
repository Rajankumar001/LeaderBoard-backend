const bcrypt = require('bcryptjs');
const axios=require('axios');

const dotenv=require('dotenv');
dotenv.config()
  // Login--------------------------------------------->
  const UserSignin = async (req, res) => {
    const { mobile } = req.body;
    console.log("mobile number from fronted",mobile);
    if (!mobile) {
      return res.status(400).send('Mobile number is required.');
    }
  
    try {
      const response = await axios.get(`${process.env.SIGN_IN_URL}`, {
        params: {
          mobile: mobile
        }
      });
      console.log(response)
      const user = response.data;
      if (!user||Object.keys(user).length === 0) {
        console.log("user not found")
        return res.status(404).send('User not found. Please sign up first.');
      }
      console.log("Signin User",user);
      res.status(200).json(user);
     
  
    } catch (error) {
      console.error('Error during sign-in:', error);
      res.status(500).send('Failed to sign in. Please try again later.');
    }
};

 module.exports={UserSignin};