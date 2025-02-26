const axios=require('axios');
const dotenv=require('dotenv');
dotenv.config()

const Weeklyleaderboard=async(req,res)=>{
    // const { week_no } = req.params;
    const { week_no } = req.params;
    try {
        const response = await axios.get(`${process.env.APPSCRIPT_URL}?week=${week_no}`);
        console.log(`${process.env.APPSCRIPT_URL}?week=${week_no}`);
        console.log(response.data);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const Monthlyleaderboard=async(req,res)=>{
    // const { week_no } = req.params;
    const { month_no } = req.params;
    try {
        const result = await axios.get(`${process.env.APPSCRIPT_URL_2}?month=${month_no}`);
        console.log(`${process.env.APPSCRIPT_URL}?month=${month_no}`);
        console.log("result:",result);
        console.log(result.data);
        res.status(200).json(result.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const Overallleaderboard=async(req,res)=>{
    try {
        const result = await axios.get(`${process.env.APPSCRIPT_URL_3}`);
        console.log(`${process.env.APPSCRIPT_URL_3}`);
        console.log("result:",result);
        console.log(result.data);
        res.status(200).json(result.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
module.exports={Weeklyleaderboard,Monthlyleaderboard,Overallleaderboard};