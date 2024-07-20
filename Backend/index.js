const express=require('express');
const cors=require('cors')
const connectDB=require('./config/db')
const router=require('./routes/index')
var cookieParser = require('cookie-parser')
require('dotenv').config();

const app=express();
app.use(cors({origin:"http://localhost:5174",credentials:true}))
app.use(cookieParser())
app.use(express.json())
app.use('/api',router)

const PORT= 8080 || process.env.PORT

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("Server is running")
        console.log("db connected")
    })
})
