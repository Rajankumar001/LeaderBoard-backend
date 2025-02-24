const express=require('express');
const dotenv=require('dotenv');
const bcrypt=require('bcryptjs');
const mongoose=require('./config/connection');
 const UserRouter=require('./routes/UserRoutes');
const LeaderboardRouter=require('./routes/LaederboardRoutes');
const bodyParser = require('body-parser');
const cors=require('cors');
dotenv.config();
const app=express();
const PORT=8000;
const corsOptions = {
    origin: 'https://joyful-panda-f6d283.netlify.app',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    optionsSuccessStatus: 200, 
  };
  
  app.use(cors(corsOptions));
app.use(express.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
 app.use('/api/User',UserRouter);
app.use('/api/leaderboard',LeaderboardRouter);


app.listen(PORT,()=>{
    console.log(`app is listening on port ${PORT}`);
})
app.get("/home",(req,res)=>{
    res.send("Welcome Rajan")
})
