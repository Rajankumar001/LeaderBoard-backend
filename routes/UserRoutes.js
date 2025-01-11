const express=require('express');
const {UserSignin} =require('../controllers/UserController')
const router=express.Router();

  
// User Signin routes
router.post('/signin',UserSignin);



module.exports=router;