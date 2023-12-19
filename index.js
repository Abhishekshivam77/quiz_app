const express = require("express");
const { connection } = require("./config/db");
require("dotenv").config();





const app = express();

//middleware

app.use(express.json());





//routes
app.get("/",(req,res)=>{
    res.status(200).send("Welcome to the QUIZ APP ☻ ")
})





app.listen(process.env.PORT,async()=>{
    try {
        await connection;
        console.log(`Connected to db!`)
    } catch (error) {
        console.log(`Unable to connect db!`);
        console.log(error.message)
    }
    console.log(`App is runnig on the port ${process.env.PORT}!`)
})