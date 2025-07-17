import express from 'express'
import dotenv from 'dotenv';
import authroutes from './routes/authroutes.js';
dotenv.config();
const app = express();
const port = process.env.PORT;
app.use("/",authroutes);
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
}) 
