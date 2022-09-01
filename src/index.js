const express = require('express');
const app = express();
const env = require('dotenv');
const { userRoute } = require('./routes/userRoute/userRoute');
env.config();



app.use(userRoute)

let port = process.env.PORT
app.listen(port,()=>{
    console.log(`this server is running on ${port}`)
})