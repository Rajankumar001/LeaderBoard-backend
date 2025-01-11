const express=require('express');
const {Weeklyleaderboard,Monthlyleaderboard,Overallleaderboard} =require('../controllers/LeaderboardController')
const router=express.Router();


// Weekly leaderboard routes
router.get(`/:week_no`, Weeklyleaderboard);
router.get(`/month/:month_no`, Monthlyleaderboard);
router.get(`/overall/today`, Overallleaderboard);

module.exports=router;