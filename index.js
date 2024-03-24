require("dotenv/config");
const express = require("express");
const app = express();
const port = 3100;
const mongoose = require("mongoose")
const connect = require('./config/db')
const userRouter = require('./routes/userRoute')


// middlewares 
app.use(express.json());


// API's
app.use('/api/v1', userRouter)

//   Server connecting DB

app.get('/',(req, res)=>{
    res.send('Hello Word')
})

// server connection and DB 
connect()
.then(()=>{
    try {
        app.listen(port, ()=>{
            console.log(`server is running on http://localhost:${port}`);
        })
    } catch (error) {
        console.log("cannot connect to the server");
    }
})
.catch((error)=>{
    console.log("invalid database connection..!", error);
})



app.get("/", function (req, res) {
    res.send("Hello World")
});

app.use((req, res)=>{
    res.status(404).send("route not found")
})