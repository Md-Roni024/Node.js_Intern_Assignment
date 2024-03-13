const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const employeeRouter = require("./routes/employee-routes")
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
app.use(cors())
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


const PORT = process.env.PORT
const DB_URL = process.env.DB_URL;

app.use("/employee",employeeRouter)
app.get("/",(req,res)=>{
    res.send("Home Route.")
    res.statusCode = 200;
})

//Route Error Handle
app.use((req,res)=>{
    res.status(200).json({
        message:"Route Not Found."
    })
})
//Server Error Handle
app.use((err,req,res)=>{
    res.status(500).json({
        message:"Something is Broken."
    })
})

const connect = async()=>{
    try{
        await mongoose.connect(DB_URL)
        console.log("Database successfully Conected.")
    }catch(err){
        console.log("Database Not Connected.")
        console.log(err)
    }
}  

app.listen(PORT,async ()=>{
    await connect()
    console.log(`Server is Running at http://localhost:${PORT}`)
})

