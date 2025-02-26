const express=require('express');
const dotenv=require('dotenv')
 const UserRouter=require('./routes/UserRoutes');
const LeaderboardRouter=require('./routes/LaederboardRoutes');
const bodyParser = require('body-parser');
const cors=require('cors');
dotenv.config();
const app=express();
const PORT=8000;
const corsOptions = {
    // origin:  "https://leader-board-fronted-47wt.vercel.app",
    origin:"http://localhost:3000",
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
    res.send("Welcome ! AngelThon 5.0 LeaderBoard")
})
